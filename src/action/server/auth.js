"use server";

import clientPromise from "../../lib/mongodb";
import bcrypt from "bcryptjs";

export const postUser = async (payload) => {
  try {
    const client = await clientPromise;
    const db = client.db("Agrox"); 
    const usersCollection = db.collection("users");

  
    const isExistingUser = await usersCollection.findOne({
      email: payload.email,
    });

    if (isExistingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    
    const hashedPassword = await bcrypt.hash(payload.password, 10);

    const newUser = {
      ...payload,
      password: hashedPassword,
      createdAt: new Date().toISOString(),
    };

    
    const result = await usersCollection.insertOne(newUser);

    if (result.acknowledged) {
      return {
        success: true,
        message: "User created successfully",
      };
    }

    return {
      success: false,
      message: "Something went wrong",
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "Server error",
    };
  }
};