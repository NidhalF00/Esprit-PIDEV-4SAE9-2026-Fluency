/** Rôle stocké côté frontend (mock, sans backend). */
export type UserRole = 'student' | 'teacher';

export const AUTH_STORAGE_KEY = 'fluency_auth_v1';

export interface MockAuthPayload {
  email: string;
  role: UserRole;
  /** Id utilisateur côté API Spring (certificats, soumission quiz). Optionnel en démo. */
  userId?: number;
}
