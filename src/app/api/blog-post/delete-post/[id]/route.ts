import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(req: NextRequest) {
  try {
    // const url = new URL(req.url);
    // const extractIdOfBlogItemToBeDeleted = url.searchParams.get('id');
    const id = req.url.split("/delete-post/")[1]

    const deletedBlogPost = await prisma.post.delete({
      where: { id: Number(id) },
    });

    if (deletedBlogPost) {
      return NextResponse.json({
        success: true,
        message: 'Blog deleted successfully!',
      });
    } else {
      return NextResponse.json({
        success: false,
        message: 'Failed to delete the Blog',
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: 'Something went wrong ! Please try again',
    });
  }
}
