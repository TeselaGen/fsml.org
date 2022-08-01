import { conversion } from "src/deps.ts";

export async function toStdOut(str: string) {
  const text = new TextEncoder().encode(str);
  await conversion.writeAll(Deno.stdout, text);
}
