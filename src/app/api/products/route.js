import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        const { searchParams } = new URL(request.url);
        const search = searchParams.get("search") || "";
        const sort = searchParams.get("sort") || "latest";
        const page = parseInt(searchParams.get("page")) || 1;
        const limit = 6;
        const skip = (page - 1) * limit;

        const client = await clientPromise;
        const db = client.db("Agrox");
        const collection = db.collection("products");

        let query = {};
        if (search) {
            query.title = { $regex: search, $options: "i" };
        }

       
        let sortOption = {};
        if (sort === "latest") {
            sortOption = { _id: -1 };
        } else if (sort === "title") {
            sortOption = { title: 1 };
        } else if (sort === "difficulty") {
            sortOption = { difficulty: 1 };
        }

        
        const products = await collection.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(limit)
            .toArray();

        const totalProducts = await collection.countDocuments(query);
        const totalPages = Math.ceil(totalProducts / limit);

        return NextResponse.json({
            products,
            totalPages, 
            currentPage: page,
            totalProducts
        });

    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}