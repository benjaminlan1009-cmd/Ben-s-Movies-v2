export function createPageUrl(path: string, params?: Record<string, string>) {
  const query = params
    ? "?" + new URLSearchParams(params).toString()
    : "";
  return `/${path.toLowerCase()}${query}`;
}