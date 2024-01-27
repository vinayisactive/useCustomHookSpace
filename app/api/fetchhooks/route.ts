import { customhooks } from "@/models/customhookmodel";
import connectMongoDB from "@/libs/mongodbconnect";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    const hooks = await customhooks.find();

    return NextResponse.json({ data: hooks });
  } catch (error) {
    console.log(error);
  }
}
