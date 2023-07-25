import { NextRequest,NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function getDataFromToken(request:NextRequest){
    try {
        const token=await request.cookies.get("token")?.value||'';
        const decodedToken:any=jwt.verify(token,process.env.TOKEN_SECRET!);
        return decodedToken.id;
    } catch (error:any) {
        throw new error(error.message);
    }
}
