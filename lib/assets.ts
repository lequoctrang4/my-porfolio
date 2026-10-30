/** Next Image does not prepend basePath to string sources in static exports. */
export function assetPath(path: string) {
  return path.startsWith("/")
    ? `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${path}`
    : path;
}
