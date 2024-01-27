import {customhooks} from "@/models/customhookmodel";
import connectMongoDB from "@/libs/mongodbconnect";
import { NextResponse, NextRequest  } from "next/server";

export async function  POST(request : NextRequest) {
    try {
        await connectMongoDB(); 
        const {hookname, description, primarylang, secondarylang} = await request.json(); 

        await customhooks.create({hookname, description, primarylang, secondarylang})
        
        return NextResponse.json({
            message : "hook created"
        }, { status  : 201 })
        
    } catch (error) {
        console.log(error);
    }
}