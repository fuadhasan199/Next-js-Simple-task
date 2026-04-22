import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import clientPromise from '@/lib/mongodb';

export const metadata = {
  title: "কৃষি পরামর্শ ও ফসল চাষ গাইড | Agrox",
  description: "বাংলাদেশের কৃষকদের জন্য আধুনিক কৃষি পরামর্শ",
};

// সরাসরি DB থেকে data নিন — API call নয়
async function GetProducts(search, sort, page) {
  try {
    const client = await clientPromise;
    const db = client.db("Agrox");
    const collection = db.collection("products");

    const limit = 6;
    const skip = (Number(page) - 1) * limit;

    let query = {};
    if (search) {
      query.title = { $regex: search, $options: "i" };
    }

    let sortOption = {};
    if (sort === "latest") sortOption = { _id: -1 };
    else if (sort === "title") sortOption = { title: 1 };

    const products = await collection.find(query)
      .sort(sortOption)
      .skip(skip)
      .limit(limit)
      .toArray();

    const totalProducts = await collection.countDocuments(query);
    const totalPages = Math.ceil(totalProducts / limit);

    // MongoDB _id serialize করতে হবে
    const serialized = products.map(p => ({
      ...p,
      _id: p._id.toString(),
    }));

    return { products: serialized, totalPages, currentPage: Number(page) };
  } catch (err) {
    console.error("DB Error:", err.message);
    return { products: [], totalPages: 0, currentPage: 1 };
  }
}

const AllProductsPage = async ({ searchParams }) => {
  const params = await searchParams;

  const search = params?.search || "";
  const sort = params?.sort || "latest";
  const pageNo = params?.page || "1";

  const { products, totalPages, currentPage } = await GetProducts(search, sort, pageNo);

  return (
    <div className="min-h-screen bg-green-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 border-b pb-6">
          <h1 className="text-4xl font-extrabold text-green-800 tracking-tight">Agrox পরামর্শ ভাণ্ডার</h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <aside className="lg:w-1/4 w-full">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 sticky top-24">
              <form action="/advice" method="GET" className="mb-8">
                <label className="block text-sm font-bold text-gray-700 mb-2">পরামর্শ খুঁজুন</label>
                <div className="relative">
                  <input
                    name="search"
                    defaultValue={search}
                    placeholder="পরামর্শ সার্চ করুন..."
                    className="w-full px-4 py-3 border rounded-xl outline-none focus:ring-2 focus:ring-green-500 text-black"
                  />
                  <input type="hidden" name="sort" value={sort} />
                </div>
                <button type="submit" className="mt-2 w-full bg-green-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition">
                  Search
                </button>
              </form>

              <div className="space-y-3">
                <p className="text-sm font-bold text-gray-700 uppercase tracking-wider">সর্ট করুন</p>
                <Link
                  href={`/advice?search=${search}&sort=latest&page=1`}
                  className={`block p-3 rounded-xl text-sm transition-all ${sort === 'latest' ? 'bg-green-600 text-white font-bold shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  সর্বশেষ আপডেট
                </Link>
                <Link
                  href={`/advice?search=${search}&sort=title&page=1`}
                  className={`block p-3 rounded-xl text-sm transition-all ${sort === 'title' ? 'bg-green-600 text-white font-bold shadow-md' : 'text-gray-600 hover:bg-gray-100'}`}
                >
                  নাম অনুযায়ী (A-Z)
                </Link>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:w-3/4 w-full">
            {products.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {products.map((item) => (
                    <div key={item._id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow duration-300">
                      <div className="relative w-full h-52 bg-gray-200">
                        {item.image ? (
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            sizes="(max-width: 768px) 100vw, 33vw"
                            className="object-cover"
                          />
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-400">No Image</div>
                        )}
                      </div>
                      <div className="p-5 flex flex-col flex-grow">
                        <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">{item.title}</h3>
                        <p className="text-gray-500 text-xs line-clamp-2 mb-4 h-8">{item.shortDescription}</p>
                        <Link
                          href={`/advice/${item._id}`}
                          className="mt-auto w-full text-center py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-bold transition-colors"
                        >
                          বিস্তারিত
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Pagination */}
                <div className="mt-12 flex flex-col items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/advice?search=${search}&sort=${sort}&page=${currentPage > 1 ? currentPage - 1 : 1}`}
                      className={`px-4 py-2 rounded-lg text-sm border transition-all ${currentPage <= 1 ? 'pointer-events-none opacity-40 bg-gray-100' : 'bg-white hover:bg-green-50 hover:border-green-500'}`}
                    >
                      Previous
                    </Link>

                    <div className="flex gap-1">
                      {[...Array(totalPages)].map((_, index) => {
                        const pageNum = index + 1;
                        return (
                          <Link
                            key={pageNum}
                            href={`/advice?search=${search}&sort=${sort}&page=${pageNum}`}
                            className={`w-10 h-10 flex items-center justify-center rounded-lg border text-sm font-medium transition-all ${currentPage === pageNum ? 'bg-green-600 text-white border-green-600 shadow-md' : 'bg-white hover:bg-gray-50'}`}
                          >
                            {pageNum}
                          </Link>
                        );
                      })}
                    </div>

                    <Link
                      href={`/advice?search=${search}&sort=${sort}&page=${currentPage < totalPages ? currentPage + 1 : totalPages}`}
                      className={`px-4 py-2 rounded-lg text-sm border transition-all ${currentPage >= totalPages ? 'pointer-events-none opacity-40 bg-gray-100' : 'bg-white hover:bg-green-50 hover:border-green-500'}`}
                    >
                      Next
                    </Link>
                  </div>
                  <p className="text-xs text-gray-500 font-medium">
                    Showing Page <span className="text-green-700">{currentPage}</span> of {totalPages}
                  </p>
                </div>
              </>
            ) : (
              <div className="text-center py-20 bg-white rounded-2xl border-2 border-dashed border-gray-200">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-gray-500 font-medium">দুঃখিত, কোনো ডাটা পাওয়া যায়নি।</p>
                <Link href="/advice" className="text-green-600 text-sm underline mt-2 inline-block">সবগুলো দেখুন</Link>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
};

export default AllProductsPage;