import { NextResponse } from "next/server";

type T = any; 

class ResponseHandler {
    static success( data: object | Array<T> | undefined, statusCode: number = 200) : NextResponse{
        return NextResponse.json({ success: true, data }, { status: statusCode });
    }

    static error(message: string, statusCode: number = 500): NextResponse {
        return NextResponse.json({ success: false, error: message }, { status: statusCode });
    }
}

export default ResponseHandler;