import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { QUIZZES, QUIZZES_BY_ID } from "@/content/learning";
import { Quiz } from "@/components/Quiz";
import { Breadcrumbs, PageHeader } from "@/components/ui";

export function generateStaticParams() {
  return QUIZZES.map((q) => ({ id: q.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const q = QUIZZES_BY_ID[id];
  if (!q) return { title: "Test no encontrado" };
  return { title: q.title, description: q.description };
}

export default async function QuizPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const quiz = QUIZZES_BY_ID[id];
  if (!quiz) notFound();

  return (
    <div className="mx-auto max-w-2xl">
      <Breadcrumbs items={[{ label: "Tests", href: "/tests" }, { label: quiz.title }]} />
      <PageHeader eyebrow="Test" title={quiz.title} lead={quiz.description} />
      <Quiz quiz={quiz} />
    </div>
  );
}
