import { NextRequest, NextResponse } from "next/server";
import prisma from "@/utils/db";
import { UpdateArticleDto } from "@/utils/dto";
import { updateArticleSchema } from "@/utils/validation";
interface Props {
  params: { id: string };
}
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
      include: {
        comment: {
          include: {
            user: {
              select: {
                username: true,
              },
            },
          },
        },
      },
    });
    if (!article) {
      return NextResponse.json({ message: "article not found" });
    }
    return NextResponse.json(article);
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function PUT(request: NextRequest, { params }: Props) {
  try {
    const body = (await request.json()) as UpdateArticleDto;
    const article = await prisma.article.findUnique({
      where: { id: parseInt(params.id) },
    });
    if (!article) {
      return NextResponse.json({ message: "article not found" });
    }
    const validation = updateArticleSchema.safeParse(body);
    if (!validation.success) {
      return NextResponse.json(
        { message: validation.error.errors[0].message },
        { status: 400 }
      );
    }

    const updatedArticle = await prisma.article.update({
      where: { id: parseInt(params.id) },
      data: {
        title: body?.title,
        description: body?.description,
      },
    });
    return NextResponse.json(updatedArticle);
  } catch (error) {
    return NextResponse.json({ message: "error" });
  }
}
export async function DELETE(request: NextRequest, { params }: Props) {
  try {
    const article = await prisma.article.findMany({
      where: { id: parseInt(params.id) },
      include: { comment: true },
    });
    if (!article) {
      return NextResponse.json({ message: "article not found" });
    }
    await prisma.article.delete({ where: { id: parseInt(params.id) } });
   // Assuming article is an array of articles
const commentsId: number[] = article.flatMap(article =>
  article.comment?.map((com: { id: number }) => com.id) ?? []
);

    await prisma.comment.deleteMany({ where: { id: { in: commentsId } } });
    return NextResponse.json({ message: "article Deleted" });
  } catch (error) {
    return NextResponse.json(error);
  }
}
