import prisma from "@/database";
// import { NextApiRequest, NextApiResponse } from "next";

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    // console.log(req.url)
    const id = req.url.split("/blog-details/")[1]
    const blogDetails = await prisma.post.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (blogDetails) {
      return NextResponse.json({
        success: true,
        data: blogDetails,
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "Failed to fetch the blog details ! Please try again",
      });
    }
  } catch (e) {
    console.log(e);

    return NextResponse.json({
      success: false,
      message: "Something went wrong ! Please try again",
    });
  }
}

