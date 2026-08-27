/**
 * Resolves a public asset path against Vite's base URL.
 * Works both locally (base = "/") and on GitHub Pages (base = "/codcentral-studios/").
 *
 * Usage: assetUrl('/logo.jpeg')  →  '/codcentral-studios/logo.jpeg'  (on GH Pages)
 *                                →  '/logo.jpeg'                      (locally)
 */
export function assetUrl(path: string): string {
  const base = import.meta.env.BASE_URL // e.g. "/" or "/codcentral-studios/"
  // Remove leading slash from path before joining so we don't get double slashes
  return `${base}${path.replace(/^\//, '')}`
}
