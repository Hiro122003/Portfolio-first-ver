import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const extractPostData = await req.json();
    const newlyCreatePost = await prisma.post.create({
      data: extractPostData,
    });

    console.log(extractPostData, 'extractPostData');

    if (newlyCreatePost) {
      return NextResponse.json({
        success: true,
        message: 'New Blog post added successfully',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'New Blog failed to add',
      });
    }
  } catch (e) {
    console.log(e);

    NextResponse.json({
      success: false,
      message: 'Something went wrong ! Please try again',
    });
  }
}
