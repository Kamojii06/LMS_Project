import { prisma } from "@/lib/db";
import { requireAdmin } from "./require-admin"; // 2:35:00: AI fix import thư viện
import { NotFound } from "@aws-sdk/client-s3";
import { notFound } from "next/navigation";

export async function adminGetLesson(id: string) {
  await requireAdmin();

  const data = await prisma.lesson.findUnique({
    where: {
      id: id,
    },
    select: {
      title: true,
      videoKey: true,
      thumbnailKey: true,
      description: true,
      id: true,
      position: true,
    },
  });
  if(!data){
    return notFound();
  }
  return data;
}

export type AdminLessonType = Awaited<ReturnType<typeof adminGetLesson>>;