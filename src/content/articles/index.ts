import type { Article } from "../schema";
import { fundamentos } from "./01-fundamentos";
import { mercado } from "./02-mercado";
import { dinero } from "./03-dinero";
import { fiscal } from "./04-fiscal";
import { estado } from "./05-estado";
import { instituciones } from "./06-instituciones";
import { argentina } from "./07-argentina";
import { corrientes } from "./08-corrientes";
import { vidaReal } from "./09-vida-real";

export const ARTICLES: Article[] = [
  ...fundamentos,
  ...mercado,
  ...dinero,
  ...fiscal,
  ...estado,
  ...instituciones,
  ...argentina,
  ...corrientes,
  ...vidaReal,
];

export const ARTICLES_BY_SLUG: Record<string, Article> = Object.fromEntries(
  ARTICLES.map((a) => [a.slug, a]),
);

export function getArticle(slug: string): Article | undefined {
  return ARTICLES_BY_SLUG[slug];
}
