import prisma from "@/utils/db";
import { verifyToken } from "@/utils/token";
import { NextRequest, NextResponse } from "next/server";
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const token = verifyToken(request);

    if (!token) {
      return NextResponse.json({ message: "Invalid token" }, { status: 403 });
    }
    const article = await prisma.article.findUnique({
      where: { id: body.articleId },
    });
    if (!article) {
      return NextResponse.json(
        { message: "Article not found" },
        { status: 404 }
      );
    }

    await prisma.comment.create({
      data: {
        text: body.text,
        articleId: body.articleId,
        userId: (token.id)
      },
    });

    return NextResponse.json({ message: "Comment submitted" }, { status: 201 });
  } catch (error) {
    console.error("Internal server error:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET(request: NextRequest) {
  try {
    const token = verifyToken(request);
    if (token === null || token.isAdmin === false) {
      return NextResponse.json({ message: "acsess denaid" }, { status: 403 });
    }
    const comments = await prisma.comment.findMany({
      include: {
        user: { select: { username:true } },
        article: { select: { title:true } },
      },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 100 });
  }
}
