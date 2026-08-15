/**
 * Verificación del asistente "Preguntale a la Wiki".
 *
 * El principio editorial en juego: si la información no está en la Wiki, el
 * asistente tiene que decirlo en lugar de responder con seguridad. Sin este
 * chequeo, un ajuste en el buscador puede volver a hacer que una pregunta
 * ajena al sitio obtenga una respuesta confiada, que es la falla más dañina
 * que puede tener un proyecto cuyo activo es la credibilidad.
 */
import { answerQuestion } from "../src/lib/answer.js";

/** Preguntas que la Wiki sí cubre: deben obtener respuesta. */
const DEBE_RESPONDER = [
  "No entiendo por qué emitir dinero puede generar inflación",
  "¿Quién construye las rutas?",
  "porque sube el dolar",
  "que dice la constitucion sobre la propiedad",
  "diferencia entre liberalismo y libertarismo",
  "quien fue alberdi",
  "que son los impuestos",
  "por que hay pobres",
  "el cepo cambiario",
  "hayek conocimiento disperso",
  "que es el estado de derecho",
  "el capitalismo explota a los trabajadores",
  "banco central independencia",
  "que paso en 2001 en argentina",
  "inflacion",
  "minarquismo",
  "que es la libertad",
  "deficit",
];

/** Preguntas ajenas al sitio: debe decir que no las cubre. */
const DEBE_ABSTENERSE = [
  "cual es la mejor receta de milanesas",
  "quien gano el mundial 2022",
  "como configuro mi router wifi",
  "resultados de river plate",
  "el clima en cordoba manana",
  "donde queda la torre eiffel",
  "como se hace un asado",
  "cuanto sale un iphone",
];

const falsosNegativos: string[] = [];
const falsosPositivos: string[] = [];

for (const q of DEBE_RESPONDER) {
  const a = answerQuestion(q);
  if (!a.found) falsosNegativos.push(q);
  else if (a.sources.length === 0) falsosNegativos.push(`${q} (respondió sin fuentes)`);
}

for (const q of DEBE_ABSTENERSE) {
  const a = answerQuestion(q);
  if (a.found) falsosPositivos.push(`${q} → «${(a.lead ?? "").slice(0, 60)}…»`);
}

console.log("\n  Verificación del asistente\n");
console.log(
  `  ${DEBE_RESPONDER.length - falsosNegativos.length}/${DEBE_RESPONDER.length} preguntas cubiertas respondidas` +
    `  ·  ${DEBE_ABSTENERSE.length - falsosPositivos.length}/${DEBE_ABSTENERSE.length} preguntas ajenas correctamente rechazadas`,
);

if (falsosNegativos.length) {
  console.log("\n  No respondió preguntas que la Wiki sí cubre:");
  for (const q of falsosNegativos) console.log(`    ✗ ${q}`);
}
if (falsosPositivos.length) {
  console.log("\n  Respondió con seguridad preguntas ajenas a la Wiki:");
  for (const q of falsosPositivos) console.log(`    ✗ ${q}`);
}

if (falsosNegativos.length || falsosPositivos.length) {
  console.log("\n  El asistente no cumple su contrato.\n");
  process.exit(1);
}

console.log("\n  El asistente responde lo que cubre y se abstiene de lo que no.\n");
