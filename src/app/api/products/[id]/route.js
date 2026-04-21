
import clientPromise from "@/lib/mongodb"
import { ObjectId } from "mongodb"
import { NextResponse } from "next/server"

export async function GET(request, segmentData) {
  try {
    const { id } = await segmentData.params

    const client = await clientPromise
    const db = client.db("Agrox")

    const product = await db.collection("products").findOne({ 
      _id: new ObjectId(id) 
    })

    if (!product) return NextResponse.json({ error: "Not found" }, { status: 404 })
    return NextResponse.json(product)

  } catch (error) {
    console.error("Error:", error.message)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}