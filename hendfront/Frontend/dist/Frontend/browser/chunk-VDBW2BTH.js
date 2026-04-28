import {
  HttpClient,
  Injectable,
  __spreadProps,
  __spreadValues,
  catchError,
  computed,
  environment,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  take,
  ɵɵdefineInjectable
} from "./chunk-BZHQTCKH.js";

// src/app/core/api-endpoints.ts
function apiBase() {
  return environment.apiUrl.replace(/\/$/, "");
}
function apiUrl(path) {
  const p = path.startsWith("/") ? path.slice(1) : path;
  return `${apiBase()}/${p}`;
}
var ApiEndpoints = {
  quizSubmit: (quizId) => `quizzes/${quizId}/submit`,
  /**
   * Profil utilisateur (e-mail en base : `mail` / `email`).
   * Si votre API utilise un autre chemin (`utilisateurs`, `User`, etc.), modifiez uniquement ce segment.
   */
  userById: (userId) => `users/${userId}`,
  certificats: "certificats",
  certificatById: (id) => `certificats/${id}`,
  certificatPdf: (id) => `certificats/${id}/pdf`,
  /**
   * Liste des certificats d’un utilisateur.
   * Adapter si votre contrôleur utilise un autre segment (`user`, `by-user`, etc.).
   */
  certificatsByUtilisateur: (userId) => `certificats/utilisateur/${userId}`,
  certificatByCode: (code) => `certificats/code/${encodeURIComponent(code)}`,
  recommandationsModulesNiveau: (niveau) => `recommandations/modules/niveau/${encodeURIComponent(niveau)}`,
  recommandationsModulesCategorie: (categorie) => `recommandations/modules/categorie/${encodeURIComponent(categorie)}`,
  recommandationsCoursModule: (moduleId) => `recommandations/cours/module/${moduleId}`,
  recommandationsCoursModuleApres: (moduleId, ordre) => `recommandations/cours/module/${moduleId}/apres/${ordre}`,
  rechercheModules: "recherche/modules",
  rechercheCours: "recherche/cours",
  rechercheCoursType: (typeContenu) => `recherche/cours/type/${encodeURIComponent(typeContenu)}`,
  statistiquesGlobal: "statistiques/global",
  statistiquesModulesCount: "statistiques/modules/count",
  statistiquesCoursCount: "statistiques/cours/count",
  statistiquesQuizzesCount: "statistiques/quizzes/count",
  statistiquesQuestionsCount: "statistiques/questions/count",
  statistiquesReponsesCount: "statistiques/reponses/count",
  statistiquesModuleQuizzesCount: (moduleId) => `statistiques/modules/${moduleId}/quizzes/count`,
  statistiquesQuizQuestionsCount: (quizId) => `statistiques/quizzes/${quizId}/questions/count`
};

// src/app/services/user.service.ts
function extractUserMailFromJson(raw) {
  if (raw == null || typeof raw !== "object") {
    return null;
  }
  const o = raw;
  const direct = [o["mail"], o["email"], o["Mail"], o["Email"]];
  for (const v of direct) {
    if (typeof v === "string") {
      const t = v.trim();
      if (t.includes("@")) {
        return t;
      }
    }
  }
  const nested = o["user"] ?? o["utilisateur"] ?? o["User"];
  if (nested != null && typeof nested === "object") {
    return extractUserMailFromJson(nested);
  }
  return null;
}
var UserService = class _UserService {
  http = inject(HttpClient);
  /**
   * GET utilisateur par id — aligner `ApiEndpoints.userById` sur votre contrôleur Spring
   * (ex. `User`, `Utilisateur`, DTO exposant `mail`).
   */
  fetchProfileEmail(userId) {
    const url = apiUrl(ApiEndpoints.userById(userId));
    return this.http.get(url).pipe(map((raw) => extractUserMailFromJson(raw)), catchError(() => of(null)));
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/core/auth-role.ts
var AUTH_STORAGE_KEY = "fluency_auth_v1";

// src/app/services/auth.service.ts
function readPayload() {
  if (typeof localStorage === "undefined") {
    return null;
  }
  try {
    const raw = localStorage.getItem(AUTH_STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const o = JSON.parse(raw);
    if (o && typeof o.email === "string" && (o.role === "student" || o.role === "teacher")) {
      const uid = typeof o.userId === "number" && Number.isFinite(o.userId) && o.userId > 0 ? o.userId : void 0;
      return { email: o.email, role: o.role, userId: uid };
    }
  } catch {
  }
  return null;
}
var AuthService = class _AuthService {
  users = inject(UserService);
  state = signal(readPayload(), ...ngDevMode ? [{ debugName: "state" }] : []);
  payload = computed(() => this.state(), ...ngDevMode ? [{ debugName: "payload" }] : []);
  isAuthenticated = computed(() => this.state() != null, ...ngDevMode ? [{ debugName: "isAuthenticated" }] : []);
  role = computed(() => this.state()?.role ?? null, ...ngDevMode ? [{ debugName: "role" }] : []);
  email = computed(() => this.state()?.email ?? null, ...ngDevMode ? [{ debugName: "email" }] : []);
  userId = computed(() => this.state()?.userId ?? null, ...ngDevMode ? [{ debugName: "userId" }] : []);
  constructor() {
    const uid = this.state()?.userId;
    if (uid != null && uid > 0) {
      this.users.fetchProfileEmail(uid).pipe(take(1), catchError(() => of(null))).subscribe((dbMail) => {
        if (dbMail) {
          this.useEmailFromUserProfile(dbMail);
        }
      });
    }
  }
  login(email, password, role, userId) {
    const e = email?.trim();
    if (!e || !e.includes("@")) {
      return { ok: false, message: "Indiquez un email valide." };
    }
    if (!password || password.length < 4) {
      return { ok: false, message: "Le mot de passe doit contenir au moins 4 caract\xE8res." };
    }
    const uid = userId != null && Number.isFinite(userId) && userId > 0 ? Math.trunc(Number(userId)) : void 0;
    const payload = __spreadValues({ email: e, role }, uid != null ? { userId: uid } : {});
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(payload));
    this.state.set(payload);
    return { ok: true };
  }
  /**
   * Remplace l’e-mail de session par celui lu en base (`User.mail`, `email`, etc.)
   * pour que la soumission de quiz / certificat cible le bon destinataire.
   */
  useEmailFromUserProfile(mailFromDb) {
    const e = mailFromDb?.trim();
    if (!e || !e.includes("@")) {
      return;
    }
    const cur = this.state();
    if (!cur) {
      return;
    }
    const next = __spreadProps(__spreadValues({}, cur), { email: e });
    localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(next));
    this.state.set(next);
  }
  logout() {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    this.state.set(null);
  }
  static \u0275fac = function AuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthService, factory: _AuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  apiBase,
  apiUrl,
  ApiEndpoints,
  UserService,
  AuthService
};
//# sourceMappingURL=chunk-VDBW2BTH.js.map
