import Features from "@/components/Features";
import Hero from "@/components/Hero";
import ProductReview from "@/components/ProductReview";
import Image from "next/image";

export default function Home() {
  return (
       <div className="">
          <Hero></Hero> 
          <Features></Features>
          <ProductReview></ProductReview>
        </div>
  );
}
