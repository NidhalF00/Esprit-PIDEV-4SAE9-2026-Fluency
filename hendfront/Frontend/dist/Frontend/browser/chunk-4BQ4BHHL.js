import {
  MatCard,
  MatCardModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-MK53WUZV.js";
import {
  AuthService,
  UserService
} from "./chunk-VDBW2BTH.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MatButton,
  MatButtonModule,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-3OPMIYPO.js";
import {
  ActivatedRoute,
  Component,
  Router,
  RouterLink,
  catchError,
  finalize,
  inject,
  of,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-BZHQTCKH.js";

// src/app/pages/auth/login/login.component.ts
function LoginComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function LoginComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 15)(1, "mat-label");
    \u0275\u0275text(2, "ID utilisateur API (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 26);
    \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Conditional_44_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.userIdApi, $event) || (ctx_r0.userIdApi = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-hint");
    \u0275\u0275text(5, " M\xEAme identifiant qu\u2019en base \xAB utilisateur \xBB. Apr\xE8s connexion, l\u2019app lit votre e-mail en base (champ ");
    \u0275\u0275elementStart(6, "code");
    \u0275\u0275text(7, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " / ");
    \u0275\u0275elementStart(9, "code");
    \u0275\u0275text(10, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, ") et l\u2019envoie avec la soumission du quiz pour le certificat. ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.userIdApi);
  }
}
var LoginComponent = class _LoginComponent {
  auth = inject(AuthService);
  users = inject(UserService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  email = "";
  password = "";
  /** Optionnel : id utilisateur Spring (`type="number"` → valeur parfois typée nombre par ngModel). */
  userIdApi = "";
  role = "student";
  error = null;
  submitting = false;
  submit() {
    this.error = null;
    this.submitting = true;
    let uid;
    const userIdStr = String(this.userIdApi ?? "").trim();
    if (this.role === "student" && userIdStr) {
      const n = Math.trunc(Number(userIdStr));
      if (Number.isFinite(n) && n > 0) {
        uid = n;
      }
    }
    const res = this.auth.login(this.email, this.password, this.role, uid);
    if (!res.ok) {
      this.submitting = false;
      this.error = res.message;
      return;
    }
    const goAfterLogin = () => {
      this.submitting = false;
      const redirect = this.route.snapshot.queryParamMap.get("redirect");
      if (redirect?.startsWith("/") && !redirect.startsWith("//")) {
        void this.router.navigateByUrl(redirect);
        return;
      }
      if (this.role === "student") {
        void this.router.navigate(["/student/modules"]);
      } else {
        void this.router.navigate(["/teacher/dashboard"]);
      }
    };
    if (uid != null) {
      this.submitting = true;
      this.users.fetchProfileEmail(uid).pipe(take(1), catchError(() => of(null)), finalize(() => goAfterLogin())).subscribe((dbMail) => {
        if (dbMail) {
          this.auth.useEmailFromUserProfile(dbMail);
        }
      });
    } else {
      this.submitting = false;
      goAfterLogin();
    }
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 51, vars: 6, consts: [[1, "login-page"], ["aria-hidden", "true", 1, "login-page__bg"], [1, "login-page__grid"], [1, "login-page__hero"], ["routerLink", "/", 1, "login-page__brand"], [1, "login-page__title"], [1, "login-page__lead"], [1, "login-page__bullets"], [1, "login-page__dot"], ["appearance", "outlined", 1, "login-card"], [1, "login-card__head"], [1, "login-card__h"], [1, "login-card__sub"], ["role", "alert", 1, "login-card__alert"], [1, "login-form", 3, "ngSubmit"], ["appearance", "outline", 1, "full"], ["matInput", "", "type", "email", "name", "email", "autocomplete", "username", "required", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "password", "name", "password", "autocomplete", "current-password", "required", "", 3, "ngModelChange", "ngModel"], [1, "login-role"], [1, "login-role__label"], ["name", "role", 1, "login-role__group", 3, "ngModelChange", "ngModel"], ["value", "student"], ["value", "teacher"], ["mat-flat-button", "", "color", "primary", "type", "submit", 1, "login-card__submit", 3, "disabled"], [1, "login-card__hint"], ["routerLink", "/", 1, "login-card__back"], ["matInput", "", "type", "number", "name", "userIdApi", "min", "1", "step", "1", "placeholder", "ex. 1 \u2014 pour certificats Spring", 3, "ngModelChange", "ngModel"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "div", 1);
      \u0275\u0275elementStart(2, "div", 2)(3, "section", 3)(4, "a", 4);
      \u0275\u0275text(5, "Fluency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "h1", 5);
      \u0275\u0275text(7, "Reprenez votre apprentissage o\xF9 vous l\u2019avez laiss\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, " Connexion de d\xE9monstration \u2014 choisissez un r\xF4le pour explorer l\u2019espace \xC9tudiant ou Formateur. Aucun appel serveur. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "ul", 7)(11, "li");
      \u0275\u0275element(12, "span", 8);
      \u0275\u0275text(13, " Parcours modules & cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "li");
      \u0275\u0275element(15, "span", 8);
      \u0275\u0275text(16, " Quiz & scores");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "li");
      \u0275\u0275element(18, "span", 8);
      \u0275\u0275text(19, " Tableaux de bord enrichis");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(20, "mat-card", 9)(21, "div", 10)(22, "h2", 11);
      \u0275\u0275text(23, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "p", 12);
      \u0275\u0275text(25, "Email, mot de passe et r\xF4le");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(26, LoginComponent_Conditional_26_Template, 2, 1, "p", 13);
      \u0275\u0275elementStart(27, "form", 14);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_27_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(28, "mat-form-field", 15)(29, "mat-label");
      \u0275\u0275text(30, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "input", 16);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_31_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(32, "mat-form-field", 15)(33, "mat-label");
      \u0275\u0275text(34, "Mot de passe");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.password, $event) || (ctx.password = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 18)(37, "span", 19);
      \u0275\u0275text(38, "Je me connecte en tant que");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "mat-radio-group", 20);
      \u0275\u0275twoWayListener("ngModelChange", function LoginComponent_Template_mat_radio_group_ngModelChange_39_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.role, $event) || (ctx.role = $event);
        return $event;
      });
      \u0275\u0275elementStart(40, "mat-radio-button", 21);
      \u0275\u0275text(41, "\xC9tudiant");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-radio-button", 22);
      \u0275\u0275text(43, "Enseignant");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(44, LoginComponent_Conditional_44_Template, 12, 1, "mat-form-field", 15);
      \u0275\u0275elementStart(45, "button", 23);
      \u0275\u0275text(46, " Se connecter ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "p", 24);
      \u0275\u0275text(48, "Mot de passe factice : au moins 4 caract\xE8res.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "a", 25);
      \u0275\u0275text(50, "\u2190 Retour \xE0 l\u2019accueil");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(26);
      \u0275\u0275conditional(ctx.error ? 26 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.password);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.role);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.role === "student" ? 44 : -1);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.submitting);
    }
  }, dependencies: [
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    RequiredValidator,
    MinValidator,
    NgModel,
    NgForm,
    RouterLink,
    MatButtonModule,
    MatButton,
    MatCardModule,
    MatCard,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatHint,
    MatInputModule,
    MatInput,
    MatRadioModule,
    MatRadioGroup,
    MatRadioButton
  ], styles: ['\n\n.login-page[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  padding: 2rem 1rem;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    sans-serif;\n}\n.login-page__bg[_ngcontent-%COMP%] {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  background:\n    radial-gradient(\n      1200px 600px at 10% -10%,\n      rgba(99, 102, 241, 0.35),\n      transparent 55%),\n    radial-gradient(\n      900px 500px at 100% 20%,\n      rgba(16, 185, 129, 0.2),\n      transparent 50%),\n    linear-gradient(\n      165deg,\n      #0f172a 0%,\n      #1e1b4b 45%,\n      #312e81 100%);\n}\n.login-page__grid[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 1040px;\n  display: grid;\n  grid-template-columns: 1fr minmax(320px, 400px);\n  gap: 2.5rem;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .login-page__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    max-width: 440px;\n  }\n  .login-page__hero[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .login-page__bullets[_ngcontent-%COMP%] {\n    display: inline-block;\n    text-align: left;\n  }\n}\n.login-page__hero[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.login-page__brand[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 800;\n  font-size: 1.25rem;\n  letter-spacing: -0.02em;\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 1.5rem;\n}\n.login-page__title[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: clamp(1.75rem, 3vw, 2.25rem);\n  line-height: 1.2;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.login-page__lead[_ngcontent-%COMP%] {\n  margin: 0 0 1.5rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.login-page__bullets[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  font-size: 0.95rem;\n  color: #94a3b8;\n}\n.login-page__bullets[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.login-page__dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #34d399,\n      #6366f1);\n  flex-shrink: 0;\n}\n.login-card[_ngcontent-%COMP%] {\n  padding: 2rem 1.75rem !important;\n  border-radius: 20px !important;\n  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06) inset !important;\n  background: rgba(255, 255, 255, 0.98) !important;\n}\n.login-card__head[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.login-card__h[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.login-card__sub[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.login-card__alert[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  padding: 0.65rem 0.85rem;\n  border-radius: 10px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 0.9rem;\n}\n.login-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.login-role[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 1rem;\n}\n.login-role__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.login-role__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.login-card__submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.65rem 1rem !important;\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.02em;\n}\n.login-card__hint[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.login-card__back[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 1rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #6366f1;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-card__back[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", standalone: true, imports: [
      FormsModule,
      RouterLink,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule
    ], template: `<div class="login-page">\r
  <div class="login-page__bg" aria-hidden="true"></div>\r
  <div class="login-page__grid">\r
    <section class="login-page__hero">\r
      <a routerLink="/" class="login-page__brand">Fluency</a>\r
      <h1 class="login-page__title">Reprenez votre apprentissage o\xF9 vous l\u2019avez laiss\xE9</h1>\r
      <p class="login-page__lead">\r
        Connexion de d\xE9monstration \u2014 choisissez un r\xF4le pour explorer l\u2019espace \xC9tudiant ou Formateur. Aucun appel\r
        serveur.\r
      </p>\r
      <ul class="login-page__bullets">\r
        <li><span class="login-page__dot"></span> Parcours modules & cours</li>\r
        <li><span class="login-page__dot"></span> Quiz & scores</li>\r
        <li><span class="login-page__dot"></span> Tableaux de bord enrichis</li>\r
      </ul>\r
    </section>\r
\r
    <mat-card class="login-card" appearance="outlined">\r
      <div class="login-card__head">\r
        <h2 class="login-card__h">Connexion</h2>\r
        <p class="login-card__sub">Email, mot de passe et r\xF4le</p>\r
      </div>\r
\r
      @if (error) {\r
        <p class="login-card__alert" role="alert">{{ error }}</p>\r
      }\r
\r
      <form class="login-form" (ngSubmit)="submit()">\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Email</mat-label>\r
          <input matInput type="email" name="email" [(ngModel)]="email" autocomplete="username" required />\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Mot de passe</mat-label>\r
          <input\r
            matInput\r
            type="password"\r
            name="password"\r
            [(ngModel)]="password"\r
            autocomplete="current-password"\r
            required\r
          />\r
        </mat-form-field>\r
\r
        <div class="login-role">\r
          <span class="login-role__label">Je me connecte en tant que</span>\r
          <mat-radio-group [(ngModel)]="role" name="role" class="login-role__group">\r
            <mat-radio-button value="student">\xC9tudiant</mat-radio-button>\r
            <mat-radio-button value="teacher">Enseignant</mat-radio-button>\r
          </mat-radio-group>\r
        </div>\r
\r
        @if (role === 'student') {\r
          <mat-form-field appearance="outline" class="full">\r
            <mat-label>ID utilisateur API (optionnel)</mat-label>\r
            <input\r
              matInput\r
              type="number"\r
              name="userIdApi"\r
              [(ngModel)]="userIdApi"\r
              min="1"\r
              step="1"\r
              placeholder="ex. 1 \u2014 pour certificats Spring"\r
            />\r
            <mat-hint>\r
              M\xEAme identifiant qu\u2019en base \xAB utilisateur \xBB. Apr\xE8s connexion, l\u2019app lit votre e-mail en base (champ\r
              <code>mail</code> / <code>email</code>) et l\u2019envoie avec la soumission du quiz pour le certificat.\r
            </mat-hint>\r
          </mat-form-field>\r
        }\r
\r
        <button mat-flat-button color="primary" class="login-card__submit" type="submit" [disabled]="submitting">\r
          Se connecter\r
        </button>\r
      </form>\r
\r
      <p class="login-card__hint">Mot de passe factice : au moins 4 caract\xE8res.</p>\r
      <a routerLink="/" class="login-card__back">\u2190 Retour \xE0 l\u2019accueil</a>\r
    </mat-card>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/pages/auth/login/login.component.css */\n.login-page {\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  padding: 2rem 1rem;\n  font-family:\n    "Plus Jakarta Sans",\n    system-ui,\n    sans-serif;\n}\n.login-page__bg {\n  position: fixed;\n  inset: 0;\n  z-index: 0;\n  background:\n    radial-gradient(\n      1200px 600px at 10% -10%,\n      rgba(99, 102, 241, 0.35),\n      transparent 55%),\n    radial-gradient(\n      900px 500px at 100% 20%,\n      rgba(16, 185, 129, 0.2),\n      transparent 50%),\n    linear-gradient(\n      165deg,\n      #0f172a 0%,\n      #1e1b4b 45%,\n      #312e81 100%);\n}\n.login-page__grid {\n  position: relative;\n  z-index: 1;\n  width: 100%;\n  max-width: 1040px;\n  display: grid;\n  grid-template-columns: 1fr minmax(320px, 400px);\n  gap: 2.5rem;\n  align-items: center;\n}\n@media (max-width: 900px) {\n  .login-page__grid {\n    grid-template-columns: 1fr;\n    max-width: 440px;\n  }\n  .login-page__hero {\n    text-align: center;\n  }\n  .login-page__bullets {\n    display: inline-block;\n    text-align: left;\n  }\n}\n.login-page__hero {\n  color: #e2e8f0;\n}\n.login-page__brand {\n  display: inline-block;\n  font-weight: 800;\n  font-size: 1.25rem;\n  letter-spacing: -0.02em;\n  color: #fff;\n  text-decoration: none;\n  margin-bottom: 1.5rem;\n}\n.login-page__title {\n  margin: 0 0 1rem;\n  font-size: clamp(1.75rem, 3vw, 2.25rem);\n  line-height: 1.2;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n}\n.login-page__lead {\n  margin: 0 0 1.5rem;\n  color: #cbd5e1;\n  line-height: 1.6;\n  font-size: 1rem;\n}\n.login-page__bullets {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  font-size: 0.95rem;\n  color: #94a3b8;\n}\n.login-page__bullets li {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n}\n.login-page__dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #34d399,\n      #6366f1);\n  flex-shrink: 0;\n}\n.login-card {\n  padding: 2rem 1.75rem !important;\n  border-radius: 20px !important;\n  box-shadow: 0 25px 50px -12px rgba(15, 23, 42, 0.45), 0 0 0 1px rgba(255, 255, 255, 0.06) inset !important;\n  background: rgba(255, 255, 255, 0.98) !important;\n}\n.login-card__head {\n  margin-bottom: 1.25rem;\n}\n.login-card__h {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.login-card__sub {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: #64748b;\n}\n.login-card__alert {\n  margin: 0 0 1rem;\n  padding: 0.65rem 0.85rem;\n  border-radius: 10px;\n  background: #fef2f2;\n  color: #b91c1c;\n  font-size: 0.9rem;\n}\n.login-form {\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.full {\n  width: 100%;\n}\n.login-role {\n  margin: 0.75rem 0 1rem;\n}\n.login-role__label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  margin-bottom: 0.5rem;\n}\n.login-role__group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.35rem;\n}\n.login-card__submit {\n  width: 100%;\n  padding: 0.65rem 1rem !important;\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n  letter-spacing: 0.02em;\n}\n.login-card__hint {\n  margin: 1rem 0 0;\n  font-size: 0.8rem;\n  color: #94a3b8;\n  text-align: center;\n}\n.login-card__back {\n  display: block;\n  margin-top: 1rem;\n  text-align: center;\n  font-size: 0.9rem;\n  color: #6366f1;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-card__back:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=login.component.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/pages/auth/login/login.component.ts", lineNumber: 29 });
})();
export {
  LoginComponent
};
//# sourceMappingURL=chunk-4BQ4BHHL.js.map
