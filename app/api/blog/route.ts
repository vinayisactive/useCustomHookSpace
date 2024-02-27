import { BlogModel } from "@/Schema/BlogSchema";
import connectMongoDB from "@/DBconnection/connectMongoDB";
import { NextResponse, NextRequest } from "next/server";

export const GET = async () => {
  try {
    await connectMongoDB();

    const blog = await BlogModel.findOne({"blogId": "mountUnmount"});
    return NextResponse.json(blog); 
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};