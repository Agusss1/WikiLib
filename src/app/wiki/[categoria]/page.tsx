import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CATEGORIES, type Category } from "@/content/schema";
import { CATEGORY_META } from "@/content/taxonomy";
import { CategoryView } from "@/components/CategoryView";

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ categoria: string }>;
}): Promise<Metadata> {
  const { categoria } = await params;
  const meta = CATEGORY_META[categoria as Category];
  if (!meta) return { title: "Categoría no encontrada" };
  return { title: meta.title, description: meta.description };
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ categoria: string }>;
}) {
  const { categoria } = await params;
  if (!CATEGORIES.includes(categoria as Category)) notFound();
  return <CategoryView category={categoria as Category} />;
}
