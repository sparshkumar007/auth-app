"use client";

import axios from "axios";
import { NextRequest,NextResponse } from "next/server";
import React, { useEffect, useState } from 'react';
import {useRouter} from "next/navigation";

export default function verifyEmail(request:NextRequest){
    const Router=useRouter();
    const [token,setToken]=useState("");
    const [verified,setVerified]=useState(false);

    const verifyEmail=async ()=>{
        try {
            const checked:any =await axios.post('/api/users/verifyuser',token);
            if(checked.success)
            {
                setVerified(true);
            }
        } catch (error) {
            console.log(error);
        }
        Router.push('/profile');
    }

    useEffect(()=>{
        // split will split the url int two parts
        // left part of '=' is at index 0 and right part is at 1
        const obtainedToken=window.location.search.split('=')[1];
        setToken(obtainedToken||'');
    },[]);
    useEffect(()=>{
        verifyEmail();
    },[token])

    return(
        <h1>
            Verify email Processing
        </h1>
    )
}