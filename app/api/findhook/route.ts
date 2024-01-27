import { customhooks } from "@/models/customhookmodel";
import { NextResponse, NextRequest } from "next/server";
import connectMongoDB from "@/libs/mongodbconnect";

export async function GET(request : NextRequest) {
  try {
    await connectMongoDB();
    const {hookname} = await request.json();
    const hook = await customhooks.findOne({ hookname: hookname });

    if (hook) {
      return NextResponse.json({
        data: hook,
      });
    } else {
      return NextResponse.json({
        message: "no data found",
      });
    }
  } catch (error) {
    console.log(error);
  }
}
