/** Normalise les valeurs issues des formulaires / mat-select pour l’API (souvent cause de 400 si type incorrect). */

export function num(v: unknown, fallback = 0): number {
  if (v === null || v === undefined || v === '') {
    return fallback;
  }
  const n = typeof v === 'number' ? v : Number(v);
  return Number.isFinite(n) ? n : fallback;
}

/** ID entier positif ou undefined (relation optionnelle invalide). */
export function foreignId(v: unknown): number | undefined {
  if (v === null || v === undefined || v === '') {
    return undefined;
  }
  const n = Math.trunc(Number(v));
  return Number.isFinite(n) && n > 0 ? n : undefined;
}

export function refById(v: unknown): { id: number } | undefined {
  const id = foreignId(v);
  return id != null ? { id } : undefined;
}

/** Corps sans `id` pour POST (certains backends rejettent `id: null`). */
export function stripId<T extends { id?: number }>(body: T): Omit<T, 'id'> {
  const { id: _id, ...rest } = body;
  return rest as Omit<T, 'id'>;
}

/**
 * Normalise les réponses GET « liste » : tableau JSON, Spring Data Page (`content`),
 * HAL (`_embedded.*`), ou enveloppes `{ data }` / `{ items }`.
 * Sans cela, le front affiche 0 ligne alors que le serveur renvoie bien des données.
 */
export function unwrapArrayResponse<T>(raw: unknown): T[] {
  if (raw == null) {
    return [];
  }
  if (Array.isArray(raw)) {
    return raw as T[];
  }
  if (typeof raw !== 'object') {
    return [];
  }
  const o = raw as Record<string, unknown>;
  if (Array.isArray(o['content'])) {
    return o['content'] as T[];
  }
  if (Array.isArray(o['data'])) {
    return o['data'] as T[];
  }
  if (Array.isArray(o['items'])) {
    return o['items'] as T[];
  }
  if (Array.isArray(o['body'])) {
    return o['body'] as T[];
  }
  if (Array.isArray(o['result'])) {
    return o['result'] as T[];
  }
  const embedded = o['_embedded'];
  if (embedded && typeof embedded === 'object') {
    const emb = embedded as Record<string, unknown>;
    const preferred = [
      'courses',
      'modules',
      'cours',
      'quizzes',
      'questions',
      'reponses',
      'quiz',
      'question',
      'reponse',
      'module',
    ];
    for (const p of preferred) {
      if (Array.isArray(emb[p])) {
        return emb[p] as T[];
      }
    }
    for (const key of Object.keys(emb)) {
      const v = emb[key];
      if (Array.isArray(v)) {
        return v as T[];
      }
    }
  }
  return [];
}
