import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dir = path.dirname(fileURLToPath(import.meta.url));
const nodes = JSON.parse(await fs.readFile(path.join(dir, "icons.json"), "utf8"));
const license = await fs.readFile(path.join(dir, "LICENSE.lucide"), "utf8");
await fs.mkdir(path.join(dir, "dist"), { recursive: true });
for (const theme of ["light", "dark"]) {
  const dark = theme === "dark";
  const output = "timeline-" + theme + ".html";
  const icon = (name, cls = "") =>
    '<svg class="icon ' +
    cls +
    '" viewBox="0 0 24 24" aria-hidden="true">' +
    nodes[name]
      .map(
        ([tag, attrs]) =>
          "<" +
          tag +
          " " +
          Object.entries(attrs)
            .filter(([key]) => key !== "key")
            .map(([key, value]) => key + '="' + value + '"')
            .join(" ") +
          "/>",
      )
      .join("") +
    "</svg>";
  const lockup = (await fs.readFile(path.resolve(dir, "../../assets/brand/lockup-small.svg"), "utf8")).replace(
    "<svg ",
    '<svg class="brand-lockup" ',
  );
  const photo = await fs.readFile(path.join(dir, "notebook-sketch.png"));
  const css =
    (await fs.readFile(path.join(dir, "preview.css"), "utf8")) +
    (dark ? "\n" + (await fs.readFile(path.join(dir, "dark.css"), "utf8")) : "");
  const exportScript = await fs.readFile(path.join(dir, "export.js"), "utf8");
  const days = [27, 28, 29, 30, ...Array.from({ length: 31 }, (_, i) => i + 1)]
    .map(
      (day, i) =>
        '<span class="day ' +
        (i < 4 ? "other-month" : day === 18 ? "day-today" : day === 16 || day === 17 ? "day-active" : "") +
        '">' +
        day +
        "</span>",
    )
    .join("");
  const sidebarTags = [
    ["ideas", 1],
    ["project", 2],
    ["reading", 1],
    ["design", 1],
  ]
    .map(
      ([name, count]) =>
        '<div class="tag-row">' +
        icon("hash") +
        "<span>" +
        name +
        '</span><span class="tag-count">' +
        count +
        "</span></div>",
    )
    .join("");
  const tag = (name) => '<span class="tag">#' + name + "</span>";
  const header = (date, isPublic = true) =>
    '<div class="memo-header"><time>' +
    date +
    '</time><div class="memo-actions">' +
    (isPublic ? icon("earth") : "") +
    icon("ellipsis-vertical", "ellipsis") +
    "</div></div>";
  const task = (text, done = false) =>
    '<li class="task ' +
    (done ? "done" : "") +
    '"><span class="checkbox">' +
    (done ? icon("check") : "") +
    '</span><span class="task-text">' +
    text +
    "</span></li>";
  const html =
    "<!doctype html>\n<!--\n" +
    license.replaceAll("--", "—") +
    '\n-->\n<html lang="en"><head><meta charset="UTF-8"><meta name="color-scheme" content="' +
    theme +
    '"><meta name="viewport" content="width=device-width, initial-scale=1"><title>Memos — ' +
    theme +
    " subtle background mockup</title><style>" +
    css +
    '</style></head><body data-theme="' +
    theme +
    '">\n' +
    '<div class="stage"><div class="app">' +
    '<aside class="sidebar" aria-label="Memos navigation"><div class="brand">' +
    lockup +
    icon("chevrons-up-down") +
    "</div>" +
    '<div class="nav"><span class="nav-item nav-active">' +
    icon("library") +
    "Timeline" +
    icon("chevron-down") +
    '</span><span class="nav-item">' +
    icon("calendar-days") +
    '</span><span class="nav-item">' +
    icon("map") +
    '</span><span class="nav-item nav-search">' +
    icon("search") +
    "</span></div>" +
    '<section class="calendar" aria-label="October 2026"><div class="calendar-title">October 2026<span class="month-arrows">' +
    icon("chevron-left") +
    icon("chevron-right") +
    '</span></div><div class="weekdays">' +
    ["S", "M", "T", "W", "T", "F", "S"].map((d) => "<span>" + d + "</span>").join("") +
    '</div><div class="days">' +
    days +
    "</div></section>" +
    '<section class="side-section"><div class="section-heading">VIEWS' +
    icon("ellipsis") +
    '</div><div class="view-row">' +
    icon("list-todo") +
    "Unfinished tasks</div></section>" +
    '<section class="side-section tags-section"><div class="section-heading">TAGS</div>' +
    sidebarTags +
    "</section></aside>" +
    '<main class="timeline" aria-label="Memo timeline"><section class="composer" aria-label="New memo"><div class="placeholder">Any thoughts...</div><div class="composer-rail"><span class="insert">' +
    icon("plus") +
    '</span><span class="audience">' +
    icon("earth") +
    "Public" +
    icon("chevron-down", "chevron") +
    '</span><button class="save" type="button" disabled>Save</button></div></section>' +
    '<article class="memo memo-thought"><span class="pinned" role="img" aria-label="Pinned"></span>' +
    header("Fri, Oct 16") +
    '<p class="memo-line">Try showing the result before asking people to sign up. ' +
    tag("ideas") +
    "</p></article>" +
    '<article class="memo memo-checklist">' +
    header("Today, 10:42", false) +
    '<p class="memo-line">Before the next release ' +
    tag("project") +
    '</p><ul class="tasks">' +
    task("Sketch the first screen", true) +
    task("Polish the preview") +
    task("Write a short changelog") +
    "</ul></article>" +
    '<article class="memo memo-reading">' +
    header("Today, 9:18") +
    '<p class="memo-line">Keep the first step small. Reveal the details when they’re needed. ' +
    tag("reading") +
    '</p><a class="article-link" href="https://www.nngroup.com/articles/progressive-disclosure/">Progressive Disclosure — Nielsen Norman Group</a></article>' +
    '<article class="memo memo-sketch">' +
    header("Yesterday, 15:20") +
    '<p class="memo-line">A simpler first screen. One input, then a preview. ' +
    tag("design") +
    '</p><img class="notebook" width="672" height="136" alt="Notebook sketch showing one input leading to a preview" src="data:image/png;base64,' +
    photo.toString("base64") +
    '"></article>' +
    '<article class="memo memo-followup">' +
    header("Yesterday, 10:05") +
    '<p class="memo-line">Tried yesterday’s idea. Both people reached the preview without help. ' +
    tag("project") +
    '</p><div class="reference">' +
    icon("link") +
    '<span>Try showing the result before asking people to sign up...</span><span class="reference-label">Referencing</span></div></article>' +
    '</main></div></div><button id="export-png" style="margin:0 46px 24px;padding:10px 16px;border:1px solid var(--line);border-radius:6px;background:var(--card);color:var(--ink);font:14px Arial,sans-serif;cursor:pointer">Download PNG</button><script>' +
    exportScript +
    "</script></body></html>\n";
  await fs.writeFile(path.join(dir, "dist", output), html);
  process.stdout.write("Built self-contained " + output + " from solid CSS surfaces and source SVG assets.\n");
}
