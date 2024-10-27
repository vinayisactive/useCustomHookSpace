import { NextRequest } from "next/server";
import jwt, { JwtPayload }from 'jsonwebtoken'

type returnValue = "jwt" | "id"

export const verifyJWT = async(request: NextRequest, returnValue : returnValue = "id") => {
    try {
        const accessToken = await request.cookies.get("accessToken")?.value || ""
        if(!accessToken){
                throw new Error("token isn't present"); 
        }

        const decodedToken: any = jwt.verify(
            accessToken, 
            process.env.ACCESS_TOKEN_SECRET!
        ) as JwtPayload; 

        if (!decodedToken || !decodedToken._id) {
            throw new Error("Invalid token structure");
        }

        return returnValue === "jwt" ? accessToken : decodedToken._id;
    } catch (error: any) {
        if (error instanceof jwt.JsonWebTokenError) {
            throw new Error("Invalid or expired token");
        }
        throw new Error(error.message);
    }
}; 