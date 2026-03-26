import clientPromise from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET(){
    try{
        const client =await  clientPromise 
        const db=client.db("Agrox") 
        const collection=db.collection("products")  

        const products=await collection.find({}).toArray() 
        return NextResponse.json(products)




    } 
    catch(error){
        return NextResponse.json(error.message,{status:500})
    }
}