import { BlogModel } from "@/Schema/BlogSchema";
import connectMongoDB from "@/DBconnection/connectMongoDB";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB();
    const blog = await BlogModel.findOne({"_id": "65de151ef4fb3346b523f22e"});
    return NextResponse.json(blog); 
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};