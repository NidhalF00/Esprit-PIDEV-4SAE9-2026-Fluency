export function unwrapArray<T>(raw: unknown): T[] {
  if (raw == null) return [];
  if (Array.isArray(raw)) return raw as T[];
  if (typeof raw !== 'object') return [];
  const o = raw as Record<string, unknown>;
  if (Array.isArray(o['content'])) return o['content'] as T[];
  if (Array.isArray(o['data'])) return o['data'] as T[];
  if (Array.isArray(o['items'])) return o['items'] as T[];
  const emb = o['_embedded'];
  if (emb && typeof emb === 'object') {
    for (const v of Object.values(emb as object)) {
      if (Array.isArray(v)) return v as T[];
    }
  }
  return [];
}