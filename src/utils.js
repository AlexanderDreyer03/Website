// src/utils.js
export function createPageUrl(path) {
  let p = String(path || "").trim();

  // Wenn schon ein Pfad übergeben wird
  if (p.startsWith("/")) return p;

  // slugify inkl. Umlaute
  p = p
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  if (!p) return "/";

  // Home -> /
  if (p === "home") return "/";

  return `/${p}`;
}
