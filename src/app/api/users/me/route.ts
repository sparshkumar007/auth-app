import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextResponse,NextRequest } from "next/server";
import User from "@/models/userModel";
import {connect} from '@/dbConfig/dbConfig';

connect();

export async function GET(request:NextRequest){
    try {
        const reqBoody=request.json();
        const data=await getDataFromToken(request);
        console.log(data);
        const user=await User.findOne({_id:data}).select('-password');
        const recievedData={
            message:"User data obtained!!",
            data:user
        }
        return NextResponse.json(recievedData);
    } catch (error:any) {
        console.log(error.message);
    }
}