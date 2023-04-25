import gulp from "gulp";
import { exec } from "gulp-execa";
import * as fs from "fs/promises";
import { deleteAsync } from 'del';

let prod = false;

export async function clean() {
  let gitIgnore = fs.readFile(path);
}

export async function build() {
  console.log("test");
  return await bundle();
}

export async function bundle() {
  let env = {};
  if (prod) {
    env.prod = "true";
  }
  await exec("pnpm exec rollup --config node:iiimaddiniii", { env });
  fs.writeFile("./dist/esm/package.json", `{"type":"module"}`);
}