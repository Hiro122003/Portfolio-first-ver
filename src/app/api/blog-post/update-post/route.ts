import { NextRequest, NextResponse } from "next/server";


export async function PUT(reqest:NextRequest){
    try{
        
    }catch(e){
        console.log(e)

        NextResponse.json({
            success: false,
            message: 'Something went wrong ! Please try again'
        })
    }
}