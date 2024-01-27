import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(reqest: NextRequest) {
  try {
    const getAllBlogPosts = await prisma.post.findMany();
    // console.log(getAllBlogPosts)
    if (getAllBlogPosts && getAllBlogPosts.length) {
      return NextResponse.json({
        success: true,
        data: getAllBlogPosts,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to fetch blog. Please try it again',
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
