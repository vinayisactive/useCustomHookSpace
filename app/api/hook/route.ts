import { customhooks } from "@/models/customhookmodel";
import connectMongoDB from "@/libs/mongodbconnect";
import { NextResponse, NextRequest } from "next/server";

export const POST = async (request: NextRequest) => {
  try {
    await connectMongoDB();
    const { hookname } = await request.json();

    const hook = await customhooks.findOne({ "hookname": hookname });

    return NextResponse.json({ hook: hook });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
};
