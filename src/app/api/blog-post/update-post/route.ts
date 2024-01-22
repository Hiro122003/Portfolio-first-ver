import prisma from '@/database';
import { update } from 'firebase/database';
import { NextRequest, NextResponse } from 'next/server';

export async function PUT(req: NextRequest) {
  try {
    const extracData = await req.json();
    // console.log(extracData) //{ id: 19, comments: [ 'kakaka|SomeUserName_145812649' ] }

    const updateBlogPost = await prisma.post.update({
      where: { id: Number(extracData.id) },
      data: { comments: extracData.comments },
    });
    if (updateBlogPost) {
      return NextResponse.json({
        success: true,
        data: updateBlogPost,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to update comment',
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
