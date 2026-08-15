import type { Metadata } from "next";
import { CATEGORY_META } from "@/content/taxonomy";
import { CategoryView } from "@/components/CategoryView";

const meta = CATEGORY_META["argentina"];
export const metadata: Metadata = { title: meta.title, description: meta.description };

export default function Page() {
  return <CategoryView category="argentina" />;
}
