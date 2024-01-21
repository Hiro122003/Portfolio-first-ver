import prisma from '@/database';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const extractCategoryID = searchParams.get('categoryID');

    const getBlogPostListBasedOnCurrenrCategoryID = await prisma.post.findMany({
      where: {
        category: extractCategoryID || '',
      },
    });

    if (getBlogPostListBasedOnCurrenrCategoryID) {
      return NextResponse.json({
        success: true,
        data: getBlogPostListBasedOnCurrenrCategoryID,
      });
    } else {
        return NextResponse.json({
            success: false,
            message: 'Failed to fetch data ! Please try it again',
          });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      success: false,
      message: 'fetch error about category list',
    });
  }
}
