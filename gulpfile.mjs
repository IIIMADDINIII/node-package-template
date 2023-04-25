import gulp from "gulp";
import { exec } from "gulp-execa";
import * as fs from "fs/promises";

let prod = false;

export async function clean() {
  await exec("git clean -e !/node_modules/ -dfX");
}

export async function bundle() {
  let env = {};
  if (prod) {
    env.prod = "true";
  }
  await exec("pnpm exec rollup --config node:iiimaddiniii", { env });
  fs.writeFile("./dist/esm/package.json", `{"type":"module"}`);
}

export async function build() {
  return await bundle();
}

export async function buildCi() {
  prod = true;
  await clean();
  await bundle();
}
