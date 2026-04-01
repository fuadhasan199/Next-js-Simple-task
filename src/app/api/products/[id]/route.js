const { default: clientPromise } = require("@/lib/mongodb")
const { ObjectId } = require("mongodb")
const { NextResponse } = require("next/server")

 
 export async function GET(request, {params}) {
    
  try{
     const {id}= await params 
     const client=await clientPromise 
     const db=client.db("Agrox")

     const product=await db.collection("products").findOne({_id:new ObjectId(id)}) 

        if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 });
        return NextResponse.json(product);
  } 
  catch(error){
     return NextResponse.json({error:"Something went wrong"},{status:500})
  }




 }