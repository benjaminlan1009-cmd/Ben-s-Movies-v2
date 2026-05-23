
export function createPageUrl(page: string, params?: Record<string, string>) {
  const base = page.toLowerCase();
  if (!params) return `/${base}`;
  const query = new URLSearchParams(params).toString();
  return `/${base}?${query}`;
}
