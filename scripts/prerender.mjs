import { readFile, writeFile, rm } from "node:fs/promises";
import { render } from "../.ssr/entry-server.js";

let html = await readFile("dist/index.html", "utf8");
const cssLink = html.match(/<link[^>]+rel="stylesheet"[^>]+href="([^"]+)"[^>]*>/);
if (!cssLink) throw new Error("Build stylesheet not found");
const css = await readFile(`dist${cssLink[1]}`, "utf8");
html = html.replace(cssLink[0], `<style>${css}</style>`);
html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root" data-prerendered="true">${render()}</div>`);
await writeFile("dist/index.html", html);
await rm(".ssr", { recursive: true });
console.log("Prerendered all sections with inline CSS.");
