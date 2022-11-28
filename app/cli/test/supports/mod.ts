import { path } from "../../src/deps/mod.ts";

export * as path from "https://deno.land/std@0.149.0/path/mod.ts";

const TEST_DIR = "test";
const TEST_FIXTURE_DIR = "fixtures";

export function fixturePath(filename: string) {
  const cwd = Deno.cwd();
  const absolute_filepath = path.join(
    cwd,
    TEST_DIR,
    TEST_FIXTURE_DIR,
    filename,
  );
  return absolute_filepath;
}
