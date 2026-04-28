import {
  MatCard,
  MatCardModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  _MatInternalFormField
} from "./chunk-MK53WUZV.js";
import {
  ApiEndpoints,
  AuthService,
  apiBase,
  apiUrl
} from "./chunk-VDBW2BTH.js";
import {
  CdkPortal,
  CdkPortalOutlet,
  CdkScrollable,
  DialogService,
  MAT_DIALOG_DATA,
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatIcon,
  MatIconModule,
  MatOption,
  MatRow,
  MatRowDef,
  MatSelect,
  MatSelectModule,
  MatTable,
  MatTableDataSource,
  MatTableModule,
  TemplatePortal,
  ViewportRuler,
  foreignId,
  num,
  unwrapArrayResponse
} from "./chunk-I4JEGFKD.js";
import {
  BidiModule,
  CdkMonitorFocus,
  CdkObserveContent,
  DefaultValueAccessor,
  Directionality,
  ENTER,
  FocusKeyManager,
  FocusMonitor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatHint,
  MatInput,
  MatInputModule,
  MatLabel,
  MatRipple,
  MinValidator,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NumberValueAccessor,
  Platform,
  ReactiveFormsModule,
  SPACE,
  SharedResizeObserver,
  Validators,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _StructuralStylesLoader,
  _animationsDisabled,
  _getAnimationsState,
  hasModifierKey,
  ɵNgNoValidate
} from "./chunk-3OPMIYPO.js";
import {
  ActivatedRoute,
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DecimalPipe,
  DestroyRef,
  Directive,
  EMPTY,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  HostListener,
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NavigationEnd,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  Observable,
  Output,
  QueryList,
  Renderer2,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
  RouterOutlet,
  SlicePipe,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
  ViewEncapsulation,
  __spreadProps,
  __spreadValues,
  afterNextRender,
  assertInInjectionContext,
  booleanAttribute,
  catchError,
  combineLatest,
  computed,
  debounceTime,
  distinctUntilChanged,
  environment,
  filter,
  finalize,
  forkJoin,
  forwardRef,
  inject,
  map,
  merge,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  skip,
  startWith,
  switchMap,
  takeUntil,
  tap,
  throwError,
  timeout,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-BZHQTCKH.js";

// node_modules/@angular/material/fesm2022/checkbox.mjs
var _c0 = ["input"];
var _c1 = ["label"];
var _c2 = ["*"];
var checkboxDefaults = {
  color: "accent",
  clickAction: "check-indeterminate",
  disabledInteractive: false
};
var MAT_CHECKBOX_DEFAULT_OPTIONS = new InjectionToken("mat-checkbox-default-options", {
  providedIn: "root",
  factory: () => checkboxDefaults
});
var TransitionCheckState;
(function(TransitionCheckState2) {
  TransitionCheckState2[TransitionCheckState2["Init"] = 0] = "Init";
  TransitionCheckState2[TransitionCheckState2["Checked"] = 1] = "Checked";
  TransitionCheckState2[TransitionCheckState2["Unchecked"] = 2] = "Unchecked";
  TransitionCheckState2[TransitionCheckState2["Indeterminate"] = 3] = "Indeterminate";
})(TransitionCheckState || (TransitionCheckState = {}));
var MatCheckboxChange = class {
  source;
  checked;
};
var MatCheckbox = class _MatCheckbox {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _animationsDisabled = _animationsDisabled();
  _options = inject(MAT_CHECKBOX_DEFAULT_OPTIONS, {
    optional: true
  });
  focus() {
    this._inputElement.nativeElement.focus();
  }
  _createChangeEvent(isChecked) {
    const event = new MatCheckboxChange();
    event.source = this;
    event.checked = isChecked;
    return event;
  }
  _getAnimationTargetElement() {
    return this._inputElement?.nativeElement;
  }
  _animationClasses = {
    uncheckedToChecked: "mdc-checkbox--anim-unchecked-checked",
    uncheckedToIndeterminate: "mdc-checkbox--anim-unchecked-indeterminate",
    checkedToUnchecked: "mdc-checkbox--anim-checked-unchecked",
    checkedToIndeterminate: "mdc-checkbox--anim-checked-indeterminate",
    indeterminateToChecked: "mdc-checkbox--anim-indeterminate-checked",
    indeterminateToUnchecked: "mdc-checkbox--anim-indeterminate-unchecked"
  };
  ariaLabel = "";
  ariaLabelledby = null;
  ariaDescribedby;
  ariaExpanded;
  ariaControls;
  ariaOwns;
  _uniqueId;
  id;
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  required = false;
  labelPosition = "after";
  name = null;
  change = new EventEmitter();
  indeterminateChange = new EventEmitter();
  value;
  disableRipple = false;
  _inputElement;
  _labelElement;
  tabIndex;
  color;
  disabledInteractive;
  _onTouched = () => {
  };
  _currentAnimationClass = "";
  _currentCheckState = TransitionCheckState.Init;
  _controlValueAccessorChangeFn = () => {
  };
  _validatorChangeFn = () => {
  };
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this._options = this._options || checkboxDefaults;
    this.color = this._options.color || checkboxDefaults.color;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-checkbox-");
    this.disabledInteractive = this._options?.disabledInteractive ?? false;
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorChangeFn();
    }
  }
  ngAfterViewInit() {
    this._syncIndeterminate(this.indeterminate);
  }
  get checked() {
    return this._checked;
  }
  set checked(value) {
    if (value != this.checked) {
      this._checked = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _checked = false;
  get disabled() {
    return this._disabled;
  }
  set disabled(value) {
    if (value !== this.disabled) {
      this._disabled = value;
      this._changeDetectorRef.markForCheck();
    }
  }
  _disabled = false;
  get indeterminate() {
    return this._indeterminate();
  }
  set indeterminate(value) {
    const changed = value != this._indeterminate();
    this._indeterminate.set(value);
    if (changed) {
      if (value) {
        this._transitionCheckState(TransitionCheckState.Indeterminate);
      } else {
        this._transitionCheckState(this.checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      }
      this.indeterminateChange.emit(value);
    }
    this._syncIndeterminate(value);
  }
  _indeterminate = signal(false, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : []);
  _isRippleDisabled() {
    return this.disableRipple || this.disabled;
  }
  _onLabelTextChange() {
    this._changeDetectorRef.detectChanges();
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._controlValueAccessorChangeFn = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorChangeFn = fn;
  }
  _transitionCheckState(newState) {
    let oldState = this._currentCheckState;
    let element = this._getAnimationTargetElement();
    if (oldState === newState || !element) {
      return;
    }
    if (this._currentAnimationClass) {
      element.classList.remove(this._currentAnimationClass);
    }
    this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
    this._currentCheckState = newState;
    if (this._currentAnimationClass.length > 0) {
      element.classList.add(this._currentAnimationClass);
      const animationClass = this._currentAnimationClass;
      this._ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          element.classList.remove(animationClass);
        }, 1e3);
      });
    }
  }
  _emitChangeEvent() {
    this._controlValueAccessorChangeFn(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
    if (this._inputElement) {
      this._inputElement.nativeElement.checked = this.checked;
    }
  }
  toggle() {
    this.checked = !this.checked;
    this._controlValueAccessorChangeFn(this.checked);
  }
  _handleInputClick() {
    const clickAction = this._options?.clickAction;
    if (!this.disabled && clickAction !== "noop") {
      if (this.indeterminate && clickAction !== "check") {
        Promise.resolve().then(() => {
          this._indeterminate.set(false);
          this.indeterminateChange.emit(false);
        });
      }
      this._checked = !this._checked;
      this._transitionCheckState(this._checked ? TransitionCheckState.Checked : TransitionCheckState.Unchecked);
      this._emitChangeEvent();
    } else if (this.disabled && this.disabledInteractive || !this.disabled && clickAction === "noop") {
      this._inputElement.nativeElement.checked = this.checked;
      this._inputElement.nativeElement.indeterminate = this.indeterminate;
    }
  }
  _onInteractionEvent(event) {
    event.stopPropagation();
  }
  _onBlur() {
    Promise.resolve().then(() => {
      this._onTouched();
      this._changeDetectorRef.markForCheck();
    });
  }
  _getAnimationClassForCheckStateTransition(oldState, newState) {
    if (this._animationsDisabled) {
      return "";
    }
    switch (oldState) {
      case TransitionCheckState.Init:
        if (newState === TransitionCheckState.Checked) {
          return this._animationClasses.uncheckedToChecked;
        } else if (newState == TransitionCheckState.Indeterminate) {
          return this._checked ? this._animationClasses.checkedToIndeterminate : this._animationClasses.uncheckedToIndeterminate;
        }
        break;
      case TransitionCheckState.Unchecked:
        return newState === TransitionCheckState.Checked ? this._animationClasses.uncheckedToChecked : this._animationClasses.uncheckedToIndeterminate;
      case TransitionCheckState.Checked:
        return newState === TransitionCheckState.Unchecked ? this._animationClasses.checkedToUnchecked : this._animationClasses.checkedToIndeterminate;
      case TransitionCheckState.Indeterminate:
        return newState === TransitionCheckState.Checked ? this._animationClasses.indeterminateToChecked : this._animationClasses.indeterminateToUnchecked;
    }
    return "";
  }
  _syncIndeterminate(value) {
    const nativeCheckbox = this._inputElement;
    if (nativeCheckbox) {
      nativeCheckbox.nativeElement.indeterminate = value;
    }
  }
  _onInputClick() {
    this._handleInputClick();
  }
  _onTouchTargetClick() {
    this._handleInputClick();
    if (!this.disabled) {
      this._inputElement.nativeElement.focus();
    }
  }
  _preventBubblingFromLabel(event) {
    if (!!event.target && this._labelElement.nativeElement.contains(event.target)) {
      event.stopPropagation();
    }
  }
  static \u0275fac = function MatCheckbox_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckbox)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatCheckbox,
    selectors: [["mat-checkbox"]],
    viewQuery: function MatCheckbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c0, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputElement = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._labelElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-checkbox"],
    hostVars: 16,
    hostBindings: function MatCheckbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "mat-accent");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled)("mdc-checkbox--disabled", ctx.disabled)("mat-mdc-checkbox-disabled", ctx.disabled)("mat-mdc-checkbox-checked", ctx.checked)("mat-mdc-checkbox-disabled-interactive", ctx.disabledInteractive);
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      ariaExpanded: [2, "aria-expanded", "ariaExpanded", booleanAttribute],
      ariaControls: [0, "aria-controls", "ariaControls"],
      ariaOwns: [0, "aria-owns", "ariaOwns"],
      id: "id",
      required: [2, "required", "required", booleanAttribute],
      labelPosition: "labelPosition",
      name: "name",
      value: "value",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? void 0 : numberAttribute(value)],
      color: "color",
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute],
      checked: [2, "checked", "checked", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute]
    },
    outputs: {
      change: "change",
      indeterminateChange: "indeterminateChange"
    },
    exportAs: ["matCheckbox"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatCheckbox),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatCheckbox,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c2,
    decls: 15,
    vars: 23,
    consts: [["checkbox", ""], ["input", ""], ["label", ""], ["mat-internal-form-field", "", 3, "click", "labelPosition"], [1, "mdc-checkbox"], [1, "mat-mdc-checkbox-touch-target", 3, "click"], ["type", "checkbox", 1, "mdc-checkbox__native-control", 3, "blur", "click", "change", "checked", "indeterminate", "disabled", "id", "required", "tabIndex"], [1, "mdc-checkbox__ripple"], [1, "mdc-checkbox__background"], ["focusable", "false", "viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-checkbox__checkmark"], ["fill", "none", "d", "M1.73,12.91 8.1,19.28 22.79,4.59", 1, "mdc-checkbox__checkmark-path"], [1, "mdc-checkbox__mixedmark"], ["mat-ripple", "", 1, "mat-mdc-checkbox-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-label", 3, "for"]],
    template: function MatCheckbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_0_listener($event) {
          return ctx._preventBubblingFromLabel($event);
        });
        \u0275\u0275elementStart(1, "div", 4, 0)(3, "div", 5);
        \u0275\u0275listener("click", function MatCheckbox_Template_div_click_3_listener() {
          return ctx._onTouchTargetClick();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "input", 6, 1);
        \u0275\u0275listener("blur", function MatCheckbox_Template_input_blur_4_listener() {
          return ctx._onBlur();
        })("click", function MatCheckbox_Template_input_click_4_listener() {
          return ctx._onInputClick();
        })("change", function MatCheckbox_Template_input_change_4_listener($event) {
          return ctx._onInteractionEvent($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 7);
        \u0275\u0275elementStart(7, "div", 8);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(8, "svg", 9);
        \u0275\u0275element(9, "path", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275namespaceHTML();
        \u0275\u0275element(10, "div", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "div", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "label", 13, 2);
        \u0275\u0275projection(14);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const checkbox_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance(4);
        \u0275\u0275classProp("mdc-checkbox--selected", ctx.checked);
        \u0275\u0275property("checked", ctx.checked)("indeterminate", ctx.indeterminate)("disabled", ctx.disabled && !ctx.disabledInteractive)("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby)("aria-checked", ctx.indeterminate ? "mixed" : null)("aria-controls", ctx.ariaControls)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? true : null)("aria-expanded", ctx.ariaExpanded)("aria-owns", ctx.ariaOwns)("name", ctx.name)("value", ctx.value);
        \u0275\u0275advance(7);
        \u0275\u0275property("matRippleTrigger", checkbox_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.inputId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus-visible~.mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckbox, [{
    type: Component,
    args: [{
      selector: "mat-checkbox",
      host: {
        "class": "mat-mdc-checkbox",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.aria-labelledby]": "null",
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[class.mdc-checkbox--disabled]": "disabled",
        "[id]": "id",
        "[class.mat-mdc-checkbox-disabled]": "disabled",
        "[class.mat-mdc-checkbox-checked]": "checked",
        "[class.mat-mdc-checkbox-disabled-interactive]": "disabledInteractive",
        "[class]": 'color ? "mat-" + color : "mat-accent"'
      },
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatCheckbox),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatCheckbox,
        multi: true
      }],
      exportAs: "matCheckbox",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush,
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition" (click)="_preventBubblingFromLabel($event)">
  <div #checkbox class="mdc-checkbox">
    <!-- Render this element first so the input is on top. -->
    <div class="mat-mdc-checkbox-touch-target" (click)="_onTouchTargetClick()"></div>
    <input #input
           type="checkbox"
           class="mdc-checkbox__native-control"
           [class.mdc-checkbox--selected]="checked"
           [attr.aria-label]="ariaLabel || null"
           [attr.aria-labelledby]="ariaLabelledby"
           [attr.aria-describedby]="ariaDescribedby"
           [attr.aria-checked]="indeterminate ? 'mixed' : null"
           [attr.aria-controls]="ariaControls"
           [attr.aria-disabled]="disabled && disabledInteractive ? true : null"
           [attr.aria-expanded]="ariaExpanded"
           [attr.aria-owns]="ariaOwns"
           [attr.name]="name"
           [attr.value]="value"
           [checked]="checked"
           [indeterminate]="indeterminate"
           [disabled]="disabled && !disabledInteractive"
           [id]="inputId"
           [required]="required"
           [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
           (blur)="_onBlur()"
           (click)="_onInputClick()"
           (change)="_onInteractionEvent($event)"/>
    <div class="mdc-checkbox__ripple"></div>
    <div class="mdc-checkbox__background">
      <svg class="mdc-checkbox__checkmark"
           focusable="false"
           viewBox="0 0 24 24"
           aria-hidden="true">
        <path class="mdc-checkbox__checkmark-path"
              fill="none"
              d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
      </svg>
      <div class="mdc-checkbox__mixedmark"></div>
    </div>
    <div class="mat-mdc-checkbox-ripple mat-focus-indicator" mat-ripple
      [matRippleTrigger]="checkbox"
      [matRippleDisabled]="disableRipple || disabled"
      [matRippleCentered]="true"></div>
  </div>
  <!--
    Avoid putting a click handler on the <label/> to fix duplicate navigation stop on Talk Back
    (#14385). Putting a click handler on the <label/> caused this bug because the browser produced
    an unnecessary accessibility tree node.
  -->
  <label class="mdc-label" #label [for]="inputId">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-checkbox{display:inline-block;position:relative;flex:0 0 18px;box-sizing:content-box;width:18px;height:18px;line-height:0;white-space:nowrap;cursor:pointer;vertical-align:bottom;padding:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);margin:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox:hover>.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:hover>.mat-mdc-checkbox-ripple>.mat-ripple-element{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control:focus~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-focus-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-unselected-pressed-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-hover-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox .mdc-checkbox__native-control:focus:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-focus-state-layer-color, var(--mat-sys-primary))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked+.mdc-checkbox__ripple{opacity:var(--mat-checkbox-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox:active>.mdc-checkbox__native-control:checked~.mat-mdc-checkbox-ripple .mat-ripple-element{background-color:var(--mat-checkbox-selected-pressed-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control~.mat-mdc-checkbox-ripple .mat-ripple-element,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control+.mdc-checkbox__ripple{background-color:var(--mat-checkbox-unselected-hover-state-layer-color, var(--mat-sys-on-surface))}.mdc-checkbox .mdc-checkbox__native-control{position:absolute;margin:0;padding:0;opacity:0;cursor:inherit;z-index:1;width:var(--mat-checkbox-state-layer-size, 40px);height:var(--mat-checkbox-state-layer-size, 40px);top:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);right:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - var(--mat-checkbox-state-layer-size, 40px))/2)}.mdc-checkbox--disabled{cursor:default;pointer-events:none}.mdc-checkbox__background{display:inline-flex;position:absolute;align-items:center;justify-content:center;box-sizing:border-box;width:18px;height:18px;border:2px solid currentColor;border-radius:2px;background-color:rgba(0,0,0,0);pointer-events:none;will-change:background-color,border-color;transition:background-color 90ms cubic-bezier(0.4, 0, 0.6, 1),border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);-webkit-print-color-adjust:exact;color-adjust:exact;border-color:var(--mat-checkbox-unselected-icon-color, var(--mat-sys-on-surface-variant));top:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2);left:calc((var(--mat-checkbox-state-layer-size, 40px) - 18px)/2)}.mdc-checkbox__native-control:enabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:enabled:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}@media(forced-colors: active){.mdc-checkbox__native-control:disabled:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:disabled:indeterminate~.mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:checked)~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-hover-icon-color, var(--mat-sys-on-surface));background-color:rgba(0,0,0,0)}.mdc-checkbox:hover>.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox:hover>.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-hover-icon-color, var(--mat-sys-primary))}.mdc-checkbox__native-control:focus:focus:not(:checked)~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:not(:indeterminate)~.mdc-checkbox__background{border-color:var(--mat-checkbox-unselected-focus-icon-color, var(--mat-sys-on-surface))}.mdc-checkbox__native-control:focus:focus:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:focus:focus:indeterminate~.mdc-checkbox__background{border-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary));background-color:var(--mat-checkbox-selected-focus-icon-color, var(--mat-sys-primary))}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:var(--mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover>.mdc-checkbox__native-control~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background{border-color:GrayText}}.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{background-color:var(--mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent));border-color:rgba(0,0,0,0)}.mdc-checkbox__checkmark{position:absolute;top:0;right:0;bottom:0;left:0;width:100%;opacity:0;transition:opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__checkmark{color:CanvasText}}.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__checkmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark{color:GrayText}}.mdc-checkbox__checkmark-path{transition:stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);stroke:currentColor;stroke-width:3.12px;stroke-dashoffset:29.7833385;stroke-dasharray:29.7833385}.mdc-checkbox__mixedmark{width:100%;height:0;transform:scaleX(0) rotate(0deg);border-width:1px;border-style:solid;opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1);border-color:var(--mat-checkbox-selected-checkmark-color, var(--mat-sys-on-primary))}@media(forced-colors: active){.mdc-checkbox__mixedmark{margin:0 1px}}.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:var(--mat-checkbox-disabled-selected-checkmark-color, var(--mat-sys-surface))}@media(forced-colors: active){.mdc-checkbox--disabled .mdc-checkbox__mixedmark,.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark{border-color:GrayText}}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background{animation-duration:180ms;animation-timing-function:linear}.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;transition:none}.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path{animation:mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark{animation:mdc-checkbox-checked-indeterminate-checkmark 90ms linear;transition:none}.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark{animation:mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark{animation:mdc-checkbox-indeterminate-checked-checkmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;transition:none}.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark{animation:mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;transition:none}.mdc-checkbox__native-control:checked~.mdc-checkbox__background,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background{transition:border-color 90ms cubic-bezier(0, 0, 0.2, 1),background-color 90ms cubic-bezier(0, 0, 0.2, 1)}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path{stroke-dashoffset:0}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__checkmark{transition:opacity 180ms cubic-bezier(0, 0, 0.2, 1),transform 180ms cubic-bezier(0, 0, 0.2, 1);opacity:1}.mdc-checkbox__native-control:checked~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(-45deg)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__checkmark{transform:rotate(45deg);opacity:0;transition:opacity 90ms cubic-bezier(0.4, 0, 0.6, 1),transform 90ms cubic-bezier(0.4, 0, 0.6, 1)}.mdc-checkbox__native-control:indeterminate~.mdc-checkbox__background>.mdc-checkbox__mixedmark{transform:scaleX(1) rotate(0deg);opacity:1}@keyframes mdc-checkbox-unchecked-checked-checkmark-path{0%,50%{stroke-dashoffset:29.7833385}50%{animation-timing-function:cubic-bezier(0, 0, 0.2, 1)}100%{stroke-dashoffset:0}}@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark{0%,68.2%{transform:scaleX(0)}68.2%{animation-timing-function:cubic-bezier(0, 0, 0, 1)}100%{transform:scaleX(1)}}@keyframes mdc-checkbox-checked-unchecked-checkmark-path{from{animation-timing-function:cubic-bezier(0.4, 0, 1, 1);opacity:1;stroke-dashoffset:0}to{opacity:0;stroke-dashoffset:-29.7833385}}@keyframes mdc-checkbox-checked-indeterminate-checkmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(45deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-checked-checkmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(45deg);opacity:0}to{transform:rotate(360deg);opacity:1}}@keyframes mdc-checkbox-checked-indeterminate-mixedmark{from{animation-timing-function:cubic-bezier(0, 0, 0.2, 1);transform:rotate(-45deg);opacity:0}to{transform:rotate(0deg);opacity:1}}@keyframes mdc-checkbox-indeterminate-checked-mixedmark{from{animation-timing-function:cubic-bezier(0.14, 0, 0, 1);transform:rotate(0deg);opacity:1}to{transform:rotate(315deg);opacity:0}}@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark{0%{animation-timing-function:linear;transform:scaleX(1);opacity:1}32.8%,100%{transform:scaleX(0);opacity:0}}.mat-mdc-checkbox{display:inline-block;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-touch-target,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__native-control,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__ripple,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mat-mdc-checkbox-ripple::before,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__checkmark>.mdc-checkbox__checkmark-path,.mat-mdc-checkbox._mat-animation-noopable>.mat-internal-form-field>.mdc-checkbox>.mdc-checkbox__background>.mdc-checkbox__mixedmark{transition:none !important;animation:none !important}.mat-mdc-checkbox label{cursor:pointer}.mat-mdc-checkbox .mat-internal-form-field{color:var(--mat-checkbox-label-text-color, var(--mat-sys-on-surface));font-family:var(--mat-checkbox-label-text-font, var(--mat-sys-body-medium-font));line-height:var(--mat-checkbox-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-checkbox-label-text-size, var(--mat-sys-body-medium-size));letter-spacing:var(--mat-checkbox-label-text-tracking, var(--mat-sys-body-medium-tracking));font-weight:var(--mat-checkbox-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive{pointer-events:auto}.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input{cursor:default}.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{cursor:default;color:var(--mat-checkbox-disabled-label-color, color-mix(in srgb, var(--mat-sys-on-surface) 38%, transparent))}@media(forced-colors: active){.mat-mdc-checkbox.mat-mdc-checkbox-disabled label{color:GrayText}}.mat-mdc-checkbox label:empty{display:none}.mat-mdc-checkbox .mdc-checkbox__ripple{opacity:0}.mat-mdc-checkbox .mat-mdc-checkbox-ripple,.mdc-checkbox__ripple{top:0;left:0;right:0;bottom:0;position:absolute;border-radius:50%;pointer-events:none}.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),.mdc-checkbox__ripple:not(:empty){transform:translateZ(0)}.mat-mdc-checkbox-ripple .mat-ripple-element{opacity:.1}.mat-mdc-checkbox-touch-target{position:absolute;top:50%;left:50%;height:var(--mat-checkbox-touch-target-size, 48px);width:var(--mat-checkbox-touch-target-size, 48px);transform:translate(-50%, -50%);display:var(--mat-checkbox-touch-target-display, block)}.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before{border-radius:50%}.mdc-checkbox__native-control:focus-visible~.mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    ariaExpanded: [{
      type: Input,
      args: [{
        alias: "aria-expanded",
        transform: booleanAttribute
      }]
    }],
    ariaControls: [{
      type: Input,
      args: ["aria-controls"]
    }],
    ariaOwns: [{
      type: Input,
      args: ["aria-owns"]
    }],
    id: [{
      type: Input
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    labelPosition: [{
      type: Input
    }],
    name: [{
      type: Input
    }],
    change: [{
      type: Output
    }],
    indeterminateChange: [{
      type: Output
    }],
    value: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    _inputElement: [{
      type: ViewChild,
      args: ["input"]
    }],
    _labelElement: [{
      type: ViewChild,
      args: ["label"]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? void 0 : numberAttribute(value)
      }]
    }],
    color: [{
      type: Input
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatCheckboxModule = class _MatCheckboxModule {
  static \u0275fac = function MatCheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatCheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatCheckboxModule,
    imports: [MatCheckbox],
    exports: [MatCheckbox, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCheckbox, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [MatCheckbox],
      exports: [MatCheckbox, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/progress-bar.mjs
function MatProgressBar_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElement(0, "div", 2);
  }
}
var MAT_PROGRESS_BAR_DEFAULT_OPTIONS = new InjectionToken("MAT_PROGRESS_BAR_DEFAULT_OPTIONS");
var MAT_PROGRESS_BAR_LOCATION = new InjectionToken("mat-progress-bar-location", {
  providedIn: "root",
  factory: () => {
    const _document = inject(DOCUMENT);
    const _location = _document ? _document.location : null;
    return {
      getPathname: () => _location ? _location.pathname + _location.search : ""
    };
  }
});
var MatProgressBar = class _MatProgressBar {
  _elementRef = inject(ElementRef);
  _ngZone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _renderer = inject(Renderer2);
  _cleanupTransitionEnd;
  constructor() {
    const animationsState = _getAnimationsState();
    const defaults = inject(MAT_PROGRESS_BAR_DEFAULT_OPTIONS, {
      optional: true
    });
    this._isNoopAnimation = animationsState === "di-disabled";
    if (animationsState === "reduced-motion") {
      this._elementRef.nativeElement.classList.add("mat-progress-bar-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      this.mode = defaults.mode || this.mode;
    }
  }
  _isNoopAnimation;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _value = 0;
  get bufferValue() {
    return this._bufferValue || 0;
  }
  set bufferValue(v) {
    this._bufferValue = clamp(v || 0);
    this._changeDetectorRef.markForCheck();
  }
  _bufferValue = 0;
  animationEnd = new EventEmitter();
  get mode() {
    return this._mode;
  }
  set mode(value) {
    this._mode = value;
    this._changeDetectorRef.markForCheck();
  }
  _mode = "determinate";
  ngAfterViewInit() {
    this._ngZone.runOutsideAngular(() => {
      this._cleanupTransitionEnd = this._renderer.listen(this._elementRef.nativeElement, "transitionend", this._transitionendHandler);
    });
  }
  ngOnDestroy() {
    this._cleanupTransitionEnd?.();
  }
  _getPrimaryBarTransform() {
    return `scaleX(${this._isIndeterminate() ? 1 : this.value / 100})`;
  }
  _getBufferBarFlexBasis() {
    return `${this.mode === "buffer" ? this.bufferValue : 100}%`;
  }
  _isIndeterminate() {
    return this.mode === "indeterminate" || this.mode === "query";
  }
  _transitionendHandler = (event) => {
    if (this.animationEnd.observers.length === 0 || !event.target || !event.target.classList.contains("mdc-linear-progress__primary-bar")) {
      return;
    }
    if (this.mode === "determinate" || this.mode === "buffer") {
      this._ngZone.run(() => this.animationEnd.next({
        value: this.value
      }));
    }
  };
  static \u0275fac = function MatProgressBar_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBar)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressBar,
    selectors: [["mat-progress-bar"]],
    hostAttrs: ["role", "progressbar", "aria-valuemin", "0", "aria-valuemax", "100", "tabindex", "-1", 1, "mat-mdc-progress-bar", "mdc-linear-progress"],
    hostVars: 10,
    hostBindings: function MatProgressBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuenow", ctx._isIndeterminate() ? null : ctx.value)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._isNoopAnimation)("mdc-linear-progress--animation-ready", !ctx._isNoopAnimation)("mdc-linear-progress--indeterminate", ctx._isIndeterminate());
      }
    },
    inputs: {
      color: "color",
      value: [2, "value", "value", numberAttribute],
      bufferValue: [2, "bufferValue", "bufferValue", numberAttribute],
      mode: "mode"
    },
    outputs: {
      animationEnd: "animationEnd"
    },
    exportAs: ["matProgressBar"],
    decls: 7,
    vars: 5,
    consts: [["aria-hidden", "true", 1, "mdc-linear-progress__buffer"], [1, "mdc-linear-progress__buffer-bar"], [1, "mdc-linear-progress__buffer-dots"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__primary-bar"], [1, "mdc-linear-progress__bar-inner"], ["aria-hidden", "true", 1, "mdc-linear-progress__bar", "mdc-linear-progress__secondary-bar"]],
    template: function MatProgressBar_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275conditionalCreate(2, MatProgressBar_Conditional_2_Template, 1, 0, "div", 2);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(3, "div", 3);
        \u0275\u0275domElement(4, "span", 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275domElementStart(5, "div", 5);
        \u0275\u0275domElement(6, "span", 4);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("flex-basis", ctx._getBufferBarFlexBasis());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.mode === "buffer" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275styleProp("transform", ctx._getPrimaryBarTransform());
      }
    },
    styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBar, [{
    type: Component,
    args: [{
      selector: "mat-progress-bar",
      exportAs: "matProgressBar",
      host: {
        "role": "progressbar",
        "aria-valuemin": "0",
        "aria-valuemax": "100",
        "tabindex": "-1",
        "[attr.aria-valuenow]": "_isIndeterminate() ? null : value",
        "[attr.mode]": "mode",
        "class": "mat-mdc-progress-bar mdc-linear-progress",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": "_isNoopAnimation",
        "[class.mdc-linear-progress--animation-ready]": "!_isNoopAnimation",
        "[class.mdc-linear-progress--indeterminate]": "_isIndeterminate()"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      template: `<!--
  All children need to be hidden for screen readers in order to support ChromeVox.
  More context in the issue: https://github.com/angular/components/issues/22165.
-->
<div class="mdc-linear-progress__buffer" aria-hidden="true">
  <div
    class="mdc-linear-progress__buffer-bar"
    [style.flex-basis]="_getBufferBarFlexBasis()"></div>
  <!-- Remove the dots outside of buffer mode since they can cause CSP issues (see #28938) -->
  @if (mode === 'buffer') {
    <div class="mdc-linear-progress__buffer-dots"></div>
  }
</div>
<div
  class="mdc-linear-progress__bar mdc-linear-progress__primary-bar"
  aria-hidden="true"
  [style.transform]="_getPrimaryBarTransform()">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
<div class="mdc-linear-progress__bar mdc-linear-progress__secondary-bar" aria-hidden="true">
  <span class="mdc-linear-progress__bar-inner"></span>
</div>
`,
      styles: [".mat-mdc-progress-bar{--mat-progress-bar-animation-multiplier: 1;display:block;text-align:start}.mat-mdc-progress-bar[mode=query]{transform:scaleX(-1)}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-dots,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__secondary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__bar-inner.mdc-linear-progress__bar-inner{animation:none}.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__primary-bar,.mat-mdc-progress-bar._mat-animation-noopable .mdc-linear-progress__buffer-bar{transition:transform 1ms}.mat-progress-bar-reduced-motion{--mat-progress-bar-animation-multiplier: 2}.mdc-linear-progress{position:relative;width:100%;transform:translateZ(0);outline:1px solid rgba(0,0,0,0);overflow-x:hidden;transition:opacity 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:max(var(--mat-progress-bar-track-height, 4px),var(--mat-progress-bar-active-indicator-height, 4px))}@media(forced-colors: active){.mdc-linear-progress{outline-color:CanvasText}}.mdc-linear-progress__bar{position:absolute;top:0;bottom:0;margin:auto 0;width:100%;animation:none;transform-origin:top left;transition:transform 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);height:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress--indeterminate .mdc-linear-progress__bar{transition:none}[dir=rtl] .mdc-linear-progress__bar{right:0;transform-origin:center right}.mdc-linear-progress__bar-inner{display:inline-block;position:absolute;width:100%;animation:none;border-top-style:solid;border-color:var(--mat-progress-bar-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-progress-bar-active-indicator-height, 4px)}.mdc-linear-progress__buffer{display:flex;position:absolute;top:0;bottom:0;margin:auto 0;width:100%;overflow:hidden;height:var(--mat-progress-bar-track-height, 4px);border-radius:var(--mat-progress-bar-track-shape, var(--mat-sys-corner-none))}.mdc-linear-progress__buffer-dots{background-image:radial-gradient(circle, var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant)) calc(var(--mat-progress-bar-track-height, 4px) / 2), transparent 0);background-repeat:repeat-x;background-size:calc(calc(var(--mat-progress-bar-track-height, 4px) / 2)*5);background-position:left;flex:auto;transform:rotate(180deg);animation:mdc-linear-progress-buffering calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear}@media(forced-colors: active){.mdc-linear-progress__buffer-dots{background-color:ButtonBorder}}[dir=rtl] .mdc-linear-progress__buffer-dots{animation:mdc-linear-progress-buffering-reverse calc(250ms*var(--mat-progress-bar-animation-multiplier)) infinite linear;transform:rotate(0)}.mdc-linear-progress__buffer-bar{flex:0 1 100%;transition:flex-basis 250ms 0ms cubic-bezier(0.4, 0, 0.6, 1);background-color:var(--mat-progress-bar-track-color, var(--mat-sys-surface-variant))}.mdc-linear-progress__primary-bar{transform:scaleX(0)}.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{left:-145.166611%}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation:mdc-linear-progress-primary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-primary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__primary-bar{animation-name:mdc-linear-progress-primary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__primary-bar{right:-145.166611%;left:auto}.mdc-linear-progress__secondary-bar{display:none}.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{left:-54.888891%;display:block}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation:mdc-linear-progress-secondary-indeterminate-translate calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}.mdc-linear-progress--indeterminate.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar>.mdc-linear-progress__bar-inner{animation:mdc-linear-progress-secondary-indeterminate-scale calc(2s*var(--mat-progress-bar-animation-multiplier)) infinite linear}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--animation-ready .mdc-linear-progress__secondary-bar{animation-name:mdc-linear-progress-secondary-indeterminate-translate-reverse}[dir=rtl] .mdc-linear-progress.mdc-linear-progress--indeterminate .mdc-linear-progress__secondary-bar{right:-54.888891%;left:auto}@keyframes mdc-linear-progress-buffering{from{transform:rotate(180deg) translateX(calc(var(--mat-progress-bar-track-height, 4px) * -2.5))}}@keyframes mdc-linear-progress-primary-indeterminate-translate{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.67142%)}100%{transform:translateX(200.611057%)}}@keyframes mdc-linear-progress-primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.386165%)}100%{transform:translateX(160.277782%)}}@keyframes mdc-linear-progress-secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.004315);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes mdc-linear-progress-primary-indeterminate-translate-reverse{0%{transform:translateX(0)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(-83.67142%)}100%{transform:translateX(-200.611057%)}}@keyframes mdc-linear-progress-secondary-indeterminate-translate-reverse{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(-37.651913%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(-84.386165%)}100%{transform:translateX(-160.277782%)}}@keyframes mdc-linear-progress-buffering-reverse{from{transform:translateX(-10px)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    bufferValue: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    animationEnd: [{
      type: Output
    }],
    mode: [{
      type: Input
    }]
  });
})();
function clamp(v, min = 0, max = 100) {
  return Math.max(min, Math.min(max, v));
}
var MatProgressBarModule = class _MatProgressBarModule {
  static \u0275fac = function MatProgressBarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressBarModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressBarModule,
    imports: [MatProgressBar],
    exports: [MatProgressBar, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressBarModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressBar],
      exports: [MatProgressBar, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/progress-spinner.mjs
var _c02 = ["determinateSpinner"];
function MatProgressSpinner_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(0, "svg", 11);
    \u0275\u0275element(1, "circle", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275attribute("viewBox", ctx_r0._viewBox());
    \u0275\u0275advance();
    \u0275\u0275styleProp("stroke-dasharray", ctx_r0._strokeCircumference(), "px")("stroke-dashoffset", ctx_r0._strokeCircumference() / 2, "px")("stroke-width", ctx_r0._circleStrokeWidth(), "%");
    \u0275\u0275attribute("r", ctx_r0._circleRadius());
  }
}
var MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS = new InjectionToken("mat-progress-spinner-default-options", {
  providedIn: "root",
  factory: () => ({
    diameter: BASE_SIZE
  })
});
var BASE_SIZE = 100;
var BASE_STROKE_WIDTH = 10;
var MatProgressSpinner = class _MatProgressSpinner {
  _elementRef = inject(ElementRef);
  _noopAnimations;
  get color() {
    return this._color || this._defaultColor;
  }
  set color(value) {
    this._color = value;
  }
  _color;
  _defaultColor = "primary";
  _determinateCircle;
  constructor() {
    const defaults = inject(MAT_PROGRESS_SPINNER_DEFAULT_OPTIONS);
    const animationsState = _getAnimationsState();
    const element = this._elementRef.nativeElement;
    this._noopAnimations = animationsState === "di-disabled" && !!defaults && !defaults._forceAnimations;
    this.mode = element.nodeName.toLowerCase() === "mat-spinner" ? "indeterminate" : "determinate";
    if (!this._noopAnimations && animationsState === "reduced-motion") {
      element.classList.add("mat-progress-spinner-reduced-motion");
    }
    if (defaults) {
      if (defaults.color) {
        this.color = this._defaultColor = defaults.color;
      }
      if (defaults.diameter) {
        this.diameter = defaults.diameter;
      }
      if (defaults.strokeWidth) {
        this.strokeWidth = defaults.strokeWidth;
      }
    }
  }
  mode;
  get value() {
    return this.mode === "determinate" ? this._value : 0;
  }
  set value(v) {
    this._value = Math.max(0, Math.min(100, v || 0));
  }
  _value = 0;
  get diameter() {
    return this._diameter;
  }
  set diameter(size) {
    this._diameter = size || 0;
  }
  _diameter = BASE_SIZE;
  get strokeWidth() {
    return this._strokeWidth ?? this.diameter / 10;
  }
  set strokeWidth(value) {
    this._strokeWidth = value || 0;
  }
  _strokeWidth;
  _circleRadius() {
    return (this.diameter - BASE_STROKE_WIDTH) / 2;
  }
  _viewBox() {
    const viewBox = this._circleRadius() * 2 + this.strokeWidth;
    return `0 0 ${viewBox} ${viewBox}`;
  }
  _strokeCircumference() {
    return 2 * Math.PI * this._circleRadius();
  }
  _strokeDashOffset() {
    if (this.mode === "determinate") {
      return this._strokeCircumference() * (100 - this._value) / 100;
    }
    return null;
  }
  _circleStrokeWidth() {
    return this.strokeWidth / this.diameter * 100;
  }
  static \u0275fac = function MatProgressSpinner_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinner)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatProgressSpinner,
    selectors: [["mat-progress-spinner"], ["mat-spinner"]],
    viewQuery: function MatProgressSpinner_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._determinateCircle = _t.first);
      }
    },
    hostAttrs: ["role", "progressbar", "tabindex", "-1", 1, "mat-mdc-progress-spinner", "mdc-circular-progress"],
    hostVars: 18,
    hostBindings: function MatProgressSpinner_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuemin", 0)("aria-valuemax", 100)("aria-valuenow", ctx.mode === "determinate" ? ctx.value : null)("mode", ctx.mode);
        \u0275\u0275classMap("mat-" + ctx.color);
        \u0275\u0275styleProp("width", ctx.diameter, "px")("height", ctx.diameter, "px")("--mat-progress-spinner-size", ctx.diameter + "px")("--mat-progress-spinner-active-indicator-width", ctx.diameter + "px");
        \u0275\u0275classProp("_mat-animation-noopable", ctx._noopAnimations)("mdc-circular-progress--indeterminate", ctx.mode === "indeterminate");
      }
    },
    inputs: {
      color: "color",
      mode: "mode",
      value: [2, "value", "value", numberAttribute],
      diameter: [2, "diameter", "diameter", numberAttribute],
      strokeWidth: [2, "strokeWidth", "strokeWidth", numberAttribute]
    },
    exportAs: ["matProgressSpinner"],
    decls: 14,
    vars: 11,
    consts: [["circle", ""], ["determinateSpinner", ""], ["aria-hidden", "true", 1, "mdc-circular-progress__determinate-container"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__determinate-circle-graphic"], ["cx", "50%", "cy", "50%", 1, "mdc-circular-progress__determinate-circle"], ["aria-hidden", "true", 1, "mdc-circular-progress__indeterminate-container"], [1, "mdc-circular-progress__spinner-layer"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-left"], [3, "ngTemplateOutlet"], [1, "mdc-circular-progress__gap-patch"], [1, "mdc-circular-progress__circle-clipper", "mdc-circular-progress__circle-right"], ["xmlns", "http://www.w3.org/2000/svg", "focusable", "false", 1, "mdc-circular-progress__indeterminate-circle-graphic"], ["cx", "50%", "cy", "50%"]],
    template: function MatProgressSpinner_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatProgressSpinner_ng_template_0_Template, 2, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementStart(2, "div", 2, 1);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(4, "svg", 3);
        \u0275\u0275element(5, "circle", 4);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(6, "div", 5)(7, "div", 6)(8, "div", 7);
        \u0275\u0275elementContainer(9, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "div", 9);
        \u0275\u0275elementContainer(11, 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 10);
        \u0275\u0275elementContainer(13, 8);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        const circle_r2 = \u0275\u0275reference(1);
        \u0275\u0275advance(4);
        \u0275\u0275attribute("viewBox", ctx._viewBox());
        \u0275\u0275advance();
        \u0275\u0275styleProp("stroke-dasharray", ctx._strokeCircumference(), "px")("stroke-dashoffset", ctx._strokeDashOffset(), "px")("stroke-width", ctx._circleStrokeWidth(), "%");
        \u0275\u0275attribute("r", ctx._circleRadius());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngTemplateOutlet", circle_r2);
      }
    },
    dependencies: [NgTemplateOutlet],
    styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinner, [{
    type: Component,
    args: [{
      selector: "mat-progress-spinner, mat-spinner",
      exportAs: "matProgressSpinner",
      host: {
        "role": "progressbar",
        "class": "mat-mdc-progress-spinner mdc-circular-progress",
        "tabindex": "-1",
        "[class]": '"mat-" + color',
        "[class._mat-animation-noopable]": `_noopAnimations`,
        "[class.mdc-circular-progress--indeterminate]": 'mode === "indeterminate"',
        "[style.width.px]": "diameter",
        "[style.height.px]": "diameter",
        "[style.--mat-progress-spinner-size]": 'diameter + "px"',
        "[style.--mat-progress-spinner-active-indicator-width]": 'diameter + "px"',
        "[attr.aria-valuemin]": "0",
        "[attr.aria-valuemax]": "100",
        "[attr.aria-valuenow]": 'mode === "determinate" ? value : null',
        "[attr.mode]": "mode"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      imports: [NgTemplateOutlet],
      template: '<ng-template #circle>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__indeterminate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeCircumference() / 2"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            cx="50%" cy="50%"/>\n  </svg>\n</ng-template>\n\n<!--\n  All children need to be hidden for screen readers in order to support ChromeVox.\n  More context in the issue: https://github.com/angular/components/issues/22165.\n-->\n<div class="mdc-circular-progress__determinate-container" aria-hidden="true" #determinateSpinner>\n  <svg [attr.viewBox]="_viewBox()" class="mdc-circular-progress__determinate-circle-graphic"\n       xmlns="http://www.w3.org/2000/svg" focusable="false">\n    <circle [attr.r]="_circleRadius()"\n            [style.stroke-dasharray.px]="_strokeCircumference()"\n            [style.stroke-dashoffset.px]="_strokeDashOffset()"\n            [style.stroke-width.%]="_circleStrokeWidth()"\n            class="mdc-circular-progress__determinate-circle"\n            cx="50%" cy="50%"/>\n  </svg>\n</div>\n<!--TODO: figure out why there are 3 separate svgs-->\n<div class="mdc-circular-progress__indeterminate-container" aria-hidden="true">\n  <div class="mdc-circular-progress__spinner-layer">\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-left">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__gap-patch">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n    <div class="mdc-circular-progress__circle-clipper mdc-circular-progress__circle-right">\n      <ng-container [ngTemplateOutlet]="circle"></ng-container>\n    </div>\n  </div>\n</div>\n',
      styles: [".mat-mdc-progress-spinner{--mat-progress-spinner-animation-multiplier: 1;display:block;overflow:hidden;line-height:0;position:relative;direction:ltr;transition:opacity 250ms cubic-bezier(0.4, 0, 0.6, 1)}.mat-mdc-progress-spinner circle{stroke-width:var(--mat-progress-spinner-active-indicator-width, 4px)}.mat-mdc-progress-spinner._mat-animation-noopable,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__determinate-circle{transition:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__spinner-layer,.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container{animation:none !important}.mat-mdc-progress-spinner._mat-animation-noopable .mdc-circular-progress__indeterminate-container circle{stroke-dasharray:0 !important}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic,.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle{stroke:currentColor;stroke:CanvasText}}.mat-progress-spinner-reduced-motion{--mat-progress-spinner-animation-multiplier: 1.25}.mdc-circular-progress__determinate-container,.mdc-circular-progress__indeterminate-circle-graphic,.mdc-circular-progress__indeterminate-container,.mdc-circular-progress__spinner-layer{position:absolute;width:100%;height:100%}.mdc-circular-progress__determinate-container{transform:rotate(-90deg)}.mdc-circular-progress--indeterminate .mdc-circular-progress__determinate-container{opacity:0}.mdc-circular-progress__indeterminate-container{font-size:0;letter-spacing:0;white-space:nowrap;opacity:0}.mdc-circular-progress--indeterminate .mdc-circular-progress__indeterminate-container{opacity:1;animation:mdc-circular-progress-container-rotate calc(1568.2352941176ms*var(--mat-progress-spinner-animation-multiplier)) linear infinite}.mdc-circular-progress__determinate-circle-graphic,.mdc-circular-progress__indeterminate-circle-graphic{fill:rgba(0,0,0,0)}.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:var(--mat-progress-spinner-active-indicator-color, var(--mat-sys-primary))}@media(forced-colors: active){.mat-mdc-progress-spinner .mdc-circular-progress__determinate-circle,.mat-mdc-progress-spinner .mdc-circular-progress__indeterminate-circle-graphic{stroke:CanvasText}}.mdc-circular-progress__determinate-circle{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1)}.mdc-circular-progress__gap-patch{position:absolute;top:0;left:47.5%;box-sizing:border-box;width:5%;height:100%;overflow:hidden}.mdc-circular-progress__gap-patch .mdc-circular-progress__indeterminate-circle-graphic{left:-900%;width:2000%;transform:rotate(180deg)}.mdc-circular-progress__circle-clipper .mdc-circular-progress__indeterminate-circle-graphic{width:200%}.mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{left:-100%}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-left .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-left-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress--indeterminate .mdc-circular-progress__circle-right .mdc-circular-progress__indeterminate-circle-graphic{animation:mdc-circular-progress-right-spin calc(1333ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}.mdc-circular-progress__circle-clipper{display:inline-flex;position:relative;width:50%;height:100%;overflow:hidden}.mdc-circular-progress--indeterminate .mdc-circular-progress__spinner-layer{animation:mdc-circular-progress-spinner-layer-rotate calc(5332ms*var(--mat-progress-spinner-animation-multiplier)) cubic-bezier(0.4, 0, 0.2, 1) infinite both}@keyframes mdc-circular-progress-container-rotate{to{transform:rotate(360deg)}}@keyframes mdc-circular-progress-spinner-layer-rotate{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes mdc-circular-progress-left-spin{from{transform:rotate(265deg)}50%{transform:rotate(130deg)}to{transform:rotate(265deg)}}@keyframes mdc-circular-progress-right-spin{from{transform:rotate(-265deg)}50%{transform:rotate(-130deg)}to{transform:rotate(-265deg)}}\n"]
    }]
  }], () => [], {
    color: [{
      type: Input
    }],
    _determinateCircle: [{
      type: ViewChild,
      args: ["determinateSpinner"]
    }],
    mode: [{
      type: Input
    }],
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    diameter: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    strokeWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }]
  });
})();
var MatSpinner = MatProgressSpinner;
var MatProgressSpinnerModule = class _MatProgressSpinnerModule {
  static \u0275fac = function MatProgressSpinnerModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatProgressSpinnerModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatProgressSpinnerModule,
    imports: [MatProgressSpinner, MatSpinner],
    exports: [MatProgressSpinner, MatSpinner, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatProgressSpinnerModule, [{
    type: NgModule,
    args: [{
      imports: [MatProgressSpinner, MatSpinner],
      exports: [MatProgressSpinner, MatSpinner, BidiModule]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/tabs.mjs
var _c03 = ["*"];
function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
var _c12 = ["tabListContainer"];
var _c22 = ["tabList"];
var _c3 = ["tabListInner"];
var _c4 = ["nextPaginator"];
var _c5 = ["previousPaginator"];
var _c6 = ["content"];
function MatTabBody_ng_template_2_Template(rf, ctx) {
}
var _c7 = ["tabBodyWrapper"];
var _c8 = ["tabHeader"];
function MatTabGroup_For_3_Conditional_6_ng_template_0_Template(rf, ctx) {
}
function MatTabGroup_For_3_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, MatTabGroup_For_3_Conditional_6_ng_template_0_Template, 0, 0, "ng-template", 12);
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("cdkPortalOutlet", tab_r3.templateLabel);
  }
}
function MatTabGroup_For_3_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const tab_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275textInterpolate(tab_r3.textLabel);
  }
}
function MatTabGroup_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7, 2);
    \u0275\u0275listener("click", function MatTabGroup_For_3_Template_div_click_0_listener() {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const tab_r3 = ctx_r1.$implicit;
      const $index_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      const tabHeader_r6 = \u0275\u0275reference(1);
      return \u0275\u0275resetView(ctx_r4._handleClick(tab_r3, tabHeader_r6, $index_r4));
    })("cdkFocusChange", function MatTabGroup_For_3_Template_div_cdkFocusChange_0_listener($event) {
      const $index_r4 = \u0275\u0275restoreView(_r1).$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._tabFocusChanged($event, $index_r4));
    });
    \u0275\u0275element(2, "span", 8)(3, "div", 9);
    \u0275\u0275elementStart(4, "span", 10)(5, "span", 11);
    \u0275\u0275conditionalCreate(6, MatTabGroup_For_3_Conditional_6_Template, 1, 1, null, 12)(7, MatTabGroup_For_3_Conditional_7_Template, 1, 1);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tab_r3 = ctx.$implicit;
    const $index_r4 = ctx.$index;
    const tabNode_r7 = \u0275\u0275reference(1);
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r3.labelClass);
    \u0275\u0275classProp("mdc-tab--active", ctx_r4.selectedIndex === $index_r4);
    \u0275\u0275property("id", ctx_r4._getTabLabelId(tab_r3, $index_r4))("disabled", tab_r3.disabled)("fitInkBarToContent", ctx_r4.fitInkBarToContent);
    \u0275\u0275attribute("tabIndex", ctx_r4._getTabIndex($index_r4))("aria-posinset", $index_r4 + 1)("aria-setsize", ctx_r4._tabs.length)("aria-controls", ctx_r4._getTabContentId($index_r4))("aria-selected", ctx_r4.selectedIndex === $index_r4)("aria-label", tab_r3.ariaLabel || null)("aria-labelledby", !tab_r3.ariaLabel && tab_r3.ariaLabelledby ? tab_r3.ariaLabelledby : null);
    \u0275\u0275advance(3);
    \u0275\u0275property("matRippleTrigger", tabNode_r7)("matRippleDisabled", tab_r3.disabled || ctx_r4.disableRipple);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(tab_r3.templateLabel ? 6 : 7);
  }
}
function MatTabGroup_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0);
  }
}
function MatTabGroup_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-tab-body", 13);
    \u0275\u0275listener("_onCentered", function MatTabGroup_For_8_Template_mat_tab_body__onCentered_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._removeTabBodyWrapperHeight());
    })("_onCentering", function MatTabGroup_For_8_Template_mat_tab_body__onCentering_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._setTabBodyWrapperHeight($event));
    })("_beforeCentering", function MatTabGroup_For_8_Template_mat_tab_body__beforeCentering_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4._bodyCentered($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r9 = ctx.$implicit;
    const $index_r10 = ctx.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275classMap(tab_r9.bodyClass);
    \u0275\u0275property("id", ctx_r4._getTabContentId($index_r10))("content", tab_r9.content)("position", tab_r9.position)("animationDuration", ctx_r4.animationDuration)("preserveContent", ctx_r4.preserveContent);
    \u0275\u0275attribute("tabindex", ctx_r4.contentTabIndex != null && ctx_r4.selectedIndex === $index_r10 ? ctx_r4.contentTabIndex : null)("aria-labelledby", ctx_r4._getTabLabelId(tab_r9, $index_r10))("aria-hidden", ctx_r4.selectedIndex !== $index_r10);
  }
}
var _c9 = ["mat-tab-nav-bar", ""];
var _c10 = ["mat-tab-link", ""];
var MAT_TAB_CONTENT = new InjectionToken("MatTabContent");
var MatTabContent = class _MatTabContent {
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function MatTabContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabContent)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabContent,
    selectors: [["", "matTabContent", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_CONTENT,
      useExisting: _MatTabContent
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabContent, [{
    type: Directive,
    args: [{
      selector: "[matTabContent]",
      providers: [{
        provide: MAT_TAB_CONTENT,
        useExisting: MatTabContent
      }]
    }]
  }], () => [], null);
})();
var MAT_TAB_LABEL = new InjectionToken("MatTabLabel");
var MAT_TAB = new InjectionToken("MAT_TAB");
var MatTabLabel = class _MatTabLabel extends CdkPortal {
  _closestTab = inject(MAT_TAB, {
    optional: true
  });
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabLabel_BaseFactory;
    return function MatTabLabel_Factory(__ngFactoryType__) {
      return (\u0275MatTabLabel_BaseFactory || (\u0275MatTabLabel_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabel)))(__ngFactoryType__ || _MatTabLabel);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabLabel,
    selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_LABEL,
      useExisting: _MatTabLabel
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabel, [{
    type: Directive,
    args: [{
      selector: "[mat-tab-label], [matTabLabel]",
      providers: [{
        provide: MAT_TAB_LABEL,
        useExisting: MatTabLabel
      }]
    }]
  }], null, null);
})();
var MAT_TAB_GROUP = new InjectionToken("MAT_TAB_GROUP");
var MatTab = class _MatTab {
  _viewContainerRef = inject(ViewContainerRef);
  _closestTabGroup = inject(MAT_TAB_GROUP, {
    optional: true
  });
  disabled = false;
  get templateLabel() {
    return this._templateLabel;
  }
  set templateLabel(value) {
    this._setTemplateLabelInput(value);
  }
  _templateLabel;
  _explicitContent = void 0;
  _implicitContent;
  textLabel = "";
  ariaLabel;
  ariaLabelledby;
  labelClass;
  bodyClass;
  id = null;
  _contentPortal = null;
  get content() {
    return this._contentPortal;
  }
  _stateChanges = new Subject();
  position = null;
  origin = null;
  isActive = false;
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
  }
  ngOnChanges(changes) {
    if (changes.hasOwnProperty("textLabel") || changes.hasOwnProperty("disabled")) {
      this._stateChanges.next();
    }
  }
  ngOnDestroy() {
    this._stateChanges.complete();
  }
  ngOnInit() {
    this._contentPortal = new TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
  }
  _setTemplateLabelInput(value) {
    if (value && value._closestTab === this) {
      this._templateLabel = value;
    }
  }
  static \u0275fac = function MatTab_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTab)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTab,
    selectors: [["mat-tab"]],
    contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLabel, 5)(dirIndex, MatTabContent, 7, TemplateRef);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templateLabel = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._explicitContent = _t.first);
      }
    },
    viewQuery: function MatTab_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._implicitContent = _t.first);
      }
    },
    hostAttrs: ["hidden", ""],
    hostVars: 1,
    hostBindings: function MatTab_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("id", null);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      textLabel: [0, "label", "textLabel"],
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      labelClass: "labelClass",
      bodyClass: "bodyClass",
      id: "id"
    },
    exportAs: ["matTab"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB,
      useExisting: _MatTab
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function MatTab_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTab, [{
    type: Component,
    args: [{
      selector: "mat-tab",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matTab",
      providers: [{
        provide: MAT_TAB,
        useExisting: MatTab
      }],
      host: {
        "hidden": "",
        "[attr.id]": "null"
      },
      template: "<!-- Create a template for the content of the <mat-tab> so that we can grab a reference to this\n    TemplateRef and use it in a Portal to render the tab content in the appropriate place in the\n    tab-group. -->\n<ng-template><ng-content></ng-content></ng-template>\n"
    }]
  }], () => [], {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templateLabel: [{
      type: ContentChild,
      args: [MatTabLabel]
    }],
    _explicitContent: [{
      type: ContentChild,
      args: [MatTabContent, {
        read: TemplateRef,
        static: true
      }]
    }],
    _implicitContent: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    textLabel: [{
      type: Input,
      args: ["label"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    labelClass: [{
      type: Input
    }],
    bodyClass: [{
      type: Input
    }],
    id: [{
      type: Input
    }]
  });
})();
var ACTIVE_CLASS = "mdc-tab-indicator--active";
var NO_TRANSITION_CLASS = "mdc-tab-indicator--no-transition";
var MatInkBar = class {
  _items;
  _currentItem;
  constructor(_items) {
    this._items = _items;
  }
  hide() {
    this._items.forEach((item) => item.deactivateInkBar());
    this._currentItem = void 0;
  }
  alignToElement(element) {
    const correspondingItem = this._items.find((item) => item.elementRef.nativeElement === element);
    const currentItem = this._currentItem;
    if (correspondingItem === currentItem) {
      return;
    }
    currentItem?.deactivateInkBar();
    if (correspondingItem) {
      const domRect = currentItem?.elementRef.nativeElement.getBoundingClientRect?.();
      correspondingItem.activateInkBar(domRect);
      this._currentItem = correspondingItem;
    }
  }
};
var InkBarItem = class _InkBarItem {
  _elementRef = inject(ElementRef);
  _inkBarElement = null;
  _inkBarContentElement = null;
  _fitToContent = false;
  get fitInkBarToContent() {
    return this._fitToContent;
  }
  set fitInkBarToContent(newValue) {
    if (this._fitToContent !== newValue) {
      this._fitToContent = newValue;
      if (this._inkBarElement) {
        this._appendInkBarElement();
      }
    }
  }
  activateInkBar(previousIndicatorClientRect) {
    const element = this._elementRef.nativeElement;
    if (!previousIndicatorClientRect || !element.getBoundingClientRect || !this._inkBarContentElement) {
      element.classList.add(ACTIVE_CLASS);
      return;
    }
    const currentClientRect = element.getBoundingClientRect();
    const widthDelta = previousIndicatorClientRect.width / currentClientRect.width;
    const xPosition = previousIndicatorClientRect.left - currentClientRect.left;
    element.classList.add(NO_TRANSITION_CLASS);
    this._inkBarContentElement.style.setProperty("transform", `translateX(${xPosition}px) scaleX(${widthDelta})`);
    element.getBoundingClientRect();
    element.classList.remove(NO_TRANSITION_CLASS);
    element.classList.add(ACTIVE_CLASS);
    this._inkBarContentElement.style.setProperty("transform", "");
  }
  deactivateInkBar() {
    this._elementRef.nativeElement.classList.remove(ACTIVE_CLASS);
  }
  ngOnInit() {
    this._createInkBarElement();
  }
  ngOnDestroy() {
    this._inkBarElement?.remove();
    this._inkBarElement = this._inkBarContentElement = null;
  }
  _createInkBarElement() {
    const documentNode = this._elementRef.nativeElement.ownerDocument || document;
    const inkBarElement = this._inkBarElement = documentNode.createElement("span");
    const inkBarContentElement = this._inkBarContentElement = documentNode.createElement("span");
    inkBarElement.className = "mdc-tab-indicator";
    inkBarContentElement.className = "mdc-tab-indicator__content mdc-tab-indicator__content--underline";
    inkBarElement.appendChild(this._inkBarContentElement);
    this._appendInkBarElement();
  }
  _appendInkBarElement() {
    if (!this._inkBarElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Ink bar element has not been created and cannot be appended");
    }
    const parentElement = this._fitToContent ? this._elementRef.nativeElement.querySelector(".mdc-tab__content") : this._elementRef.nativeElement;
    if (!parentElement && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw Error("Missing element to host the ink bar");
    }
    parentElement.appendChild(this._inkBarElement);
  }
  static \u0275fac = function InkBarItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InkBarItem)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _InkBarItem,
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InkBarItem, [{
    type: Directive
  }], null, {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var _MAT_INK_BAR_POSITIONER = new InjectionToken("MatInkBarPositioner", {
  providedIn: "root",
  factory: () => {
    const method = (element) => ({
      left: element ? (element.offsetLeft || 0) + "px" : "0",
      width: element ? (element.offsetWidth || 0) + "px" : "0"
    });
    return method;
  }
});
var MatTabLabelWrapper = class _MatTabLabelWrapper extends InkBarItem {
  elementRef = inject(ElementRef);
  disabled = false;
  focus() {
    this.elementRef.nativeElement.focus();
  }
  getOffsetLeft() {
    return this.elementRef.nativeElement.offsetLeft;
  }
  getOffsetWidth() {
    return this.elementRef.nativeElement.offsetWidth;
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabLabelWrapper_BaseFactory;
    return function MatTabLabelWrapper_Factory(__ngFactoryType__) {
      return (\u0275MatTabLabelWrapper_BaseFactory || (\u0275MatTabLabelWrapper_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabLabelWrapper)))(__ngFactoryType__ || _MatTabLabelWrapper);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabLabelWrapper,
    selectors: [["", "matTabLabelWrapper", ""]],
    hostVars: 3,
    hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-disabled", !!ctx.disabled);
        \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLabelWrapper, [{
    type: Directive,
    args: [{
      selector: "[matTabLabelWrapper]",
      host: {
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[attr.aria-disabled]": "!!disabled"
      }
    }]
  }], null, {
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var passiveEventListenerOptions = {
  passive: true
};
var HEADER_SCROLL_DELAY = 650;
var HEADER_SCROLL_INTERVAL = 100;
var MatPaginatedTabHeader = class _MatPaginatedTabHeader {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _viewportRuler = inject(ViewportRuler);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _platform = inject(Platform);
  _sharedResizeObserver = inject(SharedResizeObserver);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _eventCleanups;
  _scrollDistance = 0;
  _selectedIndexChanged = false;
  _destroyed = new Subject();
  _showPaginationControls = false;
  _disableScrollAfter = true;
  _disableScrollBefore = true;
  _tabLabelCount;
  _scrollDistanceChanged = false;
  _keyManager;
  _currentTextContent;
  _stopScrolling = new Subject();
  disablePagination = false;
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(v) {
    const value = isNaN(v) ? 0 : v;
    if (this._selectedIndex != value) {
      this._selectedIndexChanged = true;
      this._selectedIndex = value;
      if (this._keyManager) {
        this._keyManager.updateActiveItem(value);
      }
    }
  }
  _selectedIndex = 0;
  selectFocusedIndex = new EventEmitter();
  indexFocused = new EventEmitter();
  constructor() {
    this._eventCleanups = this._ngZone.runOutsideAngular(() => [this._renderer.listen(this._elementRef.nativeElement, "mouseleave", () => this._stopInterval())]);
  }
  ngAfterViewInit() {
    this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("before"), passiveEventListenerOptions), this._renderer.listen(this._nextPaginator.nativeElement, "touchstart", () => this._handlePaginatorPress("after"), passiveEventListenerOptions));
  }
  ngAfterContentInit() {
    const dirChange = this._dir ? this._dir.change : of("ltr");
    const resize = this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(debounceTime(32), takeUntil(this._destroyed));
    const viewportResize = this._viewportRuler.change(150).pipe(takeUntil(this._destroyed));
    const realign = () => {
      this.updatePagination();
      this._alignInkBarToSelectedTab();
    };
    this._keyManager = new FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(() => false);
    this._keyManager.updateActiveItem(Math.max(this._selectedIndex, 0));
    afterNextRender(realign, {
      injector: this._injector
    });
    merge(dirChange, viewportResize, resize, this._items.changes, this._itemsResized()).pipe(takeUntil(this._destroyed)).subscribe(() => {
      this._ngZone.run(() => {
        Promise.resolve().then(() => {
          this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), this._scrollDistance));
          realign();
        });
      });
      this._keyManager?.withHorizontalOrientation(this._getLayoutDirection());
    });
    this._keyManager.change.subscribe((newFocusIndex) => {
      this.indexFocused.emit(newFocusIndex);
      this._setTabFocus(newFocusIndex);
    });
  }
  _itemsResized() {
    if (typeof ResizeObserver !== "function") {
      return EMPTY;
    }
    return this._items.changes.pipe(startWith(this._items), switchMap((tabItems) => new Observable((observer) => this._ngZone.runOutsideAngular(() => {
      const resizeObserver = new ResizeObserver((entries) => observer.next(entries));
      tabItems.forEach((item) => resizeObserver.observe(item.elementRef.nativeElement));
      return () => {
        resizeObserver.disconnect();
      };
    }))), skip(1), filter((entries) => entries.some((e) => e.contentRect.width > 0 && e.contentRect.height > 0)));
  }
  ngAfterContentChecked() {
    if (this._tabLabelCount != this._items.length) {
      this.updatePagination();
      this._tabLabelCount = this._items.length;
      this._changeDetectorRef.markForCheck();
    }
    if (this._selectedIndexChanged) {
      this._scrollToLabel(this._selectedIndex);
      this._checkScrollingControls();
      this._alignInkBarToSelectedTab();
      this._selectedIndexChanged = false;
      this._changeDetectorRef.markForCheck();
    }
    if (this._scrollDistanceChanged) {
      this._updateTabScrollPosition();
      this._scrollDistanceChanged = false;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngOnDestroy() {
    this._eventCleanups.forEach((cleanup) => cleanup());
    this._keyManager?.destroy();
    this._destroyed.next();
    this._destroyed.complete();
    this._stopScrolling.complete();
  }
  _handleKeydown(event) {
    if (hasModifierKey(event)) {
      return;
    }
    switch (event.keyCode) {
      case ENTER:
      case SPACE:
        if (this.focusIndex !== this.selectedIndex) {
          const item = this._items.get(this.focusIndex);
          if (item && !item.disabled) {
            this.selectFocusedIndex.emit(this.focusIndex);
            this._itemSelected(event);
          }
        }
        break;
      default:
        this._keyManager?.onKeydown(event);
    }
  }
  _onContentChanges() {
    const textContent = this._elementRef.nativeElement.textContent;
    if (textContent !== this._currentTextContent) {
      this._currentTextContent = textContent || "";
      this._ngZone.run(() => {
        this.updatePagination();
        this._alignInkBarToSelectedTab();
        this._changeDetectorRef.markForCheck();
      });
    }
  }
  updatePagination() {
    this._checkPaginationEnabled();
    this._checkScrollingControls();
    this._updateTabScrollPosition();
  }
  get focusIndex() {
    return this._keyManager ? this._keyManager.activeItemIndex : 0;
  }
  set focusIndex(value) {
    if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
      return;
    }
    this._keyManager.setActiveItem(value);
  }
  _isValidIndex(index) {
    return this._items ? !!this._items.toArray()[index] : true;
  }
  _setTabFocus(tabIndex) {
    if (this._showPaginationControls) {
      this._scrollToLabel(tabIndex);
    }
    if (this._items && this._items.length) {
      this._items.toArray()[tabIndex].focus();
      const containerEl = this._tabListContainer.nativeElement;
      const dir = this._getLayoutDirection();
      if (dir == "ltr") {
        containerEl.scrollLeft = 0;
      } else {
        containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
      }
    }
  }
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _updateTabScrollPosition() {
    if (this.disablePagination) {
      return;
    }
    const scrollDistance = this.scrollDistance;
    const translateX = this._getLayoutDirection() === "ltr" ? -scrollDistance : scrollDistance;
    this._tabList.nativeElement.style.transform = `translateX(${Math.round(translateX)}px)`;
    if (this._platform.TRIDENT || this._platform.EDGE) {
      this._tabListContainer.nativeElement.scrollLeft = 0;
    }
  }
  get scrollDistance() {
    return this._scrollDistance;
  }
  set scrollDistance(value) {
    this._scrollTo(value);
  }
  _scrollHeader(direction) {
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const scrollAmount = (direction == "before" ? -1 : 1) * viewLength / 3;
    return this._scrollTo(this._scrollDistance + scrollAmount);
  }
  _handlePaginatorClick(direction) {
    this._stopInterval();
    this._scrollHeader(direction);
  }
  _scrollToLabel(labelIndex) {
    if (this.disablePagination) {
      return;
    }
    const selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;
    if (!selectedLabel) {
      return;
    }
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    const {
      offsetLeft,
      offsetWidth
    } = selectedLabel.elementRef.nativeElement;
    let labelBeforePos, labelAfterPos;
    if (this._getLayoutDirection() == "ltr") {
      labelBeforePos = offsetLeft;
      labelAfterPos = labelBeforePos + offsetWidth;
    } else {
      labelAfterPos = this._tabListInner.nativeElement.offsetWidth - offsetLeft;
      labelBeforePos = labelAfterPos - offsetWidth;
    }
    const beforeVisiblePos = this.scrollDistance;
    const afterVisiblePos = this.scrollDistance + viewLength;
    if (labelBeforePos < beforeVisiblePos) {
      this.scrollDistance -= beforeVisiblePos - labelBeforePos;
    } else if (labelAfterPos > afterVisiblePos) {
      this.scrollDistance += Math.min(labelAfterPos - afterVisiblePos, labelBeforePos - beforeVisiblePos);
    }
  }
  _checkPaginationEnabled() {
    if (this.disablePagination) {
      this._showPaginationControls = false;
    } else {
      const scrollWidth = this._tabListInner.nativeElement.scrollWidth;
      const containerWidth = this._elementRef.nativeElement.offsetWidth;
      const isEnabled = scrollWidth - containerWidth >= 5;
      if (!isEnabled) {
        this.scrollDistance = 0;
      }
      if (isEnabled !== this._showPaginationControls) {
        this._showPaginationControls = isEnabled;
        this._changeDetectorRef.markForCheck();
      }
    }
  }
  _checkScrollingControls() {
    if (this.disablePagination) {
      this._disableScrollAfter = this._disableScrollBefore = true;
    } else {
      this._disableScrollBefore = this.scrollDistance == 0;
      this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
      this._changeDetectorRef.markForCheck();
    }
  }
  _getMaxScrollDistance() {
    const lengthOfTabList = this._tabListInner.nativeElement.scrollWidth;
    const viewLength = this._tabListContainer.nativeElement.offsetWidth;
    return lengthOfTabList - viewLength || 0;
  }
  _alignInkBarToSelectedTab() {
    const selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
    const selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;
    if (selectedLabelWrapper) {
      this._inkBar.alignToElement(selectedLabelWrapper);
    } else {
      this._inkBar.hide();
    }
  }
  _stopInterval() {
    this._stopScrolling.next();
  }
  _handlePaginatorPress(direction, mouseEvent) {
    if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
      return;
    }
    this._stopInterval();
    timer(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL).pipe(takeUntil(merge(this._stopScrolling, this._destroyed))).subscribe(() => {
      const {
        maxScrollDistance,
        distance
      } = this._scrollHeader(direction);
      if (distance === 0 || distance >= maxScrollDistance) {
        this._stopInterval();
      }
    });
  }
  _scrollTo(position) {
    if (this.disablePagination) {
      return {
        maxScrollDistance: 0,
        distance: 0
      };
    }
    const maxScrollDistance = this._getMaxScrollDistance();
    this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position));
    this._scrollDistanceChanged = true;
    this._checkScrollingControls();
    return {
      maxScrollDistance,
      distance: this._scrollDistance
    };
  }
  static \u0275fac = function MatPaginatedTabHeader_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatPaginatedTabHeader)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatPaginatedTabHeader,
    inputs: {
      disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute]
    },
    outputs: {
      selectFocusedIndex: "selectFocusedIndex",
      indexFocused: "indexFocused"
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatPaginatedTabHeader, [{
    type: Directive
  }], () => [], {
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    selectFocusedIndex: [{
      type: Output
    }],
    indexFocused: [{
      type: Output
    }]
  });
})();
var MatTabHeader = class _MatTabHeader extends MatPaginatedTabHeader {
  _items;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  ariaLabel;
  ariaLabelledby;
  disableRipple = false;
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    super.ngAfterContentInit();
  }
  _itemSelected(event) {
    event.preventDefault();
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTabHeader_BaseFactory;
    return function MatTabHeader_Factory(__ngFactoryType__) {
      return (\u0275MatTabHeader_BaseFactory || (\u0275MatTabHeader_BaseFactory = \u0275\u0275getInheritedFactory(_MatTabHeader)))(__ngFactoryType__ || _MatTabHeader);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabHeader,
    selectors: [["mat-tab-header"]],
    contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLabelWrapper, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabHeader_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 7)(_c22, 7)(_c3, 7)(_c4, 5)(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-header"],
    hostVars: 4,
    hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
      }
    },
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c03,
    decls: 13,
    vars: 10,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-label-container", 3, "keydown"], ["role", "tablist", 1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-labels"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabHeader_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5, 0);
        \u0275\u0275listener("click", function MatTabHeader_Template_div_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275listener("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        \u0275\u0275elementStart(5, "div", 8, 2);
        \u0275\u0275listener("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        \u0275\u0275elementStart(7, "div", 9, 3);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 10, 4);
        \u0275\u0275listener("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabHeader_Template_div_click_10_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        \u0275\u0275advance(3);
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled);
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", ctx.ariaLabel || null)("aria-labelledby", ctx.ariaLabelledby || null);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [MatRipple, CdkObserveContent],
    styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabHeader, [{
    type: Component,
    args: [{
      selector: "mat-tab-header",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'"
      },
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div
  class="mat-mdc-tab-label-container"
  #tabListContainer
  (keydown)="_handleKeydown($event)"
  [class._mat-animation-noopable]="_animationsDisabled">
  <div
    #tabList
    class="mat-mdc-tab-list"
    role="tablist"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="ariaLabelledby || null"
    (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-labels" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-group-inverted-header .mat-mdc-tab-label-container{border-bottom:none;border-top-style:solid;border-top-width:var(--mat-tab-divider-height, 1px);border-top-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-labels{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-header .mat-mdc-tab-labels{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-labels,.mat-mdc-tab-labels.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab::before{margin:5px}@media(forced-colors: active){.mat-mdc-tab[aria-disabled=true]{color:GrayText}}\n"]
    }]
  }], null, {
    _items: [{
      type: ContentChildren,
      args: [MatTabLabelWrapper, {
        descendants: false
      }]
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MAT_TABS_CONFIG = new InjectionToken("MAT_TABS_CONFIG");
var MatTabBodyPortal = class _MatTabBodyPortal extends CdkPortalOutlet {
  _host = inject(MatTabBody);
  _ngZone = inject(NgZone);
  _centeringSub = Subscription.EMPTY;
  _leavingSub = Subscription.EMPTY;
  constructor() {
    super();
  }
  ngOnInit() {
    super.ngOnInit();
    this._centeringSub = this._host._beforeCentering.pipe(startWith(this._host._isCenterPosition())).subscribe((isCentering) => {
      if (this._host._content && isCentering && !this.hasAttached()) {
        this._ngZone.run(() => {
          Promise.resolve().then();
          this.attach(this._host._content);
        });
      }
    });
    this._leavingSub = this._host._afterLeavingCenter.subscribe(() => {
      if (!this._host.preserveContent) {
        this._ngZone.run(() => this.detach());
      }
    });
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._centeringSub.unsubscribe();
    this._leavingSub.unsubscribe();
  }
  static \u0275fac = function MatTabBodyPortal_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabBodyPortal)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatTabBodyPortal,
    selectors: [["", "matTabBodyHost", ""]],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBodyPortal, [{
    type: Directive,
    args: [{
      selector: "[matTabBodyHost]"
    }]
  }], () => [], null);
})();
var MatTabBody = class _MatTabBody {
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _ngZone = inject(NgZone);
  _injector = inject(Injector);
  _renderer = inject(Renderer2);
  _diAnimationsDisabled = _animationsDisabled();
  _eventCleanups;
  _initialized = false;
  _fallbackTimer;
  _positionIndex;
  _dirChangeSubscription = Subscription.EMPTY;
  _position;
  _previousPosition;
  _onCentering = new EventEmitter();
  _beforeCentering = new EventEmitter();
  _afterLeavingCenter = new EventEmitter();
  _onCentered = new EventEmitter(true);
  _portalHost;
  _contentElement;
  _content;
  animationDuration = "500ms";
  preserveContent = false;
  set position(position) {
    this._positionIndex = position;
    this._computePositionAnimationState();
  }
  constructor() {
    if (this._dir) {
      const changeDetectorRef = inject(ChangeDetectorRef);
      this._dirChangeSubscription = this._dir.change.subscribe((dir) => {
        this._computePositionAnimationState(dir);
        changeDetectorRef.markForCheck();
      });
    }
  }
  ngOnInit() {
    this._bindTransitionEvents();
    if (this._position === "center") {
      this._setActiveClass(true);
      afterNextRender(() => this._onCentering.emit(this._elementRef.nativeElement.clientHeight), {
        injector: this._injector
      });
    }
    this._initialized = true;
  }
  ngOnDestroy() {
    clearTimeout(this._fallbackTimer);
    this._eventCleanups?.forEach((cleanup) => cleanup());
    this._dirChangeSubscription.unsubscribe();
  }
  _bindTransitionEvents() {
    this._ngZone.runOutsideAngular(() => {
      const element = this._elementRef.nativeElement;
      const transitionDone = (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.remove("mat-tab-body-animating");
          if (event.type === "transitionend") {
            this._transitionDone();
          }
        }
      };
      this._eventCleanups = [this._renderer.listen(element, "transitionstart", (event) => {
        if (event.target === this._contentElement?.nativeElement) {
          this._elementRef.nativeElement.classList.add("mat-tab-body-animating");
          this._transitionStarted();
        }
      }), this._renderer.listen(element, "transitionend", transitionDone), this._renderer.listen(element, "transitioncancel", transitionDone)];
    });
  }
  _transitionStarted() {
    clearTimeout(this._fallbackTimer);
    const isCentering = this._position === "center";
    this._beforeCentering.emit(isCentering);
    if (isCentering) {
      this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
    }
  }
  _transitionDone() {
    if (this._position === "center") {
      this._onCentered.emit();
    } else if (this._previousPosition === "center") {
      this._afterLeavingCenter.emit();
    }
  }
  _setActiveClass(isActive) {
    this._elementRef.nativeElement.classList.toggle("mat-mdc-tab-body-active", isActive);
  }
  _getLayoutDirection() {
    return this._dir && this._dir.value === "rtl" ? "rtl" : "ltr";
  }
  _isCenterPosition() {
    return this._positionIndex === 0;
  }
  _computePositionAnimationState(dir = this._getLayoutDirection()) {
    this._previousPosition = this._position;
    if (this._positionIndex < 0) {
      this._position = dir == "ltr" ? "left" : "right";
    } else if (this._positionIndex > 0) {
      this._position = dir == "ltr" ? "right" : "left";
    } else {
      this._position = "center";
    }
    if (this._animationsDisabled()) {
      this._simulateTransitionEvents();
    } else if (this._initialized && (this._position === "center" || this._previousPosition === "center")) {
      clearTimeout(this._fallbackTimer);
      this._fallbackTimer = this._ngZone.runOutsideAngular(() => setTimeout(() => this._simulateTransitionEvents(), 100));
    }
  }
  _simulateTransitionEvents() {
    this._transitionStarted();
    afterNextRender(() => this._transitionDone(), {
      injector: this._injector
    });
  }
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0ms" || this.animationDuration === "0s";
  }
  static \u0275fac = function MatTabBody_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabBody)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabBody,
    selectors: [["mat-tab-body"]],
    viewQuery: function MatTabBody_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatTabBodyPortal, 5)(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._portalHost = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-body"],
    hostVars: 1,
    hostBindings: function MatTabBody_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("inert", ctx._position === "center" ? null : "");
      }
    },
    inputs: {
      _content: [0, "content", "_content"],
      animationDuration: "animationDuration",
      preserveContent: "preserveContent",
      position: "position"
    },
    outputs: {
      _onCentering: "_onCentering",
      _beforeCentering: "_beforeCentering",
      _onCentered: "_onCentered"
    },
    decls: 3,
    vars: 6,
    consts: [["content", ""], ["cdkScrollable", "", 1, "mat-mdc-tab-body-content"], ["matTabBodyHost", ""]],
    template: function MatTabBody_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1, 0);
        \u0275\u0275template(2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-tab-body-content-left", ctx._position === "left")("mat-tab-body-content-right", ctx._position === "right")("mat-tab-body-content-can-animate", ctx._position === "center" || ctx._previousPosition === "center");
      }
    },
    dependencies: [MatTabBodyPortal, CdkScrollable],
    styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabBody, [{
    type: Component,
    args: [{
      selector: "mat-tab-body",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      host: {
        "class": "mat-mdc-tab-body",
        "[attr.inert]": '_position === "center" ? null : ""'
      },
      imports: [MatTabBodyPortal, CdkScrollable],
      template: `<div
   class="mat-mdc-tab-body-content"
   #content
   cdkScrollable
   [class.mat-tab-body-content-left]="_position === 'left'"
   [class.mat-tab-body-content-right]="_position === 'right'"
   [class.mat-tab-body-content-can-animate]="_position === 'center' || _previousPosition === 'center'">
  <ng-template matTabBodyHost></ng-template>
</div>
`,
      styles: [".mat-mdc-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;outline:0;flex-basis:100%}.mat-mdc-tab-body.mat-mdc-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-mdc-tab-group.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body.mat-mdc-tab-body-active{overflow-y:hidden}.mat-mdc-tab-body-content{height:100%;overflow:auto;transform:none;visibility:hidden}.mat-tab-body-animating>.mat-mdc-tab-body-content,.mat-mdc-tab-body-active>.mat-mdc-tab-body-content{visibility:visible}.mat-tab-body-animating>.mat-mdc-tab-body-content{min-height:1px}.mat-mdc-tab-group-dynamic-height .mat-mdc-tab-body-content{overflow:hidden}.mat-tab-body-content-can-animate{transition:transform var(--mat-tab-animation-duration) 1ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable .mat-tab-body-content-can-animate{transition:none}.mat-tab-body-content-left{transform:translate3d(-100%, 0, 0)}.mat-tab-body-content-right{transform:translate3d(100%, 0, 0)}\n"]
    }]
  }], () => [], {
    _onCentering: [{
      type: Output
    }],
    _beforeCentering: [{
      type: Output
    }],
    _onCentered: [{
      type: Output
    }],
    _portalHost: [{
      type: ViewChild,
      args: [MatTabBodyPortal]
    }],
    _contentElement: [{
      type: ViewChild,
      args: ["content"]
    }],
    _content: [{
      type: Input,
      args: ["content"]
    }],
    animationDuration: [{
      type: Input
    }],
    preserveContent: [{
      type: Input
    }],
    position: [{
      type: Input
    }]
  });
})();
var MatTabGroup = class _MatTabGroup {
  _elementRef = inject(ElementRef);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _tabsSubscription = Subscription.EMPTY;
  _tabLabelSubscription = Subscription.EMPTY;
  _tabBodySubscription = Subscription.EMPTY;
  _diAnimationsDisabled = _animationsDisabled();
  _allTabs;
  _tabBodies;
  _tabBodyWrapper;
  _tabHeader;
  _tabs = new QueryList();
  _indexToSelect = 0;
  _lastFocusedTabIndex = null;
  _tabBodyWrapperHeight = 0;
  color;
  get fitInkBarToContent() {
    return this._fitInkBarToContent;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent = value;
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = false;
  stretchTabs = true;
  alignTabs = null;
  dynamicHeight = false;
  get selectedIndex() {
    return this._selectedIndex;
  }
  set selectedIndex(value) {
    this._indexToSelect = isNaN(value) ? null : value;
  }
  _selectedIndex = null;
  headerPosition = "above";
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  get contentTabIndex() {
    return this._contentTabIndex;
  }
  set contentTabIndex(value) {
    this._contentTabIndex = isNaN(value) ? null : value;
  }
  _contentTabIndex = null;
  disablePagination = false;
  disableRipple = false;
  preserveContent = false;
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  ariaLabel;
  ariaLabelledby;
  selectedIndexChange = new EventEmitter();
  focusChange = new EventEmitter();
  animationDone = new EventEmitter();
  selectedTabChange = new EventEmitter(true);
  _groupId;
  _isServer = !inject(Platform).isBrowser;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    this._groupId = inject(_IdGenerator).getId("mat-tab-group-");
    this.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : "500ms";
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
    if (defaultConfig?.contentTabIndex != null) {
      this.contentTabIndex = defaultConfig.contentTabIndex;
    }
    this.preserveContent = !!defaultConfig?.preserveContent;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
    this.alignTabs = defaultConfig && defaultConfig.alignTabs != null ? defaultConfig.alignTabs : null;
  }
  ngAfterContentChecked() {
    const indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect);
    if (this._selectedIndex != indexToSelect) {
      const isFirstRun = this._selectedIndex == null;
      if (!isFirstRun) {
        this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
        const wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.minHeight = wrapper.clientHeight + "px";
      }
      Promise.resolve().then(() => {
        this._tabs.forEach((tab, index) => tab.isActive = index === indexToSelect);
        if (!isFirstRun) {
          this.selectedIndexChange.emit(indexToSelect);
          this._tabBodyWrapper.nativeElement.style.minHeight = "";
        }
      });
    }
    this._tabs.forEach((tab, index) => {
      tab.position = index - indexToSelect;
      if (this._selectedIndex != null && tab.position == 0 && !tab.origin) {
        tab.origin = indexToSelect - this._selectedIndex;
      }
    });
    if (this._selectedIndex !== indexToSelect) {
      this._selectedIndex = indexToSelect;
      this._lastFocusedTabIndex = null;
      this._changeDetectorRef.markForCheck();
    }
  }
  ngAfterContentInit() {
    this._subscribeToAllTabChanges();
    this._subscribeToTabLabels();
    this._tabsSubscription = this._tabs.changes.subscribe(() => {
      const indexToSelect = this._clampTabIndex(this._indexToSelect);
      if (indexToSelect === this._selectedIndex) {
        const tabs = this._tabs.toArray();
        let selectedTab;
        for (let i = 0; i < tabs.length; i++) {
          if (tabs[i].isActive) {
            this._indexToSelect = this._selectedIndex = i;
            this._lastFocusedTabIndex = null;
            selectedTab = tabs[i];
            break;
          }
        }
        if (!selectedTab && tabs[indexToSelect]) {
          Promise.resolve().then(() => {
            tabs[indexToSelect].isActive = true;
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect));
          });
        }
      }
      this._changeDetectorRef.markForCheck();
    });
  }
  ngAfterViewInit() {
    this._tabBodySubscription = this._tabBodies.changes.subscribe(() => this._bodyCentered(true));
  }
  _subscribeToAllTabChanges() {
    this._allTabs.changes.pipe(startWith(this._allTabs)).subscribe((tabs) => {
      this._tabs.reset(tabs.filter((tab) => {
        return tab._closestTabGroup === this || !tab._closestTabGroup;
      }));
      this._tabs.notifyOnChanges();
    });
  }
  ngOnDestroy() {
    this._tabs.destroy();
    this._tabsSubscription.unsubscribe();
    this._tabLabelSubscription.unsubscribe();
    this._tabBodySubscription.unsubscribe();
  }
  realignInkBar() {
    if (this._tabHeader) {
      this._tabHeader._alignInkBarToSelectedTab();
    }
  }
  updatePagination() {
    if (this._tabHeader) {
      this._tabHeader.updatePagination();
    }
  }
  focusTab(index) {
    const header = this._tabHeader;
    if (header) {
      header.focusIndex = index;
    }
  }
  _focusChanged(index) {
    this._lastFocusedTabIndex = index;
    this.focusChange.emit(this._createChangeEvent(index));
  }
  _createChangeEvent(index) {
    const event = new MatTabChangeEvent();
    event.index = index;
    if (this._tabs && this._tabs.length) {
      event.tab = this._tabs.toArray()[index];
    }
    return event;
  }
  _subscribeToTabLabels() {
    if (this._tabLabelSubscription) {
      this._tabLabelSubscription.unsubscribe();
    }
    this._tabLabelSubscription = merge(...this._tabs.map((tab) => tab._stateChanges)).subscribe(() => this._changeDetectorRef.markForCheck());
  }
  _clampTabIndex(index) {
    return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
  }
  _getTabLabelId(tab, index) {
    return tab.id || `${this._groupId}-label-${index}`;
  }
  _getTabContentId(index) {
    return `${this._groupId}-content-${index}`;
  }
  _setTabBodyWrapperHeight(tabHeight) {
    if (!this.dynamicHeight || !this._tabBodyWrapperHeight) {
      this._tabBodyWrapperHeight = tabHeight;
      return;
    }
    const wrapper = this._tabBodyWrapper.nativeElement;
    wrapper.style.height = this._tabBodyWrapperHeight + "px";
    if (this._tabBodyWrapper.nativeElement.offsetHeight) {
      wrapper.style.height = tabHeight + "px";
    }
  }
  _removeTabBodyWrapperHeight() {
    const wrapper = this._tabBodyWrapper.nativeElement;
    this._tabBodyWrapperHeight = wrapper.clientHeight;
    wrapper.style.height = "";
    this._ngZone.run(() => this.animationDone.emit());
  }
  _handleClick(tab, tabHeader, index) {
    tabHeader.focusIndex = index;
    if (!tab.disabled) {
      this.selectedIndex = index;
    }
  }
  _getTabIndex(index) {
    const targetIndex = this._lastFocusedTabIndex ?? this.selectedIndex;
    return index === targetIndex ? 0 : -1;
  }
  _tabFocusChanged(focusOrigin, index) {
    if (focusOrigin && focusOrigin !== "mouse" && focusOrigin !== "touch") {
      this._tabHeader.focusIndex = index;
    }
  }
  _bodyCentered(isCenter) {
    if (isCenter) {
      this._tabBodies?.forEach((body, i) => body._setActiveClass(i === this._selectedIndex));
    }
  }
  _animationsDisabled() {
    return this._diAnimationsDisabled || this.animationDuration === "0" || this.animationDuration === "0ms";
  }
  static \u0275fac = function MatTabGroup_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabGroup)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabGroup,
    selectors: [["mat-tab-group"]],
    contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTab, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._allTabs = _t);
      }
    },
    viewQuery: function MatTabGroup_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c7, 5)(_c8, 5)(MatTabBody, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodyWrapper = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabHeader = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabBodies = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-group"],
    hostVars: 11,
    hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("mat-align-tabs", ctx.alignTabs);
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
        \u0275\u0275classProp("mat-mdc-tab-group-dynamic-height", ctx.dynamicHeight)("mat-mdc-tab-group-inverted-header", ctx.headerPosition === "below")("mat-mdc-tab-group-stretch-tabs", ctx.stretchTabs);
      }
    },
    inputs: {
      color: "color",
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
      alignTabs: [0, "mat-align-tabs", "alignTabs"],
      dynamicHeight: [2, "dynamicHeight", "dynamicHeight", booleanAttribute],
      selectedIndex: [2, "selectedIndex", "selectedIndex", numberAttribute],
      headerPosition: "headerPosition",
      animationDuration: "animationDuration",
      contentTabIndex: [2, "contentTabIndex", "contentTabIndex", numberAttribute],
      disablePagination: [2, "disablePagination", "disablePagination", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      preserveContent: [2, "preserveContent", "preserveContent", booleanAttribute],
      backgroundColor: "backgroundColor",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"]
    },
    outputs: {
      selectedIndexChange: "selectedIndexChange",
      focusChange: "focusChange",
      animationDone: "animationDone",
      selectedTabChange: "selectedTabChange"
    },
    exportAs: ["matTabGroup"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_TAB_GROUP,
      useExisting: _MatTabGroup
    }])],
    ngContentSelectors: _c03,
    decls: 9,
    vars: 8,
    consts: [["tabHeader", ""], ["tabBodyWrapper", ""], ["tabNode", ""], [3, "indexFocused", "selectFocusedIndex", "selectedIndex", "disableRipple", "disablePagination", "aria-label", "aria-labelledby"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "id", "mdc-tab--active", "class", "disabled", "fitInkBarToContent"], [1, "mat-mdc-tab-body-wrapper"], ["role", "tabpanel", 3, "id", "class", "content", "position", "animationDuration", "preserveContent"], ["role", "tab", "matTabLabelWrapper", "", "cdkMonitorElementFocus", "", 1, "mdc-tab", "mat-mdc-tab", "mat-focus-indicator", 3, "click", "cdkFocusChange", "id", "disabled", "fitInkBarToContent"], [1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "_onCentered", "_onCentering", "_beforeCentering", "id", "content", "position", "animationDuration", "preserveContent"]],
    template: function MatTabGroup_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "mat-tab-header", 3, 0);
        \u0275\u0275listener("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
          return ctx._focusChanged($event);
        })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
          return ctx.selectedIndex = $event;
        });
        \u0275\u0275repeaterCreate(2, MatTabGroup_For_3_Template, 8, 17, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, MatTabGroup_Conditional_4_Template, 1, 0);
        \u0275\u0275elementStart(5, "div", 5, 1);
        \u0275\u0275repeaterCreate(7, MatTabGroup_For_8_Template, 1, 10, "mat-tab-body", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275property("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        \u0275\u0275ariaProperty("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx._tabs);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("_mat-animation-noopable", ctx._animationsDisabled());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx._tabs);
      }
    },
    dependencies: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
    styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabGroup, [{
    type: Component,
    args: [{
      selector: "mat-tab-group",
      exportAs: "matTabGroup",
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [{
        provide: MAT_TAB_GROUP,
        useExisting: MatTabGroup
      }],
      host: {
        "class": "mat-mdc-tab-group",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mat-mdc-tab-group-dynamic-height]": "dynamicHeight",
        "[class.mat-mdc-tab-group-inverted-header]": 'headerPosition === "below"',
        "[class.mat-mdc-tab-group-stretch-tabs]": "stretchTabs",
        "[attr.mat-align-tabs]": "alignTabs",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      imports: [MatTabHeader, MatTabLabelWrapper, CdkMonitorFocus, MatRipple, CdkPortalOutlet, MatTabBody],
      template: '<mat-tab-header #tabHeader\n                [selectedIndex]="selectedIndex || 0"\n                [disableRipple]="disableRipple"\n                [disablePagination]="disablePagination"\n                [aria-label]="ariaLabel"\n                [aria-labelledby]="ariaLabelledby"\n                (indexFocused)="_focusChanged($event)"\n                (selectFocusedIndex)="selectedIndex = $event">\n\n  @for (tab of _tabs; track tab) {\n    <div class="mdc-tab mat-mdc-tab mat-focus-indicator"\n        #tabNode\n        role="tab"\n        matTabLabelWrapper\n        cdkMonitorElementFocus\n        [id]="_getTabLabelId(tab, $index)"\n        [attr.tabIndex]="_getTabIndex($index)"\n        [attr.aria-posinset]="$index + 1"\n        [attr.aria-setsize]="_tabs.length"\n        [attr.aria-controls]="_getTabContentId($index)"\n        [attr.aria-selected]="selectedIndex === $index"\n        [attr.aria-label]="tab.ariaLabel || null"\n        [attr.aria-labelledby]="(!tab.ariaLabel && tab.ariaLabelledby) ? tab.ariaLabelledby : null"\n        [class.mdc-tab--active]="selectedIndex === $index"\n        [class]="tab.labelClass"\n        [disabled]="tab.disabled"\n        [fitInkBarToContent]="fitInkBarToContent"\n        (click)="_handleClick(tab, tabHeader, $index)"\n        (cdkFocusChange)="_tabFocusChanged($event, $index)">\n      <span class="mdc-tab__ripple"></span>\n\n      <!-- Needs to be a separate element, because we can\'t put\n          `overflow: hidden` on tab due to the ink bar. -->\n      <div\n        class="mat-mdc-tab-ripple"\n        mat-ripple\n        [matRippleTrigger]="tabNode"\n        [matRippleDisabled]="tab.disabled || disableRipple"></div>\n\n      <span class="mdc-tab__content">\n        <span class="mdc-tab__text-label">\n          <!--\n            If there is a label template, use it, otherwise fall back to the text label.\n            Note that we don\'t have indentation around the text label, because it adds\n            whitespace around the text which breaks some internal tests.\n          -->\n          @if (tab.templateLabel) {\n            <ng-template [cdkPortalOutlet]="tab.templateLabel"></ng-template>\n          } @else {{{tab.textLabel}}}\n        </span>\n      </span>\n    </div>\n  }\n</mat-tab-header>\n\n<!--\n  We need to project the content somewhere to avoid hydration errors. Some observations:\n  1. This is only necessary on the server.\n  2. We get a hydration error if there aren\'t any nodes after the `ng-content`.\n  3. We get a hydration error if `ng-content` is wrapped in another element.\n-->\n@if (_isServer) {\n  <ng-content/>\n}\n\n<div\n  class="mat-mdc-tab-body-wrapper"\n  [class._mat-animation-noopable]="_animationsDisabled()"\n  #tabBodyWrapper>\n  @for (tab of _tabs; track tab;) {\n    <mat-tab-body role="tabpanel"\n                 [id]="_getTabContentId($index)"\n                 [attr.tabindex]="(contentTabIndex != null && selectedIndex === $index) ? contentTabIndex : null"\n                 [attr.aria-labelledby]="_getTabLabelId(tab, $index)"\n                 [attr.aria-hidden]="selectedIndex !== $index"\n                 [class]="tab.bodyClass"\n                 [content]="tab.content!"\n                 [position]="tab.position!"\n                 [animationDuration]="animationDuration"\n                 [preserveContent]="preserveContent"\n                 (_onCentered)="_removeTabBodyWrapperHeight()"\n                 (_onCentering)="_setTabBodyWrapperHeight($event)"\n                 (_beforeCentering)="_bodyCentered($event)"/>\n  }\n</div>\n',
      styles: ['.mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab.mdc-tab{flex-grow:0}.mat-mdc-tab .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-group.mat-mdc-tab-group-stretch-tabs>.mat-mdc-tab-header .mat-mdc-tab{flex-grow:1}.mat-mdc-tab-group{display:flex;flex-direction:column;max-width:100%}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mat-mdc-tab .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background.mat-primary>.mat-mdc-tab-header .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-header .mat-mdc-tab:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-focus-indicator::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mdc-tab__ripple::before,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-group.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header{flex-direction:column-reverse}.mat-mdc-tab-group.mat-mdc-tab-group-inverted-header .mdc-tab-indicator__content--underline{align-self:flex-start}.mat-mdc-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-mdc-tab-body-wrapper._mat-animation-noopable{transition:none !important;animation:none !important}\n']
    }]
  }], () => [], {
    _allTabs: [{
      type: ContentChildren,
      args: [MatTab, {
        descendants: true
      }]
    }],
    _tabBodies: [{
      type: ViewChildren,
      args: [MatTabBody]
    }],
    _tabBodyWrapper: [{
      type: ViewChild,
      args: ["tabBodyWrapper"]
    }],
    _tabHeader: [{
      type: ViewChild,
      args: ["tabHeader"]
    }],
    color: [{
      type: Input
    }],
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    alignTabs: [{
      type: Input,
      args: [{
        alias: "mat-align-tabs"
      }]
    }],
    dynamicHeight: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    selectedIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    headerPosition: [{
      type: Input
    }],
    animationDuration: [{
      type: Input
    }],
    contentTabIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    disablePagination: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    preserveContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    selectedIndexChange: [{
      type: Output
    }],
    focusChange: [{
      type: Output
    }],
    animationDone: [{
      type: Output
    }],
    selectedTabChange: [{
      type: Output
    }]
  });
})();
var MatTabChangeEvent = class {
  index;
  tab;
};
var MatTabNav = class _MatTabNav extends MatPaginatedTabHeader {
  _focusedItem = signal(null, ...ngDevMode ? [{
    debugName: "_focusedItem"
  }] : []);
  get fitInkBarToContent() {
    return this._fitInkBarToContent.value;
  }
  set fitInkBarToContent(value) {
    this._fitInkBarToContent.next(value);
    this._changeDetectorRef.markForCheck();
  }
  _fitInkBarToContent = new BehaviorSubject(false);
  stretchTabs = true;
  get animationDuration() {
    return this._animationDuration;
  }
  set animationDuration(value) {
    const stringValue = value + "";
    this._animationDuration = /^\d+$/.test(stringValue) ? value + "ms" : stringValue;
  }
  _animationDuration;
  _items;
  get backgroundColor() {
    return this._backgroundColor;
  }
  set backgroundColor(value) {
    const classList = this._elementRef.nativeElement.classList;
    classList.remove("mat-tabs-with-background", `mat-background-${this.backgroundColor}`);
    if (value) {
      classList.add("mat-tabs-with-background", `mat-background-${value}`);
    }
    this._backgroundColor = value;
  }
  _backgroundColor;
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  color = "primary";
  tabPanel;
  _tabListContainer;
  _tabList;
  _tabListInner;
  _nextPaginator;
  _previousPaginator;
  _inkBar;
  constructor() {
    const defaultConfig = inject(MAT_TABS_CONFIG, {
      optional: true
    });
    super();
    this.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
    this.fitInkBarToContent = defaultConfig && defaultConfig.fitInkBarToContent != null ? defaultConfig.fitInkBarToContent : false;
    this.stretchTabs = defaultConfig && defaultConfig.stretchTabs != null ? defaultConfig.stretchTabs : true;
  }
  _itemSelected() {
  }
  ngAfterContentInit() {
    this._inkBar = new MatInkBar(this._items);
    this._items.changes.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this.updateActiveLink());
    super.ngAfterContentInit();
    this._keyManager.change.pipe(startWith(null), takeUntil(this._destroyed)).subscribe(() => this._focusedItem.set(this._keyManager?.activeItem || null));
  }
  ngAfterViewInit() {
    if (!this.tabPanel && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw new Error("A mat-tab-nav-panel must be specified via [tabPanel].");
    }
    super.ngAfterViewInit();
  }
  updateActiveLink() {
    if (!this._items) {
      return;
    }
    const items = this._items.toArray();
    for (let i = 0; i < items.length; i++) {
      if (items[i].active) {
        this.selectedIndex = i;
        if (this.tabPanel) {
          this.tabPanel._activeTabId = items[i].id;
        }
        this._focusedItem.set(items[i]);
        this._changeDetectorRef.markForCheck();
        return;
      }
    }
    this.selectedIndex = -1;
  }
  _getRole() {
    return this.tabPanel ? "tablist" : this._elementRef.nativeElement.getAttribute("role");
  }
  _hasFocus(link) {
    return this._keyManager?.activeItem === link;
  }
  static \u0275fac = function MatTabNav_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabNav)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabNav,
    selectors: [["", "mat-tab-nav-bar", ""]],
    contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatTabLink, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabNav_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c12, 7)(_c22, 7)(_c3, 7)(_c4, 5)(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListContainer = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabList = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tabListInner = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._nextPaginator = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-tab-nav-bar", "mat-mdc-tab-header"],
    hostVars: 17,
    hostBindings: function MatTabNav_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._getRole());
        \u0275\u0275styleProp("--mat-tab-animation-duration", ctx.animationDuration);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-mdc-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-mdc-tab-nav-bar-stretch-tabs", ctx.stretchTabs)("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn")("_mat-animation-noopable", ctx._animationsDisabled);
      }
    },
    inputs: {
      fitInkBarToContent: [2, "fitInkBarToContent", "fitInkBarToContent", booleanAttribute],
      stretchTabs: [2, "mat-stretch-tabs", "stretchTabs", booleanAttribute],
      animationDuration: "animationDuration",
      backgroundColor: "backgroundColor",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      color: "color",
      tabPanel: "tabPanel"
    },
    exportAs: ["matTabNavBar", "matTabNav"],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c9,
    ngContentSelectors: _c03,
    decls: 13,
    vars: 6,
    consts: [["previousPaginator", ""], ["tabListContainer", ""], ["tabList", ""], ["tabListInner", ""], ["nextPaginator", ""], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-before", 3, "click", "mousedown", "touchend", "matRippleDisabled"], [1, "mat-mdc-tab-header-pagination-chevron"], [1, "mat-mdc-tab-link-container", 3, "keydown"], [1, "mat-mdc-tab-list", 3, "cdkObserveContent"], [1, "mat-mdc-tab-links"], ["mat-ripple", "", 1, "mat-mdc-tab-header-pagination", "mat-mdc-tab-header-pagination-after", 3, "mousedown", "click", "touchend", "matRippleDisabled"]],
    template: function MatTabNav_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 5, 0);
        \u0275\u0275listener("click", function MatTabNav_Template_div_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(2, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 7, 1);
        \u0275\u0275listener("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        \u0275\u0275elementStart(5, "div", 8, 2);
        \u0275\u0275listener("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        \u0275\u0275elementStart(7, "div", 9, 3);
        \u0275\u0275projection(9);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 10, 4);
        \u0275\u0275listener("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabNav_Template_div_click_10_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
          return ctx._stopInterval();
        });
        \u0275\u0275element(12, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollBefore);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        \u0275\u0275advance(10);
        \u0275\u0275classProp("mat-mdc-tab-header-pagination-disabled", ctx._disableScrollAfter);
        \u0275\u0275property("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    dependencies: [MatRipple, CdkObserveContent],
    styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNav, [{
    type: Component,
    args: [{
      selector: "[mat-tab-nav-bar]",
      exportAs: "matTabNavBar, matTabNav",
      host: {
        "[attr.role]": "_getRole()",
        "class": "mat-mdc-tab-nav-bar mat-mdc-tab-header",
        "[class.mat-mdc-tab-header-pagination-controls-enabled]": "_showPaginationControls",
        "[class.mat-mdc-tab-header-rtl]": "_getLayoutDirection() == 'rtl'",
        "[class.mat-mdc-tab-nav-bar-stretch-tabs]": "stretchTabs",
        "[class.mat-primary]": 'color !== "warn" && color !== "accent"',
        "[class.mat-accent]": 'color === "accent"',
        "[class.mat-warn]": 'color === "warn"',
        "[class._mat-animation-noopable]": "_animationsDisabled",
        "[style.--mat-tab-animation-duration]": "animationDuration"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatRipple, CdkObserveContent],
      template: `<!--
 Note that this intentionally uses a \`div\` instead of a \`button\`, because it's not part of
 the regular tabs flow and is only here to support mouse users. It should also not be focusable.
-->
<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-before"
     #previousPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollBefore || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollBefore"
     (click)="_handlePaginatorClick('before')"
     (mousedown)="_handlePaginatorPress('before', $event)"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>

<div class="mat-mdc-tab-link-container" #tabListContainer (keydown)="_handleKeydown($event)">
  <div class="mat-mdc-tab-list" #tabList (cdkObserveContent)="_onContentChanges()">
    <div class="mat-mdc-tab-links" #tabListInner>
      <ng-content></ng-content>
    </div>
  </div>
</div>

<div class="mat-mdc-tab-header-pagination mat-mdc-tab-header-pagination-after"
     #nextPaginator
     mat-ripple
     [matRippleDisabled]="_disableScrollAfter || disableRipple"
     [class.mat-mdc-tab-header-pagination-disabled]="_disableScrollAfter"
     (mousedown)="_handlePaginatorPress('after', $event)"
     (click)="_handlePaginatorClick('after')"
     (touchend)="_stopInterval()">
  <div class="mat-mdc-tab-header-pagination-chevron"></div>
</div>
`,
      styles: [".mdc-tab{min-width:90px;padding:0 24px;display:flex;flex:1 0 auto;justify-content:center;box-sizing:border-box;border:none;outline:none;text-align:center;white-space:nowrap;cursor:pointer;z-index:1;touch-action:manipulation}.mdc-tab__content{display:flex;align-items:center;justify-content:center;height:inherit;pointer-events:none}.mdc-tab__text-label{transition:150ms color linear;display:inline-block;line-height:1;z-index:2}.mdc-tab--active .mdc-tab__text-label{transition-delay:100ms}._mat-animation-noopable .mdc-tab__text-label{transition:none}.mdc-tab-indicator{display:flex;position:absolute;top:0;left:0;justify-content:center;width:100%;height:100%;pointer-events:none;z-index:1}.mdc-tab-indicator__content{transition:var(--mat-tab-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);transform-origin:left;opacity:0}.mdc-tab-indicator__content--underline{align-self:flex-end;box-sizing:border-box;width:100%;border-top-style:solid}.mdc-tab-indicator--active .mdc-tab-indicator__content{opacity:1}._mat-animation-noopable .mdc-tab-indicator__content,.mdc-tab-indicator--no-transition .mdc-tab-indicator__content{transition:none}.mat-mdc-tab-ripple.mat-mdc-tab-ripple{position:absolute;top:0;left:0;bottom:0;right:0;pointer-events:none}.mat-mdc-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mdc-tab-indicator .mdc-tab-indicator__content{transition-duration:var(--mat-tab-animation-duration, 250ms)}.mat-mdc-tab-header-pagination{-webkit-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:rgba(0,0,0,0);touch-action:none;box-sizing:content-box;outline:0}.mat-mdc-tab-header-pagination::-moz-focus-inner{border:0}.mat-mdc-tab-header-pagination .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination{display:flex}.mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after{padding-left:4px}.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,.mat-mdc-tab-header-pagination-after{padding-right:4px}.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-mdc-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;height:8px;width:8px;border-color:var(--mat-tab-pagination-icon-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header-pagination-disabled{box-shadow:none;cursor:default;pointer-events:none}.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron{opacity:.4}.mat-mdc-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable .mat-mdc-tab-list{transition:none}.mat-mdc-tab-links{display:flex;flex:1 0 auto}[mat-align-tabs=center]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-mdc-tab-link-container .mat-mdc-tab-links{justify-content:flex-end}.cdk-drop-list .mat-mdc-tab-links,.mat-mdc-tab-links.cdk-drop-list{min-height:var(--mat-tab-container-height, 48px)}.mat-mdc-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1;border-bottom-style:solid;border-bottom-width:var(--mat-tab-divider-height, 1px);border-bottom-color:var(--mat-tab-divider-color, var(--mat-sys-surface-variant))}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination{background-color:var(--mat-tab-background-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary>.mat-mdc-tab-link-container .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label{color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary)>.mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-focus-indicator::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-focus-indicator::before{border-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mdc-tab__ripple::before,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-ripple-element,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mdc-tab__ripple::before{background-color:var(--mat-tab-foreground-color)}.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,.mat-mdc-tab-nav-bar.mat-tabs-with-background>.mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron{color:var(--mat-tab-foreground-color)}\n"]
    }]
  }], () => [], {
    fitInkBarToContent: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stretchTabs: [{
      type: Input,
      args: [{
        alias: "mat-stretch-tabs",
        transform: booleanAttribute
      }]
    }],
    animationDuration: [{
      type: Input
    }],
    _items: [{
      type: ContentChildren,
      args: [forwardRef(() => MatTabLink), {
        descendants: true
      }]
    }],
    backgroundColor: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    tabPanel: [{
      type: Input
    }],
    _tabListContainer: [{
      type: ViewChild,
      args: ["tabListContainer", {
        static: true
      }]
    }],
    _tabList: [{
      type: ViewChild,
      args: ["tabList", {
        static: true
      }]
    }],
    _tabListInner: [{
      type: ViewChild,
      args: ["tabListInner", {
        static: true
      }]
    }],
    _nextPaginator: [{
      type: ViewChild,
      args: ["nextPaginator"]
    }],
    _previousPaginator: [{
      type: ViewChild,
      args: ["previousPaginator"]
    }]
  });
})();
var MatTabLink = class _MatTabLink extends InkBarItem {
  _tabNavBar = inject(MatTabNav);
  elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _destroyed = new Subject();
  _isActive = false;
  _tabIndex = computed(() => this._tabNavBar._focusedItem() === this ? this.tabIndex : -1, ...ngDevMode ? [{
    debugName: "_tabIndex"
  }] : []);
  get active() {
    return this._isActive;
  }
  set active(value) {
    if (value !== this._isActive) {
      this._isActive = value;
      this._tabNavBar.updateActiveLink();
    }
  }
  disabled = false;
  get disableRipple() {
    return this._disableRipple();
  }
  set disableRipple(value) {
    this._disableRipple.set(value);
  }
  _disableRipple = signal(false, ...ngDevMode ? [{
    debugName: "_disableRipple"
  }] : []);
  tabIndex = 0;
  rippleConfig;
  get rippleDisabled() {
    return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
  }
  id = inject(_IdGenerator).getId("mat-tab-link-");
  constructor() {
    super();
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
      optional: true
    });
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    this.rippleConfig = globalRippleOptions || {};
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    if (_animationsDisabled()) {
      this.rippleConfig.animation = {
        enterDuration: 0,
        exitDuration: 0
      };
    }
    this._tabNavBar._fitInkBarToContent.pipe(takeUntil(this._destroyed)).subscribe((fitInkBarToContent) => {
      this.fitInkBarToContent = fitInkBarToContent;
    });
  }
  focus() {
    this.elementRef.nativeElement.focus();
  }
  ngAfterViewInit() {
    this._focusMonitor.monitor(this.elementRef);
  }
  ngOnDestroy() {
    this._destroyed.next();
    this._destroyed.complete();
    super.ngOnDestroy();
    this._focusMonitor.stopMonitoring(this.elementRef);
  }
  _handleFocus() {
    this._tabNavBar.focusIndex = this._tabNavBar._items.toArray().indexOf(this);
  }
  _handleKeydown(event) {
    if (event.keyCode === SPACE || event.keyCode === ENTER) {
      if (this.disabled) {
        event.preventDefault();
      } else if (this._tabNavBar.tabPanel) {
        if (event.keyCode === SPACE) {
          event.preventDefault();
        }
        this.elementRef.nativeElement.click();
      }
    }
  }
  _getAriaControls() {
    return this._tabNavBar.tabPanel ? this._tabNavBar.tabPanel?.id : this.elementRef.nativeElement.getAttribute("aria-controls");
  }
  _getAriaSelected() {
    if (this._tabNavBar.tabPanel) {
      return this.active ? "true" : "false";
    } else {
      return this.elementRef.nativeElement.getAttribute("aria-selected");
    }
  }
  _getAriaCurrent() {
    return this.active && !this._tabNavBar.tabPanel ? "page" : null;
  }
  _getRole() {
    return this._tabNavBar.tabPanel ? "tab" : this.elementRef.nativeElement.getAttribute("role");
  }
  static \u0275fac = function MatTabLink_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabLink)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabLink,
    selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
    hostAttrs: [1, "mdc-tab", "mat-mdc-tab-link", "mat-focus-indicator"],
    hostVars: 11,
    hostBindings: function MatTabLink_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focus", function MatTabLink_focus_HostBindingHandler() {
          return ctx._handleFocus();
        })("keydown", function MatTabLink_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-controls", ctx._getAriaControls())("aria-current", ctx._getAriaCurrent())("aria-disabled", ctx.disabled)("aria-selected", ctx._getAriaSelected())("id", ctx.id)("tabIndex", ctx._tabIndex())("role", ctx._getRole());
        \u0275\u0275classProp("mat-mdc-tab-disabled", ctx.disabled)("mdc-tab--active", ctx.active);
      }
    },
    inputs: {
      active: [2, "active", "active", booleanAttribute],
      disabled: [2, "disabled", "disabled", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      id: "id"
    },
    exportAs: ["matTabLink"],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c10,
    ngContentSelectors: _c03,
    decls: 5,
    vars: 2,
    consts: [[1, "mdc-tab__ripple"], ["mat-ripple", "", 1, "mat-mdc-tab-ripple", 3, "matRippleTrigger", "matRippleDisabled"], [1, "mdc-tab__content"], [1, "mdc-tab__text-label"]],
    template: function MatTabLink_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275element(0, "span", 0)(1, "div", 1);
        \u0275\u0275elementStart(2, "span", 2)(3, "span", 3);
        \u0275\u0275projection(4);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matRippleTrigger", ctx.elementRef.nativeElement)("matRippleDisabled", ctx.rippleDisabled);
      }
    },
    dependencies: [MatRipple],
    styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabLink, [{
    type: Component,
    args: [{
      selector: "[mat-tab-link], [matTabLink]",
      exportAs: "matTabLink",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mdc-tab mat-mdc-tab-link mat-focus-indicator",
        "[attr.aria-controls]": "_getAriaControls()",
        "[attr.aria-current]": "_getAriaCurrent()",
        "[attr.aria-disabled]": "disabled",
        "[attr.aria-selected]": "_getAriaSelected()",
        "[attr.id]": "id",
        "[attr.tabIndex]": "_tabIndex()",
        "[attr.role]": "_getRole()",
        "[class.mat-mdc-tab-disabled]": "disabled",
        "[class.mdc-tab--active]": "active",
        "(focus)": "_handleFocus()",
        "(keydown)": "_handleKeydown($event)"
      },
      imports: [MatRipple],
      template: '<span class="mdc-tab__ripple"></span>\n\n<div\n  class="mat-mdc-tab-ripple"\n  mat-ripple\n  [matRippleTrigger]="elementRef.nativeElement"\n  [matRippleDisabled]="rippleDisabled"></div>\n\n<span class="mdc-tab__content">\n  <span class="mdc-tab__text-label">\n    <ng-content></ng-content>\n  </span>\n</span>\n\n',
      styles: ['.mat-mdc-tab-link{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-decoration:none;background:none;height:var(--mat-tab-container-height, 48px);font-family:var(--mat-tab-label-text-font, var(--mat-sys-title-small-font));font-size:var(--mat-tab-label-text-size, var(--mat-sys-title-small-size));letter-spacing:var(--mat-tab-label-text-tracking, var(--mat-sys-title-small-tracking));line-height:var(--mat-tab-label-text-line-height, var(--mat-sys-title-small-line-height));font-weight:var(--mat-tab-label-text-weight, var(--mat-sys-title-small-weight))}.mat-mdc-tab-link.mdc-tab{flex-grow:0}.mat-mdc-tab-link .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-indicator-color, var(--mat-sys-primary));border-top-width:var(--mat-tab-active-indicator-height, 2px);border-radius:var(--mat-tab-active-indicator-shape, 0)}.mat-mdc-tab-link:hover .mdc-tab__text-label{color:var(--mat-tab-inactive-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link:focus .mdc-tab__text-label{color:var(--mat-tab-inactive-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label{color:var(--mat-tab-active-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element{background-color:var(--mat-tab-active-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab__text-label{color:var(--mat-tab-active-hover-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:hover .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-hover-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab__text-label{color:var(--mat-tab-active-focus-label-text-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link.mdc-tab--active:focus .mdc-tab-indicator__content--underline{border-color:var(--mat-tab-active-focus-indicator-color, var(--mat-sys-primary))}.mat-mdc-tab-link.mat-mdc-tab-disabled{opacity:.4;pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content{pointer-events:none}.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element{background-color:var(--mat-tab-disabled-ripple-color, var(--mat-sys-on-surface-variant))}.mat-mdc-tab-link .mdc-tab__ripple::before{content:"";display:block;position:absolute;top:0;left:0;right:0;bottom:0;opacity:0;pointer-events:none;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-link .mdc-tab__text-label{color:var(--mat-tab-inactive-label-text-color, var(--mat-sys-on-surface));display:inline-flex;align-items:center}.mat-mdc-tab-link .mdc-tab__content{position:relative;pointer-events:auto}.mat-mdc-tab-link:hover .mdc-tab__ripple::before{opacity:.04}.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before,.mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before{opacity:.12}.mat-mdc-tab-link .mat-ripple-element{opacity:.12;background-color:var(--mat-tab-inactive-ripple-color, var(--mat-sys-on-surface))}.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link{flex-grow:1}.mat-mdc-tab-link::before{margin:5px}@media(max-width: 599px){.mat-mdc-tab-link{min-width:72px}}\n']
    }]
  }], () => [], {
    active: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    id: [{
      type: Input
    }]
  });
})();
var MatTabNavPanel = class _MatTabNavPanel {
  id = inject(_IdGenerator).getId("mat-tab-nav-panel-");
  _activeTabId;
  static \u0275fac = function MatTabNavPanel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabNavPanel)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTabNavPanel,
    selectors: [["mat-tab-nav-panel"]],
    hostAttrs: ["role", "tabpanel", 1, "mat-mdc-tab-nav-panel"],
    hostVars: 2,
    hostBindings: function MatTabNavPanel_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx._activeTabId)("id", ctx.id);
      }
    },
    inputs: {
      id: "id"
    },
    exportAs: ["matTabNavPanel"],
    ngContentSelectors: _c03,
    decls: 1,
    vars: 0,
    template: function MatTabNavPanel_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabNavPanel, [{
    type: Component,
    args: [{
      selector: "mat-tab-nav-panel",
      exportAs: "matTabNavPanel",
      template: "<ng-content></ng-content>",
      host: {
        "[attr.aria-labelledby]": "_activeTabId",
        "[attr.id]": "id",
        "class": "mat-mdc-tab-nav-panel",
        "role": "tabpanel"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    id: [{
      type: Input
    }]
  });
})();
var MatTabsModule = class _MatTabsModule {
  static \u0275fac = function MatTabsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTabsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTabsModule,
    imports: [MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
    exports: [BidiModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTabsModule, [{
    type: NgModule,
    args: [{
      imports: [MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink],
      exports: [BidiModule, MatTabContent, MatTabLabel, MatTab, MatTabGroup, MatTabNav, MatTabNavPanel, MatTabLink]
    }]
  }], null, null);
})();

// src/app/guards/auth.guard.ts
var requireStudent = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    void router.navigate(["/login"], { queryParams: { redirect: router.url } });
    return false;
  }
  if (auth.role() !== "student") {
    void router.navigate(["/teacher/dashboard"]);
    return false;
  }
  return true;
};
var requireTeacher = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    void router.navigate(["/login"], { queryParams: { redirect: router.url } });
    return false;
  }
  if (auth.role() !== "teacher") {
    void router.navigate(["/student/modules"]);
    return false;
  }
  return true;
};
var guestOnly = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if (!auth.isAuthenticated()) {
    return true;
  }
  if (auth.role() === "student") {
    void router.navigate(["/student/modules"]);
  } else {
    void router.navigate(["/teacher/dashboard"]);
  }
  return false;
};

// src/app/core/router-utils.ts
function routePrefix(router) {
  const path = router.url.split("?")[0].split("#")[0];
  if (path.startsWith("/teacher")) {
    return "/teacher";
  }
  if (path.startsWith("/student")) {
    return "/student";
  }
  return "";
}
function workspacePath(router, ...segments) {
  const p = routePrefix(router);
  return p ? [p, ...segments] : segments;
}
function navigateLater(router, commands) {
  queueMicrotask(() => {
    void router.navigate(commands);
  });
}

// src/app/front-office/fo-navbar/fo-navbar.component.ts
var _c04 = () => ({ exact: true });
var FoNavbarComponent = class _FoNavbarComponent {
  router = inject(Router);
  menuOpen = false;
  onResize() {
    if (typeof window !== "undefined" && window.innerWidth > 960) {
      this.menuOpen = false;
    }
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  demarrer() {
    this.closeMenu();
    void this.router.navigate(["/modules"]);
  }
  connexion() {
    this.closeMenu();
    void this.router.navigate(["/login"]);
  }
  static \u0275fac = function FoNavbarComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoNavbarComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoNavbarComponent, selectors: [["app-fo-navbar"]], hostBindings: function FoNavbarComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function FoNavbarComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, standalone: false, decls: 27, vars: 7, consts: [[1, "fo-nav"], [1, "fo-nav__inner"], ["routerLink", "/", 1, "fo-nav__brand", 3, "click"], ["aria-hidden", "true", 1, "fo-nav__logo"], [1, "fo-nav__title"], ["type", "button", "aria-controls", "fo-nav-menu", 1, "fo-nav__burger", 3, "click"], [1, "fo-nav__burger-lines"], ["id", "fo-nav-menu", 1, "fo-nav__links"], ["routerLink", "/", "routerLinkActive", "is-active", 1, "fo-nav__link", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/modules", "routerLinkActive", "is-active", 1, "fo-nav__link", 3, "click"], ["routerLink", "/cours", "routerLinkActive", "is-active", 1, "fo-nav__link", 3, "click"], ["routerLink", "/quizzes", "routerLinkActive", "is-active", 1, "fo-nav__link", 3, "click"], ["routerLink", "/", "fragment", "apropos", 1, "fo-nav__link", 3, "click"], ["routerLink", "/", "fragment", "contact", 1, "fo-nav__link", 3, "click"], [1, "fo-nav__actions"], ["type", "button", "mat-stroked-button", "", 1, "fo-nav__btn-secondary", 3, "click"], ["type", "button", "mat-flat-button", "", "color", "primary", 1, "fo-nav__btn-primary", 3, "click"]], template: function FoNavbarComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "header", 0)(1, "div", 1)(2, "a", 2);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_2_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(3, "span", 3);
      \u0275\u0275text(4, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "span", 4);
      \u0275\u0275text(6, "Fluency");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 5);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_button_click_7_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(8, "span", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "nav", 7)(10, "a", 8);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_10_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(11, "Home");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "a", 9);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_12_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(13, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "a", 10);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_14_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(15, "Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 11);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_16_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(17, "Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "a", 12);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_18_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(19, "\xC0 propos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 13);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_a_click_20_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(21, "Contact");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 14)(23, "button", 15);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_button_click_23_listener() {
        return ctx.connexion();
      });
      \u0275\u0275text(24, "Connexion");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 16);
      \u0275\u0275listener("click", function FoNavbarComponent_Template_button_click_25_listener() {
        return ctx.demarrer();
      });
      \u0275\u0275text(26, "D\xE9marrer");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("fo-nav--open", ctx.menuOpen);
      \u0275\u0275advance(7);
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("fo-nav__links--open", ctx.menuOpen);
      \u0275\u0275advance();
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c04));
    }
  }, dependencies: [RouterLink, RouterLinkActive, MatButton], styles: ['\n\n.fo-nav[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  background: rgba(255, 255, 255, 0.92);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(99, 102, 241, 0.12);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);\n}\n.fo-nav__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0.65rem 1.25rem;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 1rem;\n}\n.fo-nav__brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: #1e1b4b;\n  font-weight: 800;\n  font-size: 1.25rem;\n  letter-spacing: -0.02em;\n}\n.fo-nav__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 55%,\n      #22c55e 100%);\n  color: #fff;\n  font-size: 0.65rem;\n  line-height: 1;\n}\n.fo-nav__title[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #312e81,\n      #6366f1);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.fo-nav__links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.15rem 0.35rem;\n}\n.fo-nav__link[_ngcontent-%COMP%] {\n  color: #475569;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.45rem 0.65rem;\n  border-radius: 8px;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.fo-nav__link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n  background: rgba(99, 102, 241, 0.08);\n}\n.fo-nav__link.is-active[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  background: rgba(99, 102, 241, 0.12);\n}\n.fo-nav__actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.fo-nav__btn-secondary[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 600 !important;\n}\n.fo-nav__btn-primary[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 600 !important;\n  padding: 0 1rem !important;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35) !important;\n}\n.fo-nav__burger[_ngcontent-%COMP%] {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border: none;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.1);\n  cursor: pointer;\n  position: relative;\n}\n.fo-nav__burger-lines[_ngcontent-%COMP%]::before, \n.fo-nav__burger-lines[_ngcontent-%COMP%]::after, \n.fo-nav__burger-lines[_ngcontent-%COMP%] {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #4338ca;\n  border-radius: 2px;\n  position: absolute;\n  left: 12px;\n  transition: transform 0.2s ease;\n}\n.fo-nav__burger-lines[_ngcontent-%COMP%] {\n  top: 16px;\n}\n.fo-nav__burger-lines[_ngcontent-%COMP%]::before {\n  top: 6px;\n}\n.fo-nav__burger-lines[_ngcontent-%COMP%]::after {\n  top: 12px;\n}\n.fo-nav--open[_ngcontent-%COMP%]   .fo-nav__burger-lines[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.fo-nav--open[_ngcontent-%COMP%]   .fo-nav__burger-lines[_ngcontent-%COMP%]::before {\n  transform: translateY(6px) rotate(45deg);\n}\n.fo-nav--open[_ngcontent-%COMP%]   .fo-nav__burger-lines[_ngcontent-%COMP%]::after {\n  transform: translateY(-6px) rotate(-45deg);\n}\n@media (max-width: 960px) {\n  .fo-nav__inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr auto;\n    grid-template-rows: auto auto;\n  }\n  .fo-nav__burger[_ngcontent-%COMP%] {\n    display: block;\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .fo-nav__brand[_ngcontent-%COMP%] {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .fo-nav__links[_ngcontent-%COMP%] {\n    display: none;\n    grid-column: 1 / -1;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0.5rem 0 0;\n  }\n  .fo-nav__links--open[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .fo-nav__actions[_ngcontent-%COMP%] {\n    display: none;\n    grid-column: 1 / -1;\n    justify-content: stretch;\n    flex-direction: column;\n    padding-top: 0.5rem;\n  }\n  .fo-nav--open[_ngcontent-%COMP%]   .fo-nav__actions[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .fo-nav__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=fo-navbar.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoNavbarComponent, [{
    type: Component,
    args: [{ selector: "app-fo-navbar", standalone: false, template: '<header class="fo-nav" [class.fo-nav--open]="menuOpen">\n  <div class="fo-nav__inner">\n    <a routerLink="/" class="fo-nav__brand" (click)="closeMenu()">\n      <span class="fo-nav__logo" aria-hidden="true">\u25C6</span>\n      <span class="fo-nav__title">Fluency</span>\n    </a>\n\n    <button\n      type="button"\n      class="fo-nav__burger"\n      [attr.aria-expanded]="menuOpen"\n      aria-controls="fo-nav-menu"\n      (click)="toggleMenu()"\n    >\n      <span class="fo-nav__burger-lines"></span>\n    </button>\n\n    <nav id="fo-nav-menu" class="fo-nav__links" [class.fo-nav__links--open]="menuOpen">\n      <a routerLink="/" class="fo-nav__link" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Home</a>\n      <a routerLink="/modules" class="fo-nav__link" routerLinkActive="is-active" (click)="closeMenu()">Modules</a>\n      <a routerLink="/cours" class="fo-nav__link" routerLinkActive="is-active" (click)="closeMenu()">Cours</a>\n      <a routerLink="/quizzes" class="fo-nav__link" routerLinkActive="is-active" (click)="closeMenu()">Quiz</a>\n      <a routerLink="/" fragment="apropos" class="fo-nav__link" (click)="closeMenu()">\xC0 propos</a>\n      <a routerLink="/" fragment="contact" class="fo-nav__link" (click)="closeMenu()">Contact</a>\n    </nav>\n\n    <div class="fo-nav__actions">\n      <button type="button" mat-stroked-button class="fo-nav__btn-secondary" (click)="connexion()">Connexion</button>\n      <button type="button" mat-flat-button color="primary" class="fo-nav__btn-primary" (click)="demarrer()">D\xE9marrer</button>\n    </div>\n  </div>\n</header>\n', styles: ['/* src/app/front-office/fo-navbar/fo-navbar.component.css */\n.fo-nav {\n  position: sticky;\n  top: 0;\n  z-index: 200;\n  background: rgba(255, 255, 255, 0.92);\n  backdrop-filter: blur(12px);\n  -webkit-backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(99, 102, 241, 0.12);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);\n}\n.fo-nav__inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0.65rem 1.25rem;\n  display: grid;\n  grid-template-columns: auto 1fr auto;\n  align-items: center;\n  gap: 1rem;\n}\n.fo-nav__brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: #1e1b4b;\n  font-weight: 800;\n  font-size: 1.25rem;\n  letter-spacing: -0.02em;\n}\n.fo-nav__logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2rem;\n  height: 2rem;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1 0%,\n      #8b5cf6 55%,\n      #22c55e 100%);\n  color: #fff;\n  font-size: 0.65rem;\n  line-height: 1;\n}\n.fo-nav__title {\n  background:\n    linear-gradient(\n      90deg,\n      #312e81,\n      #6366f1);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.fo-nav__links {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.15rem 0.35rem;\n}\n.fo-nav__link {\n  color: #475569;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.45rem 0.65rem;\n  border-radius: 8px;\n  transition: color 0.2s ease, background 0.2s ease;\n}\n.fo-nav__link:hover {\n  color: #4f46e5;\n  background: rgba(99, 102, 241, 0.08);\n}\n.fo-nav__link.is-active {\n  color: #4f46e5;\n  background: rgba(99, 102, 241, 0.12);\n}\n.fo-nav__actions {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.fo-nav__btn-secondary {\n  border-radius: 10px !important;\n  font-weight: 600 !important;\n}\n.fo-nav__btn-primary {\n  border-radius: 10px !important;\n  font-weight: 600 !important;\n  padding: 0 1rem !important;\n  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.35) !important;\n}\n.fo-nav__burger {\n  display: none;\n  width: 44px;\n  height: 44px;\n  border: none;\n  border-radius: 10px;\n  background: rgba(99, 102, 241, 0.1);\n  cursor: pointer;\n  position: relative;\n}\n.fo-nav__burger-lines::before,\n.fo-nav__burger-lines::after,\n.fo-nav__burger-lines {\n  content: "";\n  display: block;\n  width: 20px;\n  height: 2px;\n  background: #4338ca;\n  border-radius: 2px;\n  position: absolute;\n  left: 12px;\n  transition: transform 0.2s ease;\n}\n.fo-nav__burger-lines {\n  top: 16px;\n}\n.fo-nav__burger-lines::before {\n  top: 6px;\n}\n.fo-nav__burger-lines::after {\n  top: 12px;\n}\n.fo-nav--open .fo-nav__burger-lines {\n  background: transparent;\n}\n.fo-nav--open .fo-nav__burger-lines::before {\n  transform: translateY(6px) rotate(45deg);\n}\n.fo-nav--open .fo-nav__burger-lines::after {\n  transform: translateY(-6px) rotate(-45deg);\n}\n@media (max-width: 960px) {\n  .fo-nav__inner {\n    grid-template-columns: 1fr auto;\n    grid-template-rows: auto auto;\n  }\n  .fo-nav__burger {\n    display: block;\n    grid-column: 2;\n    grid-row: 1;\n  }\n  .fo-nav__brand {\n    grid-column: 1;\n    grid-row: 1;\n  }\n  .fo-nav__links {\n    display: none;\n    grid-column: 1 / -1;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 0.5rem 0 0;\n  }\n  .fo-nav__links--open {\n    display: flex;\n  }\n  .fo-nav__actions {\n    display: none;\n    grid-column: 1 / -1;\n    justify-content: stretch;\n    flex-direction: column;\n    padding-top: 0.5rem;\n  }\n  .fo-nav--open .fo-nav__actions {\n    display: flex;\n  }\n  .fo-nav__actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=fo-navbar.component.css.map */\n'] }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoNavbarComponent, { className: "FoNavbarComponent", filePath: "src/app/front-office/fo-navbar/fo-navbar.component.ts", lineNumber: 10 });
})();

// src/app/front-office/fo-footer/fo-footer.component.ts
var FoFooterComponent = class _FoFooterComponent {
  year = (/* @__PURE__ */ new Date()).getFullYear();
  static \u0275fac = function FoFooterComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FoFooterComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FoFooterComponent, selectors: [["app-fo-footer"]], standalone: false, decls: 49, vars: 1, consts: [[1, "fo-foot"], [1, "fo-foot__grid"], [1, "fo-foot__brand"], [1, "fo-foot__logo"], [1, "fo-foot__name"], [1, "fo-foot__tagline"], [1, "fo-foot__col"], [1, "fo-foot__h"], ["routerLink", "/modules"], ["routerLink", "/cours"], ["routerLink", "/quizzes"], ["routerLink", "/questions"], ["routerLink", "/", "fragment", "apropos"], ["routerLink", "/", "fragment", "contact"], ["routerLink", "/courses"], [1, "fo-foot__col", "fo-foot__col--contact"], ["aria-label", "R\xE9seaux sociaux", 1, "fo-foot__social"], ["href", "#", "aria-label", "LinkedIn", 1, "fo-foot__soc"], ["href", "#", "aria-label", "YouTube", 1, "fo-foot__soc"], ["href", "#", "aria-label", "X", 1, "fo-foot__soc"], [1, "fo-foot__bottom"], [1, "fo-foot__legal"]], template: function FoFooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "footer", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      \u0275\u0275text(4, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "strong", 4);
      \u0275\u0275text(7, "Fluency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "Votre plateforme e-learning pour apprendre \xE0 votre rythme.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 6)(11, "h4", 7);
      \u0275\u0275text(12, "Liens rapides");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "a", 8);
      \u0275\u0275text(14, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275text(18, "Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275text(20, "Questions");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 6)(22, "h4", 7);
      \u0275\u0275text(23, "Ressources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 12);
      \u0275\u0275text(25, "\xC0 propos");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "a", 13);
      \u0275\u0275text(27, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 14);
      \u0275\u0275text(29, "Courses (legacy)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(30, "div", 15)(31, "h4", 7);
      \u0275\u0275text(32, "Contact");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "contact@fluency-learning.app");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "p");
      \u0275\u0275text(36, "+216 00 000 000");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 16)(38, "a", 17);
      \u0275\u0275text(39, "in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "a", 18);
      \u0275\u0275text(41, "\u25B6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "a", 19);
      \u0275\u0275text(43, "\u{1D54F}");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(44, "div", 20)(45, "span");
      \u0275\u0275text(46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "span", 21);
      \u0275\u0275text(48, "Mentions l\xE9gales \xB7 Confidentialit\xE9");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(46);
      \u0275\u0275textInterpolate1("\xA9 ", ctx.year, " Fluency \u2014 Projet e-learning.");
    }
  }, dependencies: [RouterLink], styles: ["\n\n.fo-foot[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #0f172a 0%,\n      #1e1b4b 100%);\n  color: #e2e8f0;\n  padding: 3rem 1.25rem 1.5rem;\n  margin-top: auto;\n}\n.fo-foot__grid[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.4fr repeat(3, 1fr);\n  gap: 2rem;\n}\n.fo-foot__brand[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.fo-foot__logo[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #22c55e);\n  color: #fff;\n  font-size: 0.75rem;\n}\n.fo-foot__name[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  color: #fff;\n}\n.fo-foot__tagline[_ngcontent-%COMP%] {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: #94a3b8;\n  line-height: 1.5;\n  max-width: 280px;\n}\n.fo-foot__col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fo-foot__h[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #a5b4fc;\n}\n.fo-foot__col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 0.92rem;\n  transition: color 0.2s ease;\n}\n.fo-foot__col[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #fff;\n}\n.fo-foot__col[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #94a3b8;\n}\n.fo-foot__social[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.fo-foot__soc[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #e2e8f0;\n  text-decoration: none;\n  font-size: 0.85rem;\n  transition: background 0.2s ease;\n}\n.fo-foot__soc[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.4);\n}\n.fo-foot__bottom[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 2rem auto 0;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.75rem;\n  font-size: 0.82rem;\n  color: #64748b;\n}\n.fo-foot__legal[_ngcontent-%COMP%] {\n  opacity: 0.85;\n}\n@media (max-width: 900px) {\n  .fo-foot__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .fo-foot__grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=fo-footer.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FoFooterComponent, [{
    type: Component,
    args: [{ selector: "app-fo-footer", standalone: false, template: '<footer class="fo-foot">\n  <div class="fo-foot__grid">\n    <div class="fo-foot__brand">\n      <span class="fo-foot__logo">\u25C6</span>\n      <div>\n        <strong class="fo-foot__name">Fluency</strong>\n        <p class="fo-foot__tagline">Votre plateforme e-learning pour apprendre \xE0 votre rythme.</p>\n      </div>\n    </div>\n\n    <div class="fo-foot__col">\n      <h4 class="fo-foot__h">Liens rapides</h4>\n      <a routerLink="/modules">Modules</a>\n      <a routerLink="/cours">Cours</a>\n      <a routerLink="/quizzes">Quiz</a>\n      <a routerLink="/questions">Questions</a>\n    </div>\n\n    <div class="fo-foot__col">\n      <h4 class="fo-foot__h">Ressources</h4>\n      <a routerLink="/" fragment="apropos">\xC0 propos</a>\n      <a routerLink="/" fragment="contact">Contact</a>\n      <a routerLink="/courses">Courses (legacy)</a>\n    </div>\n\n    <div class="fo-foot__col fo-foot__col--contact">\n      <h4 class="fo-foot__h">Contact</h4>\n      <p>contact@fluency-learning.app</p>\n      <p>+216 00 000 000</p>\n      <div class="fo-foot__social" aria-label="R\xE9seaux sociaux">\n        <a href="#" class="fo-foot__soc" aria-label="LinkedIn">in</a>\n        <a href="#" class="fo-foot__soc" aria-label="YouTube">\u25B6</a>\n        <a href="#" class="fo-foot__soc" aria-label="X">\u{1D54F}</a>\n      </div>\n    </div>\n  </div>\n\n  <div class="fo-foot__bottom">\n    <span>\xA9 {{ year }} Fluency \u2014 Projet e-learning.</span>\n    <span class="fo-foot__legal">Mentions l\xE9gales \xB7 Confidentialit\xE9</span>\n  </div>\n</footer>\n', styles: ["/* src/app/front-office/fo-footer/fo-footer.component.css */\n.fo-foot {\n  background:\n    linear-gradient(\n      180deg,\n      #0f172a 0%,\n      #1e1b4b 100%);\n  color: #e2e8f0;\n  padding: 3rem 1.25rem 1.5rem;\n  margin-top: auto;\n}\n.fo-foot__grid {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1.4fr repeat(3, 1fr);\n  gap: 2rem;\n}\n.fo-foot__brand {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.fo-foot__logo {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #6366f1,\n      #22c55e);\n  color: #fff;\n  font-size: 0.75rem;\n}\n.fo-foot__name {\n  font-size: 1.15rem;\n  color: #fff;\n}\n.fo-foot__tagline {\n  margin: 0.35rem 0 0;\n  font-size: 0.9rem;\n  color: #94a3b8;\n  line-height: 1.5;\n  max-width: 280px;\n}\n.fo-foot__col {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.fo-foot__h {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #a5b4fc;\n}\n.fo-foot__col a {\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 0.92rem;\n  transition: color 0.2s ease;\n}\n.fo-foot__col a:hover {\n  color: #fff;\n}\n.fo-foot__col p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #94a3b8;\n}\n.fo-foot__social {\n  display: flex;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.fo-foot__soc {\n  width: 36px;\n  height: 36px;\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.08);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: #e2e8f0;\n  text-decoration: none;\n  font-size: 0.85rem;\n  transition: background 0.2s ease;\n}\n.fo-foot__soc:hover {\n  background: rgba(99, 102, 241, 0.4);\n}\n.fo-foot__bottom {\n  max-width: 1200px;\n  margin: 2rem auto 0;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.1);\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  gap: 0.75rem;\n  font-size: 0.82rem;\n  color: #64748b;\n}\n.fo-foot__legal {\n  opacity: 0.85;\n}\n@media (max-width: 900px) {\n  .fo-foot__grid {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n@media (max-width: 560px) {\n  .fo-foot__grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=fo-footer.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FoFooterComponent, { className: "FoFooterComponent", filePath: "src/app/front-office/fo-footer/fo-footer.component.ts", lineNumber: 9 });
})();

// src/app/front-office/landing-home/landing-home.component.ts
var _c05 = () => [1, 2, 3, 4, 5];
var _forTrack0 = ($index, $item) => $item.titre;
var _forTrack1 = ($index, $item) => $item.nom;
function LandingHomeComponent_For_132_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 35)(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "span", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 27);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const e_r1 = ctx.$implicit;
    const \u0275$index_214_r2 = ctx.$index;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275$index_214_r2 + 1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(e_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(e_r1.desc);
  }
}
function LandingHomeComponent_For_170_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    const t_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275classProp("is-off", s_r3 > t_r4.note);
  }
}
function LandingHomeComponent_For_170_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "article", 42)(1, "div", 53);
    \u0275\u0275repeaterCreate(2, LandingHomeComponent_For_170_For_3_Template, 2, 2, "span", 54, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 55);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 56);
    \u0275\u0275element(7, "img", 57);
    \u0275\u0275elementStart(8, "div")(9, "strong");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275attribute("aria-label", t_r4.note + " sur 5");
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction0(6, _c05));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\xAB ", t_r4.texte, " \xBB");
    \u0275\u0275advance(2);
    \u0275\u0275property("src", t_r4.avatar, \u0275\u0275sanitizeUrl)("alt", "Avatar " + t_r4.nom);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(t_r4.nom);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(t_r4.role);
  }
}
var LandingHomeComponent = class _LandingHomeComponent {
  router = inject(Router);
  /** Chiffres statiques — à brancher sur l’API plus tard. */
  stats = {
    modules: 48,
    cours: 320,
    quiz: 120,
    apprenants: 5400,
    reussite: 94
  };
  temoignages = [
    {
      nom: "Sarra Ben A.",
      role: "\xC9tudiante en informatique",
      texte: "Interface claire, modules bien structur\xE9s et quiz qui m\u2019aident vraiment \xE0 valider mes acquis. Je recommande !",
      avatar: "https://i.pravatar.cc/120?img=5",
      note: 5
    },
    {
      nom: "Mehdi K.",
      role: "En reconversion professionnelle",
      texte: "Le parcours par \xE9tapes est motivant. J\u2019ai suivi plusieurs cours et la progression est visible semaine apr\xE8s semaine.",
      avatar: "https://i.pravatar.cc/120?img=12",
      note: 5
    },
    {
      nom: "Amel M.",
      role: "Formatrice interne",
      texte: "Nous utilisons Fluency pour nos \xE9quipes : gestion des modules simple, quiz vari\xE9s, suivi efficace.",
      avatar: "https://i.pravatar.cc/120?img=9",
      note: 4
    }
  ];
  etapes = [
    { titre: "D\xE9couvrir", desc: "Explorez la plateforme et nos parcours.", icon: "\u{1F52D}" },
    { titre: "Choisir un module", desc: "S\xE9lectionnez un th\xE8me adapt\xE9 \xE0 vos objectifs.", icon: "\u{1F4DA}" },
    { titre: "Suivre les cours", desc: "Vid\xE9os, textes et ressources au m\xEAme endroit.", icon: "\u25B6\uFE0F" },
    { titre: "Passer les quiz", desc: "Consolidez vos connaissances avec des \xE9valuations.", icon: "\u2705" },
    { titre: "Progresser", desc: "Suivez votre avancement \xE9tape par \xE9tape.", icon: "\u{1F4C8}" },
    { titre: "Atteindre vos objectifs", desc: "Certifiez vos comp\xE9tences et c\xE9l\xE9brez vos succ\xE8s.", icon: "\u{1F3C6}" }
  ];
  demarrer() {
    navigateLater(this.router, ["/login"]);
  }
  decouvrirCours() {
    navigateLater(this.router, ["/cours"]);
  }
  commencerMaintenant() {
    navigateLater(this.router, ["/login"]);
  }
  explorerModules() {
    navigateLater(this.router, ["/modules"]);
  }
  static \u0275fac = function LandingHomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LandingHomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingHomeComponent, selectors: [["app-landing-home"]], standalone: false, decls: 184, vars: 8, consts: [[1, "landing"], [1, "landing__hero"], [1, "landing__hero-inner"], [1, "landing__hero-copy"], [1, "landing__badge"], [1, "landing__h1"], [1, "landing__gradient"], [1, "landing__lead"], [1, "landing__hero-cta"], ["type", "button", "mat-flat-button", "", "color", "primary", 1, "landing__btn-main", 3, "click"], ["type", "button", "mat-stroked-button", "", 1, "landing__btn-ghost", 3, "click"], ["aria-label", "Points cl\xE9s", 1, "landing__hero-bullets"], [1, "landing__tick"], [1, "landing__hero-visual"], [1, "landing__hero-card"], ["src", "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80", "width", "440", "height", "330", "alt", "\xC9tudiants collaborant sur un projet e-learning", "loading", "eager", 1, "landing__hero-img"], [1, "landing__hero-float", "landing__hero-float--1"], [1, "landing__mini-icon"], [1, "landing__hero-float", "landing__hero-float--2"], ["id", "apropos", 1, "landing__section", "landing__why"], [1, "landing__container"], [1, "landing__section-head"], [1, "landing__h2"], [1, "landing__sub"], [1, "landing__cards", "landing__cards--4"], [1, "landing__card"], ["aria-hidden", "true", 1, "landing__card-icon"], [1, "landing__h3"], [1, "landing__section", "landing__features"], [1, "landing__feature-grid"], [1, "landing__feature"], [1, "landing__feature-badge"], [1, "landing__feature", "landing__feature--wide"], [1, "landing__section", "landing__path"], [1, "landing__timeline"], [1, "landing__step"], ["aria-label", "Chiffres cl\xE9s", 1, "landing__stats"], [1, "landing__container", "landing__stats-inner"], [1, "landing__stat"], [1, "landing__stat-val"], [1, "landing__section", "landing__testi"], [1, "landing__testi-grid"], [1, "landing__testi-card"], ["id", "contact", 1, "landing__cta"], [1, "landing__container", "landing__cta-inner"], [1, "landing__cta-copy"], [1, "landing__h2", "landing__h2--light"], [1, "landing__cta-btns"], ["type", "button", "mat-flat-button", "", "color", "accent", 1, "landing__btn-light", 3, "click"], ["type", "button", "mat-stroked-button", "", 1, "landing__btn-outline", 3, "click"], [1, "landing__step-num"], [1, "landing__step-body"], [1, "landing__step-ico"], [1, "landing__stars"], [3, "is-off"], [1, "landing__testi-text"], [1, "landing__testi-user"], ["width", "48", "height", "48", "loading", "lazy", 3, "src", "alt"]], template: function LandingHomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-fo-navbar");
      \u0275\u0275elementStart(2, "section", 1)(3, "div", 2)(4, "div", 3)(5, "p", 4);
      \u0275\u0275text(6, "Plateforme e-learning nouvelle g\xE9n\xE9ration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1", 5);
      \u0275\u0275text(8, "Apprenez autrement, ");
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "progressez chaque jour");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12, " Votre espace moderne pour suivre des modules structur\xE9s, des cours enrichis et des quiz interactifs \u2014 avec un suivi clair de votre r\xE9ussite. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
      \u0275\u0275listener("click", function LandingHomeComponent_Template_button_click_14_listener() {
        return ctx.demarrer();
      });
      \u0275\u0275text(15, " D\xE9marrer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 10);
      \u0275\u0275listener("click", function LandingHomeComponent_Template_button_click_16_listener() {
        return ctx.decouvrirCours();
      });
      \u0275\u0275text(17, " D\xE9couvrir les cours ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "ul", 11)(19, "li")(20, "span", 12);
      \u0275\u0275text(21, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Parcours par modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li")(24, "span", 12);
      \u0275\u0275text(25, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(26, " Quiz & \xE9valuations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "li")(28, "span", 12);
      \u0275\u0275text(29, "\u2713");
      \u0275\u0275elementEnd();
      \u0275\u0275text(30, " Suivi de progression");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "div", 13)(32, "div", 14);
      \u0275\u0275element(33, "img", 15);
      \u0275\u0275elementStart(34, "div", 16)(35, "span", 17);
      \u0275\u0275text(36, "\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "span");
      \u0275\u0275text(38, "Progression suivie");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "div", 18)(40, "span", 17);
      \u0275\u0275text(41, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "span");
      \u0275\u0275text(43, "Objectifs clairs");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(44, "section", 19)(45, "div", 20)(46, "header", 21)(47, "h2", 22);
      \u0275\u0275text(48, "Pourquoi choisir Fluency ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p", 23);
      \u0275\u0275text(50, "Une exp\xE9rience pens\xE9e pour la r\xE9ussite des apprenants et la clart\xE9 des parcours.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 24)(52, "article", 25)(53, "div", 26);
      \u0275\u0275text(54, "\u{1F550}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h3", 27);
      \u0275\u0275text(56, "Apprentissage flexible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, "Acc\xE9dez aux contenus o\xF9 et quand vous voulez, \xE0 votre rythme.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "article", 25)(60, "div", 26);
      \u0275\u0275text(61, "\u{1F9E0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h3", 27);
      \u0275\u0275text(63, "Quiz interactifs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, "Questions vari\xE9es pour ancrer les notions et mesurer votre niveau.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "article", 25)(67, "div", 26);
      \u0275\u0275text(68, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "h3", 27);
      \u0275\u0275text(70, "Suivi de progression");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p");
      \u0275\u0275text(72, "Visualisez vos avancements module par module.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "article", 25)(74, "div", 26);
      \u0275\u0275text(75, "\u{1F393}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h3", 27);
      \u0275\u0275text(77, "Parcours structur\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "p");
      \u0275\u0275text(79, "Modules et cours organis\xE9s pour une mont\xE9e en comp\xE9tences logique.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(80, "section", 28)(81, "div", 20)(82, "header", 21)(83, "h2", 22);
      \u0275\u0275text(84, "Nos fonctionnalit\xE9s");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "p", 23);
      \u0275\u0275text(86, "Tout ce dont vous avez besoin pour former, \xE9valuer et progresser.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 29)(88, "div", 30)(89, "span", 31);
      \u0275\u0275text(90, "01");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "h3");
      \u0275\u0275text(92, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "Regroupez vos contenus par th\xE9matique, niveau et dur\xE9e.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(95, "div", 30)(96, "span", 31);
      \u0275\u0275text(97, "02");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "h3");
      \u0275\u0275text(99, "Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "p");
      \u0275\u0275text(101, "Le\xE7ons riches : texte, m\xE9dias et ressources li\xE9es \xE0 chaque module.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(102, "div", 30)(103, "span", 31);
      \u0275\u0275text(104, "03");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(105, "h3");
      \u0275\u0275text(106, "Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(107, "p");
      \u0275\u0275text(108, "\xC9valuez les acquis avec des bar\xE8mes et scores adapt\xE9s.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(109, "div", 30)(110, "span", 31);
      \u0275\u0275text(111, "04");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "h3");
      \u0275\u0275text(113, "Questions & r\xE9ponses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p");
      \u0275\u0275text(115, "Banques de questions et corrections pour un apprentissage actif.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(116, "div", 32)(117, "span", 31);
      \u0275\u0275text(118, "05");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "h3");
      \u0275\u0275text(120, "Exp\xE9rience utilisateur");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p");
      \u0275\u0275text(122, "Interface sobre, lisible et agr\xE9able \u2014 pour rester concentr\xE9 sur l\u2019essentiel : apprendre.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(123, "section", 33)(124, "div", 20)(125, "header", 21)(126, "h2", 22);
      \u0275\u0275text(127, "Votre parcours d\u2019apprentissage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p", 23);
      \u0275\u0275text(129, "Un sc\xE9nario simple, du premier clic \xE0 la r\xE9ussite.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "ol", 34);
      \u0275\u0275repeaterCreate(131, LandingHomeComponent_For_132_Template, 10, 4, "li", 35, _forTrack0);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(133, "section", 36)(134, "div", 37)(135, "div", 38)(136, "strong", 39);
      \u0275\u0275text(137);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(138, "span");
      \u0275\u0275text(139, "Modules");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(140, "div", 38)(141, "strong", 39);
      \u0275\u0275text(142);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(143, "span");
      \u0275\u0275text(144, "Cours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(145, "div", 38)(146, "strong", 39);
      \u0275\u0275text(147);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "span");
      \u0275\u0275text(149, "Quiz");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(150, "div", 38)(151, "strong", 39);
      \u0275\u0275text(152);
      \u0275\u0275pipe(153, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(154, "span");
      \u0275\u0275text(155, "Apprenants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "div", 38)(157, "strong", 39);
      \u0275\u0275text(158);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(159, "span");
      \u0275\u0275text(160, "Taux de r\xE9ussite");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(161, "section", 40)(162, "div", 20)(163, "header", 21)(164, "h2", 22);
      \u0275\u0275text(165, "Ils progressent avec Fluency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(166, "p", 23);
      \u0275\u0275text(167, "T\xE9moignages d\u2019apprenants \u2014 avis fictifs \xE0 titre illustratif.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(168, "div", 41);
      \u0275\u0275repeaterCreate(169, LandingHomeComponent_For_170_Template, 13, 7, "article", 42, _forTrack1);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(171, "section", 43)(172, "div", 44)(173, "div", 45)(174, "h2", 46);
      \u0275\u0275text(175, "Pr\xEAt \xE0 commencer ?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(176, "p");
      \u0275\u0275text(177, "Rejoignez un parcours clair, des contenus de qualit\xE9 et une communaut\xE9 qui apprend chaque jour.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(178, "div", 47)(179, "button", 48);
      \u0275\u0275listener("click", function LandingHomeComponent_Template_button_click_179_listener() {
        return ctx.commencerMaintenant();
      });
      \u0275\u0275text(180, " Commencer maintenant ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "button", 49);
      \u0275\u0275listener("click", function LandingHomeComponent_Template_button_click_181_listener() {
        return ctx.explorerModules();
      });
      \u0275\u0275text(182, " Explorer les modules ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275element(183, "app-fo-footer");
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(131);
      \u0275\u0275repeater(ctx.etapes);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.stats.modules, "+");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.stats.cours, "+");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", ctx.stats.quiz, "+");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(153, 5, ctx.stats.apprenants, "1.0-0"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.stats.reussite, "%");
      \u0275\u0275advance(11);
      \u0275\u0275repeater(ctx.temoignages);
    }
  }, dependencies: [MatButton, FoNavbarComponent, FoFooterComponent, DecimalPipe], styles: ["\n\n.landing[_ngcontent-%COMP%] {\n  --fo-blue: #1d4ed8;\n  --fo-blue-deep: #1e3a8a;\n  --fo-violet: #7c3aed;\n  --fo-violet-soft: #ede9fe;\n  --fo-green: #059669;\n  --fo-green-soft: #d1fae5;\n  --fo-slate: #0f172a;\n  --fo-muted: #64748b;\n  --fo-bg: #f8fafc;\n  --fo-card: #ffffff;\n  --fo-radius: 16px;\n  --fo-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);\n  --fo-shadow-hover: 0 20px 50px rgba(30, 64, 175, 0.12);\n  color: var(--fo-slate);\n  background: var(--fo-bg);\n  min-height: 100vh;\n}\n.landing__container[_ngcontent-%COMP%] {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 0 1.25rem;\n}\n.landing__hero[_ngcontent-%COMP%] {\n  padding: 5.5rem 1.25rem 4rem;\n  background:\n    radial-gradient(\n      1200px 500px at 10% -10%,\n      rgba(124, 58, 237, 0.12),\n      transparent 55%),\n    radial-gradient(\n      900px 400px at 90% 20%,\n      rgba(29, 78, 216, 0.1),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 45%,\n      #f8fafc 100%);\n}\n.landing__hero-inner[_ngcontent-%COMP%] {\n  max-width: 1120px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n  align-items: center;\n}\n.landing__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: var(--fo-blue-deep);\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgba(29, 78, 216, 0.2);\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  margin: 0 0 1rem;\n}\n.landing__h1[_ngcontent-%COMP%] {\n  font-size: clamp(2rem, 4vw, 2.75rem);\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n  margin: 0 0 1rem;\n}\n.landing__gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      120deg,\n      var(--fo-blue) 0%,\n      var(--fo-violet) 55%,\n      var(--fo-green) 110%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.landing__lead[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  line-height: 1.65;\n  color: var(--fo-muted);\n  margin: 0 0 1.75rem;\n  max-width: 34rem;\n}\n.landing__hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.landing__btn-main[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.35rem !important;\n  font-weight: 600 !important;\n  border-radius: 999px !important;\n}\n.landing__btn-ghost[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  font-weight: 600 !important;\n  border-color: rgba(29, 78, 216, 0.35) !important;\n}\n.landing__hero-bullets[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1.25rem;\n  font-size: 0.9rem;\n  color: var(--fo-muted);\n}\n.landing__tick[_ngcontent-%COMP%] {\n  color: var(--fo-green);\n  font-weight: 700;\n  margin-right: 0.25rem;\n}\n.landing__hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n}\n.landing__hero-card[_ngcontent-%COMP%] {\n  position: relative;\n  border-radius: var(--fo-radius);\n  overflow: visible;\n  box-shadow: var(--fo-shadow);\n}\n.landing__hero-img[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: auto;\n  border-radius: var(--fo-radius);\n  object-fit: cover;\n  border: 1px solid rgba(15, 23, 42, 0.06);\n}\n.landing__hero-float[_ngcontent-%COMP%] {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fff;\n  padding: 0.6rem 0.9rem;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  animation: _ngcontent-%COMP%_fo-float 5s ease-in-out infinite;\n}\n.landing__hero-float--1[_ngcontent-%COMP%] {\n  bottom: 12%;\n  left: -8%;\n}\n.landing__hero-float--2[_ngcontent-%COMP%] {\n  top: 10%;\n  right: -5%;\n  animation-delay: -2s;\n}\n.landing__mini-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n@keyframes _ngcontent-%COMP%_fo-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n.landing__section[_ngcontent-%COMP%] {\n  padding: 4rem 0;\n}\n.landing__section-head[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto 2.75rem;\n}\n.landing__h2[_ngcontent-%COMP%] {\n  font-size: clamp(1.5rem, 3vw, 2rem);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  margin: 0 0 0.75rem;\n}\n.landing__h2--light[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.landing__sub[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fo-muted);\n  line-height: 1.6;\n}\n.landing__h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem;\n}\n.landing__why[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.landing__cards[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1.25rem;\n}\n.landing__cards--4[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(4, 1fr);\n}\n.landing__card[_ngcontent-%COMP%] {\n  background: var(--fo-card);\n  border: 1px solid #e2e8f0;\n  border-radius: var(--fo-radius);\n  padding: 1.5rem 1.35rem;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.landing__card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--fo-shadow-hover);\n  border-color: rgba(124, 58, 237, 0.25);\n}\n.landing__card-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  border-radius: 14px;\n  background: var(--fo-violet-soft);\n  margin-bottom: 1rem;\n}\n.landing__card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fo-muted);\n  font-size: 0.95rem;\n  line-height: 1.55;\n}\n.landing__features[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #fff 100%);\n}\n.landing__feature-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.landing__feature[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--fo-radius);\n  padding: 1.5rem 1.35rem;\n  position: relative;\n  overflow: hidden;\n  transition: border-color 0.2s ease;\n}\n.landing__feature[_ngcontent-%COMP%]:hover {\n  border-color: rgba(29, 78, 216, 0.35);\n}\n.landing__feature--wide[_ngcontent-%COMP%] {\n  grid-column: 1 / -1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(238, 242, 255, 0.9) 0%,\n      #fff 60%);\n}\n.landing__feature-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--fo-blue);\n  background: rgba(29, 78, 216, 0.08);\n  padding: 0.2rem 0.55rem;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.landing__feature[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.15rem;\n}\n.landing__feature[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fo-muted);\n  line-height: 1.55;\n}\n.landing__path[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.landing__timeline[_ngcontent-%COMP%] {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.landing__step[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.85rem;\n  align-items: flex-start;\n  padding: 1.25rem;\n  border-radius: var(--fo-radius);\n  border: 1px solid #e2e8f0;\n  background: #fafafa;\n  transition: background 0.2s ease, border-color 0.2s ease;\n}\n.landing__step[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  border-color: rgba(5, 150, 105, 0.35);\n}\n.landing__step-num[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--fo-blue),\n      var(--fo-violet));\n  color: #fff;\n  font-weight: 800;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.landing__step-ico[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 0.35rem;\n}\n.landing__step-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--fo-muted);\n  font-size: 0.92rem;\n  line-height: 1.5;\n}\n.landing__stats[_ngcontent-%COMP%] {\n  padding: 3rem 1.25rem;\n  background:\n    linear-gradient(\n      120deg,\n      var(--fo-blue-deep) 0%,\n      #312e81 50%,\n      #1e3a5f 100%);\n  color: #e2e8f0;\n}\n.landing__stats-inner[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1rem;\n  text-align: center;\n}\n.landing__stat[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.landing__stat-val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: clamp(1.35rem, 3vw, 1.85rem);\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.landing__stat[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.landing__testi[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #fff 100%);\n}\n.landing__testi-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n.landing__testi-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--fo-radius);\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.landing__testi-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--fo-shadow);\n}\n.landing__stars[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 1rem;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.75rem;\n}\n.landing__stars[_ngcontent-%COMP%]   .is-off[_ngcontent-%COMP%] {\n  color: #e2e8f0;\n}\n.landing__testi-text[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-style: italic;\n  color: var(--fo-slate);\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n.landing__testi-user[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.landing__testi-user[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--fo-violet-soft);\n}\n.landing__testi-user[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n}\n.landing__testi-user[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--fo-muted);\n}\n.landing__cta[_ngcontent-%COMP%] {\n  padding: 4rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e3a8a 55%,\n      #312e81 100%);\n  color: #cbd5e1;\n}\n.landing__cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.landing__cta-copy[_ngcontent-%COMP%] {\n  max-width: 520px;\n}\n.landing__cta-copy[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  line-height: 1.6;\n}\n.landing__cta-btns[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.landing__btn-light[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  font-weight: 700 !important;\n  padding: 0.5rem 1.35rem !important;\n}\n.landing__btn-outline[_ngcontent-%COMP%] {\n  border-radius: 999px !important;\n  font-weight: 600 !important;\n  color: #fff !important;\n  border-color: rgba(255, 255, 255, 0.45) !important;\n}\n@media (max-width: 1024px) {\n  .landing__hero-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .landing__hero-copy[_ngcontent-%COMP%] {\n    order: 0;\n  }\n  .landing__lead[_ngcontent-%COMP%] {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .landing__hero-cta[_ngcontent-%COMP%], \n   .landing__hero-bullets[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n  .landing__hero-float--1[_ngcontent-%COMP%] {\n    left: 4%;\n  }\n  .landing__hero-float--2[_ngcontent-%COMP%] {\n    right: 4%;\n  }\n  .landing__cards--4[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .landing__timeline[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .landing__stats-inner[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .landing__testi-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .landing__hero[_ngcontent-%COMP%] {\n    padding-top: 5rem;\n  }\n  .landing__cards--4[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .landing__feature-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .landing__timeline[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .landing__stats-inner[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .landing__hero-float[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .landing__cta-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .landing__cta-btns[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=landing-home.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingHomeComponent, [{
    type: Component,
    args: [{ selector: "app-landing-home", standalone: false, template: `<div class="landing">\r
  <app-fo-navbar />\r
\r
  <section class="landing__hero">\r
    <div class="landing__hero-inner">\r
      <div class="landing__hero-copy">\r
        <p class="landing__badge">Plateforme e-learning nouvelle g\xE9n\xE9ration</p>\r
        <h1 class="landing__h1">Apprenez autrement, <span class="landing__gradient">progressez chaque jour</span></h1>\r
        <p class="landing__lead">\r
          Votre espace moderne pour suivre des modules structur\xE9s, des cours enrichis et des quiz interactifs \u2014 avec un\r
          suivi clair de votre r\xE9ussite.\r
        </p>\r
        <div class="landing__hero-cta">\r
          <button type="button" mat-flat-button color="primary" class="landing__btn-main" (click)="demarrer()">\r
            D\xE9marrer\r
          </button>\r
          <button type="button" mat-stroked-button class="landing__btn-ghost" (click)="decouvrirCours()">\r
            D\xE9couvrir les cours\r
          </button>\r
        </div>\r
        <ul class="landing__hero-bullets" aria-label="Points cl\xE9s">\r
          <li><span class="landing__tick">\u2713</span> Parcours par modules</li>\r
          <li><span class="landing__tick">\u2713</span> Quiz & \xE9valuations</li>\r
          <li><span class="landing__tick">\u2713</span> Suivi de progression</li>\r
        </ul>\r
      </div>\r
      <div class="landing__hero-visual">\r
        <div class="landing__hero-card">\r
          <img\r
            class="landing__hero-img"\r
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80"\r
            width="440"\r
            height="330"\r
            alt="\xC9tudiants collaborant sur un projet e-learning"\r
            loading="eager"\r
          />\r
          <div class="landing__hero-float landing__hero-float--1">\r
            <span class="landing__mini-icon">\u{1F4CA}</span>\r
            <span>Progression suivie</span>\r
          </div>\r
          <div class="landing__hero-float landing__hero-float--2">\r
            <span class="landing__mini-icon">\u{1F3AF}</span>\r
            <span>Objectifs clairs</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="landing__section landing__why" id="apropos">\r
    <div class="landing__container">\r
      <header class="landing__section-head">\r
        <h2 class="landing__h2">Pourquoi choisir Fluency ?</h2>\r
        <p class="landing__sub">Une exp\xE9rience pens\xE9e pour la r\xE9ussite des apprenants et la clart\xE9 des parcours.</p>\r
      </header>\r
      <div class="landing__cards landing__cards--4">\r
        <article class="landing__card">\r
          <div class="landing__card-icon" aria-hidden="true">\u{1F550}</div>\r
          <h3 class="landing__h3">Apprentissage flexible</h3>\r
          <p>Acc\xE9dez aux contenus o\xF9 et quand vous voulez, \xE0 votre rythme.</p>\r
        </article>\r
        <article class="landing__card">\r
          <div class="landing__card-icon" aria-hidden="true">\u{1F9E0}</div>\r
          <h3 class="landing__h3">Quiz interactifs</h3>\r
          <p>Questions vari\xE9es pour ancrer les notions et mesurer votre niveau.</p>\r
        </article>\r
        <article class="landing__card">\r
          <div class="landing__card-icon" aria-hidden="true">\u{1F4C8}</div>\r
          <h3 class="landing__h3">Suivi de progression</h3>\r
          <p>Visualisez vos avancements module par module.</p>\r
        </article>\r
        <article class="landing__card">\r
          <div class="landing__card-icon" aria-hidden="true">\u{1F393}</div>\r
          <h3 class="landing__h3">Parcours structur\xE9s</h3>\r
          <p>Modules et cours organis\xE9s pour une mont\xE9e en comp\xE9tences logique.</p>\r
        </article>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="landing__section landing__features">\r
    <div class="landing__container">\r
      <header class="landing__section-head">\r
        <h2 class="landing__h2">Nos fonctionnalit\xE9s</h2>\r
        <p class="landing__sub">Tout ce dont vous avez besoin pour former, \xE9valuer et progresser.</p>\r
      </header>\r
      <div class="landing__feature-grid">\r
        <div class="landing__feature">\r
          <span class="landing__feature-badge">01</span>\r
          <h3>Modules</h3>\r
          <p>Regroupez vos contenus par th\xE9matique, niveau et dur\xE9e.</p>\r
        </div>\r
        <div class="landing__feature">\r
          <span class="landing__feature-badge">02</span>\r
          <h3>Cours</h3>\r
          <p>Le\xE7ons riches : texte, m\xE9dias et ressources li\xE9es \xE0 chaque module.</p>\r
        </div>\r
        <div class="landing__feature">\r
          <span class="landing__feature-badge">03</span>\r
          <h3>Quiz</h3>\r
          <p>\xC9valuez les acquis avec des bar\xE8mes et scores adapt\xE9s.</p>\r
        </div>\r
        <div class="landing__feature">\r
          <span class="landing__feature-badge">04</span>\r
          <h3>Questions & r\xE9ponses</h3>\r
          <p>Banques de questions et corrections pour un apprentissage actif.</p>\r
        </div>\r
        <div class="landing__feature landing__feature--wide">\r
          <span class="landing__feature-badge">05</span>\r
          <h3>Exp\xE9rience utilisateur</h3>\r
          <p>Interface sobre, lisible et agr\xE9able \u2014 pour rester concentr\xE9 sur l\u2019essentiel : apprendre.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="landing__section landing__path">\r
    <div class="landing__container">\r
      <header class="landing__section-head">\r
        <h2 class="landing__h2">Votre parcours d\u2019apprentissage</h2>\r
        <p class="landing__sub">Un sc\xE9nario simple, du premier clic \xE0 la r\xE9ussite.</p>\r
      </header>\r
      <ol class="landing__timeline">\r
        @for (e of etapes; track e.titre; let i = $index) {\r
          <li class="landing__step">\r
            <div class="landing__step-num">{{ i + 1 }}</div>\r
            <div class="landing__step-body">\r
              <span class="landing__step-ico">{{ e.icon }}</span>\r
              <h3 class="landing__h3">{{ e.titre }}</h3>\r
              <p>{{ e.desc }}</p>\r
            </div>\r
          </li>\r
        }\r
      </ol>\r
    </div>\r
  </section>\r
\r
  <section class="landing__stats" aria-label="Chiffres cl\xE9s">\r
    <div class="landing__container landing__stats-inner">\r
      <div class="landing__stat">\r
        <strong class="landing__stat-val">{{ stats.modules }}+</strong>\r
        <span>Modules</span>\r
      </div>\r
      <div class="landing__stat">\r
        <strong class="landing__stat-val">{{ stats.cours }}+</strong>\r
        <span>Cours</span>\r
      </div>\r
      <div class="landing__stat">\r
        <strong class="landing__stat-val">{{ stats.quiz }}+</strong>\r
        <span>Quiz</span>\r
      </div>\r
      <div class="landing__stat">\r
        <strong class="landing__stat-val">{{ stats.apprenants | number: '1.0-0' }}</strong>\r
        <span>Apprenants</span>\r
      </div>\r
      <div class="landing__stat">\r
        <strong class="landing__stat-val">{{ stats.reussite }}%</strong>\r
        <span>Taux de r\xE9ussite</span>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="landing__section landing__testi">\r
    <div class="landing__container">\r
      <header class="landing__section-head">\r
        <h2 class="landing__h2">Ils progressent avec Fluency</h2>\r
        <p class="landing__sub">T\xE9moignages d\u2019apprenants \u2014 avis fictifs \xE0 titre illustratif.</p>\r
      </header>\r
      <div class="landing__testi-grid">\r
        @for (t of temoignages; track t.nom) {\r
          <article class="landing__testi-card">\r
            <div class="landing__stars" [attr.aria-label]="t.note + ' sur 5'">\r
              @for (s of [1, 2, 3, 4, 5]; track s) {\r
                <span [class.is-off]="s > t.note">\u2605</span>\r
              }\r
            </div>\r
            <p class="landing__testi-text">\xAB {{ t.texte }} \xBB</p>\r
            <div class="landing__testi-user">\r
              <img [src]="t.avatar" [alt]="'Avatar ' + t.nom" width="48" height="48" loading="lazy" />\r
              <div>\r
                <strong>{{ t.nom }}</strong>\r
                <span>{{ t.role }}</span>\r
              </div>\r
            </div>\r
          </article>\r
        }\r
      </div>\r
    </div>\r
  </section>\r
\r
  <section class="landing__cta" id="contact">\r
    <div class="landing__container landing__cta-inner">\r
      <div class="landing__cta-copy">\r
        <h2 class="landing__h2 landing__h2--light">Pr\xEAt \xE0 commencer ?</h2>\r
        <p>Rejoignez un parcours clair, des contenus de qualit\xE9 et une communaut\xE9 qui apprend chaque jour.</p>\r
      </div>\r
      <div class="landing__cta-btns">\r
        <button type="button" mat-flat-button color="accent" class="landing__btn-light" (click)="commencerMaintenant()">\r
          Commencer maintenant\r
        </button>\r
        <button type="button" mat-stroked-button class="landing__btn-outline" (click)="explorerModules()">\r
          Explorer les modules\r
        </button>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <app-fo-footer />\r
</div>\r
`, styles: ["/* src/app/front-office/landing-home/landing-home.component.css */\n.landing {\n  --fo-blue: #1d4ed8;\n  --fo-blue-deep: #1e3a8a;\n  --fo-violet: #7c3aed;\n  --fo-violet-soft: #ede9fe;\n  --fo-green: #059669;\n  --fo-green-soft: #d1fae5;\n  --fo-slate: #0f172a;\n  --fo-muted: #64748b;\n  --fo-bg: #f8fafc;\n  --fo-card: #ffffff;\n  --fo-radius: 16px;\n  --fo-shadow: 0 12px 40px rgba(15, 23, 42, 0.08);\n  --fo-shadow-hover: 0 20px 50px rgba(30, 64, 175, 0.12);\n  color: var(--fo-slate);\n  background: var(--fo-bg);\n  min-height: 100vh;\n}\n.landing__container {\n  max-width: 1120px;\n  margin: 0 auto;\n  padding: 0 1.25rem;\n}\n.landing__hero {\n  padding: 5.5rem 1.25rem 4rem;\n  background:\n    radial-gradient(\n      1200px 500px at 10% -10%,\n      rgba(124, 58, 237, 0.12),\n      transparent 55%),\n    radial-gradient(\n      900px 400px at 90% 20%,\n      rgba(29, 78, 216, 0.1),\n      transparent 50%),\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 45%,\n      #f8fafc 100%);\n}\n.landing__hero-inner {\n  max-width: 1120px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 2.5rem;\n  align-items: center;\n}\n.landing__badge {\n  display: inline-block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  letter-spacing: 0.02em;\n  color: var(--fo-blue-deep);\n  background: rgba(255, 255, 255, 0.85);\n  border: 1px solid rgba(29, 78, 216, 0.2);\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  margin: 0 0 1rem;\n}\n.landing__h1 {\n  font-size: clamp(2rem, 4vw, 2.75rem);\n  font-weight: 800;\n  line-height: 1.15;\n  letter-spacing: -0.03em;\n  margin: 0 0 1rem;\n}\n.landing__gradient {\n  background:\n    linear-gradient(\n      120deg,\n      var(--fo-blue) 0%,\n      var(--fo-violet) 55%,\n      var(--fo-green) 110%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  color: transparent;\n}\n.landing__lead {\n  font-size: 1.05rem;\n  line-height: 1.65;\n  color: var(--fo-muted);\n  margin: 0 0 1.75rem;\n  max-width: 34rem;\n}\n.landing__hero-cta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-bottom: 1.5rem;\n}\n.landing__btn-main {\n  padding: 0.5rem 1.35rem !important;\n  font-weight: 600 !important;\n  border-radius: 999px !important;\n}\n.landing__btn-ghost {\n  border-radius: 999px !important;\n  font-weight: 600 !important;\n  border-color: rgba(29, 78, 216, 0.35) !important;\n}\n.landing__hero-bullets {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1.25rem;\n  font-size: 0.9rem;\n  color: var(--fo-muted);\n}\n.landing__tick {\n  color: var(--fo-green);\n  font-weight: 700;\n  margin-right: 0.25rem;\n}\n.landing__hero-visual {\n  position: relative;\n}\n.landing__hero-card {\n  position: relative;\n  border-radius: var(--fo-radius);\n  overflow: visible;\n  box-shadow: var(--fo-shadow);\n}\n.landing__hero-img {\n  display: block;\n  width: 100%;\n  height: auto;\n  border-radius: var(--fo-radius);\n  object-fit: cover;\n  border: 1px solid rgba(15, 23, 42, 0.06);\n}\n.landing__hero-float {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #fff;\n  padding: 0.6rem 0.9rem;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  box-shadow: 0 8px 24px rgba(15, 23, 42, 0.1);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  animation: fo-float 5s ease-in-out infinite;\n}\n.landing__hero-float--1 {\n  bottom: 12%;\n  left: -8%;\n}\n.landing__hero-float--2 {\n  top: 10%;\n  right: -5%;\n  animation-delay: -2s;\n}\n.landing__mini-icon {\n  font-size: 1.1rem;\n}\n@keyframes fo-float {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-6px);\n  }\n}\n.landing__section {\n  padding: 4rem 0;\n}\n.landing__section-head {\n  text-align: center;\n  max-width: 640px;\n  margin: 0 auto 2.75rem;\n}\n.landing__h2 {\n  font-size: clamp(1.5rem, 3vw, 2rem);\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  margin: 0 0 0.75rem;\n}\n.landing__h2--light {\n  color: #fff;\n}\n.landing__sub {\n  margin: 0;\n  color: var(--fo-muted);\n  line-height: 1.6;\n}\n.landing__h3 {\n  font-size: 1.1rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem;\n}\n.landing__why {\n  background: #fff;\n}\n.landing__cards {\n  display: grid;\n  gap: 1.25rem;\n}\n.landing__cards--4 {\n  grid-template-columns: repeat(4, 1fr);\n}\n.landing__card {\n  background: var(--fo-card);\n  border: 1px solid #e2e8f0;\n  border-radius: var(--fo-radius);\n  padding: 1.5rem 1.35rem;\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.landing__card:hover {\n  transform: translateY(-4px);\n  box-shadow: var(--fo-shadow-hover);\n  border-color: rgba(124, 58, 237, 0.25);\n}\n.landing__card-icon {\n  width: 48px;\n  height: 48px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 1.5rem;\n  border-radius: 14px;\n  background: var(--fo-violet-soft);\n  margin-bottom: 1rem;\n}\n.landing__card p {\n  margin: 0;\n  color: var(--fo-muted);\n  font-size: 0.95rem;\n  line-height: 1.55;\n}\n.landing__features {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #fff 100%);\n}\n.landing__feature-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n.landing__feature {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--fo-radius);\n  padding: 1.5rem 1.35rem;\n  position: relative;\n  overflow: hidden;\n  transition: border-color 0.2s ease;\n}\n.landing__feature:hover {\n  border-color: rgba(29, 78, 216, 0.35);\n}\n.landing__feature--wide {\n  grid-column: 1 / -1;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(238, 242, 255, 0.9) 0%,\n      #fff 60%);\n}\n.landing__feature-badge {\n  display: inline-block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: var(--fo-blue);\n  background: rgba(29, 78, 216, 0.08);\n  padding: 0.2rem 0.55rem;\n  border-radius: 8px;\n  margin-bottom: 0.75rem;\n}\n.landing__feature h3 {\n  margin: 0 0 0.5rem;\n  font-size: 1.15rem;\n}\n.landing__feature p {\n  margin: 0;\n  color: var(--fo-muted);\n  line-height: 1.55;\n}\n.landing__path {\n  background: #fff;\n}\n.landing__timeline {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.landing__step {\n  display: flex;\n  gap: 0.85rem;\n  align-items: flex-start;\n  padding: 1.25rem;\n  border-radius: var(--fo-radius);\n  border: 1px solid #e2e8f0;\n  background: #fafafa;\n  transition: background 0.2s ease, border-color 0.2s ease;\n}\n.landing__step:hover {\n  background: #fff;\n  border-color: rgba(5, 150, 105, 0.35);\n}\n.landing__step-num {\n  flex-shrink: 0;\n  width: 32px;\n  height: 32px;\n  border-radius: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      var(--fo-blue),\n      var(--fo-violet));\n  color: #fff;\n  font-weight: 800;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.landing__step-ico {\n  display: block;\n  font-size: 1.25rem;\n  margin-bottom: 0.35rem;\n}\n.landing__step-body p {\n  margin: 0;\n  color: var(--fo-muted);\n  font-size: 0.92rem;\n  line-height: 1.5;\n}\n.landing__stats {\n  padding: 3rem 1.25rem;\n  background:\n    linear-gradient(\n      120deg,\n      var(--fo-blue-deep) 0%,\n      #312e81 50%,\n      #1e3a5f 100%);\n  color: #e2e8f0;\n}\n.landing__stats-inner {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 1rem;\n  text-align: center;\n}\n.landing__stat {\n  padding: 1rem;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.06);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n}\n.landing__stat-val {\n  display: block;\n  font-size: clamp(1.35rem, 3vw, 1.85rem);\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -0.02em;\n}\n.landing__stat span:last-child {\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.landing__testi {\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #fff 100%);\n}\n.landing__testi-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1.25rem;\n}\n.landing__testi-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: var(--fo-radius);\n  padding: 1.5rem;\n  box-shadow: 0 4px 20px rgba(15, 23, 42, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.landing__testi-card:hover {\n  transform: translateY(-3px);\n  box-shadow: var(--fo-shadow);\n}\n.landing__stars {\n  color: #fbbf24;\n  font-size: 1rem;\n  letter-spacing: 0.05em;\n  margin-bottom: 0.75rem;\n}\n.landing__stars .is-off {\n  color: #e2e8f0;\n}\n.landing__testi-text {\n  margin: 0 0 1.25rem;\n  font-style: italic;\n  color: var(--fo-slate);\n  line-height: 1.55;\n  font-size: 0.95rem;\n}\n.landing__testi-user {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.landing__testi-user img {\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid var(--fo-violet-soft);\n}\n.landing__testi-user strong {\n  display: block;\n  font-size: 0.95rem;\n}\n.landing__testi-user span {\n  font-size: 0.82rem;\n  color: var(--fo-muted);\n}\n.landing__cta {\n  padding: 4rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #0f172a 0%,\n      #1e3a8a 55%,\n      #312e81 100%);\n  color: #cbd5e1;\n}\n.landing__cta-inner {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.landing__cta-copy {\n  max-width: 520px;\n}\n.landing__cta-copy p {\n  margin: 0.5rem 0 0;\n  line-height: 1.6;\n}\n.landing__cta-btns {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.landing__btn-light {\n  border-radius: 999px !important;\n  font-weight: 700 !important;\n  padding: 0.5rem 1.35rem !important;\n}\n.landing__btn-outline {\n  border-radius: 999px !important;\n  font-weight: 600 !important;\n  color: #fff !important;\n  border-color: rgba(255, 255, 255, 0.45) !important;\n}\n@media (max-width: 1024px) {\n  .landing__hero-inner {\n    grid-template-columns: 1fr;\n    text-align: center;\n  }\n  .landing__hero-copy {\n    order: 0;\n  }\n  .landing__lead {\n    margin-left: auto;\n    margin-right: auto;\n  }\n  .landing__hero-cta,\n  .landing__hero-bullets {\n    justify-content: center;\n  }\n  .landing__hero-float--1 {\n    left: 4%;\n  }\n  .landing__hero-float--2 {\n    right: 4%;\n  }\n  .landing__cards--4 {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .landing__timeline {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .landing__stats-inner {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .landing__testi-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 640px) {\n  .landing__hero {\n    padding-top: 5rem;\n  }\n  .landing__cards--4 {\n    grid-template-columns: 1fr;\n  }\n  .landing__feature-grid {\n    grid-template-columns: 1fr;\n  }\n  .landing__timeline {\n    grid-template-columns: 1fr;\n  }\n  .landing__stats-inner {\n    grid-template-columns: 1fr;\n  }\n  .landing__hero-float {\n    display: none;\n  }\n  .landing__cta-inner {\n    flex-direction: column;\n    align-items: stretch;\n    text-align: center;\n  }\n  .landing__cta-btns {\n    justify-content: center;\n  }\n}\n/*# sourceMappingURL=landing-home.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingHomeComponent, { className: "LandingHomeComponent", filePath: "src/app/front-office/landing-home/landing-home.component.ts", lineNumber: 19 });
})();

// src/app/layouts/student-layout/student-layout.component.ts
var _c06 = () => ({ exact: true });
var StudentLayoutComponent = class _StudentLayoutComponent {
  auth = inject(AuthService);
  router = inject(Router);
  menuOpen = false;
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  logout() {
    this.auth.logout();
    void this.router.navigate(["/"]);
  }
  static \u0275fac = function StudentLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentLayoutComponent, selectors: [["app-student-layout"]], standalone: false, decls: 38, vars: 12, consts: [[1, "st"], [1, "st-header"], [1, "st-header__inner"], ["routerLink", "/student/modules", 1, "st-brand", 3, "click"], ["aria-hidden", "true", 1, "st-brand__mark"], [1, "st-brand__text"], [1, "st-brand__pill"], ["type", "button", "aria-label", "Menu", 1, "st-burger", 3, "click"], [1, "st-nav"], ["routerLink", "/student/modules", "routerLinkActive", "is-active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/student/cours", "routerLinkActive", "is-active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/student/cours", "fragment", "passer-quiz", "routerLinkActive", "is-active", 3, "click", "routerLinkActiveOptions"], ["routerLink", "/student/recommandations", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/student/recherche", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/student/statistiques", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/student/resultat", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/student/certificats", "routerLinkActive", "is-active", 3, "click"], [1, "st-actions"], ["title", "Session locale", 1, "st-email"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], [1, "st-main"]], template: function StudentLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "a", 3);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_3_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "span", 5);
      \u0275\u0275text(7, "Fluency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "span", 6);
      \u0275\u0275text(9, "\xC9tudiant");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 7);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_button_click_10_listener() {
        return ctx.toggleMenu();
      });
      \u0275\u0275element(11, "span")(12, "span")(13, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "nav", 8)(15, "a", 9);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_15_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(16, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "a", 10);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_17_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(18, "Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "a", 11);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_19_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(20, "Passer quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "a", 12);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_21_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(22, "Recommandations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "a", 13);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_23_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(24, "Recherche");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "a", 14);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_25_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(26, "Statistiques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "a", 15);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_27_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(28, "Dernier r\xE9sultat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "a", 16);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_a_click_29_listener() {
        return ctx.closeMenu();
      });
      \u0275\u0275text(30, "Mes certificats");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 17)(32, "span", 18);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 19);
      \u0275\u0275listener("click", function StudentLayoutComponent_Template_button_click_34_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(35, "D\xE9connexion");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(36, "main", 20);
      \u0275\u0275element(37, "router-outlet");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275classProp("st-header--open", ctx.menuOpen);
      \u0275\u0275advance(9);
      \u0275\u0275attribute("aria-expanded", ctx.menuOpen);
      \u0275\u0275advance(4);
      \u0275\u0275classProp("st-nav--open", ctx.menuOpen);
      \u0275\u0275advance();
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(9, _c06));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(10, _c06));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(11, _c06));
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(ctx.auth.email());
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, MatButton], styles: ["\n\n.st[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 35%,\n      #f1f5f9 100%);\n}\n.st-header[_ngcontent-%COMP%] {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(148, 163, 184, 0.35);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);\n}\n.st-header__inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0.65rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.st-brand[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  text-decoration: none;\n  color: #1e1b4b;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  margin-right: auto;\n}\n.st-brand__mark[_ngcontent-%COMP%] {\n  color: #6366f1;\n  font-size: 1.1rem;\n}\n.st-brand__pill[_ngcontent-%COMP%] {\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #e0e7ff);\n  color: #4338ca;\n}\n.st-nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem 1rem;\n  align-items: center;\n}\n.st-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #475569;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 0.35rem 0;\n  border-bottom: 2px solid transparent;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n.st-nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #312e81;\n}\n.st-nav[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  border-bottom-color: #4f46e5;\n}\n.st-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.st-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #64748b;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.st-burger[_ngcontent-%COMP%] {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 42px;\n  height: 42px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n}\n.st-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 2px;\n  background: #334155;\n  border-radius: 2px;\n}\n.st-main[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem 1.25rem 2.5rem;\n}\n@media (max-width: 960px) {\n  .st-burger[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .st-nav[_ngcontent-%COMP%] {\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0.5rem 0 0;\n  }\n  .st-header--open[_ngcontent-%COMP%]   .st-nav[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .st-actions[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n/*# sourceMappingURL=student-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-student-layout", standalone: false, template: '<div class="st">\n  <header class="st-header" [class.st-header--open]="menuOpen">\n    <div class="st-header__inner">\n      <a routerLink="/student/modules" class="st-brand" (click)="closeMenu()">\n        <span class="st-brand__mark" aria-hidden="true">\u25C6</span>\n        <span class="st-brand__text">Fluency</span>\n        <span class="st-brand__pill">\xC9tudiant</span>\n      </a>\n\n      <button\n        type="button"\n        class="st-burger"\n        [attr.aria-expanded]="menuOpen"\n        aria-label="Menu"\n        (click)="toggleMenu()"\n      >\n        <span></span><span></span><span></span>\n      </button>\n\n      <nav class="st-nav" [class.st-nav--open]="menuOpen">\n        <a routerLink="/student/modules" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Modules</a>\n        <a routerLink="/student/cours" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Cours</a>\n        <a routerLink="/student/cours" fragment="passer-quiz" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeMenu()">Passer quiz</a>\n        <a routerLink="/student/recommandations" routerLinkActive="is-active" (click)="closeMenu()">Recommandations</a>\n        <a routerLink="/student/recherche" routerLinkActive="is-active" (click)="closeMenu()">Recherche</a>\n        <a routerLink="/student/statistiques" routerLinkActive="is-active" (click)="closeMenu()">Statistiques</a>\n        <a routerLink="/student/resultat" routerLinkActive="is-active" (click)="closeMenu()">Dernier r\xE9sultat</a>\n        <a routerLink="/student/certificats" routerLinkActive="is-active" (click)="closeMenu()">Mes certificats</a>\n      </nav>\n\n      <div class="st-actions">\n        <span class="st-email" title="Session locale">{{ auth.email() }}</span>\n        <button mat-stroked-button type="button" color="primary" (click)="logout()">D\xE9connexion</button>\n      </div>\n    </div>\n  </header>\n\n  <main class="st-main">\n    <router-outlet />\n  </main>\n</div>\n', styles: ["/* src/app/layouts/student-layout/student-layout.component.css */\n.st {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #f8fafc 0%,\n      #eef2ff 35%,\n      #f1f5f9 100%);\n}\n.st-header {\n  position: sticky;\n  top: 0;\n  z-index: 40;\n  background: rgba(255, 255, 255, 0.85);\n  -webkit-backdrop-filter: blur(12px);\n  backdrop-filter: blur(12px);\n  border-bottom: 1px solid rgba(148, 163, 184, 0.35);\n  box-shadow: 0 4px 24px rgba(15, 23, 42, 0.06);\n}\n.st-header__inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0.65rem 1.25rem;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.st-brand {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  text-decoration: none;\n  color: #1e1b4b;\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  margin-right: auto;\n}\n.st-brand__mark {\n  color: #6366f1;\n  font-size: 1.1rem;\n}\n.st-brand__pill {\n  font-size: 0.65rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  padding: 0.2rem 0.5rem;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      135deg,\n      #dbeafe,\n      #e0e7ff);\n  color: #4338ca;\n}\n.st-nav {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem 1rem;\n  align-items: center;\n}\n.st-nav a {\n  color: #475569;\n  text-decoration: none;\n  font-size: 0.88rem;\n  font-weight: 600;\n  padding: 0.35rem 0;\n  border-bottom: 2px solid transparent;\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n.st-nav a:hover {\n  color: #312e81;\n}\n.st-nav a.is-active {\n  color: #4f46e5;\n  border-bottom-color: #4f46e5;\n}\n.st-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.st-email {\n  font-size: 0.8rem;\n  color: #64748b;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.st-burger {\n  display: none;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 42px;\n  height: 42px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n}\n.st-burger span {\n  display: block;\n  height: 2px;\n  background: #334155;\n  border-radius: 2px;\n}\n.st-main {\n  flex: 1;\n  width: 100%;\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 1.5rem 1.25rem 2.5rem;\n}\n@media (max-width: 960px) {\n  .st-burger {\n    display: flex;\n  }\n  .st-nav {\n    display: none;\n    width: 100%;\n    flex-direction: column;\n    align-items: flex-start;\n    padding: 0.5rem 0 0;\n  }\n  .st-header--open .st-nav {\n    display: flex;\n  }\n  .st-actions {\n    width: 100%;\n    justify-content: flex-end;\n  }\n}\n/*# sourceMappingURL=student-layout.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentLayoutComponent, { className: "StudentLayoutComponent", filePath: "src/app/layouts/student-layout/student-layout.component.ts", lineNumber: 11 });
})();

// src/app/layouts/teacher-layout/teacher-layout.component.ts
var _c07 = () => ({ exact: true });
var TeacherLayoutComponent = class _TeacherLayoutComponent {
  auth = inject(AuthService);
  router = inject(Router);
  sidebarOpen = false;
  onResize() {
    if (typeof window !== "undefined" && window.innerWidth > 1080) {
      this.sidebarOpen = false;
    }
  }
  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }
  closeSidebar() {
    this.sidebarOpen = false;
  }
  logout() {
    this.auth.logout();
    void this.router.navigate(["/"]);
  }
  static \u0275fac = function TeacherLayoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherLayoutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherLayoutComponent, selectors: [["app-teacher-layout"]], hostBindings: function TeacherLayoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275listener("resize", function TeacherLayoutComponent_resize_HostBindingHandler() {
        return ctx.onResize();
      }, \u0275\u0275resolveWindow);
    }
  }, standalone: false, decls: 52, vars: 7, consts: [[1, "tc"], [1, "tc-sidebar", 3, "click"], [1, "tc-sidebar__head", 3, "click"], ["routerLink", "/teacher/dashboard", 1, "tc-brand", 3, "click"], [1, "tc-brand__mark"], [1, "tc-brand__title"], [1, "tc-brand__sub"], [1, "tc-menu", 3, "click"], ["routerLink", "/teacher/dashboard", "routerLinkActive", "is-active", 3, "click", "routerLinkActiveOptions"], ["aria-hidden", "true", 1, "tc-ico"], ["routerLink", "/teacher/modules", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/teacher/cours", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/teacher/quizzes", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/teacher/questions", "routerLinkActive", "is-active", 3, "click"], ["routerLink", "/teacher/reponses", "routerLinkActive", "is-active", 3, "click"], [1, "tc-sidebar__foot"], [1, "tc-user"], ["mat-stroked-button", "", "type", "button", "color", "primary", 1, "tc-logout", 3, "click"], ["aria-hidden", "true", 1, "tc-backdrop", 3, "click"], [1, "tc-main-wrap"], [1, "tc-topbar"], ["type", "button", "aria-label", "Menu", 1, "tc-burger", 3, "click"], [1, "tc-topbar__title"], [1, "tc-main"]], template: function TeacherLayoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "aside", 1);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_aside_click_1_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(2, "div", 2);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_div_click_2_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(3, "a", 3);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_3_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(4, "span", 4);
      \u0275\u0275text(5, "\u25C6");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div")(7, "span", 5);
      \u0275\u0275text(8, "Fluency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "span", 6);
      \u0275\u0275text(10, "Espace formateur");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(11, "nav", 7);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_nav_click_11_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(12, "a", 8);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_12_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(13, "span", 9);
      \u0275\u0275text(14, "\u25A3");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Tableau de bord ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "a", 10);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_16_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(17, "span", 9);
      \u0275\u0275text(18, "\u{1F4DA}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Modules ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "a", 11);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_20_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(21, "span", 9);
      \u0275\u0275text(22, "\u{1F4D6}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Cours ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "a", 12);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_24_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(25, "span", 9);
      \u0275\u0275text(26, "\u{1F4DD}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(27, " Quiz ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "a", 13);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_28_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(29, "span", 9);
      \u0275\u0275text(30, "\u2753");
      \u0275\u0275elementEnd();
      \u0275\u0275text(31, " Questions ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "a", 14);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_a_click_32_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementStart(33, "span", 9);
      \u0275\u0275text(34, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275text(35, " R\xE9ponses ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(36, "div", 15)(37, "p", 16);
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "button", 17);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_button_click_39_listener() {
        return ctx.logout();
      });
      \u0275\u0275text(40, "D\xE9connexion");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(41, "div", 18);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_div_click_41_listener() {
        return ctx.closeSidebar();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "div", 19)(43, "header", 20)(44, "button", 21);
      \u0275\u0275listener("click", function TeacherLayoutComponent_Template_button_click_44_listener() {
        return ctx.toggleSidebar();
      });
      \u0275\u0275element(45, "span")(46, "span")(47, "span");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "span", 22);
      \u0275\u0275text(49, "Administration p\xE9dagogique");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "main", 23);
      \u0275\u0275element(51, "router-outlet");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275classProp("tc--sidebar-open", ctx.sidebarOpen);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLinkActiveOptions", \u0275\u0275pureFunction0(6, _c07));
      \u0275\u0275advance(26);
      \u0275\u0275textInterpolate(ctx.auth.email());
      \u0275\u0275advance(3);
      \u0275\u0275classProp("tc-backdrop--on", ctx.sidebarOpen);
    }
  }, dependencies: [RouterOutlet, RouterLink, RouterLinkActive, MatButton], styles: ["\n\n.tc[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  background: #0f172a;\n  color: #e2e8f0;\n}\n.tc-sidebar[_ngcontent-%COMP%] {\n  width: 260px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #1e1b4b 0%,\n      #0f172a 100%);\n  border-right: 1px solid rgba(148, 163, 184, 0.15);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 30;\n}\n.tc-brand[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  text-decoration: none;\n  color: inherit;\n}\n.tc-brand__mark[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  color: #a5b4fc;\n}\n.tc-brand__title[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #fff;\n}\n.tc-brand__sub[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  margin-top: 0.15rem;\n}\n.tc-sidebar__head[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.1rem 1rem;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.12);\n}\n.tc-menu[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 0.65rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  overflow-y: auto;\n}\n.tc-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.65rem 0.85rem;\n  border-radius: 10px;\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.tc-menu[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: rgba(99, 102, 241, 0.15);\n  color: #fff;\n}\n.tc-menu[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.35),\n      rgba(129, 140, 248, 0.2));\n  color: #fff;\n  box-shadow: 0 0 0 1px rgba(165, 180, 252, 0.35);\n}\n.tc-ico[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  text-align: center;\n  opacity: 0.95;\n}\n.tc-sidebar__foot[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem 1.25rem;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n}\n.tc-user[_ngcontent-%COMP%] {\n  margin: 0 0 0.65rem;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  word-break: break-all;\n}\n.tc-logout[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.tc-main-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n}\n.tc-topbar[_ngcontent-%COMP%] {\n  display: none;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.65rem 1rem;\n  background: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.tc-topbar__title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.tc-burger[_ngcontent-%COMP%] {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n}\n.tc-burger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  height: 2px;\n  background: #334155;\n  border-radius: 2px;\n}\n.tc-main[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.25rem 1.25rem 2rem;\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n}\n.tc-backdrop[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 1080px) {\n  .tc-sidebar[_ngcontent-%COMP%] {\n    position: fixed;\n    left: 0;\n    top: 0;\n    transform: translateX(-102%);\n    transition: transform 0.25s ease;\n    box-shadow: 8px 0 32px rgba(15, 23, 42, 0.4);\n  }\n  .tc--sidebar-open[_ngcontent-%COMP%]   .tc-sidebar[_ngcontent-%COMP%] {\n    transform: translateX(0);\n  }\n  .tc-topbar[_ngcontent-%COMP%] {\n    display: flex;\n  }\n  .tc-backdrop[_ngcontent-%COMP%] {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.45);\n    z-index: 25;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease;\n  }\n  .tc-backdrop--on[_ngcontent-%COMP%] {\n    opacity: 1;\n    pointer-events: auto;\n  }\n}\n/*# sourceMappingURL=teacher-layout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherLayoutComponent, [{
    type: Component,
    args: [{ selector: "app-teacher-layout", standalone: false, template: '<div class="tc" [class.tc--sidebar-open]="sidebarOpen">\r\n  <aside class="tc-sidebar" (click)="closeSidebar()">\r\n    <div class="tc-sidebar__head" (click)="$event.stopPropagation()">\r\n      <a routerLink="/teacher/dashboard" class="tc-brand" (click)="closeSidebar()">\r\n        <span class="tc-brand__mark">\u25C6</span>\r\n        <div>\r\n          <span class="tc-brand__title">Fluency</span>\r\n          <span class="tc-brand__sub">Espace formateur</span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n\r\n    <nav class="tc-menu" (click)="$event.stopPropagation()">\r\n      <a routerLink="/teacher/dashboard" routerLinkActive="is-active" [routerLinkActiveOptions]="{ exact: true }" (click)="closeSidebar()">\r\n        <span class="tc-ico" aria-hidden="true">\u25A3</span> Tableau de bord\r\n      </a>\r\n      <a routerLink="/teacher/modules" routerLinkActive="is-active" (click)="closeSidebar()">\r\n        <span class="tc-ico" aria-hidden="true">\u{1F4DA}</span> Modules\r\n      </a>\r\n      <a routerLink="/teacher/cours" routerLinkActive="is-active" (click)="closeSidebar()">\r\n        <span class="tc-ico" aria-hidden="true">\u{1F4D6}</span> Cours\r\n      </a>\r\n      <a routerLink="/teacher/quizzes" routerLinkActive="is-active" (click)="closeSidebar()">\r\n        <span class="tc-ico" aria-hidden="true">\u{1F4DD}</span> Quiz\r\n      </a>\r\n      <a routerLink="/teacher/questions" routerLinkActive="is-active" (click)="closeSidebar()">\r\n        <span class="tc-ico" aria-hidden="true">\u2753</span> Questions\r\n      </a>\r\n      <a routerLink="/teacher/reponses" routerLinkActive="is-active" (click)="closeSidebar()">\r\n        <span class="tc-ico" aria-hidden="true">\u{1F4AC}</span> R\xE9ponses\r\n      </a>\r\n    </nav>\r\n\r\n    <div class="tc-sidebar__foot">\r\n      <p class="tc-user">{{ auth.email() }}</p>\r\n      <button mat-stroked-button type="button" color="primary" class="tc-logout" (click)="logout()">D\xE9connexion</button>\r\n    </div>\r\n  </aside>\r\n\r\n  <div\r\n    class="tc-backdrop"\r\n    [class.tc-backdrop--on]="sidebarOpen"\r\n    (click)="closeSidebar()"\r\n    aria-hidden="true"\r\n  ></div>\r\n\r\n  <div class="tc-main-wrap">\r\n    <header class="tc-topbar">\r\n      <button type="button" class="tc-burger" aria-label="Menu" (click)="toggleSidebar()">\r\n        <span></span><span></span><span></span>\r\n      </button>\r\n      <span class="tc-topbar__title">Administration p\xE9dagogique</span>\r\n    </header>\r\n    <main class="tc-main">\r\n      <router-outlet />\r\n    </main>\r\n  </div>\r\n</div>\r\n', styles: ["/* src/app/layouts/teacher-layout/teacher-layout.component.css */\n.tc {\n  min-height: 100vh;\n  display: flex;\n  background: #0f172a;\n  color: #e2e8f0;\n}\n.tc-sidebar {\n  width: 260px;\n  flex-shrink: 0;\n  background:\n    linear-gradient(\n      180deg,\n      #1e1b4b 0%,\n      #0f172a 100%);\n  border-right: 1px solid rgba(148, 163, 184, 0.15);\n  display: flex;\n  flex-direction: column;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  z-index: 30;\n}\n.tc-brand {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  text-decoration: none;\n  color: inherit;\n}\n.tc-brand__mark {\n  font-size: 1.35rem;\n  color: #a5b4fc;\n}\n.tc-brand__title {\n  display: block;\n  font-weight: 800;\n  letter-spacing: -0.02em;\n  color: #fff;\n}\n.tc-brand__sub {\n  display: block;\n  font-size: 0.72rem;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #94a3b8;\n  margin-top: 0.15rem;\n}\n.tc-sidebar__head {\n  padding: 1.25rem 1.1rem 1rem;\n  border-bottom: 1px solid rgba(148, 163, 184, 0.12);\n}\n.tc-menu {\n  flex: 1;\n  padding: 1rem 0.65rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n  overflow-y: auto;\n}\n.tc-menu a {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  padding: 0.65rem 0.85rem;\n  border-radius: 10px;\n  color: #cbd5e1;\n  text-decoration: none;\n  font-size: 0.9rem;\n  font-weight: 600;\n  transition: background 0.15s ease, color 0.15s ease;\n}\n.tc-menu a:hover {\n  background: rgba(99, 102, 241, 0.15);\n  color: #fff;\n}\n.tc-menu a.is-active {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(99, 102, 241, 0.35),\n      rgba(129, 140, 248, 0.2));\n  color: #fff;\n  box-shadow: 0 0 0 1px rgba(165, 180, 252, 0.35);\n}\n.tc-ico {\n  width: 1.5rem;\n  text-align: center;\n  opacity: 0.95;\n}\n.tc-sidebar__foot {\n  padding: 1rem 1.1rem 1.25rem;\n  border-top: 1px solid rgba(148, 163, 184, 0.12);\n}\n.tc-user {\n  margin: 0 0 0.65rem;\n  font-size: 0.78rem;\n  color: #94a3b8;\n  word-break: break-all;\n}\n.tc-logout {\n  width: 100%;\n}\n.tc-main-wrap {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  background:\n    linear-gradient(\n      180deg,\n      #f1f5f9 0%,\n      #e2e8f0 100%);\n}\n.tc-topbar {\n  display: none;\n  align-items: center;\n  gap: 1rem;\n  padding: 0.65rem 1rem;\n  background: rgba(255, 255, 255, 0.92);\n  border-bottom: 1px solid #e2e8f0;\n  position: sticky;\n  top: 0;\n  z-index: 20;\n}\n.tc-topbar__title {\n  font-weight: 700;\n  color: #0f172a;\n  font-size: 0.95rem;\n}\n.tc-burger {\n  display: inline-flex;\n  flex-direction: column;\n  justify-content: center;\n  gap: 5px;\n  width: 40px;\n  height: 40px;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  background: #fff;\n  cursor: pointer;\n}\n.tc-burger span {\n  display: block;\n  height: 2px;\n  background: #334155;\n  border-radius: 2px;\n}\n.tc-main {\n  flex: 1;\n  padding: 1.25rem 1.25rem 2rem;\n  max-width: 1280px;\n  width: 100%;\n  margin: 0 auto;\n}\n.tc-backdrop {\n  display: none;\n}\n@media (max-width: 1080px) {\n  .tc-sidebar {\n    position: fixed;\n    left: 0;\n    top: 0;\n    transform: translateX(-102%);\n    transition: transform 0.25s ease;\n    box-shadow: 8px 0 32px rgba(15, 23, 42, 0.4);\n  }\n  .tc--sidebar-open .tc-sidebar {\n    transform: translateX(0);\n  }\n  .tc-topbar {\n    display: flex;\n  }\n  .tc-backdrop {\n    display: block;\n    position: fixed;\n    inset: 0;\n    background: rgba(15, 23, 42, 0.45);\n    z-index: 25;\n    opacity: 0;\n    pointer-events: none;\n    transition: opacity 0.2s ease;\n  }\n  .tc-backdrop--on {\n    opacity: 1;\n    pointer-events: auto;\n  }\n}\n/*# sourceMappingURL=teacher-layout.component.css.map */\n"] }]
  }], null, { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherLayoutComponent, { className: "TeacherLayoutComponent", filePath: "src/app/layouts/teacher-layout/teacher-layout.component.ts", lineNumber: 11 });
})();

// src/app/services/module.service.ts
function moduleWriteBody(m) {
  return {
    titre: m.titre,
    description: m.description,
    niveau: m.niveau,
    categorie: m.categorie,
    dureeTotale: m.dureeTotale,
    actif: m.actif
  };
}
var ModuleService = class _ModuleService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAll() {
    return this.http.get(`${this.apiUrl}/modules`).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/modules/${id}`);
  }
  create(module) {
    return this.http.post(`${this.apiUrl}/modules`, moduleWriteBody(module));
  }
  update(id, module) {
    return this.http.put(`${this.apiUrl}/modules/${id}`, moduleWriteBody(module));
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/modules/${id}`);
  }
  static \u0275fac = function ModuleService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ModuleService, factory: _ModuleService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/modules/module-list/module-list.component.ts
function ModuleListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError());
  }
}
function ModuleListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Titre");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.titre);
  }
}
function ModuleListComponent_Conditional_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Niveau");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.niveau);
  }
}
function ModuleListComponent_Conditional_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.categorie);
  }
}
function ModuleListComponent_Conditional_8_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Dur\xE9e (h)");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.dureeTotale);
  }
}
function ModuleListComponent_Conditional_8_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Actif");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r6.actif ? "Oui" : "Non");
  }
}
function ModuleListComponent_Conditional_8_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "button", 24);
    \u0275\u0275listener("click", function ModuleListComponent_Conditional_8_td_19_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view(row_r8));
    });
    \u0275\u0275text(2, "Voir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function ModuleListComponent_Conditional_8_td_19_Template_button_click_3_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(row_r8));
    });
    \u0275\u0275text(4, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function ModuleListComponent_Conditional_8_td_19_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(row_r8));
    });
    \u0275\u0275text(6, "Supprimer");
    \u0275\u0275elementEnd()();
  }
}
function ModuleListComponent_Conditional_8_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function ModuleListComponent_Conditional_8_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function ModuleListComponent_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Aucun module pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function ModuleListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6);
    \u0275\u0275elementContainerStart(2, 7);
    \u0275\u0275template(3, ModuleListComponent_Conditional_8_th_3_Template, 2, 0, "th", 8)(4, ModuleListComponent_Conditional_8_td_4_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 10);
    \u0275\u0275template(6, ModuleListComponent_Conditional_8_th_6_Template, 2, 0, "th", 8)(7, ModuleListComponent_Conditional_8_td_7_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 11);
    \u0275\u0275template(9, ModuleListComponent_Conditional_8_th_9_Template, 2, 0, "th", 8)(10, ModuleListComponent_Conditional_8_td_10_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 12);
    \u0275\u0275template(12, ModuleListComponent_Conditional_8_th_12_Template, 2, 0, "th", 8)(13, ModuleListComponent_Conditional_8_td_13_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 13);
    \u0275\u0275template(15, ModuleListComponent_Conditional_8_th_15_Template, 2, 0, "th", 8)(16, ModuleListComponent_Conditional_8_td_16_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 14);
    \u0275\u0275template(18, ModuleListComponent_Conditional_8_th_18_Template, 2, 0, "th", 15)(19, ModuleListComponent_Conditional_8_td_19_Template, 7, 0, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, ModuleListComponent_Conditional_8_tr_20_Template, 1, 0, "tr", 17)(21, ModuleListComponent_Conditional_8_tr_21_Template, 1, 0, "tr", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, ModuleListComponent_Conditional_8_Conditional_22_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataSource.data.length === 0 ? 22 : -1);
  }
}
var HTTP_TIMEOUT_MS = 25e3;
var ModuleListComponent = class _ModuleListComponent {
  moduleService = inject(ModuleService);
  router = inject(Router);
  dialogService = inject(DialogService);
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["titre", "niveau", "categorie", "dureeTotale", "actif", "actions"];
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.loadError.set(null);
    this.moduleService.getAll().pipe(timeout(HTTP_TIMEOUT_MS), finalize(() => this.loading.set(false))).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.loadError.set(null);
      },
      error: () => {
        this.dataSource.data = [];
        this.loadError.set("Impossible de charger les modules (r\xE9seau, CORS ou serveur).");
      }
    });
  }
  add() {
    navigateLater(this.router, workspacePath(this.router, "modules", "new"));
  }
  view(m) {
    if (m.id != null) {
      navigateLater(this.router, workspacePath(this.router, "modules", m.id));
    }
  }
  edit(m) {
    if (m.id != null) {
      navigateLater(this.router, workspacePath(this.router, "modules", "edit", m.id));
    }
  }
  delete(m) {
    if (m.id == null)
      return;
    this.dialogService.confirm({
      title: "Supprimer le module",
      message: `Confirmer la suppression de \xAB ${m.titre} \xBB ?`
    }).subscribe((ok) => {
      if (ok) {
        this.moduleService.delete(m.id).subscribe({
          next: () => this.load(),
          error: () => alert("Erreur lors de la suppression.")
        });
      }
    });
  }
  static \u0275fac = function ModuleListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleListComponent, selectors: [["app-module-list"]], standalone: false, decls: 9, vars: 2, consts: [[1, "page"], [1, "page-head"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "app-alert-error"], [1, "muted"], [1, "table-wrap", "mat-elevation-z1"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "titre"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "niveau"], ["matColumnDef", "categorie"], ["matColumnDef", "dureeTotale"], ["matColumnDef", "actif"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "col-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty", "muted"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "col-actions"], ["mat-cell", "", 1, "col-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ModuleListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ModuleListComponent_Template_button_click_4_listener() {
        return ctx.add();
      });
      \u0275\u0275text(5, "Ajouter");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ModuleListComponent_Conditional_6_Template, 2, 1, "p", 3);
      \u0275\u0275conditionalCreate(7, ModuleListComponent_Conditional_7_Template, 2, 0, "p", 4)(8, ModuleListComponent_Conditional_8_Template, 23, 4, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButton], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=module-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleListComponent, [{
    type: Component,
    args: [{ selector: "app-module-list", standalone: false, template: `<div class="page">\r
  <div class="page-head">\r
    <h1>Modules</h1>\r
    <button mat-flat-button color="primary" type="button" (click)="add()">Ajouter</button>\r
  </div>\r
\r
  @if (loadError()) {\r
    <p class="app-alert-error">{{ loadError() }}</p>\r
  }\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <div class="table-wrap mat-elevation-z1">\r
      <table mat-table [dataSource]="dataSource" class="data-table">\r
        <ng-container matColumnDef="titre">\r
          <th mat-header-cell *matHeaderCellDef>Titre</th>\r
          <td mat-cell *matCellDef="let row">{{ row.titre }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="niveau">\r
          <th mat-header-cell *matHeaderCellDef>Niveau</th>\r
          <td mat-cell *matCellDef="let row">{{ row.niveau }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="categorie">\r
          <th mat-header-cell *matHeaderCellDef>Cat\xE9gorie</th>\r
          <td mat-cell *matCellDef="let row">{{ row.categorie }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="dureeTotale">\r
          <th mat-header-cell *matHeaderCellDef>Dur\xE9e (h)</th>\r
          <td mat-cell *matCellDef="let row">{{ row.dureeTotale }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="actif">\r
          <th mat-header-cell *matHeaderCellDef>Actif</th>\r
          <td mat-cell *matCellDef="let row">{{ row.actif ? 'Oui' : 'Non' }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="actions">\r
          <th mat-header-cell *matHeaderCellDef class="col-actions">Actions</th>\r
          <td mat-cell *matCellDef="let row" class="col-actions">\r
            <button mat-stroked-button type="button" (click)="view(row)">Voir</button>\r
            <button mat-stroked-button type="button" color="primary" (click)="edit(row)">Modifier</button>\r
            <button mat-stroked-button type="button" color="warn" (click)="delete(row)">Supprimer</button>\r
          </td>\r
        </ng-container>\r
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
      </table>\r
      @if (dataSource.data.length === 0) {\r
        <p class="empty muted">Aucun module pour le moment.</p>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/modules/module-list/module-list.component.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table {\n  width: 100%;\n}\n.col-actions {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions button {\n  margin-left: 0.35rem;\n}\n.empty {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=module-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleListComponent, { className: "ModuleListComponent", filePath: "src/app/pages/modules/module-list/module-list.component.ts", lineNumber: 19 });
})();

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
function takeUntilDestroyed(destroyRef) {
  if (!destroyRef) {
    ngDevMode && assertInInjectionContext(takeUntilDestroyed);
    destroyRef = inject(DestroyRef);
  }
  const destroyed$ = new Observable((subscriber) => {
    if (destroyRef.destroyed) {
      subscriber.next();
      return;
    }
    const unregisterFn = destroyRef.onDestroy(subscriber.next.bind(subscriber));
    return unregisterFn;
  });
  return (source) => {
    return source.pipe(takeUntil(destroyed$));
  };
}

// src/app/core/api-error.ts
function apiErrorMessage(err, fallback) {
  if (err instanceof HttpErrorResponse) {
    const e = err.error;
    if (typeof e === "string" && e.length) {
      return e;
    }
    if (e && typeof e === "object") {
      const msg = e.message;
      if (typeof msg === "string" && msg.length) {
        return msg;
      }
      const errs = e.errors;
      if (errs != null) {
        return JSON.stringify(errs);
      }
    }
    if (err.status === 400) {
      return "Requ\xEAte refus\xE9e (400) : v\xE9rifie les champs ou le format attendu par le serveur.";
    }
    return err.message || fallback;
  }
  return fallback;
}

// src/app/pages/modules/module-form/module-form.component.ts
function ModuleFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_4_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_4_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_4_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Valeur num\xE9rique valide requise");
    \u0275\u0275elementEnd();
  }
}
function ModuleFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 2)(1, "form", 3);
    \u0275\u0275listener("ngSubmit", function ModuleFormComponent_Conditional_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "mat-form-field", 4)(3, "mat-label");
    \u0275\u0275text(4, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 5);
    \u0275\u0275conditionalCreate(6, ModuleFormComponent_Conditional_4_Conditional_6_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 4)(8, "mat-label");
    \u0275\u0275text(9, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "textarea", 6);
    \u0275\u0275conditionalCreate(11, ModuleFormComponent_Conditional_4_Conditional_11_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-label");
    \u0275\u0275text(15, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 9);
    \u0275\u0275conditionalCreate(17, ModuleFormComponent_Conditional_4_Conditional_17_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-form-field", 8)(19, "mat-label");
    \u0275\u0275text(20, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "input", 10);
    \u0275\u0275conditionalCreate(22, ModuleFormComponent_Conditional_4_Conditional_22_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "mat-form-field", 11)(24, "mat-label");
    \u0275\u0275text(25, "Dur\xE9e totale (heures)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "input", 12);
    \u0275\u0275conditionalCreate(27, ModuleFormComponent_Conditional_4_Conditional_27_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 13)(29, "mat-checkbox", 14);
    \u0275\u0275text(30, "Actif");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 15)(32, "button", 16);
    \u0275\u0275listener("click", function ModuleFormComponent_Conditional_4_Template_button_click_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(33, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "button", 17);
    \u0275\u0275text(35, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.titre.touched && ctx_r1.form.controls.titre.hasError("required") ? 6 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.description.touched && ctx_r1.form.controls.description.hasError("required") ? 11 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.form.controls.niveau.touched && ctx_r1.form.controls.niveau.hasError("required") ? 17 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.categorie.touched && ctx_r1.form.controls.categorie.hasError("required") ? 22 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.dureeTotale.touched && ctx_r1.form.controls.dureeTotale.invalid ? 27 : -1);
  }
}
var HTTP_TIMEOUT_MS2 = 25e3;
var ModuleFormComponent = class _ModuleFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  moduleService = inject(ModuleService);
  editId = null;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  form = this.fb.nonNullable.group({
    titre: ["", Validators.required],
    description: ["", Validators.required],
    niveau: ["", Validators.required],
    categorie: ["", Validators.required],
    dureeTotale: [0, [Validators.required, Validators.min(0)]],
    actif: [true]
  });
  constructor() {
    combineLatest([this.route.paramMap, this.route.url]).pipe(takeUntilDestroyed(), map(([pm, segs]) => {
      const paths = segs.map((s) => s.path);
      const isEditRoute = paths.includes("edit");
      const raw = pm.get("id");
      const id = raw != null && Number.isFinite(+raw) ? +raw : null;
      return isEditRoute && id != null ? id : null;
    }), distinctUntilChanged(), tap((editId) => {
      if (editId == null) {
        this.editId = null;
        this.form.reset({
          titre: "",
          description: "",
          niveau: "",
          categorie: "",
          dureeTotale: 0,
          actif: true
        });
      }
    }), switchMap((editId) => {
      if (editId == null) {
        return of(void 0);
      }
      this.editId = editId;
      this.loading.set(true);
      return this.moduleService.getById(editId).pipe(timeout(HTTP_TIMEOUT_MS2), tap((m) => {
        this.form.patchValue({
          titre: m.titre,
          description: m.description,
          niveau: m.niveau,
          categorie: m.categorie,
          dureeTotale: m.dureeTotale,
          actif: m.actif
        });
      }), catchError(() => {
        alert("Impossible de charger le module.");
        void this.router.navigate(workspacePath(this.router, "modules"));
        return of(void 0);
      }), finalize(() => this.loading.set(false)));
    })).subscribe();
  }
  cancel() {
    void this.router.navigate(workspacePath(this.router, "modules"));
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const payload = {
      titre: v.titre.trim(),
      description: v.description.trim(),
      niveau: v.niveau.trim(),
      categorie: v.categorie.trim(),
      dureeTotale: num(v.dureeTotale),
      actif: !!v.actif
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.moduleService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, "modules", this.editId)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la mise \xE0 jour."))
      });
    } else {
      this.moduleService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, "modules", created.id)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la cr\xE9ation."))
      });
    }
  }
  static \u0275fac = function ModuleFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleFormComponent, selectors: [["app-module-form"]], standalone: false, decls: 5, vars: 2, consts: [[1, "page"], [1, "muted"], ["appearance", "outlined", 1, "form-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["matInput", "", "formControlName", "titre"], ["matInput", "", "rows", "3", "formControlName", "description"], [1, "row"], ["appearance", "outline", 1, "grow"], ["matInput", "", "formControlName", "niveau"], ["matInput", "", "formControlName", "categorie"], ["appearance", "outline", 1, "narrow"], ["matInput", "", "type", "number", "formControlName", "dureeTotale"], [1, "check-row"], ["formControlName", "actif"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"]], template: function ModuleFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ModuleFormComponent_Conditional_3_Template, 2, 0, "p", 1)(4, ModuleFormComponent_Conditional_4_Template, 36, 6, "mat-card", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId != null ? "Modifier le module" : "Nouveau module");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 3 : 4);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatCard, MatFormField, MatLabel, MatError, MatInput, MatCheckbox], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 220px;\n}\n.check-row[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 1rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=module-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleFormComponent, [{
    type: Component,
    args: [{ selector: "app-module-form", standalone: false, template: `<div class="page">\r
  <h1>{{ editId != null ? 'Modifier le module' : 'Nouveau module' }}</h1>\r
\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <mat-card appearance="outlined" class="form-card">\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Titre</mat-label>\r
          <input matInput formControlName="titre" />\r
          @if (form.controls.titre.touched && form.controls.titre.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Description</mat-label>\r
          <textarea matInput rows="3" formControlName="description"></textarea>\r
          @if (form.controls.description.touched && form.controls.description.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <div class="row">\r
          <mat-form-field appearance="outline" class="grow">\r
            <mat-label>Niveau</mat-label>\r
            <input matInput formControlName="niveau" />\r
            @if (form.controls.niveau.touched && form.controls.niveau.hasError('required')) {\r
              <mat-error>Requis</mat-error>\r
            }\r
          </mat-form-field>\r
          <mat-form-field appearance="outline" class="grow">\r
            <mat-label>Cat\xE9gorie</mat-label>\r
            <input matInput formControlName="categorie" />\r
            @if (form.controls.categorie.touched && form.controls.categorie.hasError('required')) {\r
              <mat-error>Requis</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <mat-form-field appearance="outline" class="narrow">\r
          <mat-label>Dur\xE9e totale (heures)</mat-label>\r
          <input matInput type="number" formControlName="dureeTotale" />\r
          @if (form.controls.dureeTotale.touched && form.controls.dureeTotale.invalid) {\r
            <mat-error>Valeur num\xE9rique valide requise</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <div class="check-row">\r
          <mat-checkbox formControlName="actif">Actif</mat-checkbox>\r
        </div>\r
\r
        <div class="actions">\r
          <button mat-stroked-button type="button" (click)="cancel()">Annuler</button>\r
          <button mat-flat-button color="primary" type="submit">Enregistrer</button>\r
        </div>\r
      </form>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/modules/module-form/module-form.component.css */\n.page {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full {\n  width: 100%;\n  display: block;\n}\n.row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.grow {\n  flex: 1;\n  min-width: 140px;\n}\n.narrow {\n  width: 100%;\n  max-width: 220px;\n}\n.check-row {\n  margin: 0.5rem 0 1rem;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=module-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleFormComponent, { className: "ModuleFormComponent", filePath: "src/app/pages/modules/module-form/module-form.component.ts", lineNumber: 21 });
})();

// src/app/pages/modules/module-detail/module-detail.component.ts
function ModuleDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ModuleDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function ModuleDetailComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(5, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ModuleDetailComponent_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(7, "Modifier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-card", 6)(9, "dl", 7)(10, "dt");
    \u0275\u0275text(11, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Niveau");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Cat\xE9gorie");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "Dur\xE9e totale");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt");
    \u0275\u0275text(27, "Actif");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.module.titre);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r1.module.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.module.niveau);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.module.categorie);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.module.dureeTotale, " h");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.module.actif ? "Oui" : "Non");
  }
}
var HTTP_TIMEOUT_MS3 = 25e3;
var ModuleDetailComponent = class _ModuleDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  moduleService = inject(ModuleService);
  module = null;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.module = null;
    }), switchMap((id) => {
      if (!id || !Number.isFinite(+id)) {
        this.loading.set(false);
        void this.router.navigate(workspacePath(this.router, "modules"));
        return EMPTY;
      }
      return this.moduleService.getById(+id).pipe(timeout(HTTP_TIMEOUT_MS3), catchError(() => {
        this.loading.set(false);
        alert("Module introuvable.");
        void this.router.navigate(workspacePath(this.router, "modules"));
        return EMPTY;
      }), finalize(() => this.loading.set(false)));
    })).subscribe({
      next: (m) => {
        this.module = m;
      }
    });
  }
  back() {
    void this.router.navigate(workspacePath(this.router, "modules"));
  }
  edit() {
    if (this.module?.id != null) {
      void this.router.navigate(workspacePath(this.router, "modules", "edit", this.module.id));
    }
  }
  static \u0275fac = function ModuleDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ModuleDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ModuleDetailComponent, selectors: [["app-module-detail"]], standalone: false, decls: 3, vars: 1, consts: [[1, "page"], [1, "muted"], [1, "page-head"], [1, "head-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["appearance", "outlined", 1, "detail-card"], [1, "detail-grid"]], template: function ModuleDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ModuleDetailComponent_Conditional_1_Template, 2, 0, "p", 1)(2, ModuleDetailComponent_Conditional_2_Template, 30, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.module ? 2 : -1);
    }
  }, dependencies: [MatButton, MatCard], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=module-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ModuleDetailComponent, [{
    type: Component,
    args: [{ selector: "app-module-detail", standalone: false, template: `<div class="page">\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else if (module) {\r
    <div class="page-head">\r
      <h1>{{ module.titre }}</h1>\r
      <div class="head-actions">\r
        <button mat-stroked-button type="button" (click)="back()">Retour</button>\r
        <button mat-flat-button color="primary" type="button" (click)="edit()">Modifier</button>\r
      </div>\r
    </div>\r
\r
    <mat-card appearance="outlined" class="detail-card">\r
      <dl class="detail-grid">\r
        <dt>Description</dt>\r
        <dd>{{ module.description }}</dd>\r
        <dt>Niveau</dt>\r
        <dd>{{ module.niveau }}</dd>\r
        <dt>Cat\xE9gorie</dt>\r
        <dd>{{ module.categorie }}</dd>\r
        <dt>Dur\xE9e totale</dt>\r
        <dd>{{ module.dureeTotale }} h</dd>\r
        <dt>Actif</dt>\r
        <dd>{{ module.actif ? 'Oui' : 'Non' }}</dd>\r
      </dl>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/modules/module-detail/module-detail.component.css */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid dt {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid dd {\n  margin: 0;\n  color: #0f172a;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=module-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ModuleDetailComponent, { className: "ModuleDetailComponent", filePath: "src/app/pages/modules/module-detail/module-detail.component.ts", lineNumber: 18 });
})();

// src/app/services/cours.service.ts
function coursWriteBody(c) {
  return {
    titre: c.titre,
    contenu: c.contenu,
    ordreCours: c.ordreCours,
    duree: c.duree,
    typeContenu: c.typeContenu,
    urlRessource: c.urlRessource,
    gratuit: c.gratuit,
    publie: c.publie
  };
}
var CoursService = class _CoursService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAll() {
    return this.http.get(`${this.apiUrl}/cours`).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/cours/${id}`);
  }
  create(cours) {
    const moduleId = cours.moduleId;
    if (moduleId == null) {
      return throwError(() => new Error("moduleId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("moduleId", String(moduleId));
    return this.http.post(`${this.apiUrl}/cours`, coursWriteBody(cours), { params });
  }
  /**
   * Création avec PDF (`POST .../cours/avec-pdf`).
   * - `nomFichierPdf` / `fichierPdf` : noms des champs Java (`nomFichierPdf`, `fichierPdf` → colonnes `nom_fichier_pdf`, `fichier_pdf`).
   * - Si ton contrôleur utilise `MultipartFile file`, remplace la dernière ligne par `formData.append('file', pdf, pdf.name)`.
   */
  createWithPdf(cours, pdf) {
    const moduleId = cours.moduleId;
    if (moduleId == null) {
      return throwError(() => new Error("moduleId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("moduleId", String(moduleId));
    const b = coursWriteBody(cours);
    const formData = new FormData();
    formData.append("titre", b.titre ?? "");
    formData.append("contenu", b.contenu ?? "");
    formData.append("ordreCours", String(b.ordreCours ?? 0));
    formData.append("duree", String(b.duree ?? 0));
    formData.append("typeContenu", b.typeContenu ?? "");
    formData.append("urlRessource", b.urlRessource ?? "");
    formData.append("gratuit", String(!!b.gratuit));
    formData.append("publie", String(!!b.publie));
    formData.append("nomFichierPdf", pdf.name);
    formData.append("fichierPdf", pdf, pdf.name);
    return this.http.post(`${this.apiUrl}/cours/avec-pdf`, formData, { params });
  }
  update(id, cours) {
    const moduleId = cours.moduleId;
    if (moduleId == null) {
      return throwError(() => new Error("moduleId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("moduleId", String(moduleId));
    return this.http.put(`${this.apiUrl}/cours/${id}`, coursWriteBody(cours), { params });
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/cours/${id}`);
  }
  static \u0275fac = function CoursService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CoursService, factory: _CoursService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/cours/cours-list/cours-list.component.ts
function CoursListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError());
  }
}
function CoursListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Titre");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.titre);
  }
}
function CoursListComponent_Conditional_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Ordre");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.ordreCours);
  }
}
function CoursListComponent_Conditional_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Dur\xE9e (min)");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.duree);
  }
}
function CoursListComponent_Conditional_8_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Publi\xE9");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r5.publie ? "Oui" : "Non");
  }
}
function CoursListComponent_Conditional_8_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Module");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_td_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.moduleLabel(row_r6));
  }
}
function CoursListComponent_Conditional_8_th_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_td_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "button", 24);
    \u0275\u0275listener("click", function CoursListComponent_Conditional_8_td_19_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view(row_r8));
    });
    \u0275\u0275text(2, "Voir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function CoursListComponent_Conditional_8_td_19_Template_button_click_3_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(row_r8));
    });
    \u0275\u0275text(4, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function CoursListComponent_Conditional_8_td_19_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(row_r8));
    });
    \u0275\u0275text(6, "Supprimer");
    \u0275\u0275elementEnd()();
  }
}
function CoursListComponent_Conditional_8_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function CoursListComponent_Conditional_8_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function CoursListComponent_Conditional_8_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Aucun cours pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function CoursListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6);
    \u0275\u0275elementContainerStart(2, 7);
    \u0275\u0275template(3, CoursListComponent_Conditional_8_th_3_Template, 2, 0, "th", 8)(4, CoursListComponent_Conditional_8_td_4_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 10);
    \u0275\u0275template(6, CoursListComponent_Conditional_8_th_6_Template, 2, 0, "th", 8)(7, CoursListComponent_Conditional_8_td_7_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 11);
    \u0275\u0275template(9, CoursListComponent_Conditional_8_th_9_Template, 2, 0, "th", 8)(10, CoursListComponent_Conditional_8_td_10_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 12);
    \u0275\u0275template(12, CoursListComponent_Conditional_8_th_12_Template, 2, 0, "th", 8)(13, CoursListComponent_Conditional_8_td_13_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 13);
    \u0275\u0275template(15, CoursListComponent_Conditional_8_th_15_Template, 2, 0, "th", 8)(16, CoursListComponent_Conditional_8_td_16_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(17, 14);
    \u0275\u0275template(18, CoursListComponent_Conditional_8_th_18_Template, 2, 0, "th", 15)(19, CoursListComponent_Conditional_8_td_19_Template, 7, 0, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(20, CoursListComponent_Conditional_8_tr_20_Template, 1, 0, "tr", 17)(21, CoursListComponent_Conditional_8_tr_21_Template, 1, 0, "tr", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(22, CoursListComponent_Conditional_8_Conditional_22_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.dataSource);
    \u0275\u0275advance(19);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataSource.data.length === 0 ? 22 : -1);
  }
}
var HTTP_TIMEOUT_MS4 = 25e3;
var CoursListComponent = class _CoursListComponent {
  coursService = inject(CoursService);
  router = inject(Router);
  dialogService = inject(DialogService);
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["titre", "ordreCours", "duree", "publie", "module", "actions"];
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.loadError.set(null);
    this.coursService.getAll().pipe(timeout(HTTP_TIMEOUT_MS4), finalize(() => this.loading.set(false))).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.loadError.set(null);
      },
      error: (err) => {
        this.dataSource.data = [];
        let msg = apiErrorMessage(err, "Impossible de charger les cours.");
        if (err instanceof HttpErrorResponse && err.status === 500) {
          msg += " Erreur 500 c\xF4t\xE9 serveur : ouvrir les logs Spring (souvent s\xE9rialisation JSON d\u2019un BLOB `fichier_pdf` sur GET /cours \u2014 ajouter @JsonIgnore sur le champ ou exposer un DTO sans le binaire).";
        }
        this.loadError.set(msg);
      }
    });
  }
  moduleLabel(c) {
    return c.module?.titre ?? "\u2014";
  }
  add() {
    navigateLater(this.router, workspacePath(this.router, "cours", "new"));
  }
  view(c) {
    if (c.id != null) {
      navigateLater(this.router, workspacePath(this.router, "cours", c.id));
    }
  }
  edit(c) {
    if (c.id != null) {
      navigateLater(this.router, workspacePath(this.router, "cours", "edit", c.id));
    }
  }
  delete(c) {
    if (c.id == null)
      return;
    this.dialogService.confirm({
      title: "Supprimer le cours",
      message: `Confirmer la suppression de \xAB ${c.titre} \xBB ?`
    }).subscribe((ok) => {
      if (ok) {
        this.coursService.delete(c.id).subscribe({
          next: () => this.load(),
          error: () => alert("Erreur lors de la suppression.")
        });
      }
    });
  }
  static \u0275fac = function CoursListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursListComponent, selectors: [["app-cours-list"]], standalone: false, decls: 9, vars: 2, consts: [[1, "page"], [1, "page-head"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "app-alert-error"], [1, "muted"], [1, "table-wrap", "mat-elevation-z1"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "titre"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "ordreCours"], ["matColumnDef", "duree"], ["matColumnDef", "publie"], ["matColumnDef", "module"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "col-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty", "muted"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "col-actions"], ["mat-cell", "", 1, "col-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function CoursListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function CoursListComponent_Template_button_click_4_listener() {
        return ctx.add();
      });
      \u0275\u0275text(5, "Ajouter");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, CoursListComponent_Conditional_6_Template, 2, 1, "p", 3);
      \u0275\u0275conditionalCreate(7, CoursListComponent_Conditional_7_Template, 2, 0, "p", 4)(8, CoursListComponent_Conditional_8_Template, 23, 4, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButton], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=cours-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursListComponent, [{
    type: Component,
    args: [{ selector: "app-cours-list", standalone: false, template: `<div class="page">\r
  <div class="page-head">\r
    <h1>Cours</h1>\r
    <button mat-flat-button color="primary" type="button" (click)="add()">Ajouter</button>\r
  </div>\r
\r
  @if (loadError()) {\r
    <p class="app-alert-error">{{ loadError() }}</p>\r
  }\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <div class="table-wrap mat-elevation-z1">\r
      <table mat-table [dataSource]="dataSource" class="data-table">\r
        <ng-container matColumnDef="titre">\r
          <th mat-header-cell *matHeaderCellDef>Titre</th>\r
          <td mat-cell *matCellDef="let row">{{ row.titre }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="ordreCours">\r
          <th mat-header-cell *matHeaderCellDef>Ordre</th>\r
          <td mat-cell *matCellDef="let row">{{ row.ordreCours }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="duree">\r
          <th mat-header-cell *matHeaderCellDef>Dur\xE9e (min)</th>\r
          <td mat-cell *matCellDef="let row">{{ row.duree }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="publie">\r
          <th mat-header-cell *matHeaderCellDef>Publi\xE9</th>\r
          <td mat-cell *matCellDef="let row">{{ row.publie ? 'Oui' : 'Non' }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="module">\r
          <th mat-header-cell *matHeaderCellDef>Module</th>\r
          <td mat-cell *matCellDef="let row">{{ moduleLabel(row) }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="actions">\r
          <th mat-header-cell *matHeaderCellDef class="col-actions">Actions</th>\r
          <td mat-cell *matCellDef="let row" class="col-actions">\r
            <button mat-stroked-button type="button" (click)="view(row)">Voir</button>\r
            <button mat-stroked-button type="button" color="primary" (click)="edit(row)">Modifier</button>\r
            <button mat-stroked-button type="button" color="warn" (click)="delete(row)">Supprimer</button>\r
          </td>\r
        </ng-container>\r
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
      </table>\r
      @if (dataSource.data.length === 0) {\r
        <p class="empty muted">Aucun cours pour le moment.</p>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/cours/cours-list/cours-list.component.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table {\n  width: 100%;\n}\n.col-actions {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions button {\n  margin-left: 0.35rem;\n}\n.empty {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=cours-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursListComponent, { className: "CoursListComponent", filePath: "src/app/pages/cours/cours-list/cours-list.component.ts", lineNumber: 21 });
})();

// src/app/pages/cours/cours-form/cours-form.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function CoursFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275property("value", m_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.titre);
  }
}
function CoursFormComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Num\xE9ro valide requis");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Num\xE9ro valide requis");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function CoursFormComponent_Conditional_4_Conditional_41_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 28);
    \u0275\u0275listener("click", function CoursFormComponent_Conditional_4_Conditional_41_Conditional_11_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r5);
      \u0275\u0275nextContext();
      const pdfInput_r6 = \u0275\u0275reference(10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearPdf(pdfInput_r6));
    });
    \u0275\u0275text(3, "Retirer");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.pdfFile.name);
  }
}
function CoursFormComponent_Conditional_4_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 23);
    \u0275\u0275text(2, "Document PDF (optionnel)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 24);
    \u0275\u0275text(4, " \xC0 la cr\xE9ation, vous pouvez envoyer un PDF : le serveur re\xE7oit les donn\xE9es du cours + le fichier (");
    \u0275\u0275elementStart(5, "code");
    \u0275\u0275text(6, "/cours/avec-pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, "). ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 25)(9, "input", 26, 0);
    \u0275\u0275listener("change", function CoursFormComponent_Conditional_4_Conditional_41_Template_input_change_9_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onPdfSelected($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, CoursFormComponent_Conditional_4_Conditional_41_Conditional_11_Template, 4, 1);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275conditional(ctx_r1.pdfFile ? 11 : -1);
  }
}
function CoursFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "form", 4);
    \u0275\u0275listener("ngSubmit", function CoursFormComponent_Conditional_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "mat-form-field", 5)(3, "mat-label");
    \u0275\u0275text(4, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 6);
    \u0275\u0275repeaterCreate(6, CoursFormComponent_Conditional_4_For_7_Template, 2, 2, "mat-option", 7, _forTrack02);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, CoursFormComponent_Conditional_4_Conditional_8_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 5)(10, "mat-label");
    \u0275\u0275text(11, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 8);
    \u0275\u0275conditionalCreate(13, CoursFormComponent_Conditional_4_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 5)(15, "mat-label");
    \u0275\u0275text(16, "Contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "textarea", 9);
    \u0275\u0275conditionalCreate(18, CoursFormComponent_Conditional_4_Conditional_18_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 10)(20, "mat-form-field", 11)(21, "mat-label");
    \u0275\u0275text(22, "Ordre du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "input", 12);
    \u0275\u0275conditionalCreate(24, CoursFormComponent_Conditional_4_Conditional_24_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 11)(26, "mat-label");
    \u0275\u0275text(27, "Dur\xE9e (minutes)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(28, "input", 13);
    \u0275\u0275conditionalCreate(29, CoursFormComponent_Conditional_4_Conditional_29_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "mat-form-field", 5)(31, "mat-label");
    \u0275\u0275text(32, "Type de contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 14);
    \u0275\u0275conditionalCreate(34, CoursFormComponent_Conditional_4_Conditional_34_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 5)(36, "mat-label");
    \u0275\u0275text(37, "URL ressource");
    \u0275\u0275elementEnd();
    \u0275\u0275element(38, "input", 15);
    \u0275\u0275elementStart(39, "mat-hint");
    \u0275\u0275text(40, "Laissez vide si vous joignez un PDF (cr\xE9ation uniquement).");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(41, CoursFormComponent_Conditional_4_Conditional_41_Template, 12, 1, "div", 16);
    \u0275\u0275elementStart(42, "div", 17)(43, "mat-checkbox", 18);
    \u0275\u0275text(44, "Gratuit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "mat-checkbox", 19);
    \u0275\u0275text(46, "Publi\xE9");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 20)(48, "button", 21);
    \u0275\u0275listener("click", function CoursFormComponent_Conditional_4_Template_button_click_48_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(49, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "button", 22);
    \u0275\u0275text(51);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.modules());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.moduleId.touched && ctx_r1.form.controls.moduleId.hasError("required") ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.titre.touched && ctx_r1.form.controls.titre.hasError("required") ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.contenu.touched && ctx_r1.form.controls.contenu.hasError("required") ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275conditional(ctx_r1.form.controls.ordreCours.invalid && ctx_r1.form.controls.ordreCours.touched ? 24 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.duree.invalid && ctx_r1.form.controls.duree.touched ? 29 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.typeContenu.touched && ctx_r1.form.controls.typeContenu.hasError("required") ? 34 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275conditional(ctx_r1.editId == null ? 41 : -1);
    \u0275\u0275advance(7);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.saving());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.saving() ? "Enregistrement\u2026" : "Enregistrer", " ");
  }
}
var HTTP_TIMEOUT_MS5 = 25e3;
var CoursFormComponent = class _CoursFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  coursService = inject(CoursService);
  moduleService = inject(ModuleService);
  editId = null;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  /** Évite les doubles clics pendant POST/PUT (surtout upload PDF). */
  saving = signal(false, ...ngDevMode ? [{ debugName: "saving" }] : []);
  modules = signal([], ...ngDevMode ? [{ debugName: "modules" }] : []);
  /** PDF joint — uniquement à la création ; envoi vers `POST /cours/avec-pdf`. */
  pdfFile = null;
  form = this.fb.nonNullable.group({
    titre: ["", Validators.required],
    contenu: ["", Validators.required],
    ordreCours: [0, [Validators.required, Validators.min(0)]],
    duree: [0, [Validators.required, Validators.min(0)]],
    typeContenu: ["", Validators.required],
    urlRessource: [""],
    gratuit: [false],
    publie: [false],
    moduleId: [null, Validators.required]
  });
  constructor() {
    this.moduleService.getAll().subscribe({
      next: (list) => this.modules.set(list),
      error: () => this.modules.set([])
    });
    combineLatest([this.route.paramMap, this.route.url]).pipe(takeUntilDestroyed(), map(([pm, segs]) => {
      const paths = segs.map((s) => s.path);
      const isEditRoute = paths.includes("edit");
      const raw = pm.get("id");
      const id = raw != null && Number.isFinite(+raw) ? +raw : null;
      return isEditRoute && id != null ? id : null;
    }), distinctUntilChanged(), tap((editId) => {
      if (editId == null) {
        this.editId = null;
        this.pdfFile = null;
        this.form.reset({
          titre: "",
          contenu: "",
          ordreCours: 0,
          duree: 0,
          typeContenu: "",
          urlRessource: "",
          gratuit: false,
          publie: false,
          moduleId: null
        });
      }
    }), switchMap((editId) => {
      if (editId == null) {
        return of(void 0);
      }
      this.editId = editId;
      this.loading.set(true);
      return this.coursService.getById(editId).pipe(timeout(HTTP_TIMEOUT_MS5), tap((c) => {
        this.form.patchValue({
          titre: c.titre,
          contenu: c.contenu,
          ordreCours: c.ordreCours,
          duree: c.duree,
          typeContenu: c.typeContenu,
          urlRessource: c.urlRessource,
          gratuit: c.gratuit,
          publie: c.publie,
          moduleId: c.module?.id ?? null
        });
      }), catchError(() => {
        alert("Impossible de charger le cours.");
        void this.router.navigate(workspacePath(this.router, "cours"));
        return of(void 0);
      }), finalize(() => this.loading.set(false)));
    })).subscribe();
  }
  cancel() {
    void this.router.navigate(workspacePath(this.router, "cours"));
  }
  onPdfSelected(event) {
    const input = event.target;
    const file = input.files?.[0] ?? null;
    if (!file) {
      this.pdfFile = null;
      return;
    }
    const isPdfMime = !file.type || file.type === "application/pdf" || file.type === "application/x-pdf";
    const isPdfExt = file.name.toLowerCase().endsWith(".pdf");
    if (!isPdfMime && !isPdfExt) {
      alert("Veuillez s\xE9lectionner un fichier PDF (.pdf).");
      input.value = "";
      this.pdfFile = null;
      return;
    }
    this.pdfFile = file;
  }
  clearPdf(input) {
    this.pdfFile = null;
    if (input) {
      input.value = "";
    }
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const moduleId = foreignId(v.moduleId);
    if (moduleId == null) {
      alert("Choisis un module valide.");
      return;
    }
    const urlRessource = v.urlRessource.trim();
    const isCreate = this.editId == null;
    if (isCreate && !urlRessource && !this.pdfFile) {
      alert("Indique une URL de ressource ou joignez un fichier PDF.");
      return;
    }
    const payload = {
      titre: v.titre.trim(),
      contenu: v.contenu.trim(),
      ordreCours: Math.trunc(num(v.ordreCours)),
      duree: Math.trunc(num(v.duree)),
      typeContenu: v.typeContenu.trim(),
      urlRessource,
      gratuit: !!v.gratuit,
      publie: !!v.publie,
      moduleId
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.saving.set(true);
      this.coursService.update(this.editId, payload).pipe(finalize(() => this.saving.set(false))).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, "cours", this.editId)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la mise \xE0 jour."))
      });
    } else if (this.pdfFile) {
      this.saving.set(true);
      this.coursService.createWithPdf(payload, this.pdfFile).pipe(finalize(() => this.saving.set(false))).subscribe({
        next: (created) => {
          if (created?.id != null) {
            void this.router.navigate(workspacePath(this.router, "cours", created.id));
          } else {
            void this.router.navigate(workspacePath(this.router, "cours"));
          }
        },
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la cr\xE9ation avec PDF."))
      });
    } else {
      this.saving.set(true);
      this.coursService.create(payload).pipe(finalize(() => this.saving.set(false))).subscribe({
        next: (created) => {
          if (created?.id != null) {
            void this.router.navigate(workspacePath(this.router, "cours", created.id));
          } else {
            void this.router.navigate(workspacePath(this.router, "cours"));
          }
        },
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la cr\xE9ation."))
      });
    }
  }
  static \u0275fac = function CoursFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursFormComponent, selectors: [["app-cours-form"]], standalone: false, decls: 5, vars: 2, consts: [["pdfInput", ""], [1, "page"], [1, "muted"], ["appearance", "outlined", 1, "form-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["formControlName", "moduleId"], [3, "value"], ["matInput", "", "formControlName", "titre"], ["matInput", "", "rows", "4", "formControlName", "contenu"], [1, "row"], ["appearance", "outline", 1, "grow"], ["matInput", "", "type", "number", "formControlName", "ordreCours"], ["matInput", "", "type", "number", "formControlName", "duree"], ["matInput", "", "formControlName", "typeContenu"], ["matInput", "", "type", "url", "formControlName", "urlRessource", "placeholder", "https://\u2026"], [1, "pdf-block"], [1, "check-row"], ["formControlName", "gratuit"], ["formControlName", "publie"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "submit", 3, "disabled"], [1, "pdf-block__label"], [1, "pdf-block__hint"], [1, "pdf-block__row"], ["type", "file", "accept", "application/pdf,.pdf", 1, "pdf-block__input", 3, "change"], [1, "pdf-block__name"], ["mat-button", "", "type", "button", 3, "click"]], template: function CoursFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, CoursFormComponent_Conditional_3_Template, 2, 0, "p", 2)(4, CoursFormComponent_Conditional_4_Template, 52, 11, "mat-card", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId != null ? "Modifier le cours" : "Nouveau cours");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 3 : 4);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatCard, MatFormField, MatLabel, MatHint, MatError, MatInput, MatSelect, MatOption, MatCheckbox], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 140px;\n}\n.check-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n  margin: 0.5rem 0 1rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.pdf-block[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 1.25rem;\n  padding: 1rem;\n  border-radius: 10px;\n  border: 1px dashed #cbd5e1;\n  background: #f8fafc;\n}\n.pdf-block__label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #0f172a;\n  margin-bottom: 0.35rem;\n}\n.pdf-block__hint[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.pdf-block__hint[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  background: #e2e8f0;\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n.pdf-block__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 1rem;\n}\n.pdf-block__input[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  max-width: 100%;\n}\n.pdf-block__name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #334155;\n  word-break: break-all;\n}\n/*# sourceMappingURL=cours-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursFormComponent, [{
    type: Component,
    args: [{ selector: "app-cours-form", standalone: false, template: `<div class="page">\r
  <h1>{{ editId != null ? 'Modifier le cours' : 'Nouveau cours' }}</h1>\r
\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <mat-card appearance="outlined" class="form-card">\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Module</mat-label>\r
          <mat-select formControlName="moduleId">\r
            @for (m of modules(); track m.id) {\r
              <mat-option [value]="m.id">{{ m.titre }}</mat-option>\r
            }\r
          </mat-select>\r
          @if (form.controls.moduleId.touched && form.controls.moduleId.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Titre</mat-label>\r
          <input matInput formControlName="titre" />\r
          @if (form.controls.titre.touched && form.controls.titre.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Contenu</mat-label>\r
          <textarea matInput rows="4" formControlName="contenu"></textarea>\r
          @if (form.controls.contenu.touched && form.controls.contenu.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <div class="row">\r
          <mat-form-field appearance="outline" class="grow">\r
            <mat-label>Ordre du cours</mat-label>\r
            <input matInput type="number" formControlName="ordreCours" />\r
            @if (form.controls.ordreCours.invalid && form.controls.ordreCours.touched) {\r
              <mat-error>Num\xE9ro valide requis</mat-error>\r
            }\r
          </mat-form-field>\r
          <mat-form-field appearance="outline" class="grow">\r
            <mat-label>Dur\xE9e (minutes)</mat-label>\r
            <input matInput type="number" formControlName="duree" />\r
            @if (form.controls.duree.invalid && form.controls.duree.touched) {\r
              <mat-error>Num\xE9ro valide requis</mat-error>\r
            }\r
          </mat-form-field>\r
        </div>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Type de contenu</mat-label>\r
          <input matInput formControlName="typeContenu" />\r
          @if (form.controls.typeContenu.touched && form.controls.typeContenu.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>URL ressource</mat-label>\r
          <input matInput type="url" formControlName="urlRessource" placeholder="https://\u2026" />\r
          <mat-hint>Laissez vide si vous joignez un PDF (cr\xE9ation uniquement).</mat-hint>\r
        </mat-form-field>\r
\r
        @if (editId == null) {\r
          <div class="pdf-block">\r
            <span class="pdf-block__label">Document PDF (optionnel)</span>\r
            <p class="pdf-block__hint">\r
              \xC0 la cr\xE9ation, vous pouvez envoyer un PDF : le serveur re\xE7oit les donn\xE9es du cours + le fichier\r
              (<code>/cours/avec-pdf</code>).\r
            </p>\r
            <div class="pdf-block__row">\r
              <input\r
                #pdfInput\r
                class="pdf-block__input"\r
                type="file"\r
                accept="application/pdf,.pdf"\r
                (change)="onPdfSelected($event)"\r
              />\r
              @if (pdfFile) {\r
                <span class="pdf-block__name">{{ pdfFile.name }}</span>\r
                <button mat-button type="button" (click)="clearPdf(pdfInput)">Retirer</button>\r
              }\r
            </div>\r
          </div>\r
        }\r
\r
        <div class="check-row">\r
          <mat-checkbox formControlName="gratuit">Gratuit</mat-checkbox>\r
          <mat-checkbox formControlName="publie">Publi\xE9</mat-checkbox>\r
        </div>\r
\r
        <div class="actions">\r
          <button mat-stroked-button type="button" (click)="cancel()" [disabled]="saving()">Annuler</button>\r
          <button mat-flat-button color="primary" type="submit" [disabled]="saving()">\r
            {{ saving() ? 'Enregistrement\u2026' : 'Enregistrer' }}\r
          </button>\r
        </div>\r
      </form>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/cours/cours-form/cours-form.component.css */\n.page {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full {\n  width: 100%;\n  display: block;\n}\n.row {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.grow {\n  flex: 1;\n  min-width: 140px;\n}\n.check-row {\n  display: flex;\n  gap: 1.5rem;\n  flex-wrap: wrap;\n  margin: 0.5rem 0 1rem;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.muted {\n  color: #64748b;\n}\n.pdf-block {\n  margin: 0.5rem 0 1.25rem;\n  padding: 1rem;\n  border-radius: 10px;\n  border: 1px dashed #cbd5e1;\n  background: #f8fafc;\n}\n.pdf-block__label {\n  display: block;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #0f172a;\n  margin-bottom: 0.35rem;\n}\n.pdf-block__hint {\n  margin: 0 0 0.75rem;\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.pdf-block__hint code {\n  font-size: 0.78rem;\n  background: #e2e8f0;\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n.pdf-block__row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem 1rem;\n}\n.pdf-block__input {\n  font-size: 0.9rem;\n  max-width: 100%;\n}\n.pdf-block__name {\n  font-size: 0.85rem;\n  color: #334155;\n  word-break: break-all;\n}\n/*# sourceMappingURL=cours-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursFormComponent, { className: "CoursFormComponent", filePath: "src/app/pages/cours/cours-form/cours-form.component.ts", lineNumber: 23 });
})();

// src/app/pages/cours/cours-detail/cours-detail.component.ts
function CoursDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function CoursDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function CoursDetailComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(5, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function CoursDetailComponent_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(7, "Modifier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-card", 6)(9, "dl", 7)(10, "dt");
    \u0275\u0275text(11, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd", 8);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Ordre");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "Dur\xE9e");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "dt");
    \u0275\u0275text(27, "Type de contenu");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "dd");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "dt");
    \u0275\u0275text(31, "URL ressource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "dd")(33, "a", 9);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "dt");
    \u0275\u0275text(36, "Gratuit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "dd");
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "dt");
    \u0275\u0275text(40, "Publi\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "dd");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.cours.titre);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r1.cours.module == null ? null : ctx_r1.cours.module.titre) ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cours.contenu);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cours.ordreCours);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r1.cours.duree, " min");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cours.typeContenu);
    \u0275\u0275advance(4);
    \u0275\u0275property("href", ctx_r1.cours.urlRessource, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.cours.urlRessource);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cours.gratuit ? "Oui" : "Non");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.cours.publie ? "Oui" : "Non");
  }
}
var HTTP_TIMEOUT_MS6 = 25e3;
var CoursDetailComponent = class _CoursDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  coursService = inject(CoursService);
  cours = null;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.cours = null;
    }), switchMap((id) => {
      if (!id || !Number.isFinite(+id)) {
        this.loading.set(false);
        void this.router.navigate(workspacePath(this.router, "cours"));
        return EMPTY;
      }
      return this.coursService.getById(+id).pipe(timeout(HTTP_TIMEOUT_MS6), catchError(() => {
        this.loading.set(false);
        alert("Cours introuvable.");
        void this.router.navigate(workspacePath(this.router, "cours"));
        return EMPTY;
      }), finalize(() => this.loading.set(false)));
    })).subscribe({
      next: (c) => {
        this.cours = c;
      }
    });
  }
  back() {
    void this.router.navigate(workspacePath(this.router, "cours"));
  }
  edit() {
    if (this.cours?.id != null) {
      void this.router.navigate(workspacePath(this.router, "cours", "edit", this.cours.id));
    }
  }
  static \u0275fac = function CoursDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CoursDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CoursDetailComponent, selectors: [["app-cours-detail"]], standalone: false, decls: 3, vars: 1, consts: [[1, "page"], [1, "muted"], [1, "page-head"], [1, "head-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["appearance", "outlined", 1, "detail-card"], [1, "detail-grid"], [1, "multiline"], ["target", "_blank", "rel", "noopener", 3, "href"]], template: function CoursDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, CoursDetailComponent_Conditional_1_Template, 2, 0, "p", 1)(2, CoursDetailComponent_Conditional_2_Template, 43, 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.cours ? 2 : -1);
    }
  }, dependencies: [MatButton, MatCard], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=cours-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CoursDetailComponent, [{
    type: Component,
    args: [{ selector: "app-cours-detail", standalone: false, template: `<div class="page">\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else if (cours) {\r
    <div class="page-head">\r
      <h1>{{ cours.titre }}</h1>\r
      <div class="head-actions">\r
        <button mat-stroked-button type="button" (click)="back()">Retour</button>\r
        <button mat-flat-button color="primary" type="button" (click)="edit()">Modifier</button>\r
      </div>\r
    </div>\r
\r
    <mat-card appearance="outlined" class="detail-card">\r
      <dl class="detail-grid">\r
        <dt>Module</dt>\r
        <dd>{{ cours.module?.titre ?? '\u2014' }}</dd>\r
        <dt>Contenu</dt>\r
        <dd class="multiline">{{ cours.contenu }}</dd>\r
        <dt>Ordre</dt>\r
        <dd>{{ cours.ordreCours }}</dd>\r
        <dt>Dur\xE9e</dt>\r
        <dd>{{ cours.duree }} min</dd>\r
        <dt>Type de contenu</dt>\r
        <dd>{{ cours.typeContenu }}</dd>\r
        <dt>URL ressource</dt>\r
        <dd>\r
          <a [href]="cours.urlRessource" target="_blank" rel="noopener">{{ cours.urlRessource }}</a>\r
        </dd>\r
        <dt>Gratuit</dt>\r
        <dd>{{ cours.gratuit ? 'Oui' : 'Non' }}</dd>\r
        <dt>Publi\xE9</dt>\r
        <dd>{{ cours.publie ? 'Oui' : 'Non' }}</dd>\r
      </dl>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/cours/cours-detail/cours-detail.component.css */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid dt {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid dd {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline {\n  white-space: pre-wrap;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=cours-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CoursDetailComponent, { className: "CoursDetailComponent", filePath: "src/app/pages/cours/cours-detail/cours-detail.component.ts", lineNumber: 18 });
})();

// src/app/services/quiz.service.ts
function quizWriteBody(q) {
  return {
    titre: q.titre,
    description: q.description,
    scoreMax: q.scoreMax
  };
}
var QuizService = class _QuizService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAll() {
    return this.http.get(`${this.apiUrl}/quizzes`).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/quizzes/${id}`);
  }
  create(quiz) {
    const coursId = quiz.coursId;
    if (coursId == null) {
      return throwError(() => new Error("coursId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("coursId", String(coursId));
    return this.http.post(`${this.apiUrl}/quizzes`, quizWriteBody(quiz), { params });
  }
  update(id, quiz) {
    const coursId = quiz.coursId;
    if (coursId == null) {
      return throwError(() => new Error("coursId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("coursId", String(coursId));
    return this.http.put(`${this.apiUrl}/quizzes/${id}`, quizWriteBody(quiz), { params });
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/quizzes/${id}`);
  }
  static \u0275fac = function QuizService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizService, factory: _QuizService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/quizzes/quiz-list/quiz-list.component.ts
function QuizListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError());
  }
}
function QuizListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_Conditional_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Titre");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_Conditional_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.titre);
  }
}
function QuizListComponent_Conditional_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Score max");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_Conditional_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.scoreMax);
  }
}
function QuizListComponent_Conditional_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 18);
    \u0275\u0275text(1, "Cours");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_Conditional_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.coursLabel(row_r4));
  }
}
function QuizListComponent_Conditional_8_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_Conditional_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 21)(1, "button", 22);
    \u0275\u0275listener("click", function QuizListComponent_Conditional_8_td_13_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view(row_r6));
    });
    \u0275\u0275text(2, "Voir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 23);
    \u0275\u0275listener("click", function QuizListComponent_Conditional_8_td_13_Template_button_click_3_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(row_r6));
    });
    \u0275\u0275text(4, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 24);
    \u0275\u0275listener("click", function QuizListComponent_Conditional_8_td_13_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(row_r6));
    });
    \u0275\u0275text(6, "Supprimer");
    \u0275\u0275elementEnd()();
  }
}
function QuizListComponent_Conditional_8_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 25);
  }
}
function QuizListComponent_Conditional_8_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 26);
  }
}
function QuizListComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 17);
    \u0275\u0275text(1, "Aucun quiz pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function QuizListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6);
    \u0275\u0275elementContainerStart(2, 7);
    \u0275\u0275template(3, QuizListComponent_Conditional_8_th_3_Template, 2, 0, "th", 8)(4, QuizListComponent_Conditional_8_td_4_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 10);
    \u0275\u0275template(6, QuizListComponent_Conditional_8_th_6_Template, 2, 0, "th", 8)(7, QuizListComponent_Conditional_8_td_7_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 11);
    \u0275\u0275template(9, QuizListComponent_Conditional_8_th_9_Template, 2, 0, "th", 8)(10, QuizListComponent_Conditional_8_td_10_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 12);
    \u0275\u0275template(12, QuizListComponent_Conditional_8_th_12_Template, 2, 0, "th", 13)(13, QuizListComponent_Conditional_8_td_13_Template, 7, 0, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, QuizListComponent_Conditional_8_tr_14_Template, 1, 0, "tr", 15)(15, QuizListComponent_Conditional_8_tr_15_Template, 1, 0, "tr", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, QuizListComponent_Conditional_8_Conditional_16_Template, 2, 0, "p", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.dataSource);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataSource.data.length === 0 ? 16 : -1);
  }
}
var HTTP_TIMEOUT_MS7 = 25e3;
var QuizListComponent = class _QuizListComponent {
  quizService = inject(QuizService);
  router = inject(Router);
  dialogService = inject(DialogService);
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["titre", "scoreMax", "cours", "actions"];
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.loadError.set(null);
    this.quizService.getAll().pipe(timeout(HTTP_TIMEOUT_MS7), finalize(() => this.loading.set(false))).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.loadError.set(null);
      },
      error: () => {
        this.dataSource.data = [];
        this.loadError.set("Impossible de charger les quiz (r\xE9seau, CORS ou serveur).");
      }
    });
  }
  coursLabel(q) {
    return q.cours?.titre ?? "\u2014";
  }
  add() {
    navigateLater(this.router, workspacePath(this.router, "quizzes", "new"));
  }
  view(q) {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, "quizzes", q.id));
    }
  }
  edit(q) {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, "quizzes", "edit", q.id));
    }
  }
  delete(q) {
    if (q.id == null)
      return;
    this.dialogService.confirm({
      title: "Supprimer le quiz",
      message: `Confirmer la suppression de \xAB ${q.titre} \xBB ?`
    }).subscribe((ok) => {
      if (ok) {
        this.quizService.delete(q.id).subscribe({
          next: () => this.load(),
          error: () => alert("Erreur lors de la suppression.")
        });
      }
    });
  }
  static \u0275fac = function QuizListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizListComponent, selectors: [["app-quiz-list"]], standalone: false, decls: 9, vars: 2, consts: [[1, "page"], [1, "page-head"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "app-alert-error"], [1, "muted"], [1, "table-wrap", "mat-elevation-z1"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "titre"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "scoreMax"], ["matColumnDef", "cours"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "col-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty", "muted"], ["mat-header-cell", ""], ["mat-cell", ""], ["mat-header-cell", "", 1, "col-actions"], ["mat-cell", "", 1, "col-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function QuizListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function QuizListComponent_Template_button_click_4_listener() {
        return ctx.add();
      });
      \u0275\u0275text(5, "Ajouter");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, QuizListComponent_Conditional_6_Template, 2, 1, "p", 3);
      \u0275\u0275conditionalCreate(7, QuizListComponent_Conditional_7_Template, 2, 0, "p", 4)(8, QuizListComponent_Conditional_8_Template, 17, 4, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButton], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=quiz-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizListComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-list", standalone: false, template: '<div class="page">\r\n  <div class="page-head">\r\n    <h1>Quiz</h1>\r\n    <button mat-flat-button color="primary" type="button" (click)="add()">Ajouter</button>\r\n  </div>\r\n\r\n  @if (loadError()) {\r\n    <p class="app-alert-error">{{ loadError() }}</p>\r\n  }\r\n  @if (loading()) {\r\n    <p class="muted">Chargement\u2026</p>\r\n  } @else {\r\n    <div class="table-wrap mat-elevation-z1">\r\n      <table mat-table [dataSource]="dataSource" class="data-table">\r\n        <ng-container matColumnDef="titre">\r\n          <th mat-header-cell *matHeaderCellDef>Titre</th>\r\n          <td mat-cell *matCellDef="let row">{{ row.titre }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="scoreMax">\r\n          <th mat-header-cell *matHeaderCellDef>Score max</th>\r\n          <td mat-cell *matCellDef="let row">{{ row.scoreMax }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="cours">\r\n          <th mat-header-cell *matHeaderCellDef>Cours</th>\r\n          <td mat-cell *matCellDef="let row">{{ coursLabel(row) }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="actions">\r\n          <th mat-header-cell *matHeaderCellDef class="col-actions">Actions</th>\r\n          <td mat-cell *matCellDef="let row" class="col-actions">\r\n            <button mat-stroked-button type="button" (click)="view(row)">Voir</button>\r\n            <button mat-stroked-button type="button" color="primary" (click)="edit(row)">Modifier</button>\r\n            <button mat-stroked-button type="button" color="warn" (click)="delete(row)">Supprimer</button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r\n      </table>\r\n      @if (dataSource.data.length === 0) {\r\n        <p class="empty muted">Aucun quiz pour le moment.</p>\r\n      }\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/quizzes/quiz-list/quiz-list.component.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table {\n  width: 100%;\n}\n.col-actions {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions button {\n  margin-left: 0.35rem;\n}\n.empty {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=quiz-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizListComponent, { className: "QuizListComponent", filePath: "src/app/pages/quizzes/quiz-list/quiz-list.component.ts", lineNumber: 19 });
})();

// src/app/pages/quizzes/quiz-form/quiz-form.component.ts
var _forTrack03 = ($index, $item) => $item.id;
function QuizFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuizFormComponent_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("value", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.titre);
  }
}
function QuizFormComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function QuizFormComponent_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function QuizFormComponent_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function QuizFormComponent_Conditional_4_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Valeur num\xE9rique valide requise");
    \u0275\u0275elementEnd();
  }
}
function QuizFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 2)(1, "form", 3);
    \u0275\u0275listener("ngSubmit", function QuizFormComponent_Conditional_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "mat-form-field", 4)(3, "mat-label");
    \u0275\u0275text(4, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 5);
    \u0275\u0275repeaterCreate(6, QuizFormComponent_Conditional_4_For_7_Template, 2, 2, "mat-option", 6, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, QuizFormComponent_Conditional_4_Conditional_8_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Titre");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "input", 7);
    \u0275\u0275conditionalCreate(13, QuizFormComponent_Conditional_4_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "mat-label");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "textarea", 8);
    \u0275\u0275conditionalCreate(18, QuizFormComponent_Conditional_4_Conditional_18_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 9)(20, "mat-label");
    \u0275\u0275text(21, "Score maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 10);
    \u0275\u0275conditionalCreate(23, QuizFormComponent_Conditional_4_Conditional_23_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "button", 12);
    \u0275\u0275listener("click", function QuizFormComponent_Conditional_4_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275text(28, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.coursList());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.coursId.touched && ctx_r1.form.controls.coursId.hasError("required") ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.titre.touched && ctx_r1.form.controls.titre.hasError("required") ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.description.touched && ctx_r1.form.controls.description.hasError("required") ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.scoreMax.invalid && ctx_r1.form.controls.scoreMax.touched ? 23 : -1);
  }
}
var HTTP_TIMEOUT_MS8 = 25e3;
var QuizFormComponent = class _QuizFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  quizService = inject(QuizService);
  coursService = inject(CoursService);
  editId = null;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  coursList = signal([], ...ngDevMode ? [{ debugName: "coursList" }] : []);
  form = this.fb.nonNullable.group({
    titre: ["", Validators.required],
    description: ["", Validators.required],
    scoreMax: [0, [Validators.required, Validators.min(0)]],
    coursId: [null, Validators.required]
  });
  constructor() {
    this.coursService.getAll().subscribe({
      next: (list) => this.coursList.set(list),
      error: () => this.coursList.set([])
    });
    combineLatest([this.route.paramMap, this.route.url]).pipe(takeUntilDestroyed(), map(([pm, segs]) => {
      const paths = segs.map((s) => s.path);
      const isEditRoute = paths.includes("edit");
      const raw = pm.get("id");
      const id = raw != null && Number.isFinite(+raw) ? +raw : null;
      return isEditRoute && id != null ? id : null;
    }), distinctUntilChanged(), tap((editId) => {
      if (editId == null) {
        this.editId = null;
        this.form.reset({
          titre: "",
          description: "",
          scoreMax: 0,
          coursId: null
        });
      }
    }), switchMap((editId) => {
      if (editId == null) {
        return of(void 0);
      }
      this.editId = editId;
      this.loading.set(true);
      return this.quizService.getById(editId).pipe(timeout(HTTP_TIMEOUT_MS8), tap((q) => {
        this.form.patchValue({
          titre: q.titre,
          description: q.description,
          scoreMax: q.scoreMax,
          coursId: q.cours?.id ?? null
        });
      }), catchError(() => {
        alert("Impossible de charger le quiz.");
        void this.router.navigate(workspacePath(this.router, "quizzes"));
        return of(void 0);
      }), finalize(() => this.loading.set(false)));
    })).subscribe();
  }
  cancel() {
    void this.router.navigate(workspacePath(this.router, "quizzes"));
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const coursId = foreignId(v.coursId);
    if (coursId == null) {
      alert("Choisis un cours valide.");
      return;
    }
    const payload = {
      titre: v.titre.trim(),
      description: v.description.trim(),
      scoreMax: num(v.scoreMax),
      coursId
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.quizService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, "quizzes", this.editId)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la mise \xE0 jour."))
      });
    } else {
      this.quizService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, "quizzes", created.id)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la cr\xE9ation."))
      });
    }
  }
  static \u0275fac = function QuizFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizFormComponent, selectors: [["app-quiz-form"]], standalone: false, decls: 5, vars: 2, consts: [[1, "page"], [1, "muted"], ["appearance", "outlined", 1, "form-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["formControlName", "coursId"], [3, "value"], ["matInput", "", "formControlName", "titre"], ["matInput", "", "rows", "3", "formControlName", "description"], ["appearance", "outline", 1, "narrow"], ["matInput", "", "type", "number", "formControlName", "scoreMax"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"]], template: function QuizFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, QuizFormComponent_Conditional_3_Template, 2, 0, "p", 1)(4, QuizFormComponent_Conditional_4_Template, 29, 5, "mat-card", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId != null ? "Modifier le quiz" : "Nouveau quiz");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 3 : 4);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatCard, MatFormField, MatLabel, MatError, MatInput, MatSelect, MatOption], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 220px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=quiz-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizFormComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-form", standalone: false, template: `<div class="page">\r
  <h1>{{ editId != null ? 'Modifier le quiz' : 'Nouveau quiz' }}</h1>\r
\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <mat-card appearance="outlined" class="form-card">\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Cours</mat-label>\r
          <mat-select formControlName="coursId">\r
            @for (c of coursList(); track c.id) {\r
              <mat-option [value]="c.id">{{ c.titre }}</mat-option>\r
            }\r
          </mat-select>\r
          @if (form.controls.coursId.touched && form.controls.coursId.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Titre</mat-label>\r
          <input matInput formControlName="titre" />\r
          @if (form.controls.titre.touched && form.controls.titre.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Description</mat-label>\r
          <textarea matInput rows="3" formControlName="description"></textarea>\r
          @if (form.controls.description.touched && form.controls.description.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="narrow">\r
          <mat-label>Score maximum</mat-label>\r
          <input matInput type="number" formControlName="scoreMax" />\r
          @if (form.controls.scoreMax.invalid && form.controls.scoreMax.touched) {\r
            <mat-error>Valeur num\xE9rique valide requise</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <div class="actions">\r
          <button mat-stroked-button type="button" (click)="cancel()">Annuler</button>\r
          <button mat-flat-button color="primary" type="submit">Enregistrer</button>\r
        </div>\r
      </form>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/quizzes/quiz-form/quiz-form.component.css */\n.page {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full {\n  width: 100%;\n  display: block;\n}\n.narrow {\n  width: 100%;\n  max-width: 220px;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=quiz-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizFormComponent, { className: "QuizFormComponent", filePath: "src/app/pages/quizzes/quiz-form/quiz-form.component.ts", lineNumber: 23 });
})();

// src/app/pages/quizzes/quiz-detail/quiz-detail.component.ts
var _c08 = (a0) => ["/quizzes", a0, "pass"];
function QuizDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuizDetailComponent_Conditional_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1, "Passer le quiz");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c08, ctx_r1.quiz.id));
  }
}
function QuizDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function QuizDetailComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(5, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, QuizDetailComponent_Conditional_2_Conditional_6_Template, 2, 3, "a", 5);
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function QuizDetailComponent_Conditional_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(8, "Modifier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "mat-card", 7)(10, "dl", 8)(11, "dt");
    \u0275\u0275text(12, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "dd");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "dt");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd", 9);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "dt");
    \u0275\u0275text(20, "Score maximum");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "dd");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.quiz.titre);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.quiz.id != null ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r1.quiz.cours == null ? null : ctx_r1.quiz.cours.titre) ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.quiz.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.quiz.scoreMax);
  }
}
var HTTP_TIMEOUT_MS9 = 25e3;
var QuizDetailComponent = class _QuizDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  quizService = inject(QuizService);
  quiz = null;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.quiz = null;
    }), switchMap((id) => {
      if (!id || !Number.isFinite(+id)) {
        this.loading.set(false);
        void this.router.navigate(workspacePath(this.router, "quizzes"));
        return EMPTY;
      }
      return this.quizService.getById(+id).pipe(timeout(HTTP_TIMEOUT_MS9), catchError(() => {
        this.loading.set(false);
        alert("Quiz introuvable.");
        void this.router.navigate(workspacePath(this.router, "quizzes"));
        return EMPTY;
      }), finalize(() => this.loading.set(false)));
    })).subscribe({
      next: (q) => {
        this.quiz = q;
      }
    });
  }
  back() {
    void this.router.navigate(workspacePath(this.router, "quizzes"));
  }
  edit() {
    if (this.quiz?.id != null) {
      void this.router.navigate(workspacePath(this.router, "quizzes", "edit", this.quiz.id));
    }
  }
  static \u0275fac = function QuizDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizDetailComponent, selectors: [["app-quiz-detail"]], standalone: false, decls: 3, vars: 1, consts: [[1, "page"], [1, "muted"], [1, "page-head"], [1, "head-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", 3, "routerLink"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["appearance", "outlined", 1, "detail-card"], [1, "detail-grid"], [1, "multiline"]], template: function QuizDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, QuizDetailComponent_Conditional_1_Template, 2, 0, "p", 1)(2, QuizDetailComponent_Conditional_2_Template, 23, 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.quiz ? 2 : -1);
    }
  }, dependencies: [RouterLink, MatButton, MatCard], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=quiz-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizDetailComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-detail", standalone: false, template: `<div class="page">\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else if (quiz) {\r
    <div class="page-head">\r
      <h1>{{ quiz.titre }}</h1>\r
      <div class="head-actions">\r
        <button mat-stroked-button type="button" (click)="back()">Retour</button>\r
        @if (quiz.id != null) {\r
          <a mat-stroked-button [routerLink]="['/quizzes', quiz.id, 'pass']">Passer le quiz</a>\r
        }\r
        <button mat-flat-button color="primary" type="button" (click)="edit()">Modifier</button>\r
      </div>\r
    </div>\r
\r
    <mat-card appearance="outlined" class="detail-card">\r
      <dl class="detail-grid">\r
        <dt>Cours</dt>\r
        <dd>{{ quiz.cours?.titre ?? '\u2014' }}</dd>\r
        <dt>Description</dt>\r
        <dd class="multiline">{{ quiz.description }}</dd>\r
        <dt>Score maximum</dt>\r
        <dd>{{ quiz.scoreMax }}</dd>\r
      </dl>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/quizzes/quiz-detail/quiz-detail.component.css */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid dt {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid dd {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline {\n  white-space: pre-wrap;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=quiz-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizDetailComponent, { className: "QuizDetailComponent", filePath: "src/app/pages/quizzes/quiz-detail/quiz-detail.component.ts", lineNumber: 18 });
})();

// src/app/services/question.service.ts
function questionWriteBody(q) {
  return {
    enonce: q.enonce,
    typeQuestion: q.typeQuestion,
    points: q.points
  };
}
var QuestionService = class _QuestionService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAll() {
    return this.http.get(`${this.apiUrl}/questions`).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/questions/${id}`);
  }
  create(question) {
    const quizId = question.quizId;
    if (quizId == null) {
      return throwError(() => new Error("quizId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("quizId", String(quizId));
    return this.http.post(`${this.apiUrl}/questions`, questionWriteBody(question), { params });
  }
  update(id, question) {
    const quizId = question.quizId;
    if (quizId == null) {
      return throwError(() => new Error("quizId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("quizId", String(quizId));
    return this.http.put(`${this.apiUrl}/questions/${id}`, questionWriteBody(question), { params });
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/questions/${id}`);
  }
  static \u0275fac = function QuestionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuestionService, factory: _QuestionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/questions/question-list/question-list.component.ts
function QuestionListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError());
  }
}
function QuestionListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "\xC9nonc\xE9");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.enonce);
  }
}
function QuestionListComponent_Conditional_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Type");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.typeQuestion);
  }
}
function QuestionListComponent_Conditional_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Points");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r4.points);
  }
}
function QuestionListComponent_Conditional_8_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 20);
    \u0275\u0275text(1, "Quiz");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.quizLabel(row_r5));
  }
}
function QuestionListComponent_Conditional_8_th_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 23);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_td_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 24)(1, "button", 25);
    \u0275\u0275listener("click", function QuestionListComponent_Conditional_8_td_16_Template_button_click_1_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view(row_r7));
    });
    \u0275\u0275text(2, "Voir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 26);
    \u0275\u0275listener("click", function QuestionListComponent_Conditional_8_td_16_Template_button_click_3_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(row_r7));
    });
    \u0275\u0275text(4, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 27);
    \u0275\u0275listener("click", function QuestionListComponent_Conditional_8_td_16_Template_button_click_5_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(row_r7));
    });
    \u0275\u0275text(6, "Supprimer");
    \u0275\u0275elementEnd()();
  }
}
function QuestionListComponent_Conditional_8_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function QuestionListComponent_Conditional_8_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function QuestionListComponent_Conditional_8_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19);
    \u0275\u0275text(1, "Aucune question pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function QuestionListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6);
    \u0275\u0275elementContainerStart(2, 7);
    \u0275\u0275template(3, QuestionListComponent_Conditional_8_th_3_Template, 2, 0, "th", 8)(4, QuestionListComponent_Conditional_8_td_4_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 10);
    \u0275\u0275template(6, QuestionListComponent_Conditional_8_th_6_Template, 2, 0, "th", 8)(7, QuestionListComponent_Conditional_8_td_7_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 12);
    \u0275\u0275template(9, QuestionListComponent_Conditional_8_th_9_Template, 2, 0, "th", 8)(10, QuestionListComponent_Conditional_8_td_10_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 13);
    \u0275\u0275template(12, QuestionListComponent_Conditional_8_th_12_Template, 2, 0, "th", 8)(13, QuestionListComponent_Conditional_8_td_13_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(14, 14);
    \u0275\u0275template(15, QuestionListComponent_Conditional_8_th_15_Template, 2, 0, "th", 15)(16, QuestionListComponent_Conditional_8_td_16_Template, 7, 0, "td", 16);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(17, QuestionListComponent_Conditional_8_tr_17_Template, 1, 0, "tr", 17)(18, QuestionListComponent_Conditional_8_tr_18_Template, 1, 0, "tr", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, QuestionListComponent_Conditional_8_Conditional_19_Template, 2, 0, "p", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.dataSource);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataSource.data.length === 0 ? 19 : -1);
  }
}
var HTTP_TIMEOUT_MS10 = 25e3;
var QuestionListComponent = class _QuestionListComponent {
  questionService = inject(QuestionService);
  router = inject(Router);
  dialogService = inject(DialogService);
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["enonce", "typeQuestion", "points", "quiz", "actions"];
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.loadError.set(null);
    this.questionService.getAll().pipe(timeout(HTTP_TIMEOUT_MS10), finalize(() => this.loading.set(false))).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.loadError.set(null);
      },
      error: () => {
        this.dataSource.data = [];
        this.loadError.set("Impossible de charger les questions (r\xE9seau, CORS ou serveur).");
      }
    });
  }
  quizLabel(q) {
    return q.quiz?.titre ?? "\u2014";
  }
  add() {
    navigateLater(this.router, workspacePath(this.router, "questions", "new"));
  }
  view(q) {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, "questions", q.id));
    }
  }
  edit(q) {
    if (q.id != null) {
      navigateLater(this.router, workspacePath(this.router, "questions", "edit", q.id));
    }
  }
  delete(q) {
    if (q.id == null)
      return;
    this.dialogService.confirm({
      title: "Supprimer la question",
      message: "Confirmer la suppression de cette question ?"
    }).subscribe((ok) => {
      if (ok) {
        this.questionService.delete(q.id).subscribe({
          next: () => this.load(),
          error: () => alert("Erreur lors de la suppression.")
        });
      }
    });
  }
  static \u0275fac = function QuestionListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionListComponent, selectors: [["app-question-list"]], standalone: false, decls: 9, vars: 2, consts: [[1, "page"], [1, "page-head"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "app-alert-error"], [1, "muted"], [1, "table-wrap", "mat-elevation-z1"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "enonce"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-enonce", 4, "matCellDef"], ["matColumnDef", "typeQuestion"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "points"], ["matColumnDef", "quiz"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "col-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty", "muted"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-enonce"], ["mat-cell", ""], ["mat-header-cell", "", 1, "col-actions"], ["mat-cell", "", 1, "col-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function QuestionListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function QuestionListComponent_Template_button_click_4_listener() {
        return ctx.add();
      });
      \u0275\u0275text(5, "Ajouter");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, QuestionListComponent_Conditional_6_Template, 2, 1, "p", 3);
      \u0275\u0275conditionalCreate(7, QuestionListComponent_Conditional_7_Template, 2, 0, "p", 4)(8, QuestionListComponent_Conditional_8_Template, 20, 4, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButton], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cell-enonce[_ngcontent-%COMP%] {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=question-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionListComponent, [{
    type: Component,
    args: [{ selector: "app-question-list", standalone: false, template: '<div class="page">\r\n  <div class="page-head">\r\n    <h1>Questions</h1>\r\n    <button mat-flat-button color="primary" type="button" (click)="add()">Ajouter</button>\r\n  </div>\r\n\r\n  @if (loadError()) {\r\n    <p class="app-alert-error">{{ loadError() }}</p>\r\n  }\r\n  @if (loading()) {\r\n    <p class="muted">Chargement\u2026</p>\r\n  } @else {\r\n    <div class="table-wrap mat-elevation-z1">\r\n      <table mat-table [dataSource]="dataSource" class="data-table">\r\n        <ng-container matColumnDef="enonce">\r\n          <th mat-header-cell *matHeaderCellDef>\xC9nonc\xE9</th>\r\n          <td mat-cell *matCellDef="let row" class="cell-enonce">{{ row.enonce }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="typeQuestion">\r\n          <th mat-header-cell *matHeaderCellDef>Type</th>\r\n          <td mat-cell *matCellDef="let row">{{ row.typeQuestion }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="points">\r\n          <th mat-header-cell *matHeaderCellDef>Points</th>\r\n          <td mat-cell *matCellDef="let row">{{ row.points }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="quiz">\r\n          <th mat-header-cell *matHeaderCellDef>Quiz</th>\r\n          <td mat-cell *matCellDef="let row">{{ quizLabel(row) }}</td>\r\n        </ng-container>\r\n        <ng-container matColumnDef="actions">\r\n          <th mat-header-cell *matHeaderCellDef class="col-actions">Actions</th>\r\n          <td mat-cell *matCellDef="let row" class="col-actions">\r\n            <button mat-stroked-button type="button" (click)="view(row)">Voir</button>\r\n            <button mat-stroked-button type="button" color="primary" (click)="edit(row)">Modifier</button>\r\n            <button mat-stroked-button type="button" color="warn" (click)="delete(row)">Supprimer</button>\r\n          </td>\r\n        </ng-container>\r\n        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r\n        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r\n      </table>\r\n      @if (dataSource.data.length === 0) {\r\n        <p class="empty muted">Aucune question pour le moment.</p>\r\n      }\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/questions/question-list/question-list.component.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table {\n  width: 100%;\n}\n.cell-enonce {\n  max-width: 280px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-actions {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions button {\n  margin-left: 0.35rem;\n}\n.empty {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=question-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionListComponent, { className: "QuestionListComponent", filePath: "src/app/pages/questions/question-list/question-list.component.ts", lineNumber: 19 });
})();

// src/app/pages/questions/question-form/question-form.component.ts
var _forTrack04 = ($index, $item) => $item.id;
function QuestionFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuestionFormComponent_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    \u0275\u0275property("value", q_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(q_r3.titre);
  }
}
function QuestionFormComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function QuestionFormComponent_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function QuestionFormComponent_Conditional_4_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function QuestionFormComponent_Conditional_4_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Valeur num\xE9rique valide requise");
    \u0275\u0275elementEnd();
  }
}
function QuestionFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 2)(1, "form", 3);
    \u0275\u0275listener("ngSubmit", function QuestionFormComponent_Conditional_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "mat-form-field", 4)(3, "mat-label");
    \u0275\u0275text(4, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 5);
    \u0275\u0275repeaterCreate(6, QuestionFormComponent_Conditional_4_For_7_Template, 2, 2, "mat-option", 6, _forTrack04);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, QuestionFormComponent_Conditional_4_Conditional_8_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "\xC9nonc\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 7);
    \u0275\u0275conditionalCreate(13, QuestionFormComponent_Conditional_4_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "mat-form-field", 4)(15, "mat-label");
    \u0275\u0275text(16, "Type de question");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "input", 8);
    \u0275\u0275conditionalCreate(18, QuestionFormComponent_Conditional_4_Conditional_18_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 9)(20, "mat-label");
    \u0275\u0275text(21, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "input", 10);
    \u0275\u0275conditionalCreate(23, QuestionFormComponent_Conditional_4_Conditional_23_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 11)(25, "button", 12);
    \u0275\u0275listener("click", function QuestionFormComponent_Conditional_4_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(26, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 13);
    \u0275\u0275text(28, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.quizzes());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.quizId.touched && ctx_r1.form.controls.quizId.hasError("required") ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.enonce.touched && ctx_r1.form.controls.enonce.hasError("required") ? 13 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.typeQuestion.touched && ctx_r1.form.controls.typeQuestion.hasError("required") ? 18 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.points.invalid && ctx_r1.form.controls.points.touched ? 23 : -1);
  }
}
var HTTP_TIMEOUT_MS11 = 25e3;
var QuestionFormComponent = class _QuestionFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  questionService = inject(QuestionService);
  quizService = inject(QuizService);
  editId = null;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  quizzes = signal([], ...ngDevMode ? [{ debugName: "quizzes" }] : []);
  form = this.fb.nonNullable.group({
    enonce: ["", Validators.required],
    typeQuestion: ["", Validators.required],
    points: [0, [Validators.required, Validators.min(0)]],
    quizId: [null, Validators.required]
  });
  constructor() {
    this.quizService.getAll().subscribe({
      next: (list) => this.quizzes.set(list),
      error: () => this.quizzes.set([])
    });
    combineLatest([this.route.paramMap, this.route.url]).pipe(takeUntilDestroyed(), map(([pm, segs]) => {
      const paths = segs.map((s) => s.path);
      const isEditRoute = paths.includes("edit");
      const raw = pm.get("id");
      const id = raw != null && Number.isFinite(+raw) ? +raw : null;
      return isEditRoute && id != null ? id : null;
    }), distinctUntilChanged(), tap((editId) => {
      if (editId == null) {
        this.editId = null;
        this.form.reset({
          enonce: "",
          typeQuestion: "",
          points: 0,
          quizId: null
        });
      }
    }), switchMap((editId) => {
      if (editId == null) {
        return of(void 0);
      }
      this.editId = editId;
      this.loading.set(true);
      return this.questionService.getById(editId).pipe(timeout(HTTP_TIMEOUT_MS11), tap((q) => {
        this.form.patchValue({
          enonce: q.enonce,
          typeQuestion: q.typeQuestion,
          points: q.points,
          quizId: q.quiz?.id ?? null
        });
      }), catchError(() => {
        alert("Impossible de charger la question.");
        void this.router.navigate(workspacePath(this.router, "questions"));
        return of(void 0);
      }), finalize(() => this.loading.set(false)));
    })).subscribe();
  }
  cancel() {
    void this.router.navigate(workspacePath(this.router, "questions"));
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const quizId = foreignId(v.quizId);
    if (quizId == null) {
      alert("Choisis un quiz valide.");
      return;
    }
    const payload = {
      enonce: v.enonce.trim(),
      typeQuestion: v.typeQuestion.trim(),
      points: num(v.points),
      quizId
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.questionService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, "questions", this.editId)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la mise \xE0 jour."))
      });
    } else {
      this.questionService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, "questions", created.id)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la cr\xE9ation."))
      });
    }
  }
  static \u0275fac = function QuestionFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionFormComponent, selectors: [["app-question-form"]], standalone: false, decls: 5, vars: 2, consts: [[1, "page"], [1, "muted"], ["appearance", "outlined", 1, "form-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["formControlName", "quizId"], [3, "value"], ["matInput", "", "rows", "4", "formControlName", "enonce"], ["matInput", "", "formControlName", "typeQuestion"], ["appearance", "outline", 1, "narrow"], ["matInput", "", "type", "number", "formControlName", "points"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"]], template: function QuestionFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, QuestionFormComponent_Conditional_3_Template, 2, 0, "p", 1)(4, QuestionFormComponent_Conditional_4_Template, 29, 5, "mat-card", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId != null ? "Modifier la question" : "Nouvelle question");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 3 : 4);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatCard, MatFormField, MatLabel, MatError, MatInput, MatSelect, MatOption], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.narrow[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 200px;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=question-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionFormComponent, [{
    type: Component,
    args: [{ selector: "app-question-form", standalone: false, template: `<div class="page">\r
  <h1>{{ editId != null ? 'Modifier la question' : 'Nouvelle question' }}</h1>\r
\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <mat-card appearance="outlined" class="form-card">\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Quiz</mat-label>\r
          <mat-select formControlName="quizId">\r
            @for (q of quizzes(); track q.id) {\r
              <mat-option [value]="q.id">{{ q.titre }}</mat-option>\r
            }\r
          </mat-select>\r
          @if (form.controls.quizId.touched && form.controls.quizId.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>\xC9nonc\xE9</mat-label>\r
          <textarea matInput rows="4" formControlName="enonce"></textarea>\r
          @if (form.controls.enonce.touched && form.controls.enonce.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Type de question</mat-label>\r
          <input matInput formControlName="typeQuestion" />\r
          @if (form.controls.typeQuestion.touched && form.controls.typeQuestion.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="narrow">\r
          <mat-label>Points</mat-label>\r
          <input matInput type="number" formControlName="points" />\r
          @if (form.controls.points.invalid && form.controls.points.touched) {\r
            <mat-error>Valeur num\xE9rique valide requise</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <div class="actions">\r
          <button mat-stroked-button type="button" (click)="cancel()">Annuler</button>\r
          <button mat-flat-button color="primary" type="submit">Enregistrer</button>\r
        </div>\r
      </form>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/questions/question-form/question-form.component.css */\n.page {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full {\n  width: 100%;\n  display: block;\n}\n.narrow {\n  width: 100%;\n  max-width: 200px;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=question-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionFormComponent, { className: "QuestionFormComponent", filePath: "src/app/pages/questions/question-form/question-form.component.ts", lineNumber: 23 });
})();

// src/app/pages/questions/question-detail/question-detail.component.ts
function QuestionDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuestionDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function QuestionDetailComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(5, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function QuestionDetailComponent_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(7, "Modifier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-card", 6)(9, "dl", 7)(10, "dt");
    \u0275\u0275text(11, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "\xC9nonc\xE9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd", 8);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dt");
    \u0275\u0275text(23, "Points");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "dd");
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((ctx_r1.question.quiz == null ? null : ctx_r1.question.quiz.titre) ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.question.enonce);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.question.typeQuestion);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.question.points);
  }
}
var HTTP_TIMEOUT_MS12 = 25e3;
var QuestionDetailComponent = class _QuestionDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  questionService = inject(QuestionService);
  question = null;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.question = null;
    }), switchMap((id) => {
      if (!id || !Number.isFinite(+id)) {
        this.loading.set(false);
        void this.router.navigate(workspacePath(this.router, "questions"));
        return EMPTY;
      }
      return this.questionService.getById(+id).pipe(timeout(HTTP_TIMEOUT_MS12), catchError(() => {
        this.loading.set(false);
        alert("Question introuvable.");
        void this.router.navigate(workspacePath(this.router, "questions"));
        return EMPTY;
      }), finalize(() => this.loading.set(false)));
    })).subscribe({
      next: (q) => {
        this.question = q;
      }
    });
  }
  back() {
    void this.router.navigate(workspacePath(this.router, "questions"));
  }
  edit() {
    if (this.question?.id != null) {
      void this.router.navigate(workspacePath(this.router, "questions", "edit", this.question.id));
    }
  }
  static \u0275fac = function QuestionDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuestionDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuestionDetailComponent, selectors: [["app-question-detail"]], standalone: false, decls: 3, vars: 1, consts: [[1, "page"], [1, "muted"], [1, "page-head"], [1, "head-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["appearance", "outlined", 1, "detail-card"], [1, "detail-grid"], [1, "multiline"]], template: function QuestionDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, QuestionDetailComponent_Conditional_1_Template, 2, 0, "p", 1)(2, QuestionDetailComponent_Conditional_2_Template, 26, 4);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.question ? 2 : -1);
    }
  }, dependencies: [MatButton, MatCard], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=question-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuestionDetailComponent, [{
    type: Component,
    args: [{ selector: "app-question-detail", standalone: false, template: `<div class="page">\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else if (question) {\r
    <div class="page-head">\r
      <h1>Question</h1>\r
      <div class="head-actions">\r
        <button mat-stroked-button type="button" (click)="back()">Retour</button>\r
        <button mat-flat-button color="primary" type="button" (click)="edit()">Modifier</button>\r
      </div>\r
    </div>\r
\r
    <mat-card appearance="outlined" class="detail-card">\r
      <dl class="detail-grid">\r
        <dt>Quiz</dt>\r
        <dd>{{ question.quiz?.titre ?? '\u2014' }}</dd>\r
        <dt>\xC9nonc\xE9</dt>\r
        <dd class="multiline">{{ question.enonce }}</dd>\r
        <dt>Type</dt>\r
        <dd>{{ question.typeQuestion }}</dd>\r
        <dt>Points</dt>\r
        <dd>{{ question.points }}</dd>\r
      </dl>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/questions/question-detail/question-detail.component.css */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid dt {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid dd {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline {\n  white-space: pre-wrap;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=question-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuestionDetailComponent, { className: "QuestionDetailComponent", filePath: "src/app/pages/questions/question-detail/question-detail.component.ts", lineNumber: 18 });
})();

// src/app/services/reponse.service.ts
function reponseWriteBody(r) {
  return {
    texte: r.texte,
    correcte: r.correcte
  };
}
var ReponseService = class _ReponseService {
  http = inject(HttpClient);
  apiUrl = environment.apiUrl;
  getAll() {
    return this.http.get(`${this.apiUrl}/reponses`).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  getById(id) {
    return this.http.get(`${this.apiUrl}/reponses/${id}`);
  }
  create(reponse) {
    const questionId = reponse.questionId;
    if (questionId == null) {
      return throwError(() => new Error("questionId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("questionId", String(questionId));
    return this.http.post(`${this.apiUrl}/reponses`, reponseWriteBody(reponse), { params });
  }
  update(id, reponse) {
    const questionId = reponse.questionId;
    if (questionId == null) {
      return throwError(() => new Error("questionId requis (param\xE8tre serveur)."));
    }
    const params = new HttpParams().set("questionId", String(questionId));
    return this.http.put(`${this.apiUrl}/reponses/${id}`, reponseWriteBody(reponse), { params });
  }
  delete(id) {
    return this.http.delete(`${this.apiUrl}/reponses/${id}`);
  }
  static \u0275fac = function ReponseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReponseService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReponseService, factory: _ReponseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReponseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/reponses/reponse-list/reponse-list.component.ts
function ReponseListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.loadError());
  }
}
function ReponseListComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReponseListComponent_Conditional_8_th_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Texte");
    \u0275\u0275elementEnd();
  }
}
function ReponseListComponent_Conditional_8_td_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r2.texte);
  }
}
function ReponseListComponent_Conditional_8_th_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Correcte");
    \u0275\u0275elementEnd();
  }
}
function ReponseListComponent_Conditional_8_td_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r3.correcte ? "Oui" : "Non");
  }
}
function ReponseListComponent_Conditional_8_th_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 19);
    \u0275\u0275text(1, "Question");
    \u0275\u0275elementEnd();
  }
}
function ReponseListComponent_Conditional_8_td_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.questionLabel(row_r4));
  }
}
function ReponseListComponent_Conditional_8_th_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 22);
    \u0275\u0275text(1, "Actions");
    \u0275\u0275elementEnd();
  }
}
function ReponseListComponent_Conditional_8_td_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 23)(1, "button", 24);
    \u0275\u0275listener("click", function ReponseListComponent_Conditional_8_td_13_Template_button_click_1_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.view(row_r6));
    });
    \u0275\u0275text(2, "Voir");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 25);
    \u0275\u0275listener("click", function ReponseListComponent_Conditional_8_td_13_Template_button_click_3_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.edit(row_r6));
    });
    \u0275\u0275text(4, "Modifier");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 26);
    \u0275\u0275listener("click", function ReponseListComponent_Conditional_8_td_13_Template_button_click_5_listener() {
      const row_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.delete(row_r6));
    });
    \u0275\u0275text(6, "Supprimer");
    \u0275\u0275elementEnd()();
  }
}
function ReponseListComponent_Conditional_8_tr_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 27);
  }
}
function ReponseListComponent_Conditional_8_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 28);
  }
}
function ReponseListComponent_Conditional_8_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1, "Aucune r\xE9ponse pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function ReponseListComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "table", 6);
    \u0275\u0275elementContainerStart(2, 7);
    \u0275\u0275template(3, ReponseListComponent_Conditional_8_th_3_Template, 2, 0, "th", 8)(4, ReponseListComponent_Conditional_8_td_4_Template, 2, 1, "td", 9);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(5, 10);
    \u0275\u0275template(6, ReponseListComponent_Conditional_8_th_6_Template, 2, 0, "th", 8)(7, ReponseListComponent_Conditional_8_td_7_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(8, 12);
    \u0275\u0275template(9, ReponseListComponent_Conditional_8_th_9_Template, 2, 0, "th", 8)(10, ReponseListComponent_Conditional_8_td_10_Template, 2, 1, "td", 11);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(11, 13);
    \u0275\u0275template(12, ReponseListComponent_Conditional_8_th_12_Template, 2, 0, "th", 14)(13, ReponseListComponent_Conditional_8_td_13_Template, 7, 0, "td", 15);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(14, ReponseListComponent_Conditional_8_tr_14_Template, 1, 0, "tr", 16)(15, ReponseListComponent_Conditional_8_tr_15_Template, 1, 0, "tr", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(16, ReponseListComponent_Conditional_8_Conditional_16_Template, 2, 0, "p", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("dataSource", ctx_r0.dataSource);
    \u0275\u0275advance(13);
    \u0275\u0275property("matHeaderRowDef", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r0.displayedColumns);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.dataSource.data.length === 0 ? 16 : -1);
  }
}
var HTTP_TIMEOUT_MS13 = 25e3;
var ReponseListComponent = class _ReponseListComponent {
  reponseService = inject(ReponseService);
  router = inject(Router);
  dialogService = inject(DialogService);
  dataSource = new MatTableDataSource([]);
  displayedColumns = ["texte", "correcte", "question", "actions"];
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  loadError = signal(null, ...ngDevMode ? [{ debugName: "loadError" }] : []);
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.loadError.set(null);
    this.reponseService.getAll().pipe(timeout(HTTP_TIMEOUT_MS13), finalize(() => this.loading.set(false))).subscribe({
      next: (data) => {
        this.dataSource.data = data;
        this.loadError.set(null);
      },
      error: () => {
        this.dataSource.data = [];
        this.loadError.set("Impossible de charger les r\xE9ponses (r\xE9seau, CORS ou serveur).");
      }
    });
  }
  questionLabel(r) {
    const e = r.question?.enonce;
    if (!e)
      return "\u2014";
    return e.length > 60 ? e.slice(0, 60) + "\u2026" : e;
  }
  add() {
    navigateLater(this.router, workspacePath(this.router, "reponses", "new"));
  }
  view(r) {
    if (r.id != null) {
      navigateLater(this.router, workspacePath(this.router, "reponses", r.id));
    }
  }
  edit(r) {
    if (r.id != null) {
      navigateLater(this.router, workspacePath(this.router, "reponses", "edit", r.id));
    }
  }
  delete(r) {
    if (r.id == null)
      return;
    this.dialogService.confirm({
      title: "Supprimer la r\xE9ponse",
      message: "Confirmer la suppression de cette r\xE9ponse ?"
    }).subscribe((ok) => {
      if (ok) {
        this.reponseService.delete(r.id).subscribe({
          next: () => this.load(),
          error: () => alert("Erreur lors de la suppression.")
        });
      }
    });
  }
  static \u0275fac = function ReponseListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReponseListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReponseListComponent, selectors: [["app-reponse-list"]], standalone: false, decls: 9, vars: 2, consts: [[1, "page"], [1, "page-head"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "app-alert-error"], [1, "muted"], [1, "table-wrap", "mat-elevation-z1"], ["mat-table", "", 1, "data-table", 3, "dataSource"], ["matColumnDef", "texte"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "cell-texte", 4, "matCellDef"], ["matColumnDef", "correcte"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "question"], ["matColumnDef", "actions"], ["mat-header-cell", "", "class", "col-actions", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "col-actions", 4, "matCellDef"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "empty", "muted"], ["mat-header-cell", ""], ["mat-cell", "", 1, "cell-texte"], ["mat-cell", ""], ["mat-header-cell", "", 1, "col-actions"], ["mat-cell", "", 1, "col-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click"], ["mat-stroked-button", "", "type", "button", "color", "warn", 3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function ReponseListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "R\xE9ponses");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function ReponseListComponent_Template_button_click_4_listener() {
        return ctx.add();
      });
      \u0275\u0275text(5, "Ajouter");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(6, ReponseListComponent_Conditional_6_Template, 2, 1, "p", 3);
      \u0275\u0275conditionalCreate(7, ReponseListComponent_Conditional_7_Template, 2, 0, "p", 4)(8, ReponseListComponent_Conditional_8_Template, 17, 4, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275conditional(ctx.loadError() ? 6 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 7 : 8);
    }
  }, dependencies: [MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButton], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap[_ngcontent-%COMP%] {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.cell-texte[_ngcontent-%COMP%] {\n  max-width: 260px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-actions[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: 0.35rem;\n}\n.empty[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=reponse-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReponseListComponent, [{
    type: Component,
    args: [{ selector: "app-reponse-list", standalone: false, template: `<div class="page">\r
  <div class="page-head">\r
    <h1>R\xE9ponses</h1>\r
    <button mat-flat-button color="primary" type="button" (click)="add()">Ajouter</button>\r
  </div>\r
\r
  @if (loadError()) {\r
    <p class="app-alert-error">{{ loadError() }}</p>\r
  }\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <div class="table-wrap mat-elevation-z1">\r
      <table mat-table [dataSource]="dataSource" class="data-table">\r
        <ng-container matColumnDef="texte">\r
          <th mat-header-cell *matHeaderCellDef>Texte</th>\r
          <td mat-cell *matCellDef="let row" class="cell-texte">{{ row.texte }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="correcte">\r
          <th mat-header-cell *matHeaderCellDef>Correcte</th>\r
          <td mat-cell *matCellDef="let row">{{ row.correcte ? 'Oui' : 'Non' }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="question">\r
          <th mat-header-cell *matHeaderCellDef>Question</th>\r
          <td mat-cell *matCellDef="let row">{{ questionLabel(row) }}</td>\r
        </ng-container>\r
        <ng-container matColumnDef="actions">\r
          <th mat-header-cell *matHeaderCellDef class="col-actions">Actions</th>\r
          <td mat-cell *matCellDef="let row" class="col-actions">\r
            <button mat-stroked-button type="button" (click)="view(row)">Voir</button>\r
            <button mat-stroked-button type="button" color="primary" (click)="edit(row)">Modifier</button>\r
            <button mat-stroked-button type="button" color="warn" (click)="delete(row)">Supprimer</button>\r
          </td>\r
        </ng-container>\r
        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>\r
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>\r
      </table>\r
      @if (dataSource.data.length === 0) {\r
        <p class="empty muted">Aucune r\xE9ponse pour le moment.</p>\r
      }\r
    </div>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/reponses/reponse-list/reponse-list.component.css */\n.page {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.table-wrap {\n  overflow: auto;\n  border-radius: 12px;\n  background: #fff;\n}\n.data-table {\n  width: 100%;\n}\n.cell-texte {\n  max-width: 260px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.col-actions {\n  text-align: right;\n  white-space: nowrap;\n}\n.col-actions button {\n  margin-left: 0.35rem;\n}\n.empty {\n  padding: 1rem 1.25rem;\n  margin: 0;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=reponse-list.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReponseListComponent, { className: "ReponseListComponent", filePath: "src/app/pages/reponses/reponse-list/reponse-list.component.ts", lineNumber: 19 });
})();

// src/app/pages/reponses/reponse-form/reponse-form.component.ts
var _forTrack05 = ($index, $item) => $item.id;
function ReponseFormComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReponseFormComponent_Conditional_4_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", q_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.questionLabel(q_r3));
  }
}
function ReponseFormComponent_Conditional_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ReponseFormComponent_Conditional_4_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Requis");
    \u0275\u0275elementEnd();
  }
}
function ReponseFormComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 2)(1, "form", 3);
    \u0275\u0275listener("ngSubmit", function ReponseFormComponent_Conditional_4_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275elementStart(2, "mat-form-field", 4)(3, "mat-label");
    \u0275\u0275text(4, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 5);
    \u0275\u0275repeaterCreate(6, ReponseFormComponent_Conditional_4_For_7_Template, 2, 2, "mat-option", 6, _forTrack05);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ReponseFormComponent_Conditional_4_Conditional_8_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 4)(10, "mat-label");
    \u0275\u0275text(11, "Texte");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 7);
    \u0275\u0275conditionalCreate(13, ReponseFormComponent_Conditional_4_Conditional_13_Template, 2, 0, "mat-error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 8)(15, "mat-checkbox", 9);
    \u0275\u0275text(16, "R\xE9ponse correcte");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 10)(18, "button", 11);
    \u0275\u0275listener("click", function ReponseFormComponent_Conditional_4_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancel());
    });
    \u0275\u0275text(19, "Annuler");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 12);
    \u0275\u0275text(21, "Enregistrer");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r1.questions());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.controls.questionId.touched && ctx_r1.form.controls.questionId.hasError("required") ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.form.controls.texte.touched && ctx_r1.form.controls.texte.hasError("required") ? 13 : -1);
  }
}
var HTTP_TIMEOUT_MS14 = 25e3;
var ReponseFormComponent = class _ReponseFormComponent {
  fb = inject(FormBuilder);
  route = inject(ActivatedRoute);
  router = inject(Router);
  reponseService = inject(ReponseService);
  questionService = inject(QuestionService);
  editId = null;
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : []);
  questions = signal([], ...ngDevMode ? [{ debugName: "questions" }] : []);
  form = this.fb.nonNullable.group({
    texte: ["", Validators.required],
    correcte: [false],
    questionId: [null, Validators.required]
  });
  constructor() {
    this.questionService.getAll().subscribe({
      next: (list) => this.questions.set(list),
      error: () => this.questions.set([])
    });
    combineLatest([this.route.paramMap, this.route.url]).pipe(takeUntilDestroyed(), map(([pm, segs]) => {
      const paths = segs.map((s) => s.path);
      const isEditRoute = paths.includes("edit");
      const raw = pm.get("id");
      const id = raw != null && Number.isFinite(+raw) ? +raw : null;
      return isEditRoute && id != null ? id : null;
    }), distinctUntilChanged(), tap((editId) => {
      if (editId == null) {
        this.editId = null;
        this.form.reset({
          texte: "",
          correcte: false,
          questionId: null
        });
      }
    }), switchMap((editId) => {
      if (editId == null) {
        return of(void 0);
      }
      this.editId = editId;
      this.loading.set(true);
      return this.reponseService.getById(editId).pipe(timeout(HTTP_TIMEOUT_MS14), tap((r) => {
        this.form.patchValue({
          texte: r.texte,
          correcte: r.correcte,
          questionId: r.question?.id ?? null
        });
      }), catchError(() => {
        alert("Impossible de charger la r\xE9ponse.");
        void this.router.navigate(workspacePath(this.router, "reponses"));
        return of(void 0);
      }), finalize(() => this.loading.set(false)));
    })).subscribe();
  }
  cancel() {
    void this.router.navigate(workspacePath(this.router, "reponses"));
  }
  questionLabel(q) {
    const e = q.enonce;
    const short = e.length > 80 ? e.slice(0, 80) + "\u2026" : e;
    return short;
  }
  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    const v = this.form.getRawValue();
    const questionId = foreignId(v.questionId);
    if (questionId == null) {
      alert("Choisis une question valide.");
      return;
    }
    const payload = {
      texte: v.texte.trim(),
      correcte: !!v.correcte,
      questionId
    };
    if (this.editId != null) {
      payload.id = this.editId;
      this.reponseService.update(this.editId, payload).subscribe({
        next: () => void this.router.navigate(workspacePath(this.router, "reponses", this.editId)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la mise \xE0 jour."))
      });
    } else {
      this.reponseService.create(payload).subscribe({
        next: (created) => void this.router.navigate(workspacePath(this.router, "reponses", created.id)),
        error: (err) => alert(apiErrorMessage(err, "Erreur lors de la cr\xE9ation."))
      });
    }
  }
  static \u0275fac = function ReponseFormComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReponseFormComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReponseFormComponent, selectors: [["app-reponse-form"]], standalone: false, decls: 5, vars: 2, consts: [[1, "page"], [1, "muted"], ["appearance", "outlined", 1, "form-card"], [3, "ngSubmit", "formGroup"], ["appearance", "outline", 1, "full"], ["formControlName", "questionId"], [3, "value"], ["matInput", "", "rows", "3", "formControlName", "texte"], [1, "check-row"], ["formControlName", "correcte"], [1, "actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "submit"]], template: function ReponseFormComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h1");
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(3, ReponseFormComponent_Conditional_3_Template, 2, 0, "p", 1)(4, ReponseFormComponent_Conditional_4_Template, 22, 3, "mat-card", 2);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.editId != null ? "Modifier la r\xE9ponse" : "Nouvelle r\xE9ponse");
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 3 : 4);
    }
  }, dependencies: [\u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatButton, MatCard, MatFormField, MatLabel, MatError, MatInput, MatSelect, MatOption, MatCheckbox], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n  display: block;\n}\n.check-row[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 1rem;\n}\n.actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=reponse-form.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReponseFormComponent, [{
    type: Component,
    args: [{ selector: "app-reponse-form", standalone: false, template: `<div class="page">\r
  <h1>{{ editId != null ? 'Modifier la r\xE9ponse' : 'Nouvelle r\xE9ponse' }}</h1>\r
\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else {\r
    <mat-card appearance="outlined" class="form-card">\r
      <form [formGroup]="form" (ngSubmit)="save()">\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Question</mat-label>\r
          <mat-select formControlName="questionId">\r
            @for (q of questions(); track q.id) {\r
              <mat-option [value]="q.id">{{ questionLabel(q) }}</mat-option>\r
            }\r
          </mat-select>\r
          @if (form.controls.questionId.touched && form.controls.questionId.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <mat-form-field appearance="outline" class="full">\r
          <mat-label>Texte</mat-label>\r
          <textarea matInput rows="3" formControlName="texte"></textarea>\r
          @if (form.controls.texte.touched && form.controls.texte.hasError('required')) {\r
            <mat-error>Requis</mat-error>\r
          }\r
        </mat-form-field>\r
\r
        <div class="check-row">\r
          <mat-checkbox formControlName="correcte">R\xE9ponse correcte</mat-checkbox>\r
        </div>\r
\r
        <div class="actions">\r
          <button mat-stroked-button type="button" (click)="cancel()">Annuler</button>\r
          <button mat-flat-button color="primary" type="submit">Enregistrer</button>\r
        </div>\r
      </form>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/reponses/reponse-form/reponse-form.component.css */\n.page {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 1.25rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.form-card {\n  padding: 0.5rem 0.25rem 1rem;\n  border-radius: 12px !important;\n}\n.full {\n  width: 100%;\n  display: block;\n}\n.check-row {\n  margin: 0.5rem 0 1rem;\n}\n.actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  margin-top: 0.5rem;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=reponse-form.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReponseFormComponent, { className: "ReponseFormComponent", filePath: "src/app/pages/reponses/reponse-form/reponse-form.component.ts", lineNumber: 23 });
})();

// src/app/pages/reponses/reponse-detail/reponse-detail.component.ts
function ReponseDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function ReponseDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "h1");
    \u0275\u0275text(2, "R\xE9ponse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "button", 4);
    \u0275\u0275listener("click", function ReponseDetailComponent_Conditional_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(5, "Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 5);
    \u0275\u0275listener("click", function ReponseDetailComponent_Conditional_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275text(7, "Modifier");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "mat-card", 6)(9, "dl", 7)(10, "dt");
    \u0275\u0275text(11, "Question");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd", 8);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "dt");
    \u0275\u0275text(15, "Texte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "dd", 8);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "dt");
    \u0275\u0275text(19, "Correcte");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "dd");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate((ctx_r1.reponse.question == null ? null : ctx_r1.reponse.question.enonce) ?? "\u2014");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.reponse.texte);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.reponse.correcte ? "Oui" : "Non");
  }
}
var HTTP_TIMEOUT_MS15 = 25e3;
var ReponseDetailComponent = class _ReponseDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  reponseService = inject(ReponseService);
  reponse = null;
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.reponse = null;
    }), switchMap((id) => {
      if (!id || !Number.isFinite(+id)) {
        this.loading.set(false);
        void this.router.navigate(workspacePath(this.router, "reponses"));
        return EMPTY;
      }
      return this.reponseService.getById(+id).pipe(timeout(HTTP_TIMEOUT_MS15), catchError(() => {
        this.loading.set(false);
        alert("R\xE9ponse introuvable.");
        void this.router.navigate(workspacePath(this.router, "reponses"));
        return EMPTY;
      }), finalize(() => this.loading.set(false)));
    })).subscribe({
      next: (r) => {
        this.reponse = r;
      }
    });
  }
  back() {
    void this.router.navigate(workspacePath(this.router, "reponses"));
  }
  edit() {
    if (this.reponse?.id != null) {
      void this.router.navigate(workspacePath(this.router, "reponses", "edit", this.reponse.id));
    }
  }
  static \u0275fac = function ReponseDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReponseDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReponseDetailComponent, selectors: [["app-reponse-detail"]], standalone: false, decls: 3, vars: 1, consts: [[1, "page"], [1, "muted"], [1, "page-head"], [1, "head-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["appearance", "outlined", 1, "detail-card"], [1, "detail-grid"], [1, "multiline"]], template: function ReponseDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, ReponseDetailComponent_Conditional_1_Template, 2, 0, "p", 1)(2, ReponseDetailComponent_Conditional_2_Template, 22, 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading() ? 1 : ctx.reponse ? 2 : -1);
    }
  }, dependencies: [MatButton, MatCard], styles: ["\n\n.page[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n/*# sourceMappingURL=reponse-detail.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReponseDetailComponent, [{
    type: Component,
    args: [{ selector: "app-reponse-detail", standalone: false, template: `<div class="page">\r
  @if (loading()) {\r
    <p class="muted">Chargement\u2026</p>\r
  } @else if (reponse) {\r
    <div class="page-head">\r
      <h1>R\xE9ponse</h1>\r
      <div class="head-actions">\r
        <button mat-stroked-button type="button" (click)="back()">Retour</button>\r
        <button mat-flat-button color="primary" type="button" (click)="edit()">Modifier</button>\r
      </div>\r
    </div>\r
\r
    <mat-card appearance="outlined" class="detail-card">\r
      <dl class="detail-grid">\r
        <dt>Question</dt>\r
        <dd class="multiline">{{ reponse.question?.enonce ?? '\u2014' }}</dd>\r
        <dt>Texte</dt>\r
        <dd class="multiline">{{ reponse.texte }}</dd>\r
        <dt>Correcte</dt>\r
        <dd>{{ reponse.correcte ? 'Oui' : 'Non' }}</dd>\r
      </dl>\r
    </mat-card>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/reponses/reponse-detail/reponse-detail.component.css */\n.page {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  flex-wrap: wrap;\n  margin-bottom: 1.25rem;\n}\n.page-head h1 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.head-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.detail-card {\n  border-radius: 12px !important;\n  padding: 1rem 1.25rem;\n}\n.detail-grid {\n  display: grid;\n  grid-template-columns: 160px 1fr;\n  gap: 0.75rem 1rem;\n  margin: 0;\n}\n.detail-grid dt {\n  margin: 0;\n  font-weight: 600;\n  color: #475569;\n}\n.detail-grid dd {\n  margin: 0;\n  color: #0f172a;\n}\n.multiline {\n  white-space: pre-wrap;\n}\n.muted {\n  color: #64748b;\n}\n/*# sourceMappingURL=reponse-detail.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReponseDetailComponent, { className: "ReponseDetailComponent", filePath: "src/app/pages/reponses/reponse-detail/reponse-detail.component.ts", lineNumber: 18 });
})();

// src/app/services/quiz-correction.service.ts
function num2(v) {
  if (v == null || v === "")
    return void 0;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : void 0;
}
function bool(v) {
  if (typeof v === "boolean")
    return v;
  if (v === "true" || v === 1)
    return true;
  if (v === "false" || v === 0)
    return false;
  return void 0;
}
function normalizeQuizResult(raw) {
  if (raw == null || typeof raw !== "object") {
    return {};
  }
  const o = raw;
  const score = num2(o["score"] ?? o["scoreObtenu"] ?? o["score_obtenu"]);
  const scoreMax = num2(o["scoreMax"] ?? o["score_max"]);
  const bonnes = num2(o["bonnesReponses"] ?? o["nombreBonnesReponses"] ?? o["bonnes_reponses"] ?? o["nombre_bonnes_reponses"]) ?? void 0;
  const mauvaises = num2(o["mauvaisesReponses"] ?? o["nombreMauvaisesReponses"] ?? o["mauvaises_reponses"] ?? o["nombre_mauvaises_reponses"]) ?? void 0;
  const pourcentage = num2(o["pourcentage"] ?? o["pourcent"]);
  const valide = bool(o["valide"] ?? o["reussi"] ?? o["validee"]);
  const message = typeof o["message"] === "string" ? o["message"] : typeof o["messageCertificat"] === "string" ? o["messageCertificat"] : typeof o["message_certificat"] === "string" ? o["message_certificat"] : void 0;
  const certificatGenere = bool(o["certificatGenere"] ?? o["certificat_genere"]);
  const certificatId = num2(o["certificatId"] ?? o["certificat_id"]);
  const codeCertificat = typeof o["codeCertificat"] === "string" ? o["codeCertificat"] : typeof o["code_certificat"] === "string" ? o["code_certificat"] : void 0;
  const dateObtention = typeof o["dateObtention"] === "string" ? o["dateObtention"] : typeof o["date_obtention"] === "string" ? o["date_obtention"] : void 0;
  const emailEnvoye = bool(o["emailEnvoye"] ?? o["email_envoye"]);
  const pdfDisponible = bool(o["pdfDisponible"] ?? o["pdf_disponible"]);
  const certificatPdfUrl = typeof o["certificatPdfUrl"] === "string" ? o["certificatPdfUrl"] : typeof o["certificat_pdf_url"] === "string" ? o["certificat_pdf_url"] : void 0;
  return {
    score,
    scoreMax,
    bonnesReponses: bonnes,
    mauvaisesReponses: mauvaises,
    pourcentage,
    valide,
    message,
    certificatGenere,
    certificatId,
    codeCertificat,
    dateObtention,
    emailEnvoye,
    pdfDisponible,
    certificatPdfUrl
  };
}
var QuizCorrectionService = class _QuizCorrectionService {
  http = inject(HttpClient);
  auth = inject(AuthService);
  /** Soumission des réponses + correction / score côté serveur. */
  submit(quizId, submission) {
    const url = apiUrl(ApiEndpoints.quizSubmit(quizId));
    const uid = this.auth.userId();
    const mailAddr = this.auth.email()?.trim();
    const body = __spreadValues(__spreadValues(__spreadValues({}, submission), uid != null ? { userId: uid } : {}), mailAddr != null && mailAddr.length > 0 ? { email: mailAddr, mail: mailAddr } : {});
    return this.http.post(url, body).pipe(map(normalizeQuizResult));
  }
  static \u0275fac = function QuizCorrectionService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizCorrectionService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizCorrectionService, factory: _QuizCorrectionService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizCorrectionService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/quiz-result-store.service.ts
var QuizResultStoreService = class _QuizResultStoreService {
  data = signal(null, ...ngDevMode ? [{ debugName: "data" }] : []);
  snapshot = this.data.asReadonly();
  set(quizId, result, quizTitre) {
    this.data.set({
      quizId,
      quizTitre,
      result,
      at: Date.now()
    });
  }
  clear() {
    this.data.set(null);
  }
  static \u0275fac = function QuizResultStoreService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizResultStoreService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _QuizResultStoreService, factory: _QuizResultStoreService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizResultStoreService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/models/quiz-result.model.ts
function quizResultHasCertificatInfo(r) {
  if (!r)
    return false;
  return !!(r.certificatGenere || r.certificatId != null || r.codeCertificat && r.codeCertificat.length > 0 || r.certificatPdfUrl && r.certificatPdfUrl.length > 0);
}

// src/app/models/certificat.model.ts
function num3(v) {
  if (v == null || v === "")
    return void 0;
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : void 0;
}
function str(v) {
  if (v == null)
    return void 0;
  const s = String(v).trim();
  return s.length ? s : void 0;
}
function bool2(v) {
  if (typeof v === "boolean")
    return v;
  if (v === "true" || v === 1)
    return true;
  if (v === "false" || v === 0)
    return false;
  return void 0;
}
function normalizeCertificat(raw) {
  if (raw == null || typeof raw !== "object") {
    return {
      codeCertificat: "",
      dateObtention: "",
      emailEnvoye: false
    };
  }
  const o = raw;
  const nestedQuiz = o["quiz"];
  const nestedModule = o["module"];
  const nestedUser = o["user"];
  return {
    id: num3(o["id"]),
    codeCertificat: str(o["codeCertificat"] ?? o["code_certificat"]) ?? "",
    dateObtention: str(o["dateObtention"] ?? o["date_obtention"]) ?? "",
    score: num3(o["score"]),
    pourcentage: num3(o["pourcentage"] ?? o["pourcent"]),
    emailEnvoye: bool2(o["emailEnvoye"] ?? o["email_envoye"]) ?? false,
    pdfDisponible: bool2(o["pdfDisponible"] ?? o["pdf_disponible"]),
    certificatPdfUrl: str(o["certificatPdfUrl"] ?? o["certificat_pdf_url"]),
    nomFichierPdf: str(o["nomFichierPdf"] ?? o["nom_fichier_pdf"]),
    userId: num3(o["userId"] ?? o["user_id"]),
    quizId: num3(o["quizId"] ?? o["quiz_id"]),
    moduleId: num3(o["moduleId"] ?? o["module_id"]),
    quizTitre: str(o["quizTitre"] ?? o["quiz_titre"] ?? nestedQuiz?.["titre"]),
    moduleTitre: str(o["moduleTitre"] ?? o["module_titre"] ?? nestedModule?.["titre"]),
    etudiantNom: str(o["etudiantNom"] ?? o["etudiant_nom"] ?? o["nomEtudiant"] ?? nestedUser?.["nom"] ?? nestedUser?.["username"])
  };
}

// src/app/services/certificat.service.ts
var CertificatService = class _CertificatService {
  http = inject(HttpClient);
  root = environment.apiUrl.replace(/\/$/, "");
  /** URL relative au domaine courant pour GET HttpClient (blob). */
  getPdfUrl(certificatId) {
    return `${this.root}/${ApiEndpoints.certificatPdf(certificatId)}`;
  }
  /** Liste complète (si exposée par le backend). */
  getAll() {
    return this.http.get(`${this.root}/${ApiEndpoints.certificats}`).pipe(map((raw) => unwrapArrayResponse(raw).map((row) => normalizeCertificat(row))));
  }
  getById(id) {
    return this.http.get(`${this.root}/${ApiEndpoints.certificatById(id)}`).pipe(map((raw) => normalizeCertificat(raw)));
  }
  getByUser(userId) {
    return this.http.get(`${this.root}/${ApiEndpoints.certificatsByUtilisateur(userId)}`).pipe(map((raw) => unwrapArrayResponse(raw).map((row) => normalizeCertificat(row))));
  }
  getByCode(code) {
    const c = code?.trim();
    if (!c) {
      return throwError(() => new Error("Code certificat vide."));
    }
    return this.http.get(`${this.root}/${ApiEndpoints.certificatByCode(c)}`).pipe(map((raw) => normalizeCertificat(raw)));
  }
  /** Télécharge le fichier PDF (blob + lien temporaire). */
  telechargerPdf(cert) {
    const id = cert.id;
    if (id == null) {
      return;
    }
    this.telechargerPdfById(id, cert.nomFichierPdf?.trim());
  }
  telechargerPdfById(certificatId, nomFichier) {
    const url = this.getPdfUrl(certificatId);
    const name = nomFichier?.trim() || `certificat-${certificatId}.pdf`;
    this.telechargerBlobUrl(url, name);
  }
  /** GET blob (URL absolue ou relative au site). */
  telechargerDepuisUrlAbsolue(absoluteUrl, nomFichier) {
    this.telechargerBlobUrl(absoluteUrl, nomFichier);
  }
  telechargerBlobUrl(url, downloadName) {
    this.http.get(url, { responseType: "blob" }).subscribe({
      next: (blob) => {
        const a = document.createElement("a");
        const objectUrl = URL.createObjectURL(blob);
        a.href = objectUrl;
        a.download = downloadName;
        a.click();
        URL.revokeObjectURL(objectUrl);
      }
    });
  }
  /** À partir du résultat quiz (DTO enrichi). */
  absolutePdfHrefForQuizResult(r) {
    const fromDto = r.certificatPdfUrl?.trim();
    if (fromDto) {
      return this.toAbsoluteUrl(fromDto);
    }
    if (r.certificatId != null) {
      return this.toAbsoluteUrl(`${this.root}/${ApiEndpoints.certificatPdf(r.certificatId)}`);
    }
    return null;
  }
  toAbsoluteUrl(pathOrUrl) {
    const u = pathOrUrl.trim();
    if (u.startsWith("http://") || u.startsWith("https://")) {
      return u;
    }
    if (typeof window === "undefined") {
      return u;
    }
    if (u.startsWith("/")) {
      return `${window.location.origin}${u}`;
    }
    const base = apiBase();
    return `${window.location.origin}${base}/${u.replace(/^\//, "")}`;
  }
  static \u0275fac = function CertificatService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CertificatService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CertificatService, factory: _CertificatService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CertificatService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/student/student-certificat-celebration/student-certificat-celebration.component.ts
var _c09 = (a0) => ["/student/certificats", a0];
function StudentCertificatCelebrationComponent_Conditional_0_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "Code certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.result.codeCertificat);
  }
}
function StudentCertificatCelebrationComponent_Conditional_0_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "Date d\u2019obtention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.result.dateObtention);
  }
}
function StudentCertificatCelebrationComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.result.message);
  }
}
function StudentCertificatCelebrationComponent_Conditional_0_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 15)(1, "mat-icon");
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Voir mon certificat ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(1, _c09, ctx_r0.result.certificatId));
  }
}
function StudentCertificatCelebrationComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function StudentCertificatCelebrationComponent_Conditional_0_Conditional_33_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadPdf());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " T\xE9l\xE9charger le PDF ");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificatCelebrationComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "mat-icon", 4);
    \u0275\u0275text(5, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div")(7, "p", 5);
    \u0275\u0275text(8, "F\xE9licitations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h3", 6);
    \u0275\u0275text(10, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 7);
    \u0275\u0275text(12, "Votre r\xE9ussite au quiz a \xE9t\xE9 enregistr\xE9e. Conservez votre code certificat.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 8);
    \u0275\u0275conditionalCreate(14, StudentCertificatCelebrationComponent_Conditional_0_Conditional_14_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(15, StudentCertificatCelebrationComponent_Conditional_0_Conditional_15_Template, 5, 1, "div", 9);
    \u0275\u0275elementStart(16, "div", 9)(17, "span", 10);
    \u0275\u0275text(18, "E-mail de notification");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 11)(20, "mat-icon", 12);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, StudentCertificatCelebrationComponent_Conditional_0_Conditional_23_Template, 2, 1, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 9)(25, "span", 10);
    \u0275\u0275text(26, "Document PDF");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "span", 11)(28, "mat-icon", 12);
    \u0275\u0275text(29, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "div", 14);
    \u0275\u0275conditionalCreate(32, StudentCertificatCelebrationComponent_Conditional_0_Conditional_32_Template, 4, 3, "a", 15);
    \u0275\u0275conditionalCreate(33, StudentCertificatCelebrationComponent_Conditional_0_Conditional_33_Template, 4, 0, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(14);
    \u0275\u0275conditional(ctx_r0.result.codeCertificat ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.result.dateObtention ? 15 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("scc__badge--ok", ctx_r0.result.emailEnvoye)("scc__badge--muted", !ctx_r0.result.emailEnvoye);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.result.emailEnvoye ? "mark_email_read" : "mail_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.result.emailEnvoye ? "Envoy\xE9" : "Non envoy\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.result.emailEnvoye && ctx_r0.result.message ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("scc__badge--gold", ctx_r0.pdfDisponible())("scc__badge--muted", !ctx_r0.pdfDisponible());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pdfDisponible() ? "Disponible" : "En cours ou indisponible", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.result.certificatId != null ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.pdfDisponible() ? 33 : -1);
  }
}
var StudentCertificatCelebrationComponent = class _StudentCertificatCelebrationComponent {
  certificats = inject(CertificatService);
  result;
  visible() {
    return quizResultHasCertificatInfo(this.result);
  }
  pdfDisponible() {
    return !!(this.result.pdfDisponible || this.result.certificatPdfUrl?.trim() || this.result.certificatId != null);
  }
  downloadPdf() {
    const id = this.result.certificatId;
    if (id != null) {
      const name = this.result.codeCertificat != null && this.result.codeCertificat.length > 0 ? `${this.result.codeCertificat}.pdf` : void 0;
      this.certificats.telechargerPdfById(id, name);
      return;
    }
    const abs = this.certificats.absolutePdfHrefForQuizResult(this.result);
    if (abs) {
      this.certificats.telechargerDepuisUrlAbsolue(abs, this.result.codeCertificat != null && this.result.codeCertificat.length > 0 ? `${this.result.codeCertificat}.pdf` : "certificat.pdf");
    }
  }
  static \u0275fac = function StudentCertificatCelebrationComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCertificatCelebrationComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCertificatCelebrationComponent, selectors: [["app-student-certificat-celebration"]], inputs: { result: "result" }, decls: 1, vars: 1, consts: [["appearance", "outlined", 1, "scc"], ["aria-hidden", "true", 1, "scc__glow"], [1, "scc__head"], ["aria-hidden", "true", 1, "scc__icon-wrap"], [1, "scc__icon"], [1, "scc__kicker"], [1, "scc__title"], [1, "scc__lead"], [1, "scc__grid"], [1, "scc__field"], [1, "scc__label"], [1, "scc__badge"], [1, "scc__mi"], [1, "scc__hint"], [1, "scc__actions"], ["mat-flat-button", "", "color", "primary", 3, "routerLink"], ["mat-stroked-button", "", "color", "primary", "type", "button"], [1, "scc__code"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentCertificatCelebrationComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, StudentCertificatCelebrationComponent_Conditional_0_Template, 34, 16, "mat-card", 0);
    }
    if (rf & 2) {
      \u0275\u0275conditional(ctx.visible() ? 0 : -1);
    }
  }, dependencies: [MatCardModule, MatCard, MatButtonModule, MatButton, MatIconModule, MatIcon, RouterLink], styles: ["\n\n.scc[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.35rem !important;\n  border-radius: 22px !important;\n  border: 1px solid rgba(99, 102, 241, 0.25) !important;\n  background:\n    linear-gradient(\n      135deg,\n      #faf5ff 0%,\n      #eef2ff 45%,\n      #fff 100%) !important;\n  box-shadow: 0 24px 60px rgba(79, 70, 229, 0.12) !important;\n}\n.scc__glow[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -40% -20% auto auto;\n  width: 55%;\n  height: 120%;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      rgba(251, 191, 36, 0.35),\n      transparent 55%);\n  pointer-events: none;\n}\n.scc__head[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.scc__icon-wrap[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #fbbf24,\n      #d97706);\n  box-shadow: 0 10px 28px rgba(217, 119, 6, 0.35);\n}\n.scc__icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.scc__kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.2rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #7c3aed;\n}\n.scc__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.scc__lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.92rem;\n  line-height: 1.5;\n  max-width: 52ch;\n}\n.scc__grid[_ngcontent-%COMP%] {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.scc__field[_ngcontent-%COMP%] {\n  padding: 0.75rem 0.85rem;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.75);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n}\n.scc__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin-bottom: 0.35rem;\n}\n.scc__code[_ngcontent-%COMP%] {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 1.05rem;\n  letter-spacing: 0.04em;\n  color: #4338ca;\n}\n.scc__badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #475569;\n}\n.scc__badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.scc__mi[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.scc__badge--ok[_ngcontent-%COMP%] {\n  color: #047857;\n}\n.scc__badge--gold[_ngcontent-%COMP%] {\n  color: #b45309;\n}\n.scc__badge--muted[_ngcontent-%COMP%] {\n  color: #94a3b8;\n}\n.scc__hint[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  line-height: 1.45;\n  color: #64748b;\n}\n.scc__actions[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  align-items: center;\n}\n.scc__actions[_ngcontent-%COMP%]   a[mat-flat-button][_ngcontent-%COMP%], \n.scc__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n@media (max-width: 600px) {\n  .scc__head[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=student-certificat-celebration.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCertificatCelebrationComponent, [{
    type: Component,
    args: [{ selector: "app-student-certificat-celebration", standalone: true, imports: [MatCardModule, MatButtonModule, MatIconModule, RouterLink], template: `@if (visible()) {\r
  <mat-card class="scc" appearance="outlined">\r
    <div class="scc__glow" aria-hidden="true"></div>\r
    <div class="scc__head">\r
      <div class="scc__icon-wrap" aria-hidden="true">\r
        <mat-icon class="scc__icon">workspace_premium</mat-icon>\r
      </div>\r
      <div>\r
        <p class="scc__kicker">F\xE9licitations</p>\r
        <h3 class="scc__title">Certificat de r\xE9ussite</h3>\r
        <p class="scc__lead">Votre r\xE9ussite au quiz a \xE9t\xE9 enregistr\xE9e. Conservez votre code certificat.</p>\r
      </div>\r
    </div>\r
\r
    <div class="scc__grid">\r
      @if (result.codeCertificat) {\r
        <div class="scc__field">\r
          <span class="scc__label">Code certificat</span>\r
          <strong class="scc__code">{{ result.codeCertificat }}</strong>\r
        </div>\r
      }\r
      @if (result.dateObtention) {\r
        <div class="scc__field">\r
          <span class="scc__label">Date d\u2019obtention</span>\r
          <strong>{{ result.dateObtention }}</strong>\r
        </div>\r
      }\r
      <div class="scc__field">\r
        <span class="scc__label">E-mail de notification</span>\r
        <span class="scc__badge" [class.scc__badge--ok]="result.emailEnvoye" [class.scc__badge--muted]="!result.emailEnvoye">\r
          <mat-icon class="scc__mi">{{ result.emailEnvoye ? 'mark_email_read' : 'mail_outline' }}</mat-icon>\r
          {{ result.emailEnvoye ? 'Envoy\xE9' : 'Non envoy\xE9' }}\r
        </span>\r
        @if (!result.emailEnvoye && result.message) {\r
          <p class="scc__hint">{{ result.message }}</p>\r
        }\r
      </div>\r
      <div class="scc__field">\r
        <span class="scc__label">Document PDF</span>\r
        <span class="scc__badge" [class.scc__badge--gold]="pdfDisponible()" [class.scc__badge--muted]="!pdfDisponible()">\r
          <mat-icon class="scc__mi">picture_as_pdf</mat-icon>\r
          {{ pdfDisponible() ? 'Disponible' : 'En cours ou indisponible' }}\r
        </span>\r
      </div>\r
    </div>\r
\r
    <div class="scc__actions">\r
      @if (result.certificatId != null) {\r
        <a mat-flat-button color="primary" [routerLink]="['/student/certificats', result.certificatId]">\r
          <mat-icon>visibility</mat-icon>\r
          Voir mon certificat\r
        </a>\r
      }\r
      @if (pdfDisponible()) {\r
        <button mat-stroked-button color="primary" type="button" (click)="downloadPdf()">\r
          <mat-icon>download</mat-icon>\r
          T\xE9l\xE9charger le PDF\r
        </button>\r
      }\r
    </div>\r
  </mat-card>\r
}\r
`, styles: ["/* src/app/pages/student/student-certificat-celebration/student-certificat-celebration.component.scss */\n.scc {\n  position: relative;\n  overflow: hidden;\n  margin-top: 1.25rem;\n  padding: 1.5rem 1.35rem !important;\n  border-radius: 22px !important;\n  border: 1px solid rgba(99, 102, 241, 0.25) !important;\n  background:\n    linear-gradient(\n      135deg,\n      #faf5ff 0%,\n      #eef2ff 45%,\n      #fff 100%) !important;\n  box-shadow: 0 24px 60px rgba(79, 70, 229, 0.12) !important;\n}\n.scc__glow {\n  position: absolute;\n  inset: -40% -20% auto auto;\n  width: 55%;\n  height: 120%;\n  background:\n    radial-gradient(\n      circle at 30% 30%,\n      rgba(251, 191, 36, 0.35),\n      transparent 55%);\n  pointer-events: none;\n}\n.scc__head {\n  position: relative;\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  margin-bottom: 1.25rem;\n}\n.scc__icon-wrap {\n  flex-shrink: 0;\n  width: 52px;\n  height: 52px;\n  border-radius: 16px;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #fbbf24,\n      #d97706);\n  box-shadow: 0 10px 28px rgba(217, 119, 6, 0.35);\n}\n.scc__icon {\n  color: #fff;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.scc__kicker {\n  margin: 0 0 0.2rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #7c3aed;\n}\n.scc__title {\n  margin: 0 0 0.35rem;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.scc__lead {\n  margin: 0;\n  color: #64748b;\n  font-size: 0.92rem;\n  line-height: 1.5;\n  max-width: 52ch;\n}\n.scc__grid {\n  position: relative;\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.scc__field {\n  padding: 0.75rem 0.85rem;\n  border-radius: 14px;\n  background: rgba(255, 255, 255, 0.75);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n}\n.scc__label {\n  display: block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #94a3b8;\n  margin-bottom: 0.35rem;\n}\n.scc__code {\n  font-family:\n    ui-monospace,\n    SFMono-Regular,\n    Menlo,\n    Monaco,\n    Consolas,\n    monospace;\n  font-size: 1.05rem;\n  letter-spacing: 0.04em;\n  color: #4338ca;\n}\n.scc__badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #475569;\n}\n.scc__badge mat-icon,\n.scc__mi {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.scc__badge--ok {\n  color: #047857;\n}\n.scc__badge--gold {\n  color: #b45309;\n}\n.scc__badge--muted {\n  color: #94a3b8;\n}\n.scc__hint {\n  margin: 0.5rem 0 0;\n  font-size: 0.8rem;\n  font-weight: 500;\n  line-height: 1.45;\n  color: #64748b;\n}\n.scc__actions {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  align-items: center;\n}\n.scc__actions a[mat-flat-button],\n.scc__actions button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n@media (max-width: 600px) {\n  .scc__head {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=student-certificat-celebration.component.css.map */\n"] }]
  }], null, { result: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCertificatCelebrationComponent, { className: "StudentCertificatCelebrationComponent", filePath: "src/app/pages/student/student-certificat-celebration/student-certificat-celebration.component.ts", lineNumber: 16 });
})();

// src/app/pages/quizzes/quiz-pass/quiz-pass.component.ts
var _forTrack06 = ($index, $item) => $item.id ?? $index;
var _forTrack12 = ($index, $item) => $item.id;
function QuizPassComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Chargement du quiz\u2026");
    \u0275\u0275elementEnd();
  }
}
function QuizPassComponent_Conditional_2_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "Bonnes r\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bonnes());
  }
}
function QuizPassComponent_Conditional_2_Conditional_7_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "span", 10);
    \u0275\u0275text(2, "Mauvaises r\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.mauvaises());
  }
}
function QuizPassComponent_Conditional_2_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 12);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r1.progressValue());
  }
}
function QuizPassComponent_Conditional_2_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.result.message);
  }
}
function QuizPassComponent_Conditional_2_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 5)(1, "div", 6)(2, "h2");
    \u0275\u0275text(3, "R\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 8)(7, "div", 9)(8, "span", 10);
    \u0275\u0275text(9, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 11);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 9)(13, "span", 10);
    \u0275\u0275text(14, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 11);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, QuizPassComponent_Conditional_2_Conditional_7_Conditional_17_Template, 5, 1, "div", 9);
    \u0275\u0275conditionalCreate(18, QuizPassComponent_Conditional_2_Conditional_7_Conditional_18_Template, 5, 1, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, QuizPassComponent_Conditional_2_Conditional_7_Conditional_19_Template, 1, 1, "mat-progress-bar", 12);
    \u0275\u0275conditionalCreate(20, QuizPassComponent_Conditional_2_Conditional_7_Conditional_20_Template, 2, 1, "p", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "app-student-certificat-celebration", 14);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("badge--ok", ctx_r1.valide())("badge--ko", !ctx_r1.valide());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.valide() ? "Valid\xE9" : "Non valid\xE9", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.scoreDisplay());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pourcentageDisplay());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bonnes() != null ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mauvaises() != null ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result.pourcentage != null ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result.message ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("result", ctx_r1.result);
  }
}
function QuizPassComponent_Conditional_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMsg);
  }
}
function QuizPassComponent_Conditional_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Ce quiz ne contient aucune question.");
    \u0275\u0275elementEnd();
  }
}
function QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r6 = ctx.$implicit;
    \u0275\u0275property("value", r_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r6.texte);
  }
}
function QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-group", 24);
    \u0275\u0275listener("change", function QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_7_Template_mat_radio_group_change_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const q_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.choose(q_r5.id, $event.value));
    });
    \u0275\u0275repeaterCreate(1, QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_7_For_2_Template, 2, 2, "mat-radio-button", 25, _forTrack12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", !!ctx_r1.result)("value", ctx_r1.selection[q_r5.id]);
    \u0275\u0275advance();
    \u0275\u0275repeater(q_r5.reponses);
  }
}
function QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 1);
    \u0275\u0275text(1, "Aucune r\xE9ponse pour cette question.");
    \u0275\u0275elementEnd();
  }
}
function QuizPassComponent_Conditional_2_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 17)(1, "h3", 20)(2, "span", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_7_Template, 3, 2, "mat-radio-group", 23)(8, QuizPassComponent_Conditional_2_Conditional_10_For_4_Conditional_8_Template, 2, 0, "p", 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r5 = ctx.$implicit;
    const \u0275$index_89_r7 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275$index_89_r7 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r5.enonce, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", q_r5.points, " pt", q_r5.points > 1 ? "s" : "", ")");
    \u0275\u0275advance();
    \u0275\u0275conditional((q_r5.reponses == null ? null : q_r5.reponses.length) && q_r5.id != null ? 7 : 8);
  }
}
function QuizPassComponent_Conditional_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 15);
    \u0275\u0275text(1, "R\xE9ponds \xE0 toutes les questions, puis soumets le quiz.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275repeaterCreate(3, QuizPassComponent_Conditional_2_Conditional_10_For_4_Template, 9, 5, "mat-card", 17, _forTrack06);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18)(6, "button", 19);
    \u0275\u0275listener("click", function QuizPassComponent_Conditional_2_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.quiz.questions);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r1.canSubmit() || ctx_r1.submitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitting ? "Correction\u2026" : "Soumettre le quiz", " ");
  }
}
function QuizPassComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "button", 3);
    \u0275\u0275listener("click", function QuizPassComponent_Conditional_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(2, "\u2190 Retour");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 1);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, QuizPassComponent_Conditional_2_Conditional_7_Template, 22, 12);
    \u0275\u0275conditionalCreate(8, QuizPassComponent_Conditional_2_Conditional_8_Template, 2, 1, "p", 4);
    \u0275\u0275conditionalCreate(9, QuizPassComponent_Conditional_2_Conditional_9_Template, 2, 0, "p", 1);
    \u0275\u0275conditionalCreate(10, QuizPassComponent_Conditional_2_Conditional_10_Template, 8, 2);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.quiz.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.quiz.description);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.result ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.errorMsg ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.result && ctx_r1.totalQuestions() === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.result && ctx_r1.totalQuestions() > 0 ? 10 : -1);
  }
}
var QuizPassComponent = class _QuizPassComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  quizService = inject(QuizService);
  correctionService = inject(QuizCorrectionService);
  resultStore = inject(QuizResultStoreService);
  quiz = null;
  quizId = null;
  loading = true;
  submitting = false;
  /** questionId → reponseId */
  selection = {};
  result = null;
  errorMsg = null;
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading = true;
      this.errorMsg = null;
      this.result = null;
      this.selection = {};
      this.quiz = null;
    }), switchMap((id) => {
      if (!id) {
        this.loading = false;
        this.navigateToQuizList();
        return EMPTY;
      }
      const qid = +id;
      if (!Number.isFinite(qid)) {
        this.loading = false;
        this.navigateToQuizList();
        return EMPTY;
      }
      this.quizId = qid;
      return this.quizService.getById(qid).pipe(catchError(() => {
        alert("Quiz introuvable.");
        this.navigateToQuizList();
        return EMPTY;
      }), finalize(() => this.loading = false));
    })).subscribe({
      next: (q) => {
        this.quiz = q;
        this.selection = {};
      }
    });
  }
  totalQuestions() {
    return this.quiz?.questions?.length ?? 0;
  }
  navigateToQuizList() {
    const p = routePrefix(this.router);
    if (p === "/student") {
      void this.router.navigate(["/student/modules"]);
    } else {
      void this.router.navigate(workspacePath(this.router, "quizzes"));
    }
  }
  choose(questionId, value) {
    if (this.result) {
      return;
    }
    const reponseId = typeof value === "number" ? value : Number(value);
    if (!Number.isFinite(reponseId)) {
      return;
    }
    this.selection[questionId] = reponseId;
  }
  canSubmit() {
    if (!this.quiz?.questions?.length) {
      return false;
    }
    return this.quiz.questions.every((q) => q.id != null && this.selection[q.id] != null);
  }
  submit() {
    if (!this.quizId || !this.quiz?.questions?.length || !this.canSubmit()) {
      return;
    }
    const reponsesEtudiant = {};
    for (const q of this.quiz.questions) {
      if (q.id != null && this.selection[q.id] != null) {
        reponsesEtudiant[String(q.id)] = this.selection[q.id];
      }
    }
    this.submitting = true;
    this.errorMsg = null;
    this.correctionService.submit(this.quizId, { reponsesEtudiant }).pipe(finalize(() => this.submitting = false)).subscribe({
      next: (r) => {
        this.applyResult(r);
      },
      error: (err) => {
        const raw = err;
        if (raw?.error != null && typeof raw.error === "object") {
          const parsed = normalizeQuizResult(raw.error);
          if (parsed.score != null || parsed.pourcentage != null) {
            this.applyResult(parsed);
            return;
          }
        }
        this.errorMsg = apiErrorMessage(err, "Impossible de corriger le quiz.");
      }
    });
  }
  applyResult(r) {
    if (this.quizId == null) {
      return;
    }
    const path = this.router.url.split("?")[0];
    if (path.includes("/student/quiz")) {
      this.resultStore.set(this.quizId, r, this.quiz?.titre);
      void this.router.navigate(["/student", "resultat"]);
      return;
    }
    this.result = r;
    this.resultStore.set(this.quizId, r, this.quiz?.titre);
  }
  back() {
    const p = routePrefix(this.router);
    if (p === "/student") {
      void this.router.navigate(["/student", "modules"]);
      return;
    }
    if (p === "/teacher") {
      if (this.quizId != null) {
        void this.router.navigate(["/teacher", "quizzes", this.quizId]);
      } else {
        void this.router.navigate(["/teacher", "quizzes"]);
      }
      return;
    }
    if (this.quizId != null) {
      void this.router.navigate(["/quizzes", this.quizId]);
    } else {
      void this.router.navigate(["/quizzes"]);
    }
  }
  scoreDisplay() {
    const r = this.result;
    if (!r)
      return "";
    const s = r.score ?? r.scoreObtenu;
    const m = r.scoreMax;
    if (s != null && m != null) {
      return `${s} / ${m}`;
    }
    if (s != null) {
      return String(s);
    }
    return "\u2014";
  }
  pourcentageDisplay() {
    const p = this.result?.pourcentage;
    if (p == null)
      return "\u2014";
    return `${Math.round(p)} %`;
  }
  bonnes() {
    return this.result?.bonnesReponses ?? this.result?.nombreBonnesReponses;
  }
  mauvaises() {
    return this.result?.mauvaisesReponses ?? this.result?.nombreMauvaisesReponses;
  }
  valide() {
    return !!(this.result?.valide ?? this.result?.reussi);
  }
  /** Valeur 0–100 pour la barre de progression Material. */
  progressValue() {
    const p = this.result?.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return 0;
    }
    const v = p <= 1 ? p * 100 : p;
    return Math.max(0, Math.min(100, v));
  }
  static \u0275fac = function QuizPassComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _QuizPassComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _QuizPassComponent, selectors: [["app-quiz-pass"]], standalone: false, decls: 3, vars: 1, consts: [[1, "quiz-pass"], [1, "muted"], [1, "quiz-pass__head"], ["mat-stroked-button", "", "type", "button", 3, "click"], [1, "alert"], ["appearance", "outlined", 1, "result-card"], [1, "result-card__header"], [1, "badge"], [1, "result-grid"], [1, "stat"], [1, "stat__label"], [1, "stat__value"], ["mode", "determinate", 3, "value"], [1, "result-msg"], [3, "result"], [1, "quiz-pass__hint"], [1, "questions"], ["appearance", "outlined", 1, "q-card"], [1, "quiz-pass__actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "q-card__title"], [1, "q-card__n"], [1, "q-card__pts"], [1, "q-card__group", 3, "disabled", "value"], [1, "q-card__group", 3, "change", "disabled", "value"], [3, "value"]], template: function QuizPassComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275conditionalCreate(1, QuizPassComponent_Conditional_1_Template, 2, 0, "p", 1)(2, QuizPassComponent_Conditional_2_Template, 11, 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 1 : ctx.quiz ? 2 : -1);
    }
  }, dependencies: [MatButton, MatCard, MatRadioGroup, MatRadioButton, MatProgressBar, StudentCertificatCelebrationComponent], styles: ["\n\n.quiz-pass[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2.5rem;\n}\n.quiz-pass__head[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.quiz-pass__head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0.35rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n}\n.result-card[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n}\n.result-card__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.result-card__header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.15rem;\n}\n.badge[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n}\n.badge--ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge--ko[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.result-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.stat__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.stat__value[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #1e293b;\n}\n.result-msg[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  font-size: 0.95rem;\n  color: #475569;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  height: 10px;\n  border-radius: 6px;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n.q-card[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.q-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.45;\n}\n.q-card__n[_ngcontent-%COMP%] {\n  color: #6366f1;\n  margin-right: 0.25rem;\n}\n.q-card__pts[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.q-card__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n.quiz-pass__hint[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.92rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.quiz-pass__actions[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=quiz-pass.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(QuizPassComponent, [{
    type: Component,
    args: [{ selector: "app-quiz-pass", standalone: false, template: `<div class="quiz-pass">\r
  @if (loading) {\r
    <p class="muted">Chargement du quiz\u2026</p>\r
  } @else if (quiz) {\r
    <div class="quiz-pass__head">\r
      <button mat-stroked-button type="button" (click)="back()">\u2190 Retour</button>\r
      <h1>{{ quiz.titre }}</h1>\r
      <p class="muted">{{ quiz.description }}</p>\r
    </div>\r
\r
    @if (result) {\r
      <mat-card class="result-card" appearance="outlined">\r
        <div class="result-card__header">\r
          <h2>R\xE9sultat</h2>\r
          <span class="badge" [class.badge--ok]="valide()" [class.badge--ko]="!valide()">\r
            {{ valide() ? 'Valid\xE9' : 'Non valid\xE9' }}\r
          </span>\r
        </div>\r
        <div class="result-grid">\r
          <div class="stat">\r
            <span class="stat__label">Score</span>\r
            <strong class="stat__value">{{ scoreDisplay() }}</strong>\r
          </div>\r
          <div class="stat">\r
            <span class="stat__label">Pourcentage</span>\r
            <strong class="stat__value">{{ pourcentageDisplay() }}</strong>\r
          </div>\r
          @if (bonnes() != null) {\r
            <div class="stat">\r
              <span class="stat__label">Bonnes r\xE9ponses</span>\r
              <strong class="stat__value">{{ bonnes() }}</strong>\r
            </div>\r
          }\r
          @if (mauvaises() != null) {\r
            <div class="stat">\r
              <span class="stat__label">Mauvaises r\xE9ponses</span>\r
              <strong class="stat__value">{{ mauvaises() }}</strong>\r
            </div>\r
          }\r
        </div>\r
        @if (result.pourcentage != null) {\r
          <mat-progress-bar mode="determinate" [value]="progressValue()"></mat-progress-bar>\r
        }\r
        @if (result.message) {\r
          <p class="result-msg">{{ result.message }}</p>\r
        }\r
      </mat-card>\r
      <app-student-certificat-celebration [result]="result" />\r
    }\r
\r
    @if (errorMsg) {\r
      <p class="alert">{{ errorMsg }}</p>\r
    }\r
\r
    @if (!result && totalQuestions() === 0) {\r
      <p class="muted">Ce quiz ne contient aucune question.</p>\r
    }\r
\r
    @if (!result && totalQuestions() > 0) {\r
      <p class="quiz-pass__hint">R\xE9ponds \xE0 toutes les questions, puis soumets le quiz.</p>\r
      <div class="questions">\r
        @for (q of quiz.questions; track q.id ?? $index; let i = $index) {\r
          <mat-card class="q-card" appearance="outlined">\r
            <h3 class="q-card__title">\r
              <span class="q-card__n">{{ i + 1 }}.</span>\r
              {{ q.enonce }}\r
              <span class="q-card__pts">({{ q.points }} pt{{ q.points > 1 ? 's' : '' }})</span>\r
            </h3>\r
            @if (q.reponses?.length && q.id != null) {\r
              <mat-radio-group\r
                class="q-card__group"\r
                [disabled]="!!result"\r
                [value]="selection[q.id]"\r
                (change)="choose(q.id, $event.value)"\r
              >\r
                @for (r of q.reponses; track r.id) {\r
                  <mat-radio-button [value]="r.id">{{ r.texte }}</mat-radio-button>\r
                }\r
              </mat-radio-group>\r
            } @else {\r
              <p class="muted">Aucune r\xE9ponse pour cette question.</p>\r
            }\r
          </mat-card>\r
        }\r
      </div>\r
\r
      <div class="quiz-pass__actions">\r
        <button\r
          mat-flat-button\r
          color="primary"\r
          type="button"\r
          [disabled]="!canSubmit() || submitting"\r
          (click)="submit()"\r
        >\r
          {{ submitting ? 'Correction\u2026' : 'Soumettre le quiz' }}\r
        </button>\r
      </div>\r
    }\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/quizzes/quiz-pass/quiz-pass.component.css */\n.quiz-pass {\n  max-width: 720px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2.5rem;\n}\n.quiz-pass__head {\n  margin-bottom: 1.5rem;\n}\n.quiz-pass__head h1 {\n  margin: 0.75rem 0 0.35rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.muted {\n  color: #64748b;\n  margin: 0;\n}\n.result-card {\n  margin-bottom: 1.5rem;\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n}\n.result-card__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.result-card__header h2 {\n  margin: 0;\n  font-size: 1.15rem;\n}\n.badge {\n  font-size: 0.8rem;\n  font-weight: 700;\n  padding: 0.35rem 0.75rem;\n  border-radius: 999px;\n}\n.badge--ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge--ko {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.result-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.stat__label {\n  display: block;\n  font-size: 0.8rem;\n  color: #64748b;\n}\n.stat__value {\n  font-size: 1.25rem;\n  color: #1e293b;\n}\n.result-msg {\n  margin: 0.75rem 0 0;\n  font-size: 0.95rem;\n  color: #475569;\n}\nmat-progress-bar {\n  height: 10px;\n  border-radius: 6px;\n}\n.alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n.q-card {\n  margin-bottom: 1rem;\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.q-card__title {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  line-height: 1.45;\n}\n.q-card__n {\n  color: #6366f1;\n  margin-right: 0.25rem;\n}\n.q-card__pts {\n  font-weight: 500;\n  color: #64748b;\n  font-size: 0.85rem;\n}\n.q-card__group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  align-items: flex-start;\n}\n.quiz-pass__hint {\n  margin: 0 0 1rem;\n  font-size: 0.92rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.quiz-pass__actions {\n  margin-top: 1.5rem;\n  display: flex;\n  justify-content: flex-end;\n}\n/*# sourceMappingURL=quiz-pass.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(QuizPassComponent, { className: "QuizPassComponent", filePath: "src/app/pages/quizzes/quiz-pass/quiz-pass.component.ts", lineNumber: 20 });
})();

// src/app/services/recommendation.service.ts
var RecommendationService = class _RecommendationService {
  http = inject(HttpClient);
  modulesParNiveau(niveau) {
    const url = apiUrl(ApiEndpoints.recommandationsModulesNiveau(niveau));
    return this.http.get(url).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  modulesParCategorie(categorie) {
    const url = apiUrl(ApiEndpoints.recommandationsModulesCategorie(categorie));
    return this.http.get(url).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  /**
   * Cours du module (ordre). Si `apresOrdre` est défini :
   * `GET .../recommandations/cours/module/{id}/apres/{ordre}`
   */
  coursSuivants(moduleId, apresOrdre) {
    const path = apresOrdre != null ? ApiEndpoints.recommandationsCoursModuleApres(moduleId, apresOrdre) : ApiEndpoints.recommandationsCoursModule(moduleId);
    return this.http.get(apiUrl(path)).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  static \u0275fac = function RecommendationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecommendationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RecommendationService, factory: _RecommendationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommendationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/recommandations/recommandations-modules.component.ts
var _forTrack07 = ($index, $item) => $item.id;
function RecommandationsModulesComponent_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RecommandationsModulesComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function RecommandationsModulesComponent_For_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 18);
    \u0275\u0275listener("click", function RecommandationsModulesComponent_For_35_Template_button_click_7_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.voirModule(m_r3));
    });
    \u0275\u0275text(8, "Voir le module");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r3.niveau, " \xB7 ", m_r3.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.description);
  }
}
function RecommandationsModulesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Aucun r\xE9sultat pour l\u2019instant \u2014 lance une recherche ci-dessus.");
    \u0275\u0275elementEnd();
  }
}
var RecommandationsModulesComponent = class _RecommandationsModulesComponent {
  recommendationService = inject(RecommendationService);
  router = inject(Router);
  niveau = "";
  categorie = "";
  loading = false;
  error = null;
  modules = [];
  chargerParNiveau() {
    const n = this.niveau.trim();
    if (!n) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.recommendationService.modulesParNiveau(n).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => this.modules = data,
      error: () => {
        this.modules = [];
        this.error = "Impossible de charger les recommandations (v\xE9rifie l\u2019URL backend).";
      }
    });
  }
  chargerParCategorie() {
    const c = this.categorie.trim();
    if (!c) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.recommendationService.modulesParCategorie(c).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => this.modules = data,
      error: () => {
        this.modules = [];
        this.error = "Impossible de charger les recommandations (v\xE9rifie l\u2019URL backend).";
      }
    });
  }
  voirModule(m) {
    if (m.id != null) {
      navigateLater(this.router, ["/modules", m.id]);
    }
  }
  static \u0275fac = function RecommandationsModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecommandationsModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommandationsModulesComponent, selectors: [["app-recommandations-modules"]], standalone: false, decls: 37, vars: 7, consts: [[1, "page"], [1, "subnav"], ["routerLink", "/recommandations/modules", "routerLinkActive", "active"], ["routerLink", "/recommandations/cours", "routerLinkActive", "active"], [1, "lead"], [1, "filters"], ["appearance", "outlined", 1, "filter-card"], [1, "row"], ["appearance", "outline", 1, "grow"], ["matInput", "", "placeholder", "ex. D\xE9butant", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["matInput", "", "placeholder", "ex. Programmation", 3, "ngModelChange", "ngModel"], [1, "alert"], [1, "muted"], [1, "grid"], ["appearance", "outlined", 1, "item-card"], [1, "meta"], [1, "desc"], ["mat-stroked-button", "", "type", "button", 3, "click"]], template: function RecommandationsModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Cours suivants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Recommandations \u2014 modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Modules sugg\xE9r\xE9s par niveau ou par cat\xE9gorie (service backend).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 5)(11, "mat-card", 6)(12, "h2");
      \u0275\u0275text(13, "Par niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "div", 7)(15, "mat-form-field", 8)(16, "mat-label");
      \u0275\u0275text(17, "Niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function RecommandationsModulesComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.niveau, $event) || (ctx.niveau = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "button", 10);
      \u0275\u0275listener("click", function RecommandationsModulesComponent_Template_button_click_19_listener() {
        return ctx.chargerParNiveau();
      });
      \u0275\u0275text(20, " Afficher ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "mat-card", 6)(22, "h2");
      \u0275\u0275text(23, "Par cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 7)(25, "mat-form-field", 8)(26, "mat-label");
      \u0275\u0275text(27, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 11);
      \u0275\u0275twoWayListener("ngModelChange", function RecommandationsModulesComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categorie, $event) || (ctx.categorie = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "button", 10);
      \u0275\u0275listener("click", function RecommandationsModulesComponent_Template_button_click_29_listener() {
        return ctx.chargerParCategorie();
      });
      \u0275\u0275text(30, " Afficher ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275conditionalCreate(31, RecommandationsModulesComponent_Conditional_31_Template, 2, 1, "p", 12);
      \u0275\u0275conditionalCreate(32, RecommandationsModulesComponent_Conditional_32_Template, 2, 0, "p", 13);
      \u0275\u0275elementStart(33, "div", 14);
      \u0275\u0275repeaterCreate(34, RecommandationsModulesComponent_For_35_Template, 9, 4, "mat-card", 15, _forTrack07);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(36, RecommandationsModulesComponent_Conditional_36_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.niveau);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.categorie);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error ? 31 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 32 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.modules);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading && ctx.modules.length === 0 && !ctx.error ? 36 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatCard, MatFormField, MatLabel, MatInput], styles: ["\n\n.subnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom-color: #4f46e5;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.5rem;\n}\n.filters[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.filter-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.filter-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recommandations-modules.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommandationsModulesComponent, [{
    type: Component,
    args: [{ selector: "app-recommandations-modules", standalone: false, template: '<div class="page">\r\n  <nav class="subnav">\r\n    <a routerLink="/recommandations/modules" routerLinkActive="active">Modules</a>\r\n    <a routerLink="/recommandations/cours" routerLinkActive="active">Cours suivants</a>\r\n  </nav>\r\n  <h1>Recommandations \u2014 modules</h1>\r\n  <p class="lead">Modules sugg\xE9r\xE9s par niveau ou par cat\xE9gorie (service backend).</p>\r\n\r\n  <div class="filters">\r\n    <mat-card appearance="outlined" class="filter-card">\r\n      <h2>Par niveau</h2>\r\n      <div class="row">\r\n        <mat-form-field appearance="outline" class="grow">\r\n          <mat-label>Niveau</mat-label>\r\n          <input matInput [(ngModel)]="niveau" placeholder="ex. D\xE9butant" />\r\n        </mat-form-field>\r\n        <button mat-flat-button color="primary" type="button" [disabled]="loading" (click)="chargerParNiveau()">\r\n          Afficher\r\n        </button>\r\n      </div>\r\n    </mat-card>\r\n\r\n    <mat-card appearance="outlined" class="filter-card">\r\n      <h2>Par cat\xE9gorie</h2>\r\n      <div class="row">\r\n        <mat-form-field appearance="outline" class="grow">\r\n          <mat-label>Cat\xE9gorie</mat-label>\r\n          <input matInput [(ngModel)]="categorie" placeholder="ex. Programmation" />\r\n        </mat-form-field>\r\n        <button mat-flat-button color="primary" type="button" [disabled]="loading" (click)="chargerParCategorie()">\r\n          Afficher\r\n        </button>\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n\r\n  @if (error) {\r\n    <p class="alert">{{ error }}</p>\r\n  }\r\n  @if (loading) {\r\n    <p class="muted">Chargement\u2026</p>\r\n  }\r\n\r\n  <div class="grid">\r\n    @for (m of modules; track m.id) {\r\n      <mat-card class="item-card" appearance="outlined">\r\n        <h3>{{ m.titre }}</h3>\r\n        <p class="meta">{{ m.niveau }} \xB7 {{ m.categorie }}</p>\r\n        <p class="desc">{{ m.description }}</p>\r\n        <button mat-stroked-button type="button" (click)="voirModule(m)">Voir le module</button>\r\n      </mat-card>\r\n    }\r\n  </div>\r\n\r\n  @if (!loading && modules.length === 0 && !error) {\r\n    <p class="muted">Aucun r\xE9sultat pour l\u2019instant \u2014 lance une recherche ci-dessus.</p>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/recommandations/recommandations-modules.component.css */\n.subnav {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav a {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav a.active {\n  border-bottom-color: #4f46e5;\n}\n.page {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.lead {\n  color: #64748b;\n  margin: 0 0 1.5rem;\n}\n.filters {\n  display: grid;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.filter-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.filter-card h2 {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.grow {\n  flex: 1;\n  min-width: 200px;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.item-card h3 {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.meta {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc {\n  margin: 0;\n  flex: 1;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted {\n  color: #64748b;\n}\n.alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recommandations-modules.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommandationsModulesComponent, { className: "RecommandationsModulesComponent", filePath: "src/app/pages/recommandations/recommandations-modules.component.ts", lineNumber: 14 });
})();

// src/app/pages/recommandations/recommandations-cours.component.ts
var _forTrack08 = ($index, $item) => $item.id;
function RecommandationsCoursComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RecommandationsCoursComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function RecommandationsCoursComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 15)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 16);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 17);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 18);
    \u0275\u0275listener("click", function RecommandationsCoursComponent_For_29_Template_button_click_8_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.voirCours(c_r3));
    });
    \u0275\u0275text(9, "Voir le cours");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Ordre ", c_r3.ordreCours, " \xB7 ", c_r3.typeContenu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(7, 5, c_r3.contenu ?? "", 0, 160), "", (c_r3.contenu ?? "").length > 160 ? "\u2026" : "", " ");
  }
}
function RecommandationsCoursComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1, "Indique un id de module et clique sur \xAB Charger \xBB.");
    \u0275\u0275elementEnd();
  }
}
var RecommandationsCoursComponent = class _RecommandationsCoursComponent {
  recommendationService = inject(RecommendationService);
  router = inject(Router);
  moduleIdInput = null;
  apresOrdre = null;
  loading = false;
  error = null;
  cours = [];
  charger() {
    const mid = foreignId(this.moduleIdInput);
    if (mid == null) {
      return;
    }
    const ord = this.apresOrdre != null ? Math.trunc(num(this.apresOrdre)) : void 0;
    this.loading = true;
    this.error = null;
    this.recommendationService.coursSuivants(mid, ord).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => this.cours = data,
      error: () => {
        this.cours = [];
        this.error = "Impossible de charger les cours recommand\xE9s.";
      }
    });
  }
  voirCours(c) {
    if (c.id != null) {
      navigateLater(this.router, ["/cours", c.id]);
    }
  }
  static \u0275fac = function RecommandationsCoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RecommandationsCoursComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecommandationsCoursComponent, selectors: [["app-recommandations-cours"]], standalone: false, decls: 31, vars: 6, consts: [[1, "page"], [1, "subnav"], ["routerLink", "/recommandations/modules", "routerLinkActive", "active"], ["routerLink", "/recommandations/cours", "routerLinkActive", "active"], [1, "lead"], ["appearance", "outlined", 1, "filter-card"], [1, "row"], ["appearance", "outline", 1, "grow"], ["matInput", "", "type", "number", "min", "1", 3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "sm"], ["matInput", "", "type", "number", "min", "0", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "alert"], [1, "muted"], [1, "grid"], ["appearance", "outlined", 1, "item-card"], [1, "meta"], [1, "desc"], ["mat-stroked-button", "", "type", "button", 3, "click"]], template: function RecommandationsCoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Cours suivants");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Recommandations \u2014 cours suivants");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Cours sugg\xE9r\xE9s dans un module apr\xE8s un ordre donn\xE9 (param\xE8tre optionnel ");
      \u0275\u0275elementStart(10, "code");
      \u0275\u0275text(11, "apresOrdre");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ").");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-card", 5)(14, "div", 6)(15, "mat-form-field", 7)(16, "mat-label");
      \u0275\u0275text(17, "ID module");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RecommandationsCoursComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.moduleIdInput, $event) || (ctx.moduleIdInput = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(19, "mat-form-field", 9)(20, "mat-label");
      \u0275\u0275text(21, "Ordre min. (optionnel)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RecommandationsCoursComponent_Template_input_ngModelChange_22_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.apresOrdre, $event) || (ctx.apresOrdre = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "button", 11);
      \u0275\u0275listener("click", function RecommandationsCoursComponent_Template_button_click_23_listener() {
        return ctx.charger();
      });
      \u0275\u0275text(24, " Charger ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(25, RecommandationsCoursComponent_Conditional_25_Template, 2, 1, "p", 12);
      \u0275\u0275conditionalCreate(26, RecommandationsCoursComponent_Conditional_26_Template, 2, 0, "p", 13);
      \u0275\u0275elementStart(27, "div", 14);
      \u0275\u0275repeaterCreate(28, RecommandationsCoursComponent_For_29_Template, 10, 9, "mat-card", 15, _forTrack08);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(30, RecommandationsCoursComponent_Conditional_30_Template, 2, 0, "p", 13);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.moduleIdInput);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.apresOrdre);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error ? 25 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 26 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cours);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading && ctx.cours.length === 0 && !ctx.error ? 30 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, NgModel, MatButton, MatCard, MatFormField, MatLabel, MatInput, SlicePipe], styles: ["\n\n.subnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom-color: #4f46e5;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.25rem;\n  line-height: 1.5;\n}\n.lead[_ngcontent-%COMP%]   code[_ngcontent-%COMP%] {\n  font-size: 0.85em;\n  background: #e2e8f0;\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n.filter-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  margin-bottom: 1.25rem;\n}\n.row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.grow[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.sm[_ngcontent-%COMP%] {\n  width: 200px;\n  max-width: 100%;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recommandations-cours.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecommandationsCoursComponent, [{
    type: Component,
    args: [{ selector: "app-recommandations-cours", standalone: false, template: `<div class="page">\r
  <nav class="subnav">\r
    <a routerLink="/recommandations/modules" routerLinkActive="active">Modules</a>\r
    <a routerLink="/recommandations/cours" routerLinkActive="active">Cours suivants</a>\r
  </nav>\r
  <h1>Recommandations \u2014 cours suivants</h1>\r
  <p class="lead">Cours sugg\xE9r\xE9s dans un module apr\xE8s un ordre donn\xE9 (param\xE8tre optionnel <code>apresOrdre</code>).</p>\r
\r
  <mat-card appearance="outlined" class="filter-card">\r
    <div class="row">\r
      <mat-form-field appearance="outline" class="grow">\r
        <mat-label>ID module</mat-label>\r
        <input matInput type="number" min="1" [(ngModel)]="moduleIdInput" />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="sm">\r
        <mat-label>Ordre min. (optionnel)</mat-label>\r
        <input matInput type="number" min="0" [(ngModel)]="apresOrdre" />\r
      </mat-form-field>\r
      <button mat-flat-button color="primary" type="button" [disabled]="loading" (click)="charger()">\r
        Charger\r
      </button>\r
    </div>\r
  </mat-card>\r
\r
  @if (error) {\r
    <p class="alert">{{ error }}</p>\r
  }\r
  @if (loading) {\r
    <p class="muted">Chargement\u2026</p>\r
  }\r
\r
  <div class="grid">\r
    @for (c of cours; track c.id) {\r
      <mat-card class="item-card" appearance="outlined">\r
        <h3>{{ c.titre }}</h3>\r
        <p class="meta">Ordre {{ c.ordreCours }} \xB7 {{ c.typeContenu }}</p>\r
        <p class="desc">\r
          {{ (c.contenu ?? '') | slice: 0 : 160 }}{{ (c.contenu ?? '').length > 160 ? '\u2026' : '' }}\r
        </p>\r
        <button mat-stroked-button type="button" (click)="voirCours(c)">Voir le cours</button>\r
      </mat-card>\r
    }\r
  </div>\r
\r
  @if (!loading && cours.length === 0 && !error) {\r
    <p class="muted">Indique un id de module et clique sur \xAB Charger \xBB.</p>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/recommandations/recommandations-cours.component.css */\n.subnav {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav a {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav a.active {\n  border-bottom-color: #4f46e5;\n}\n.page {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n  color: #0f172a;\n}\n.lead {\n  color: #64748b;\n  margin: 0 0 1.25rem;\n  line-height: 1.5;\n}\n.lead code {\n  font-size: 0.85em;\n  background: #e2e8f0;\n  padding: 0.1rem 0.35rem;\n  border-radius: 4px;\n}\n.filter-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  margin-bottom: 1.25rem;\n}\n.row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: center;\n}\n.grow {\n  flex: 1;\n  min-width: 160px;\n}\n.sm {\n  width: 200px;\n  max-width: 100%;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.item-card h3 {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.meta {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted {\n  color: #64748b;\n}\n.alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recommandations-cours.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecommandationsCoursComponent, { className: "RecommandationsCoursComponent", filePath: "src/app/pages/recommandations/recommandations-cours.component.ts", lineNumber: 15 });
})();

// src/app/services/recherche.service.ts
var RechercheService = class _RechercheService {
  http = inject(HttpClient);
  searchModules(f) {
    let params = new HttpParams();
    if (f.motCle?.trim()) {
      params = params.set("motCle", f.motCle.trim());
    }
    if (f.niveau?.trim()) {
      params = params.set("niveau", f.niveau.trim());
    }
    if (f.categorie?.trim()) {
      params = params.set("categorie", f.categorie.trim());
    }
    return this.http.get(apiUrl(ApiEndpoints.rechercheModules), { params }).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  searchCours(f) {
    let params = new HttpParams();
    if (f.titre?.trim()) {
      params = params.set("titre", f.titre.trim());
    }
    if (f.typeContenu?.trim()) {
      params = params.set("typeContenu", f.typeContenu.trim());
    }
    if (f.publie === true || f.publie === false) {
      params = params.set("publie", String(f.publie));
    }
    return this.http.get(apiUrl(ApiEndpoints.rechercheCours), { params }).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  /** `GET .../recherche/cours/type/{typeContenu}` (ex. PDF). */
  searchCoursParTypeSeul(typeContenu) {
    const url = apiUrl(ApiEndpoints.rechercheCoursType(typeContenu.trim()));
    return this.http.get(url).pipe(map((raw) => unwrapArrayResponse(raw)));
  }
  static \u0275fac = function RechercheService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RechercheService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _RechercheService, factory: _RechercheService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RechercheService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/recherche/recherche-modules.component.ts
var _forTrack09 = ($index, $item) => $item.id;
function RechercheModulesComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RechercheModulesComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Recherche\u2026");
    \u0275\u0275elementEnd();
  }
}
function RechercheModulesComponent_For_39_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 13)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 16);
    \u0275\u0275listener("click", function RechercheModulesComponent_For_39_Template_button_click_7_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.voir(m_r3));
    });
    \u0275\u0275text(8, "Ouvrir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r3.niveau, " \xB7 ", m_r3.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.description);
  }
}
function RechercheModulesComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Lance une recherche pour afficher des r\xE9sultats.");
    \u0275\u0275elementEnd();
  }
}
var RechercheModulesComponent = class _RechercheModulesComponent {
  rechercheService = inject(RechercheService);
  router = inject(Router);
  motCle = "";
  niveau = "";
  categorie = "";
  loading = false;
  error = null;
  modules = [];
  rechercher() {
    this.loading = true;
    this.error = null;
    this.rechercheService.searchModules({
      motCle: this.motCle,
      niveau: this.niveau,
      categorie: this.categorie
    }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => this.modules = data,
      error: () => {
        this.modules = [];
        this.error = "\xC9chec de la recherche (v\xE9rifie les param\xE8tres ou l\u2019API).";
      }
    });
  }
  voir(m) {
    if (m.id != null) {
      navigateLater(this.router, ["/modules", m.id]);
    }
  }
  static \u0275fac = function RechercheModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RechercheModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RechercheModulesComponent, selectors: [["app-recherche-modules"]], standalone: false, decls: 41, vars: 7, consts: [[1, "page"], [1, "subnav"], ["routerLink", "/recherche/modules", "routerLinkActive", "active"], ["routerLink", "/recherche/cours", "routerLinkActive", "active"], [1, "lead"], ["appearance", "outlined", 1, "filter-card"], [1, "fields"], ["appearance", "outline", 1, "full"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "alert"], [1, "muted"], [1, "grid"], ["appearance", "outlined", 1, "item-card"], [1, "meta"], [1, "desc"], ["mat-stroked-button", "", "type", "button", 3, "click"]], template: function RechercheModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Cours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Recherche \u2014 modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Filtres optionnels : ");
      \u0275\u0275elementStart(10, "code");
      \u0275\u0275text(11, "motCle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ", ");
      \u0275\u0275elementStart(13, "code");
      \u0275\u0275text(14, "niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, ", ");
      \u0275\u0275elementStart(16, "code");
      \u0275\u0275text(17, "categorie");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " (query).");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-card", 5)(20, "div", 6)(21, "mat-form-field", 7)(22, "mat-label");
      \u0275\u0275text(23, "Mot-cl\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheModulesComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.motCle, $event) || (ctx.motCle = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "mat-form-field", 7)(26, "mat-label");
      \u0275\u0275text(27, "Niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheModulesComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.niveau, $event) || (ctx.niveau = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "mat-form-field", 7)(30, "mat-label");
      \u0275\u0275text(31, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheModulesComponent_Template_input_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categorie, $event) || (ctx.categorie = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(33, "button", 9);
      \u0275\u0275listener("click", function RechercheModulesComponent_Template_button_click_33_listener() {
        return ctx.rechercher();
      });
      \u0275\u0275text(34, " Rechercher ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(35, RechercheModulesComponent_Conditional_35_Template, 2, 1, "p", 10);
      \u0275\u0275conditionalCreate(36, RechercheModulesComponent_Conditional_36_Template, 2, 0, "p", 11);
      \u0275\u0275elementStart(37, "div", 12);
      \u0275\u0275repeaterCreate(38, RechercheModulesComponent_For_39_Template, 9, 4, "mat-card", 13, _forTrack09);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(40, RechercheModulesComponent_Conditional_40_Template, 2, 0, "p", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.motCle);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.niveau);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.categorie);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error ? 35 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 36 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.modules);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading && ctx.modules.length === 0 && !ctx.error ? 40 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatCard, MatFormField, MatLabel, MatInput], styles: ["\n\n.subnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom-color: #4f46e5;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.25rem;\n}\n.filter-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  margin-bottom: 1.25rem;\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recherche-modules.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RechercheModulesComponent, [{
    type: Component,
    args: [{ selector: "app-recherche-modules", standalone: false, template: '<div class="page">\r\n  <nav class="subnav">\r\n    <a routerLink="/recherche/modules" routerLinkActive="active">Modules</a>\r\n    <a routerLink="/recherche/cours" routerLinkActive="active">Cours</a>\r\n  </nav>\r\n  <h1>Recherche \u2014 modules</h1>\r\n  <p class="lead">Filtres optionnels : <code>motCle</code>, <code>niveau</code>, <code>categorie</code> (query).</p>\r\n\r\n  <mat-card appearance="outlined" class="filter-card">\r\n    <div class="fields">\r\n      <mat-form-field appearance="outline" class="full">\r\n        <mat-label>Mot-cl\xE9</mat-label>\r\n        <input matInput [(ngModel)]="motCle" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline" class="full">\r\n        <mat-label>Niveau</mat-label>\r\n        <input matInput [(ngModel)]="niveau" />\r\n      </mat-form-field>\r\n      <mat-form-field appearance="outline" class="full">\r\n        <mat-label>Cat\xE9gorie</mat-label>\r\n        <input matInput [(ngModel)]="categorie" />\r\n      </mat-form-field>\r\n    </div>\r\n    <button mat-flat-button color="primary" type="button" [disabled]="loading" (click)="rechercher()">\r\n      Rechercher\r\n    </button>\r\n  </mat-card>\r\n\r\n  @if (error) {\r\n    <p class="alert">{{ error }}</p>\r\n  }\r\n  @if (loading) {\r\n    <p class="muted">Recherche\u2026</p>\r\n  }\r\n\r\n  <div class="grid">\r\n    @for (m of modules; track m.id) {\r\n      <mat-card class="item-card" appearance="outlined">\r\n        <h3>{{ m.titre }}</h3>\r\n        <p class="meta">{{ m.niveau }} \xB7 {{ m.categorie }}</p>\r\n        <p class="desc">{{ m.description }}</p>\r\n        <button mat-stroked-button type="button" (click)="voir(m)">Ouvrir</button>\r\n      </mat-card>\r\n    }\r\n  </div>\r\n\r\n  @if (!loading && modules.length === 0 && !error) {\r\n    <p class="muted">Lance une recherche pour afficher des r\xE9sultats.</p>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/recherche/recherche-modules.component.css */\n.subnav {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav a {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav a.active {\n  border-bottom-color: #4f46e5;\n}\n.page {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n}\n.lead {\n  color: #64748b;\n  margin: 0 0 1.25rem;\n}\n.filter-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  margin-bottom: 1.25rem;\n}\n.fields {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.full {\n  width: 100%;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.item-card h3 {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n}\n.meta {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted {\n  color: #64748b;\n}\n.alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recherche-modules.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RechercheModulesComponent, { className: "RechercheModulesComponent", filePath: "src/app/pages/recherche/recherche-modules.component.ts", lineNumber: 14 });
})();

// src/app/pages/recherche/recherche-cours.component.ts
var _forTrack010 = ($index, $item) => $item.id;
function RechercheCoursComponent_Conditional_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function RechercheCoursComponent_Conditional_56_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Recherche\u2026");
    \u0275\u0275elementEnd();
  }
}
function RechercheCoursComponent_For_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 25)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 27);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 28);
    \u0275\u0275listener("click", function RechercheCoursComponent_For_59_Template_button_click_8_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.voir(c_r3));
    });
    \u0275\u0275text(9, "Ouvrir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r3.typeContenu, " \xB7 ", c_r3.publie ? "Publi\xE9" : "Brouillon");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(7, 5, c_r3.contenu ?? "", 0, 140), "", (c_r3.contenu ?? "").length > 140 ? "\u2026" : "");
  }
}
function RechercheCoursComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23);
    \u0275\u0275text(1, "Lance une recherche pour afficher des r\xE9sultats.");
    \u0275\u0275elementEnd();
  }
}
var RechercheCoursComponent = class _RechercheCoursComponent {
  rechercheService = inject(RechercheService);
  router = inject(Router);
  titre = "";
  typeContenu = "";
  /** '' = tous, 'oui' = true, 'non' = false */
  publieFiltre = "";
  /** `GET .../recherche/cours/type/{type}` (ex. PDF). */
  typeSeul = "";
  loading = false;
  error = null;
  cours = [];
  rechercher() {
    let publie;
    if (this.publieFiltre === "oui") {
      publie = true;
    } else if (this.publieFiltre === "non") {
      publie = false;
    } else {
      publie = void 0;
    }
    this.loading = true;
    this.error = null;
    this.rechercheService.searchCours({
      titre: this.titre,
      typeContenu: this.typeContenu,
      publie
    }).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => this.cours = data,
      error: () => {
        this.cours = [];
        this.error = "\xC9chec de la recherche.";
      }
    });
  }
  rechercherParType() {
    const t = this.typeSeul.trim();
    if (!t) {
      return;
    }
    this.loading = true;
    this.error = null;
    this.rechercheService.searchCoursParTypeSeul(t).pipe(finalize(() => this.loading = false)).subscribe({
      next: (data) => this.cours = data,
      error: () => {
        this.cours = [];
        this.error = "\xC9chec de la recherche par type.";
      }
    });
  }
  voir(c) {
    if (c.id != null) {
      navigateLater(this.router, ["/cours", c.id]);
    }
  }
  static \u0275fac = function RechercheCoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RechercheCoursComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RechercheCoursComponent, selectors: [["app-recherche-cours"]], standalone: false, decls: 61, vars: 9, consts: [[1, "page"], [1, "subnav"], ["routerLink", "/recherche/modules", "routerLinkActive", "active"], ["routerLink", "/recherche/cours", "routerLinkActive", "active"], [1, "lead"], ["appearance", "outlined", 1, "filter-card"], [1, "fields"], ["appearance", "outline", 1, "full"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["matInput", "", "placeholder", "PDF, VIDEO, \u2026", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "oui"], ["value", "non"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["appearance", "outlined", 1, "filter-card", "filter-card--secondary"], [1, "filter-card__h"], [1, "hint"], [1, "row-type"], ["appearance", "outline", 1, "grow"], ["matInput", "", "placeholder", "PDF", 3, "ngModelChange", "ngModel"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "alert"], [1, "muted"], [1, "grid"], ["appearance", "outlined", 1, "item-card"], [1, "meta"], [1, "desc"], ["mat-stroked-button", "", "type", "button", 3, "click"]], template: function RechercheCoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "nav", 1)(2, "a", 2);
      \u0275\u0275text(3, "Modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "a", 3);
      \u0275\u0275text(5, "Cours");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "Recherche \u2014 cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, " Filtres query : ");
      \u0275\u0275elementStart(10, "code");
      \u0275\u0275text(11, "titre");
      \u0275\u0275elementEnd();
      \u0275\u0275text(12, ", ");
      \u0275\u0275elementStart(13, "code");
      \u0275\u0275text(14, "typeContenu");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, ", ");
      \u0275\u0275elementStart(16, "code");
      \u0275\u0275text(17, "publie");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " \u2014 ou recherche par type seul via le chemin d\xE9di\xE9. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "mat-card", 5)(20, "div", 6)(21, "mat-form-field", 7)(22, "mat-label");
      \u0275\u0275text(23, "Titre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheCoursComponent_Template_input_ngModelChange_24_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.titre, $event) || (ctx.titre = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(25, "mat-form-field", 7)(26, "mat-label");
      \u0275\u0275text(27, "Type de contenu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheCoursComponent_Template_input_ngModelChange_28_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.typeContenu, $event) || (ctx.typeContenu = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "mat-form-field", 7)(30, "mat-label");
      \u0275\u0275text(31, "Publi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-select", 10);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheCoursComponent_Template_mat_select_ngModelChange_32_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.publieFiltre, $event) || (ctx.publieFiltre = $event);
        return $event;
      });
      \u0275\u0275elementStart(33, "mat-option", 11);
      \u0275\u0275text(34, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-option", 12);
      \u0275\u0275text(36, "Oui");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "mat-option", 13);
      \u0275\u0275text(38, "Non");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "button", 14);
      \u0275\u0275listener("click", function RechercheCoursComponent_Template_button_click_39_listener() {
        return ctx.rechercher();
      });
      \u0275\u0275text(40, " Rechercher ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "mat-card", 15)(42, "h2", 16);
      \u0275\u0275text(43, "Cours par type seul");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "p", 17);
      \u0275\u0275text(45, "\xC9quivalent \xE0 ");
      \u0275\u0275elementStart(46, "code");
      \u0275\u0275text(47, "GET .../recherche/cours/type/PDF");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(48, "div", 18)(49, "mat-form-field", 19)(50, "mat-label");
      \u0275\u0275text(51, "Type (ex. PDF, VIDEO)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function RechercheCoursComponent_Template_input_ngModelChange_52_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.typeSeul, $event) || (ctx.typeSeul = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "button", 21);
      \u0275\u0275listener("click", function RechercheCoursComponent_Template_button_click_53_listener() {
        return ctx.rechercherParType();
      });
      \u0275\u0275text(54, " Par type ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(55, RechercheCoursComponent_Conditional_55_Template, 2, 1, "p", 22);
      \u0275\u0275conditionalCreate(56, RechercheCoursComponent_Conditional_56_Template, 2, 0, "p", 23);
      \u0275\u0275elementStart(57, "div", 24);
      \u0275\u0275repeaterCreate(58, RechercheCoursComponent_For_59_Template, 10, 9, "mat-card", 25, _forTrack010);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(60, RechercheCoursComponent_Conditional_60_Template, 2, 0, "p", 23);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(24);
      \u0275\u0275twoWayProperty("ngModel", ctx.titre);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.typeContenu);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.publieFiltre);
      \u0275\u0275advance(7);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(13);
      \u0275\u0275twoWayProperty("ngModel", ctx.typeSeul);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.error ? 55 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loading ? 56 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cours);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading && ctx.cours.length === 0 && !ctx.error ? 60 : -1);
    }
  }, dependencies: [RouterLink, RouterLinkActive, DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatCard, MatFormField, MatLabel, MatInput, MatSelect, MatOption, SlicePipe], styles: ["\n\n.subnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%] {\n  border-bottom-color: #4f46e5;\n}\n.page[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n}\n.lead[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0 0 1.25rem;\n}\n.filter-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  margin-bottom: 1.25rem;\n}\n.filter-card--secondary[_ngcontent-%COMP%] {\n  background: #f8fafc;\n}\n.filter-card__h[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n}\n.hint[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.row-type[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.row-type[_ngcontent-%COMP%]   .grow[_ngcontent-%COMP%] {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.full[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.item-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n}\n.meta[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recherche-cours.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RechercheCoursComponent, [{
    type: Component,
    args: [{ selector: "app-recherche-cours", standalone: false, template: `<div class="page">\r
  <nav class="subnav">\r
    <a routerLink="/recherche/modules" routerLinkActive="active">Modules</a>\r
    <a routerLink="/recherche/cours" routerLinkActive="active">Cours</a>\r
  </nav>\r
  <h1>Recherche \u2014 cours</h1>\r
  <p class="lead">\r
    Filtres query : <code>titre</code>, <code>typeContenu</code>, <code>publie</code> \u2014 ou recherche par type seul via le chemin d\xE9di\xE9.\r
  </p>\r
\r
  <mat-card appearance="outlined" class="filter-card">\r
    <div class="fields">\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Titre</mat-label>\r
        <input matInput [(ngModel)]="titre" />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Type de contenu</mat-label>\r
        <input matInput [(ngModel)]="typeContenu" placeholder="PDF, VIDEO, \u2026" />\r
      </mat-form-field>\r
      <mat-form-field appearance="outline" class="full">\r
        <mat-label>Publi\xE9</mat-label>\r
        <mat-select [(ngModel)]="publieFiltre">\r
          <mat-option value="">Tous</mat-option>\r
          <mat-option value="oui">Oui</mat-option>\r
          <mat-option value="non">Non</mat-option>\r
        </mat-select>\r
      </mat-form-field>\r
    </div>\r
    <button mat-flat-button color="primary" type="button" [disabled]="loading" (click)="rechercher()">\r
      Rechercher\r
    </button>\r
  </mat-card>\r
\r
  <mat-card appearance="outlined" class="filter-card filter-card--secondary">\r
    <h2 class="filter-card__h">Cours par type seul</h2>\r
    <p class="hint">\xC9quivalent \xE0 <code>GET .../recherche/cours/type/PDF</code></p>\r
    <div class="row-type">\r
      <mat-form-field appearance="outline" class="grow">\r
        <mat-label>Type (ex. PDF, VIDEO)</mat-label>\r
        <input matInput [(ngModel)]="typeSeul" placeholder="PDF" />\r
      </mat-form-field>\r
      <button mat-stroked-button color="primary" type="button" [disabled]="loading" (click)="rechercherParType()">\r
        Par type\r
      </button>\r
    </div>\r
  </mat-card>\r
\r
  @if (error) {\r
    <p class="alert">{{ error }}</p>\r
  }\r
  @if (loading) {\r
    <p class="muted">Recherche\u2026</p>\r
  }\r
\r
  <div class="grid">\r
    @for (c of cours; track c.id) {\r
      <mat-card class="item-card" appearance="outlined">\r
        <h3>{{ c.titre }}</h3>\r
        <p class="meta">{{ c.typeContenu }} \xB7 {{ c.publie ? 'Publi\xE9' : 'Brouillon' }}</p>\r
        <p class="desc">{{ (c.contenu ?? '') | slice: 0 : 140 }}{{ (c.contenu ?? '').length > 140 ? '\u2026' : '' }}</p>\r
        <button mat-stroked-button type="button" (click)="voir(c)">Ouvrir</button>\r
      </mat-card>\r
    }\r
  </div>\r
\r
  @if (!loading && cours.length === 0 && !error) {\r
    <p class="muted">Lance une recherche pour afficher des r\xE9sultats.</p>\r
  }\r
</div>\r
`, styles: ["/* src/app/pages/recherche/recherche-cours.component.css */\n.subnav {\n  display: flex;\n  gap: 1rem;\n  margin-bottom: 0.75rem;\n}\n.subnav a {\n  color: #4f46e5;\n  text-decoration: none;\n  font-weight: 600;\n  font-size: 0.9rem;\n  padding-bottom: 0.2rem;\n  border-bottom: 2px solid transparent;\n}\n.subnav a.active {\n  border-bottom-color: #4f46e5;\n}\n.page {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2rem;\n}\n.page h1 {\n  margin: 0 0 0.5rem;\n  font-size: 1.5rem;\n}\n.lead {\n  color: #64748b;\n  margin: 0 0 1.25rem;\n}\n.filter-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n  margin-bottom: 1.25rem;\n}\n.filter-card--secondary {\n  background: #f8fafc;\n}\n.filter-card__h {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n}\n.hint {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.row-type {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.row-type .grow {\n  flex: 1 1 200px;\n  min-width: 0;\n}\n.fields {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.full {\n  width: 100%;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.item-card {\n  padding: 1rem 1.25rem !important;\n  border-radius: 12px !important;\n}\n.item-card h3 {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n}\n.meta {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  color: #6366f1;\n}\n.desc {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.muted {\n  color: #64748b;\n}\n.alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n/*# sourceMappingURL=recherche-cours.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RechercheCoursComponent, { className: "RechercheCoursComponent", filePath: "src/app/pages/recherche/recherche-cours.component.ts", lineNumber: 14 });
})();

// src/app/services/statistique.service.ts
function num4(v) {
  if (v == null || v === "") {
    return void 0;
  }
  const n = typeof v === "number" ? v : Number(v);
  return Number.isFinite(n) ? n : void 0;
}
function normalizeDashboardStats(raw) {
  if (raw == null) {
    return {};
  }
  if (typeof raw === "number") {
    return { totalModules: raw };
  }
  if (typeof raw !== "object") {
    return {};
  }
  const o = raw;
  return {
    totalModules: num4(o["totalModules"] ?? o["nombreModules"] ?? o["total_modules"]),
    totalCours: num4(o["totalCours"] ?? o["nombreCours"] ?? o["total_cours"]),
    totalQuizzes: num4(o["totalQuizzes"] ?? o["nombreQuizzes"] ?? o["total_quizzes"]),
    totalQuestions: num4(o["totalQuestions"] ?? o["nombreQuestions"] ?? o["total_questions"]),
    totalReponses: num4(o["totalReponses"] ?? o["nombreReponses"] ?? o["total_reponses"])
  };
}
function mapCount(raw) {
  if (typeof raw === "number") {
    return raw;
  }
  if (raw != null && typeof raw === "object" && "count" in raw) {
    const c = num4(raw.count);
    return c ?? 0;
  }
  const n = num4(raw);
  return n ?? 0;
}
var StatistiqueService = class _StatistiqueService {
  http = inject(HttpClient);
  getStatistiquesGlobales() {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesGlobal)).pipe(map(normalizeDashboardStats));
  }
  countModules() {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesModulesCount)).pipe(map(mapCount));
  }
  countCours() {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesCoursCount)).pipe(map(mapCount));
  }
  countQuizzes() {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesQuizzesCount)).pipe(map(mapCount));
  }
  countQuestions() {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesQuestionsCount)).pipe(map(mapCount));
  }
  countReponses() {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesReponsesCount)).pipe(map(mapCount));
  }
  countQuizzesParModule(moduleId) {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesModuleQuizzesCount(moduleId))).pipe(map(mapCount));
  }
  countQuestionsParQuiz(quizId) {
    return this.http.get(apiUrl(ApiEndpoints.statistiquesQuizQuestionsCount(quizId))).pipe(map(mapCount));
  }
  static \u0275fac = function StatistiqueService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StatistiqueService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StatistiqueService, factory: _StatistiqueService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatistiqueService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/pages/admin/dashboard-admin.component.ts
function DashboardAdminComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function DashboardAdminComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function DashboardAdminComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-card", 7)(2, "span", 8);
    \u0275\u0275text(3, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9)(5, "span", 10);
    \u0275\u0275text(6, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "strong", 11);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "mat-progress-bar", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-card", 13)(11, "span", 8);
    \u0275\u0275text(12, "\u{1F4D6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9)(14, "span", 10);
    \u0275\u0275text(15, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong", 11);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275element(18, "mat-progress-bar", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-card", 14)(20, "span", 8);
    \u0275\u0275text(21, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 9)(23, "span", 10);
    \u0275\u0275text(24, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "strong", 11);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "mat-progress-bar", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "mat-card", 15)(29, "span", 8);
    \u0275\u0275text(30, "\u2753");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 9)(32, "span", 10);
    \u0275\u0275text(33, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "strong", 11);
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275element(36, "mat-progress-bar", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "mat-card", 16)(38, "span", 8);
    \u0275\u0275text(39, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 9)(41, "span", 10);
    \u0275\u0275text(42, "R\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "strong", 11);
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275element(45, "mat-progress-bar", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.nModules());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nModules()));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.nCours());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nCours()));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.nQuizzes());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nQuizzes()));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.nQuestions());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nQuestions()));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.nReponses());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nReponses()));
  }
}
var DashboardAdminComponent = class _DashboardAdminComponent {
  statistiqueService = inject(StatistiqueService);
  loading = true;
  error = null;
  stats = null;
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading = true;
    this.error = null;
    this.statistiqueService.getStatistiquesGlobales().pipe(finalize(() => this.loading = false)).subscribe({
      next: (s) => this.stats = s,
      error: () => {
        this.stats = null;
        this.error = "Impossible de charger les statistiques (v\xE9rifie l\u2019endpoint backend).";
      }
    });
  }
  nModules() {
    return this.stats?.totalModules ?? this.stats?.nombreModules ?? 0;
  }
  nCours() {
    return this.stats?.totalCours ?? this.stats?.nombreCours ?? 0;
  }
  nQuizzes() {
    return this.stats?.totalQuizzes ?? this.stats?.nombreQuizzes ?? 0;
  }
  nQuestions() {
    return this.stats?.totalQuestions ?? this.stats?.nombreQuestions ?? 0;
  }
  nReponses() {
    return this.stats?.totalReponses ?? this.stats?.nombreReponses ?? 0;
  }
  /** Barre visuelle relative au max des 5 compteurs. */
  barPct(n) {
    const vals = [
      this.nModules(),
      this.nCours(),
      this.nQuizzes(),
      this.nQuestions(),
      this.nReponses()
    ];
    const max = Math.max(1, ...vals);
    return Math.min(100, n / max * 100);
  }
  static \u0275fac = function DashboardAdminComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DashboardAdminComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardAdminComponent, selectors: [["app-dashboard-admin"]], standalone: false, decls: 11, vars: 4, consts: [[1, "dash"], [1, "dash__head"], [1, "lead"], ["mat-stroked-button", "", "type", "button", 3, "click", "disabled"], [1, "muted"], [1, "alert"], [1, "stat-grid"], ["appearance", "outlined", 1, "stat-card", "stat-card--m"], ["aria-hidden", "true", 1, "stat-card__icon"], [1, "stat-card__body"], [1, "stat-card__label"], [1, "stat-card__value"], ["mode", "determinate", 3, "value"], ["appearance", "outlined", 1, "stat-card", "stat-card--c"], ["appearance", "outlined", 1, "stat-card", "stat-card--q"], ["appearance", "outlined", 1, "stat-card", "stat-card--t"], ["appearance", "outlined", 1, "stat-card", "stat-card--r"]], template: function DashboardAdminComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Statistiques globales de la plateforme");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function DashboardAdminComponent_Template_button_click_6_listener() {
        return ctx.load();
      });
      \u0275\u0275text(7, "Actualiser");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, DashboardAdminComponent_Conditional_8_Template, 2, 0, "p", 4);
      \u0275\u0275conditionalCreate(9, DashboardAdminComponent_Conditional_9_Template, 2, 1, "p", 5);
      \u0275\u0275conditionalCreate(10, DashboardAdminComponent_Conditional_10_Template, 46, 10, "div", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error ? 9 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.stats && !ctx.loading ? 10 : -1);
    }
  }, dependencies: [MatButton, MatCard, MatProgressBar], styles: ["\n\n.dash[_ngcontent-%COMP%] {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2.5rem;\n}\n.dash__head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 0.75rem 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.dash__head[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.6rem;\n  color: #0f172a;\n}\n.lead[_ngcontent-%COMP%] {\n  margin: 0;\n  flex: 1;\n  min-width: 200px;\n  color: #64748b;\n}\n.muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n.stat-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.stat-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.1rem 1.25rem !important;\n  border-radius: 14px !important;\n  border: 1px solid #e2e8f0 !important;\n}\n.stat-card--m[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #eff6ff 0%,\n      #fff 70%);\n}\n.stat-card--c[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #f0fdf4 0%,\n      #fff 70%);\n}\n.stat-card--q[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #faf5ff 0%,\n      #fff 70%);\n}\n.stat-card--t[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #fff7ed 0%,\n      #fff 70%);\n}\n.stat-card--r[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #f0fdfa 0%,\n      #fff 70%);\n}\n.stat-card__icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  line-height: 1;\n}\n.stat-card__body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.stat-card__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.stat-card__value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0.25rem 0 0.5rem;\n  letter-spacing: -0.02em;\n}\n.stat-card[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  height: 6px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=dashboard-admin.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DashboardAdminComponent, [{
    type: Component,
    args: [{ selector: "app-dashboard-admin", standalone: false, template: '<div class="dash">\r\n  <div class="dash__head">\r\n    <h1>Tableau de bord</h1>\r\n    <p class="lead">Statistiques globales de la plateforme</p>\r\n    <button mat-stroked-button type="button" [disabled]="loading" (click)="load()">Actualiser</button>\r\n  </div>\r\n\r\n  @if (loading) {\r\n    <p class="muted">Chargement\u2026</p>\r\n  }\r\n  @if (error) {\r\n    <p class="alert">{{ error }}</p>\r\n  }\r\n\r\n  @if (stats && !loading) {\r\n    <div class="stat-grid">\r\n      <mat-card class="stat-card stat-card--m" appearance="outlined">\r\n        <span class="stat-card__icon" aria-hidden="true">\u{1F4DA}</span>\r\n        <div class="stat-card__body">\r\n          <span class="stat-card__label">Modules</span>\r\n          <strong class="stat-card__value">{{ nModules() }}</strong>\r\n          <mat-progress-bar mode="determinate" [value]="barPct(nModules())"></mat-progress-bar>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class="stat-card stat-card--c" appearance="outlined">\r\n        <span class="stat-card__icon" aria-hidden="true">\u{1F4D6}</span>\r\n        <div class="stat-card__body">\r\n          <span class="stat-card__label">Cours</span>\r\n          <strong class="stat-card__value">{{ nCours() }}</strong>\r\n          <mat-progress-bar mode="determinate" [value]="barPct(nCours())"></mat-progress-bar>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class="stat-card stat-card--q" appearance="outlined">\r\n        <span class="stat-card__icon" aria-hidden="true">\u{1F4DD}</span>\r\n        <div class="stat-card__body">\r\n          <span class="stat-card__label">Quiz</span>\r\n          <strong class="stat-card__value">{{ nQuizzes() }}</strong>\r\n          <mat-progress-bar mode="determinate" [value]="barPct(nQuizzes())"></mat-progress-bar>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class="stat-card stat-card--t" appearance="outlined">\r\n        <span class="stat-card__icon" aria-hidden="true">\u2753</span>\r\n        <div class="stat-card__body">\r\n          <span class="stat-card__label">Questions</span>\r\n          <strong class="stat-card__value">{{ nQuestions() }}</strong>\r\n          <mat-progress-bar mode="determinate" [value]="barPct(nQuestions())"></mat-progress-bar>\r\n        </div>\r\n      </mat-card>\r\n      <mat-card class="stat-card stat-card--r" appearance="outlined">\r\n        <span class="stat-card__icon" aria-hidden="true">\u{1F4AC}</span>\r\n        <div class="stat-card__body">\r\n          <span class="stat-card__label">R\xE9ponses</span>\r\n          <strong class="stat-card__value">{{ nReponses() }}</strong>\r\n          <mat-progress-bar mode="determinate" [value]="barPct(nReponses())"></mat-progress-bar>\r\n        </div>\r\n      </mat-card>\r\n    </div>\r\n  }\r\n</div>\r\n', styles: ["/* src/app/pages/admin/dashboard-admin.component.css */\n.dash {\n  max-width: 1100px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 2.5rem;\n}\n.dash__head {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: baseline;\n  gap: 0.75rem 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.dash__head h1 {\n  margin: 0;\n  font-size: 1.6rem;\n  color: #0f172a;\n}\n.lead {\n  margin: 0;\n  flex: 1;\n  min-width: 200px;\n  color: #64748b;\n}\n.muted {\n  color: #64748b;\n}\n.alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n}\n.stat-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.stat-card {\n  display: flex;\n  gap: 1rem;\n  padding: 1.1rem 1.25rem !important;\n  border-radius: 14px !important;\n  border: 1px solid #e2e8f0 !important;\n}\n.stat-card--m {\n  background:\n    linear-gradient(\n      145deg,\n      #eff6ff 0%,\n      #fff 70%);\n}\n.stat-card--c {\n  background:\n    linear-gradient(\n      145deg,\n      #f0fdf4 0%,\n      #fff 70%);\n}\n.stat-card--q {\n  background:\n    linear-gradient(\n      145deg,\n      #faf5ff 0%,\n      #fff 70%);\n}\n.stat-card--t {\n  background:\n    linear-gradient(\n      145deg,\n      #fff7ed 0%,\n      #fff 70%);\n}\n.stat-card--r {\n  background:\n    linear-gradient(\n      145deg,\n      #f0fdfa 0%,\n      #fff 70%);\n}\n.stat-card__icon {\n  font-size: 1.75rem;\n  line-height: 1;\n}\n.stat-card__body {\n  flex: 1;\n  min-width: 0;\n}\n.stat-card__label {\n  display: block;\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.stat-card__value {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin: 0.25rem 0 0.5rem;\n  letter-spacing: -0.02em;\n}\n.stat-card mat-progress-bar {\n  height: 6px;\n  border-radius: 4px;\n}\n/*# sourceMappingURL=dashboard-admin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardAdminComponent, { className: "DashboardAdminComponent", filePath: "src/app/pages/admin/dashboard-admin.component.ts", lineNumber: 12 });
})();

// src/app/pages/student/dialogs/student-quiz-pass-dialog.component.ts
var _forTrack011 = ($index, $item) => $item.id ?? $index;
var _forTrack13 = ($index, $item) => $item.id;
function StudentQuizPassDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "span", 8);
    \u0275\u0275text(3, "Chargement du quiz\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizPassDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "Bonnes r\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bonnes());
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span", 17);
    \u0275\u0275text(2, "Mauvaises r\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.mauvaises());
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 19);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.progressValue());
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const res_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(res_r3.message);
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "div", 13)(2, "h4");
    \u0275\u0275text(3, "R\xE9sultat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 15)(7, "div", 16)(8, "span", 17);
    \u0275\u0275text(9, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "strong", 18);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 16)(13, "span", 17);
    \u0275\u0275text(14, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "strong", 18);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(17, StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_17_Template, 5, 1, "div", 16);
    \u0275\u0275conditionalCreate(18, StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_18_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_19_Template, 1, 1, "mat-progress-bar", 19);
    \u0275\u0275conditionalCreate(20, StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Conditional_20_Template, 2, 1, "p", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "app-student-certificat-celebration", 21);
  }
  if (rf & 2) {
    const res_r3 = ctx;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("sqpd-badge--ok", ctx_r0.valide())("sqpd-badge--ko", !ctx_r0.valide());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.valide() ? "Valid\xE9" : "Non valid\xE9", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.scoreDisplay());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pourcentageDisplay());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.bonnes() != null ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mauvaises() != null ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(res_r3.pourcentage != null ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(res_r3.message ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("result", res_r3);
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMsg());
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Ce quiz ne contient aucune question.");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r7 = ctx.$implicit;
    \u0275\u0275property("value", r_r7.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(r_r7.texte);
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-radio-group", 31);
    \u0275\u0275listener("change", function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_7_Template_mat_radio_group_change_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const q_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.choose(q_r6.id, $event.value));
    });
    \u0275\u0275repeaterCreate(1, StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_7_For_2_Template, 2, 2, "mat-radio-button", 32, _forTrack13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", ctx_r0.selection()[q_r6.id]);
    \u0275\u0275advance();
    \u0275\u0275repeater(q_r6.reponses);
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Aucune r\xE9ponse pour cette question.");
    \u0275\u0275elementEnd();
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 24)(1, "h4", 27)(2, "span", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_7_Template, 3, 1, "mat-radio-group", 30)(8, StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Conditional_8_Template, 2, 0, "p", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const q_r6 = ctx.$implicit;
    const \u0275$index_100_r8 = ctx.$index;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275$index_100_r8 + 1, ".");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", q_r6.enonce, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("(", q_r6.points, " pt", q_r6.points > 1 ? "s" : "", ")");
    \u0275\u0275advance();
    \u0275\u0275conditional((q_r6.reponses == null ? null : q_r6.reponses.length) && q_r6.id != null ? 7 : 8);
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p", 22);
    \u0275\u0275text(1, "R\xE9ponds \xE0 toutes les questions ci-dessous, puis clique sur \xAB Soumettre le quiz \xBB.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 23);
    \u0275\u0275repeaterCreate(3, StudentQuizPassDialogComponent_Conditional_5_Conditional_10_For_4_Template, 9, 5, "mat-card", 24, _forTrack011);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 25)(6, "button", 26);
    \u0275\u0275listener("click", function StudentQuizPassDialogComponent_Conditional_5_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const qz_r9 = \u0275\u0275nextContext();
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275repeater(qz_r9.questions);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r0.canSubmit() || ctx_r0.submitting());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.submitting() ? "Correction\u2026" : "Soumettre le quiz", " ");
  }
}
function StudentQuizPassDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 6);
    \u0275\u0275listener("click", function StudentQuizPassDialogComponent_Conditional_5_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.close());
    });
    \u0275\u0275text(2, "\u2190 Fermer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 8);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, StudentQuizPassDialogComponent_Conditional_5_Conditional_7_Template, 22, 12);
    \u0275\u0275conditionalCreate(8, StudentQuizPassDialogComponent_Conditional_5_Conditional_8_Template, 2, 1, "p", 11);
    \u0275\u0275conditionalCreate(9, StudentQuizPassDialogComponent_Conditional_5_Conditional_9_Template, 2, 0, "p", 8);
    \u0275\u0275conditionalCreate(10, StudentQuizPassDialogComponent_Conditional_5_Conditional_10_Template, 8, 2);
  }
  if (rf & 2) {
    let tmp_4_0;
    const qz_r9 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(qz_r9.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(qz_r9.description);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = ctx_r0.result()) ? 7 : -1, tmp_4_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.errorMsg() && ctx_r0.quiz() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.result() && ctx_r0.totalQuestions() === 0 ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.result() && ctx_r0.totalQuestions() > 0 ? 10 : -1);
  }
}
function StudentQuizPassDialogComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function StudentQuizPassDialogComponent_Conditional_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.goResultPage());
    });
    \u0275\u0275text(1, "Voir la page r\xE9sultat");
    \u0275\u0275elementEnd();
  }
}
var StudentQuizPassDialogComponent = class _StudentQuizPassDialogComponent {
  quizService = inject(QuizService);
  correctionService = inject(QuizCorrectionService);
  resultStore = inject(QuizResultStoreService);
  router = inject(Router);
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  quiz = signal(null, ...ngDevMode ? [{ debugName: "quiz" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  submitting = signal(false, ...ngDevMode ? [{ debugName: "submitting" }] : []);
  selection = signal({}, ...ngDevMode ? [{ debugName: "selection" }] : []);
  result = signal(null, ...ngDevMode ? [{ debugName: "result" }] : []);
  errorMsg = signal(null, ...ngDevMode ? [{ debugName: "errorMsg" }] : []);
  httpTimeoutMs = 25e3;
  constructor() {
    const qid = this.data.quizId;
    if (!Number.isFinite(qid)) {
      this.loading.set(false);
      this.errorMsg.set("Quiz invalide.");
      return;
    }
    this.quizService.getById(qid).pipe(timeout(this.httpTimeoutMs), catchError(() => {
      this.errorMsg.set("Quiz introuvable ou serveur indisponible.");
      return of(null);
    }), finalize(() => this.loading.set(false))).subscribe({
      next: (q) => {
        if (q) {
          this.errorMsg.set(null);
          this.quiz.set(q);
          this.selection.set({});
        }
      }
    });
  }
  get resolvedQuizId() {
    return this.data.quizId;
  }
  totalQuestions() {
    return this.quiz()?.questions?.length ?? 0;
  }
  choose(questionId, value) {
    if (this.result()) {
      return;
    }
    const reponseId = typeof value === "number" ? value : Number(value);
    if (!Number.isFinite(reponseId)) {
      return;
    }
    this.selection.update((s) => __spreadProps(__spreadValues({}, s), { [questionId]: reponseId }));
  }
  canSubmit() {
    const q = this.quiz();
    const sel = this.selection();
    if (!q?.questions?.length) {
      return false;
    }
    return q.questions.every((quest) => quest.id != null && sel[quest.id] != null);
  }
  submit() {
    const q = this.quiz();
    const sel = this.selection();
    if (!q?.questions?.length || !this.canSubmit()) {
      return;
    }
    const reponsesEtudiant = {};
    for (const quest of q.questions) {
      if (quest.id != null && sel[quest.id] != null) {
        reponsesEtudiant[String(quest.id)] = sel[quest.id];
      }
    }
    this.submitting.set(true);
    this.errorMsg.set(null);
    this.correctionService.submit(this.resolvedQuizId, { reponsesEtudiant }).pipe(finalize(() => this.submitting.set(false))).subscribe({
      next: (r) => this.applyResult(r),
      error: (err) => {
        const raw = err;
        if (raw?.error != null && typeof raw.error === "object") {
          const parsed = normalizeQuizResult(raw.error);
          if (parsed.score != null || parsed.pourcentage != null) {
            this.applyResult(parsed);
            return;
          }
        }
        this.errorMsg.set(apiErrorMessage(err, "Impossible de corriger le quiz."));
      }
    });
  }
  applyResult(r) {
    this.resultStore.set(this.resolvedQuizId, r, this.quiz()?.titre);
    this.result.set(r);
  }
  close() {
    this.dialogRef.close();
  }
  goResultPage() {
    this.dialog.closeAll();
    void this.router.navigate(["/student", "resultat"]);
  }
  scoreDisplay() {
    const r = this.result();
    if (!r) {
      return "";
    }
    const s = r.score ?? r.scoreObtenu;
    const m = r.scoreMax;
    if (s != null && m != null) {
      return `${s} / ${m}`;
    }
    if (s != null) {
      return String(s);
    }
    return "\u2014";
  }
  pourcentageDisplay() {
    const p = this.result()?.pourcentage;
    if (p == null) {
      return "\u2014";
    }
    return `${Math.round(p)} %`;
  }
  bonnes() {
    const r = this.result();
    return r?.bonnesReponses ?? r?.nombreBonnesReponses;
  }
  mauvaises() {
    const r = this.result();
    return r?.mauvaisesReponses ?? r?.nombreMauvaisesReponses;
  }
  valide() {
    const r = this.result();
    return !!(r?.valide ?? r?.reussi);
  }
  progressValue() {
    const p = this.result()?.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return 0;
    }
    const v = p <= 1 ? p * 100 : p;
    return Math.max(0, Math.min(100, v));
  }
  static \u0275fac = function StudentQuizPassDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQuizPassDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizPassDialogComponent, selectors: [["app-student-quiz-pass-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], [1, "sqpd-body"], [1, "sqpd-loading"], ["role", "alert", 1, "sqpd-alert"], ["align", "end"], ["mat-flat-button", "", "color", "primary", "type", "button"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["diameter", "40"], [1, "sqpd-muted"], [1, "sqpd-head"], [1, "sqpd-title"], [1, "sqpd-alert"], ["appearance", "outlined", 1, "sqpd-result"], [1, "sqpd-result__header"], [1, "sqpd-badge"], [1, "sqpd-result-grid"], [1, "sqpd-stat"], [1, "sqpd-stat__label"], [1, "sqpd-stat__value"], ["mode", "determinate", 3, "value"], [1, "sqpd-result-msg"], [3, "result"], [1, "sqpd-hint"], [1, "sqpd-questions"], ["appearance", "outlined", 1, "sqpd-q"], [1, "sqpd-actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "sqpd-q__title"], [1, "sqpd-q__n"], [1, "sqpd-q__pts"], [1, "sqpd-q__group", 3, "value"], [1, "sqpd-q__group", 3, "change", "value"], [3, "value"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentQuizPassDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Passer le quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1);
      \u0275\u0275conditionalCreate(3, StudentQuizPassDialogComponent_Conditional_3_Template, 4, 0, "div", 2)(4, StudentQuizPassDialogComponent_Conditional_4_Template, 2, 1, "p", 3)(5, StudentQuizPassDialogComponent_Conditional_5_Template, 11, 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-actions", 4);
      \u0275\u0275conditionalCreate(7, StudentQuizPassDialogComponent_Conditional_7_Template, 2, 0, "button", 5);
      \u0275\u0275elementStart(8, "button", 6);
      \u0275\u0275listener("click", function StudentQuizPassDialogComponent_Template_button_click_8_listener() {
        return ctx.close();
      });
      \u0275\u0275text(9, "Fermer");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.errorMsg() && !ctx.quiz() ? 4 : (tmp_0_0 = ctx.quiz()) ? 5 : -1, tmp_0_0);
      \u0275\u0275advance(4);
      \u0275\u0275conditional(ctx.result() ? 7 : -1);
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatCardModule, MatCard, MatRadioModule, MatRadioGroup, MatRadioButton, MatProgressBarModule, MatProgressBar, MatProgressSpinnerModule, MatProgressSpinner, StudentCertificatCelebrationComponent], styles: ["\n\n.sqpd-body[_ngcontent-%COMP%] {\n  min-width: min(100%, 300px);\n  max-height: min(78vh, 720px);\n  overflow: auto;\n  padding-top: 0.25rem;\n}\n.sqpd-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.5rem 0;\n}\n.sqpd-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n  margin: 0;\n  font-size: 0.92rem;\n  line-height: 1.45;\n}\n.sqpd-alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  margin: 0 0 0.75rem;\n}\n.sqpd-head[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.sqpd-title[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0.3rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqpd-result[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 1rem 1.15rem !important;\n  border-radius: 12px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n}\n.sqpd-result__header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.85rem;\n}\n.sqpd-result__header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.sqpd-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 0.3rem 0.65rem;\n  border-radius: 999px;\n}\n.sqpd-badge--ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.sqpd-badge--ko[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.sqpd-result-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 0.85rem;\n  margin-bottom: 0.85rem;\n}\n.sqpd-stat__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.sqpd-stat__value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #1e293b;\n}\n.sqpd-result-msg[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0;\n  font-size: 0.9rem;\n  color: #475569;\n}\nmat-progress-bar[_ngcontent-%COMP%] {\n  height: 8px;\n  border-radius: 6px;\n}\n.sqpd-hint[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.88rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.sqpd-questions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.sqpd-actions[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.sqpd-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n.sqpd-q[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  padding: 0.9rem 1.1rem !important;\n  border-radius: 12px !important;\n}\n.sqpd-q__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.65rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1.45;\n}\n.sqpd-q__n[_ngcontent-%COMP%] {\n  color: #6366f1;\n  margin-right: 0.2rem;\n}\n.sqpd-q__pts[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.sqpd-q__group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=student-quiz-pass-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizPassDialogComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz-pass-dialog", standalone: true, imports: [
      MatDialogModule,
      MatButtonModule,
      MatCardModule,
      MatRadioModule,
      MatProgressBarModule,
      MatProgressSpinnerModule,
      StudentCertificatCelebrationComponent
    ], template: `<h2 mat-dialog-title>Passer le quiz</h2>\r
\r
<mat-dialog-content class="sqpd-body">\r
  @if (loading()) {\r
    <div class="sqpd-loading">\r
      <mat-spinner diameter="40" />\r
      <span class="sqpd-muted">Chargement du quiz\u2026</span>\r
    </div>\r
  } @else if (errorMsg() && !quiz()) {\r
    <p class="sqpd-alert" role="alert">{{ errorMsg() }}</p>\r
  } @else if (quiz(); as qz) {\r
    <div class="sqpd-head">\r
      <button mat-stroked-button type="button" (click)="close()">\u2190 Fermer</button>\r
      <h3 class="sqpd-title">{{ qz.titre }}</h3>\r
      <p class="sqpd-muted">{{ qz.description }}</p>\r
    </div>\r
\r
    @if (result(); as res) {\r
      <mat-card class="sqpd-result" appearance="outlined">\r
        <div class="sqpd-result__header">\r
          <h4>R\xE9sultat</h4>\r
          <span class="sqpd-badge" [class.sqpd-badge--ok]="valide()" [class.sqpd-badge--ko]="!valide()">\r
            {{ valide() ? 'Valid\xE9' : 'Non valid\xE9' }}\r
          </span>\r
        </div>\r
        <div class="sqpd-result-grid">\r
          <div class="sqpd-stat">\r
            <span class="sqpd-stat__label">Score</span>\r
            <strong class="sqpd-stat__value">{{ scoreDisplay() }}</strong>\r
          </div>\r
          <div class="sqpd-stat">\r
            <span class="sqpd-stat__label">Pourcentage</span>\r
            <strong class="sqpd-stat__value">{{ pourcentageDisplay() }}</strong>\r
          </div>\r
          @if (bonnes() != null) {\r
            <div class="sqpd-stat">\r
              <span class="sqpd-stat__label">Bonnes r\xE9ponses</span>\r
              <strong class="sqpd-stat__value">{{ bonnes() }}</strong>\r
            </div>\r
          }\r
          @if (mauvaises() != null) {\r
            <div class="sqpd-stat">\r
              <span class="sqpd-stat__label">Mauvaises r\xE9ponses</span>\r
              <strong class="sqpd-stat__value">{{ mauvaises() }}</strong>\r
            </div>\r
          }\r
        </div>\r
        @if (res.pourcentage != null) {\r
          <mat-progress-bar mode="determinate" [value]="progressValue()"></mat-progress-bar>\r
        }\r
        @if (res.message) {\r
          <p class="sqpd-result-msg">{{ res.message }}</p>\r
        }\r
      </mat-card>\r
      <app-student-certificat-celebration [result]="res" />\r
    }\r
\r
    @if (errorMsg() && quiz()) {\r
      <p class="sqpd-alert">{{ errorMsg() }}</p>\r
    }\r
\r
    @if (!result() && totalQuestions() === 0) {\r
      <p class="sqpd-muted">Ce quiz ne contient aucune question.</p>\r
    }\r
\r
    @if (!result() && totalQuestions() > 0) {\r
      <p class="sqpd-hint">R\xE9ponds \xE0 toutes les questions ci-dessous, puis clique sur \xAB Soumettre le quiz \xBB.</p>\r
      <div class="sqpd-questions">\r
        @for (q of qz.questions; track q.id ?? $index; let i = $index) {\r
          <mat-card class="sqpd-q" appearance="outlined">\r
            <h4 class="sqpd-q__title">\r
              <span class="sqpd-q__n">{{ i + 1 }}.</span>\r
              {{ q.enonce }}\r
              <span class="sqpd-q__pts">({{ q.points }} pt{{ q.points > 1 ? 's' : '' }})</span>\r
            </h4>\r
            @if (q.reponses?.length && q.id != null) {\r
              <mat-radio-group\r
                class="sqpd-q__group"\r
                [value]="selection()[q.id]"\r
                (change)="choose(q.id, $event.value)"\r
              >\r
                @for (r of q.reponses; track r.id) {\r
                  <mat-radio-button [value]="r.id">{{ r.texte }}</mat-radio-button>\r
                }\r
              </mat-radio-group>\r
            } @else {\r
              <p class="sqpd-muted">Aucune r\xE9ponse pour cette question.</p>\r
            }\r
          </mat-card>\r
        }\r
      </div>\r
\r
      <div class="sqpd-actions">\r
        <button\r
          mat-flat-button\r
          color="primary"\r
          type="button"\r
          [disabled]="!canSubmit() || submitting()"\r
          (click)="submit()"\r
        >\r
          {{ submitting() ? 'Correction\u2026' : 'Soumettre le quiz' }}\r
        </button>\r
      </div>\r
    }\r
  }\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end">\r
  @if (result()) {\r
    <button mat-flat-button color="primary" type="button" (click)="goResultPage()">Voir la page r\xE9sultat</button>\r
  }\r
  <button mat-stroked-button type="button" (click)="close()">Fermer</button>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/pages/student/dialogs/student-quiz-pass-dialog.component.css */\n.sqpd-body {\n  min-width: min(100%, 300px);\n  max-height: min(78vh, 720px);\n  overflow: auto;\n  padding-top: 0.25rem;\n}\n.sqpd-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.5rem 0;\n}\n.sqpd-muted {\n  color: #64748b;\n  margin: 0;\n  font-size: 0.92rem;\n  line-height: 1.45;\n}\n.sqpd-alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  margin: 0 0 0.75rem;\n}\n.sqpd-head {\n  margin-bottom: 1rem;\n}\n.sqpd-title {\n  margin: 0.65rem 0 0.3rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqpd-result {\n  margin-bottom: 1rem;\n  padding: 1rem 1.15rem !important;\n  border-radius: 12px !important;\n  background:\n    linear-gradient(\n      135deg,\n      #f8fafc 0%,\n      #eef2ff 100%);\n}\n.sqpd-result__header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.85rem;\n}\n.sqpd-result__header h4 {\n  margin: 0;\n  font-size: 1.05rem;\n}\n.sqpd-badge {\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 0.3rem 0.65rem;\n  border-radius: 999px;\n}\n.sqpd-badge--ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.sqpd-badge--ko {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.sqpd-result-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 0.85rem;\n  margin-bottom: 0.85rem;\n}\n.sqpd-stat__label {\n  display: block;\n  font-size: 0.75rem;\n  color: #64748b;\n}\n.sqpd-stat__value {\n  font-size: 1.1rem;\n  color: #1e293b;\n}\n.sqpd-result-msg {\n  margin: 0.65rem 0 0;\n  font-size: 0.9rem;\n  color: #475569;\n}\nmat-progress-bar {\n  height: 8px;\n  border-radius: 6px;\n}\n.sqpd-hint {\n  margin: 0 0 1rem;\n  font-size: 0.88rem;\n  color: #475569;\n  line-height: 1.45;\n}\n.sqpd-questions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.sqpd-actions {\n  margin-top: 1.25rem;\n  display: flex;\n  justify-content: flex-end;\n}\n.sqpd-actions button {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n.sqpd-q {\n  margin-bottom: 0;\n  padding: 0.9rem 1.1rem !important;\n  border-radius: 12px !important;\n}\n.sqpd-q__title {\n  margin: 0 0 0.65rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  line-height: 1.45;\n}\n.sqpd-q__n {\n  color: #6366f1;\n  margin-right: 0.2rem;\n}\n.sqpd-q__pts {\n  font-weight: 500;\n  color: #64748b;\n  font-size: 0.8rem;\n}\n.sqpd-q__group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  align-items: flex-start;\n}\n/*# sourceMappingURL=student-quiz-pass-dialog.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizPassDialogComponent, { className: "StudentQuizPassDialogComponent", filePath: "src/app/pages/student/dialogs/student-quiz-pass-dialog.component.ts", lineNumber: 38 });
})();

// src/app/pages/student/dialogs/student-cours-detail-dialog.component.ts
function StudentCoursDetailDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 10);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentCoursDetailDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentCoursDetailDialogComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Module : ", ctx);
  }
}
function StudentCoursDetailDialogComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15)(1, "span", 16);
    \u0275\u0275text(2, "Ressource");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r2.urlRessource);
  }
}
function StudentCoursDetailDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 4)(1, "h3", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StudentCoursDetailDialogComponent_Conditional_5_Conditional_5_Template, 2, 1, "p", 13);
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, StudentCoursDetailDialogComponent_Conditional_5_Conditional_8_Template, 5, 1, "p", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const c_r2 = ctx;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate4(" ", c_r2.typeContenu, " \xB7 ", c_r2.duree, " min \xB7 ", c_r2.gratuit ? "Gratuit" : "Payant", " \xB7 ", c_r2.publie ? "Publi\xE9" : "Brouillon", " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_4_0 = c_r2.module == null ? null : c_r2.module.titre) ? 5 : -1, tmp_4_0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.contenu);
    \u0275\u0275advance();
    \u0275\u0275conditional((c_r2.urlRessource == null ? null : c_r2.urlRessource.trim()) ? 8 : -1);
  }
}
function StudentCoursDetailDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Aucune donn\xE9e pour ce cours.");
    \u0275\u0275elementEnd();
  }
}
function StudentCoursDetailDialogComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function StudentCoursDetailDialogComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openPdf());
    });
    \u0275\u0275text(1, "Ouvrir le PDF");
    \u0275\u0275elementEnd();
  }
}
function StudentCoursDetailDialogComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function StudentCoursDetailDialogComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.passQuiz());
    });
    \u0275\u0275text(1, "Passer le quiz");
    \u0275\u0275elementEnd();
  }
}
function resolveResourceUrl(url) {
  const u = (url || "").trim();
  if (!u) {
    return "";
  }
  if (/^https?:\/\//i.test(u)) {
    return u;
  }
  if (u.startsWith("/")) {
    return `${window.location.origin}${u}`;
  }
  return u;
}
function coursHasPdf(c) {
  if (!c) {
    return false;
  }
  const url = (c.urlRessource || "").toLowerCase();
  const type = (c.typeContenu || "").toLowerCase();
  return type.includes("pdf") || url.endsWith(".pdf") || url.includes(".pdf?");
}
var StudentCoursDetailDialogComponent = class _StudentCoursDetailDialogComponent {
  coursService = inject(CoursService);
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  cours = signal(null, ...ngDevMode ? [{ debugName: "cours" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor() {
    const httpTimeoutMs = 25e3;
    this.coursService.getById(this.data.coursId).pipe(timeout(httpTimeoutMs), catchError(() => {
      this.error.set("Impossible de charger ce cours.");
      return of(null);
    }), finalize(() => this.loading.set(false))).subscribe({
      next: (c) => {
        if (c) {
          this.cours.set(c);
        }
      }
    });
  }
  hasPdf() {
    return coursHasPdf(this.cours());
  }
  openPdf() {
    const raw = this.cours()?.urlRessource?.trim();
    if (!raw) {
      return;
    }
    const href = resolveResourceUrl(raw);
    if (href) {
      window.open(href, "_blank", "noopener,noreferrer");
    }
  }
  firstQuizId() {
    return this.cours()?.quizzes?.[0]?.id;
  }
  passQuiz() {
    const qid = this.firstQuizId();
    if (qid == null) {
      return;
    }
    this.dialog.open(StudentQuizPassDialogComponent, {
      data: { quizId: qid },
      width: "min(760px, 96vw)",
      maxHeight: "92vh"
    });
  }
  close() {
    this.dialogRef.close();
  }
  static \u0275fac = function StudentCoursDetailDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCoursDetailDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCoursDetailDialogComponent, selectors: [["app-student-cours-detail-dialog"]], decls: 12, vars: 3, consts: [["mat-dialog-title", ""], [1, "scd-body"], [1, "scd-loading"], ["role", "alert", 1, "scd-alert"], ["appearance", "outlined", 1, "scd-card"], [1, "scd-muted"], ["align", "end", 1, "scd-actions"], ["mat-flat-button", "", "color", "accent", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["diameter", "36"], [1, "scd-title"], [1, "scd-meta"], [1, "scd-module"], [1, "scd-contenu"], [1, "scd-url"], [1, "scd-label"], [1, "scd-url-text"], ["mat-flat-button", "", "color", "accent", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentCoursDetailDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "D\xE9tail du cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1);
      \u0275\u0275conditionalCreate(3, StudentCoursDetailDialogComponent_Conditional_3_Template, 4, 0, "div", 2)(4, StudentCoursDetailDialogComponent_Conditional_4_Template, 2, 1, "p", 3)(5, StudentCoursDetailDialogComponent_Conditional_5_Template, 9, 8, "mat-card", 4)(6, StudentCoursDetailDialogComponent_Conditional_6_Template, 2, 0, "p", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-dialog-actions", 6);
      \u0275\u0275conditionalCreate(8, StudentCoursDetailDialogComponent_Conditional_8_Template, 2, 0, "button", 7);
      \u0275\u0275conditionalCreate(9, StudentCoursDetailDialogComponent_Conditional_9_Template, 2, 0, "button", 8);
      \u0275\u0275elementStart(10, "button", 9);
      \u0275\u0275listener("click", function StudentCoursDetailDialogComponent_Template_button_click_10_listener() {
        return ctx.close();
      });
      \u0275\u0275text(11, "Fermer");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.error() ? 4 : (tmp_0_0 = ctx.cours()) ? 5 : 6, tmp_0_0);
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.loading() && ctx.cours() && ctx.hasPdf() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(!ctx.loading() && ctx.cours() && ctx.firstQuizId() != null ? 9 : -1);
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatProgressSpinnerModule, MatProgressSpinner, MatCardModule, MatCard], styles: ["\n\n.scd-body[_ngcontent-%COMP%] {\n  min-width: min(100%, 320px);\n  max-height: min(70vh, 560px);\n  overflow: auto;\n}\n.scd-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #64748b;\n  padding: 0.5rem 0;\n}\n.scd-alert[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b91c1c;\n  font-weight: 600;\n}\n.scd-muted[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.scd-card[_ngcontent-%COMP%] {\n  border-radius: 12px !important;\n}\n.scd-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.scd-meta[_ngcontent-%COMP%], \n.scd-module[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.scd-contenu[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  white-space: pre-wrap;\n  line-height: 1.55;\n  color: #334155;\n  font-size: 0.95rem;\n}\n.scd-url[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  font-size: 0.82rem;\n  word-break: break-all;\n}\n.scd-label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 0.2rem;\n}\n.scd-url-text[_ngcontent-%COMP%] {\n  color: #6366f1;\n}\n.scd-actions[_ngcontent-%COMP%] {\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=student-cours-detail-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCoursDetailDialogComponent, [{
    type: Component,
    args: [{ selector: "app-student-cours-detail-dialog", standalone: true, imports: [MatDialogModule, MatButtonModule, MatProgressSpinnerModule, MatCardModule], template: `<h2 mat-dialog-title>D\xE9tail du cours</h2>\r
\r
<mat-dialog-content class="scd-body">\r
  @if (loading()) {\r
    <div class="scd-loading">\r
      <mat-spinner diameter="36" />\r
      <span>Chargement\u2026</span>\r
    </div>\r
  } @else if (error()) {\r
    <p class="scd-alert" role="alert">{{ error() }}</p>\r
  } @else if (cours(); as c) {\r
    <mat-card appearance="outlined" class="scd-card">\r
      <h3 class="scd-title">{{ c.titre }}</h3>\r
      <p class="scd-meta">\r
        {{ c.typeContenu }} \xB7 {{ c.duree }} min \xB7\r
        {{ c.gratuit ? 'Gratuit' : 'Payant' }} \xB7 {{ c.publie ? 'Publi\xE9' : 'Brouillon' }}\r
      </p>\r
      @if (c.module?.titre; as titreModule) {\r
        <p class="scd-module">Module : {{ titreModule }}</p>\r
      }\r
      <div class="scd-contenu">{{ c.contenu }}</div>\r
      @if (c.urlRessource?.trim()) {\r
        <p class="scd-url">\r
          <span class="scd-label">Ressource</span>\r
          <span class="scd-url-text">{{ c.urlRessource }}</span>\r
        </p>\r
      }\r
    </mat-card>\r
  } @else {\r
    <p class="scd-muted">Aucune donn\xE9e pour ce cours.</p>\r
  }\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end" class="scd-actions">\r
  @if (!loading() && cours() && hasPdf()) {\r
    <button mat-flat-button color="accent" type="button" (click)="openPdf()">Ouvrir le PDF</button>\r
  }\r
  @if (!loading() && cours() && firstQuizId() != null) {\r
    <button mat-flat-button color="primary" type="button" (click)="passQuiz()">Passer le quiz</button>\r
  }\r
  <button mat-stroked-button type="button" (click)="close()">Fermer</button>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/pages/student/dialogs/student-cours-detail-dialog.component.css */\n.scd-body {\n  min-width: min(100%, 320px);\n  max-height: min(70vh, 560px);\n  overflow: auto;\n}\n.scd-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #64748b;\n  padding: 0.5rem 0;\n}\n.scd-alert {\n  margin: 0;\n  color: #b91c1c;\n  font-weight: 600;\n}\n.scd-muted {\n  margin: 0;\n  color: #64748b;\n}\n.scd-card {\n  border-radius: 12px !important;\n}\n.scd-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.scd-meta,\n.scd-module {\n  margin: 0 0 0.5rem;\n  font-size: 0.85rem;\n  color: #64748b;\n}\n.scd-contenu {\n  margin: 0.75rem 0 0;\n  white-space: pre-wrap;\n  line-height: 1.55;\n  color: #334155;\n  font-size: 0.95rem;\n}\n.scd-url {\n  margin: 1rem 0 0;\n  font-size: 0.82rem;\n  word-break: break-all;\n}\n.scd-label {\n  display: block;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 0.2rem;\n}\n.scd-url-text {\n  color: #6366f1;\n}\n.scd-actions {\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  padding-top: 0.5rem;\n}\n/*# sourceMappingURL=student-cours-detail-dialog.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCoursDetailDialogComponent, { className: "StudentCoursDetailDialogComponent", filePath: "src/app/pages/student/dialogs/student-cours-detail-dialog.component.ts", lineNumber: 46 });
})();

// src/app/pages/student/dialogs/student-module-courses-dialog.component.ts
var _forTrack012 = ($index, $item) => $item.id ?? $index;
function StudentModuleCoursesDialogComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement des cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentModuleCoursesDialogComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentModuleCoursesDialogComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Aucun cours dans ce module pour le moment.");
    \u0275\u0275elementEnd();
  }
}
function StudentModuleCoursesDialogComponent_Conditional_6_For_2_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function StudentModuleCoursesDialogComponent_Conditional_6_For_2_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.passQuiz(c_r3));
    });
    \u0275\u0275text(1, "Passer le quiz");
    \u0275\u0275elementEnd();
  }
}
function StudentModuleCoursesDialogComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 9)(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 13);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 14)(10, "button", 15);
    \u0275\u0275listener("click", function StudentModuleCoursesDialogComponent_Conditional_6_For_2_Template_button_click_10_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetail(c_r3));
    });
    \u0275\u0275text(11, "Voir d\xE9tail du cours");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, StudentModuleCoursesDialogComponent_Conditional_6_For_2_Conditional_12_Template, 2, 0, "button", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("#", c_r3.ordreCours);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (c_r3.contenu || "").slice(0, 120), "", (c_r3.contenu || "").length > 120 ? "\u2026" : "");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r3.typeContenu, " \xB7 ", c_r3.duree, " min");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.firstQuizId(c_r3) != null ? 12 : -1);
  }
}
function StudentModuleCoursesDialogComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, StudentModuleCoursesDialogComponent_Conditional_6_For_2_Template, 13, 7, "mat-card", 9, _forTrack012);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.cours());
  }
}
var StudentModuleCoursesDialogComponent = class _StudentModuleCoursesDialogComponent {
  moduleService = inject(ModuleService);
  coursService = inject(CoursService);
  dialog = inject(MatDialog);
  dialogRef = inject(MatDialogRef);
  data = inject(MAT_DIALOG_DATA);
  cours = signal([], ...ngDevMode ? [{ debugName: "cours" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor() {
    const mid = this.data.module.id;
    if (mid == null) {
      this.loading.set(false);
      this.error.set("Module invalide.");
      return;
    }
    const httpTimeoutMs = 25e3;
    forkJoin({
      mod: this.moduleService.getById(mid).pipe(timeout(httpTimeoutMs), catchError(() => of(null))),
      all: this.coursService.getAll().pipe(timeout(httpTimeoutMs), catchError(() => of([])))
    }).pipe(finalize(() => {
      this.loading.set(false);
    })).subscribe({
      next: ({ mod, all }) => {
        if (!mod) {
          this.error.set("Module introuvable ou API indisponible.");
          return;
        }
        if (mod.cours?.length) {
          this.cours.set([...mod.cours].sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0)));
        } else {
          this.cours.set(all.filter((c) => c.moduleId === mid || c.module?.id === mid).sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0)));
        }
      },
      error: () => {
        this.error.set("Erreur de chargement.");
      }
    });
  }
  openDetail(c) {
    if (c.id == null) {
      return;
    }
    this.dialog.open(StudentCoursDetailDialogComponent, {
      data: { coursId: c.id },
      width: "min(720px, 94vw)",
      maxHeight: "90vh"
    });
  }
  firstQuizId(c) {
    return c.quizzes?.[0]?.id;
  }
  passQuiz(c) {
    const qid = this.firstQuizId(c);
    if (qid == null) {
      return;
    }
    this.dialog.open(StudentQuizPassDialogComponent, {
      data: { quizId: qid },
      width: "min(760px, 96vw)",
      maxHeight: "92vh"
    });
  }
  close() {
    this.dialogRef.close();
  }
  static \u0275fac = function StudentModuleCoursesDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentModuleCoursesDialogComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentModuleCoursesDialogComponent, selectors: [["app-student-module-courses-dialog"]], decls: 10, vars: 2, consts: [["mat-dialog-title", ""], [1, "smcd-body"], [1, "smcd-loading"], ["role", "alert", 1, "smcd-alert"], [1, "smcd-muted"], [1, "smcd-grid"], ["align", "end"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["diameter", "40"], ["appearance", "outlined", 1, "smcd-card"], [1, "smcd-ordre"], [1, "smcd-card-title"], [1, "smcd-excerpt"], [1, "smcd-type"], [1, "smcd-actions"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentModuleCoursesDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content", 1);
      \u0275\u0275conditionalCreate(3, StudentModuleCoursesDialogComponent_Conditional_3_Template, 4, 0, "div", 2)(4, StudentModuleCoursesDialogComponent_Conditional_4_Template, 2, 1, "p", 3)(5, StudentModuleCoursesDialogComponent_Conditional_5_Template, 2, 0, "p", 4)(6, StudentModuleCoursesDialogComponent_Conditional_6_Template, 3, 0, "div", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-dialog-actions", 6)(8, "button", 7);
      \u0275\u0275listener("click", function StudentModuleCoursesDialogComponent_Template_button_click_8_listener() {
        return ctx.close();
      });
      \u0275\u0275text(9, "Fermer");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1("Cours du module \u2014 ", ctx.data.module.titre);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 3 : ctx.error() ? 4 : !ctx.cours().length ? 5 : 6);
    }
  }, dependencies: [CommonModule, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton, MatCardModule, MatCard, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.smcd-body[_ngcontent-%COMP%] {\n  min-width: min(100%, 280px);\n  max-height: min(75vh, 640px);\n  overflow: auto;\n}\n.smcd-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  color: #64748b;\n  padding: 0.5rem 0;\n}\n.smcd-alert[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #b91c1c;\n  font-weight: 600;\n}\n.smcd-muted[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.smcd-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.smcd-card[_ngcontent-%COMP%] {\n  border-radius: 14px !important;\n  padding: 1rem 1.1rem 1.15rem !important;\n  position: relative;\n}\n.smcd-ordre[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.65rem;\n  right: 0.65rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #6366f1;\n  background: #eef2ff;\n  padding: 0.15rem 0.45rem;\n  border-radius: 8px;\n}\n.smcd-card-title[_ngcontent-%COMP%] {\n  margin: 0 2.5rem 0.4rem 0;\n  font-size: 1.02rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.smcd-excerpt[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.88rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.smcd-type[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #047857;\n}\n.smcd-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.smcd-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-module-courses-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentModuleCoursesDialogComponent, [{
    type: Component,
    args: [{ selector: "app-student-module-courses-dialog", standalone: true, imports: [CommonModule, MatDialogModule, MatButtonModule, MatCardModule, MatProgressSpinnerModule], template: `<h2 mat-dialog-title>Cours du module \u2014 {{ data.module.titre }}</h2>\r
\r
<mat-dialog-content class="smcd-body">\r
  @if (loading()) {\r
    <div class="smcd-loading">\r
      <mat-spinner diameter="40" />\r
      <span>Chargement des cours\u2026</span>\r
    </div>\r
  } @else if (error()) {\r
    <p class="smcd-alert" role="alert">{{ error() }}</p>\r
  } @else if (!cours().length) {\r
    <p class="smcd-muted">Aucun cours dans ce module pour le moment.</p>\r
  } @else {\r
    <div class="smcd-grid">\r
      @for (c of cours(); track c.id ?? $index) {\r
        <mat-card class="smcd-card" appearance="outlined">\r
          <span class="smcd-ordre">#{{ c.ordreCours }}</span>\r
          <h3 class="smcd-card-title">{{ c.titre }}</h3>\r
          <p class="smcd-excerpt">{{ (c.contenu || '').slice(0, 120) }}{{ (c.contenu || '').length > 120 ? '\u2026' : '' }}</p>\r
          <p class="smcd-type">{{ c.typeContenu }} \xB7 {{ c.duree }} min</p>\r
          <div class="smcd-actions">\r
            <button mat-stroked-button color="primary" type="button" (click)="openDetail(c)">Voir d\xE9tail du cours</button>\r
            @if (firstQuizId(c) != null) {\r
              <button mat-flat-button color="primary" type="button" (click)="passQuiz(c)">Passer le quiz</button>\r
            }\r
          </div>\r
        </mat-card>\r
      }\r
    </div>\r
  }\r
</mat-dialog-content>\r
\r
<mat-dialog-actions align="end">\r
  <button mat-stroked-button type="button" (click)="close()">Fermer</button>\r
</mat-dialog-actions>\r
`, styles: ["/* src/app/pages/student/dialogs/student-module-courses-dialog.component.css */\n.smcd-body {\n  min-width: min(100%, 280px);\n  max-height: min(75vh, 640px);\n  overflow: auto;\n}\n.smcd-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  color: #64748b;\n  padding: 0.5rem 0;\n}\n.smcd-alert {\n  margin: 0;\n  color: #b91c1c;\n  font-weight: 600;\n}\n.smcd-muted {\n  margin: 0;\n  color: #64748b;\n}\n.smcd-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n}\n.smcd-card {\n  border-radius: 14px !important;\n  padding: 1rem 1.1rem 1.15rem !important;\n  position: relative;\n}\n.smcd-ordre {\n  position: absolute;\n  top: 0.65rem;\n  right: 0.65rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  color: #6366f1;\n  background: #eef2ff;\n  padding: 0.15rem 0.45rem;\n  border-radius: 8px;\n}\n.smcd-card-title {\n  margin: 0 2.5rem 0.4rem 0;\n  font-size: 1.02rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.smcd-excerpt {\n  margin: 0 0 0.5rem;\n  font-size: 0.88rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.smcd-type {\n  margin: 0 0 0.75rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #047857;\n}\n.smcd-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n}\n.smcd-actions button {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-module-courses-dialog.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentModuleCoursesDialogComponent, { className: "StudentModuleCoursesDialogComponent", filePath: "src/app/pages/student/dialogs/student-module-courses-dialog.component.ts", lineNumber: 27 });
})();

// src/app/pages/student/student-modules/student-modules.component.ts
var _forTrack013 = ($index, $item) => $item.id ?? $index;
function StudentModulesComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Chargement des modules\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentModulesComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentModulesComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 9)(1, "div", 10);
    \u0275\u0275element(2, "img", 11);
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14)(7, "span", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 16);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "h2", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 18);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 19)(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 20);
    \u0275\u0275listener("click", function StudentModulesComponent_For_14_Template_button_click_18_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCours(m_r3));
    });
    \u0275\u0275text(19, " Voir les cours ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    const \u0275$index_27_r4 = ctx.$index;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("src", ctx_r0.coverFor(m_r3, \u0275$index_27_r4), \u0275\u0275sanitizeUrl)("alt", "Illustration " + m_r3.titre);
    \u0275\u0275advance();
    \u0275\u0275classProp("sm-card__badge--off", !m_r3.actif);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r3.actif ? "Actif" : "Inactif");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(m_r3.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.categorie);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F1 ", m_r3.dureeTotale, " h");
  }
}
function StudentModulesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "Aucun module disponible pour le moment.");
    \u0275\u0275elementEnd();
  }
}
var HTTP_TIMEOUT_MS16 = 25e3;
var StudentModulesComponent = class _StudentModulesComponent {
  moduleService = inject(ModuleService);
  router = inject(Router);
  dialog = inject(MatDialog);
  modules = signal([], ...ngDevMode ? [{ debugName: "modules" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  /** Illustrations variées pour les cartes. */
  covers = [
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=800&q=80"
  ];
  constructor() {
    merge(of(null), this.router.events.pipe(filter((e) => e instanceof NavigationEnd))).pipe(takeUntilDestroyed(), map(() => this.router.url.split("?")[0].replace(/\/$/, "")), distinctUntilChanged(), filter((url) => /\/student\/modules$/.test(url)), tap(() => {
      this.loading.set(true);
      this.error.set(null);
    }), switchMap(() => this.moduleService.getAll().pipe(timeout(HTTP_TIMEOUT_MS16), catchError(() => {
      this.modules.set([]);
      this.error.set("Impossible de charger les modules (r\xE9seau, d\xE9lai ou serveur).");
      return of([]);
    }), finalize(() => this.loading.set(false))))).subscribe({
      next: (data) => {
        this.modules.set(data);
      }
    });
  }
  coverFor(m, index) {
    const i = (m.id ?? index) % this.covers.length;
    return this.covers[i];
  }
  openCours(m) {
    if (m.id == null) {
      return;
    }
    this.dialog.open(StudentModuleCoursesDialogComponent, {
      data: { module: m },
      width: "min(960px, 96vw)",
      maxHeight: "92vh",
      autoFocus: "first-tabbable"
    });
  }
  static \u0275fac = function StudentModulesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentModulesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentModulesComponent, selectors: [["app-student-modules"]], standalone: false, decls: 16, vars: 3, consts: [[1, "sm-hero"], [1, "sm-hero__copy"], [1, "sm-hero__badge"], [1, "sm-hero__title"], [1, "sm-hero__lead"], ["routerLink", "/student/certificats", 1, "sm-hero__cert-cta"], [1, "sm-muted"], [1, "sm-alert"], [1, "sm-grid"], [1, "sm-card"], [1, "sm-card__media"], ["width", "400", "height", "220", "loading", "lazy", 3, "src", "alt"], [1, "sm-card__badge"], [1, "sm-card__body"], [1, "sm-card__tags"], [1, "sm-tag"], [1, "sm-tag", "sm-tag--soft"], [1, "sm-card__title"], [1, "sm-card__desc"], [1, "sm-card__meta"], ["mat-flat-button", "", "color", "primary", "type", "button", 1, "sm-card__btn", 3, "click"]], template: function StudentModulesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "p", 2);
      \u0275\u0275text(3, "Parcours e-learning");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h1", 3);
      \u0275\u0275text(5, "Vos modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "Choisissez un module et explorez les cours associ\xE9s, quiz et ressources.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "a", 5);
      \u0275\u0275text(9, "Voir mes certificats de r\xE9ussite");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(10, StudentModulesComponent_Conditional_10_Template, 2, 0, "p", 6);
      \u0275\u0275conditionalCreate(11, StudentModulesComponent_Conditional_11_Template, 2, 1, "p", 7);
      \u0275\u0275elementStart(12, "div", 8);
      \u0275\u0275repeaterCreate(13, StudentModulesComponent_For_14_Template, 20, 10, "article", 9, _forTrack013);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(15, StudentModulesComponent_Conditional_15_Template, 2, 0, "p", 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275conditional(ctx.loading() ? 10 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 11 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.modules());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.loading() && !ctx.modules().length && !ctx.error() ? 15 : -1);
    }
  }, dependencies: [RouterLink, MatButton], styles: ["\n\n.sm-hero[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.sm-hero__badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 0 0.5rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #6366f1;\n}\n.sm-hero__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: clamp(1.65rem, 3vw, 2rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.sm-hero__lead[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 52ch;\n  color: #64748b;\n  line-height: 1.55;\n}\n.sm-hero__cert-cta[_ngcontent-%COMP%] {\n  display: inline-flex;\n  margin-top: 1rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #4338ca;\n  text-decoration: none;\n  padding: 0.35rem 0.15rem;\n  border-bottom: 2px solid rgba(67, 56, 202, 0.35);\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n.sm-hero__cert-cta[_ngcontent-%COMP%]:hover {\n  color: #312e81;\n  border-color: rgba(49, 46, 129, 0.55);\n}\n.sm-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sm-alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.sm-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.sm-card[_ngcontent-%COMP%] {\n  border-radius: 18px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 12px 24px -8px rgba(15, 23, 42, 0.12);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.sm-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 20px -6px rgba(15, 23, 42, 0.12), 0 20px 40px -12px rgba(99, 102, 241, 0.18);\n}\n.sm-card__media[_ngcontent-%COMP%] {\n  position: relative;\n  aspect-ratio: 16 / 10;\n  overflow: hidden;\n}\n.sm-card__media[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.sm-card__badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  background: rgba(16, 185, 129, 0.95);\n  color: #fff;\n}\n.sm-card__badge--off[_ngcontent-%COMP%] {\n  background: rgba(100, 116, 139, 0.95);\n}\n.sm-card__body[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.15rem 1.25rem;\n}\n.sm-card__tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.sm-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 8px;\n  background: #eef2ff;\n  color: #4338ca;\n}\n.sm-tag--soft[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.sm-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.45rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.sm-card__desc[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sm-card__meta[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #475569;\n  margin-bottom: 0.85rem;\n}\n.sm-card__btn[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-modules.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentModulesComponent, [{
    type: Component,
    args: [{ selector: "app-student-modules", standalone: false, template: `<section class="sm-hero">\r
  <div class="sm-hero__copy">\r
    <p class="sm-hero__badge">Parcours e-learning</p>\r
    <h1 class="sm-hero__title">Vos modules</h1>\r
    <p class="sm-hero__lead">Choisissez un module et explorez les cours associ\xE9s, quiz et ressources.</p>\r
    <a routerLink="/student/certificats" class="sm-hero__cert-cta">Voir mes certificats de r\xE9ussite</a>\r
  </div>\r
</section>\r
\r
@if (loading()) {\r
  <p class="sm-muted">Chargement des modules\u2026</p>\r
}\r
@if (error()) {\r
  <p class="sm-alert">{{ error() }}</p>\r
}\r
\r
<div class="sm-grid">\r
  @for (m of modules(); track m.id ?? $index; let i = $index) {\r
    <article class="sm-card">\r
      <div class="sm-card__media">\r
        <img [src]="coverFor(m, i)" [alt]="'Illustration ' + m.titre" width="400" height="220" loading="lazy" />\r
        <span class="sm-card__badge" [class.sm-card__badge--off]="!m.actif">{{ m.actif ? 'Actif' : 'Inactif' }}</span>\r
      </div>\r
      <div class="sm-card__body">\r
        <div class="sm-card__tags">\r
          <span class="sm-tag">{{ m.niveau }}</span>\r
          <span class="sm-tag sm-tag--soft">{{ m.categorie }}</span>\r
        </div>\r
        <h2 class="sm-card__title">{{ m.titre }}</h2>\r
        <p class="sm-card__desc">{{ m.description }}</p>\r
        <div class="sm-card__meta">\r
          <span>\u23F1 {{ m.dureeTotale }} h</span>\r
        </div>\r
        <button mat-flat-button color="primary" type="button" class="sm-card__btn" (click)="openCours(m)">\r
          Voir les cours\r
        </button>\r
      </div>\r
    </article>\r
  }\r
</div>\r
\r
@if (!loading() && !modules().length && !error()) {\r
  <p class="sm-muted">Aucun module disponible pour le moment.</p>\r
}\r
`, styles: ["/* src/app/pages/student/student-modules/student-modules.component.css */\n.sm-hero {\n  margin-bottom: 1.75rem;\n}\n.sm-hero__badge {\n  display: inline-block;\n  margin: 0 0 0.5rem;\n  font-size: 0.72rem;\n  font-weight: 700;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n  color: #6366f1;\n}\n.sm-hero__title {\n  margin: 0 0 0.5rem;\n  font-size: clamp(1.65rem, 3vw, 2rem);\n  font-weight: 800;\n  letter-spacing: -0.03em;\n  color: #0f172a;\n}\n.sm-hero__lead {\n  margin: 0;\n  max-width: 52ch;\n  color: #64748b;\n  line-height: 1.55;\n}\n.sm-hero__cert-cta {\n  display: inline-flex;\n  margin-top: 1rem;\n  font-size: 0.9rem;\n  font-weight: 700;\n  color: #4338ca;\n  text-decoration: none;\n  padding: 0.35rem 0.15rem;\n  border-bottom: 2px solid rgba(67, 56, 202, 0.35);\n  transition: color 0.15s ease, border-color 0.15s ease;\n}\n.sm-hero__cert-cta:hover {\n  color: #312e81;\n  border-color: rgba(49, 46, 129, 0.55);\n}\n.sm-muted {\n  color: #64748b;\n}\n.sm-alert {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.sm-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.5rem;\n}\n.sm-card {\n  border-radius: 18px;\n  overflow: hidden;\n  background: #fff;\n  box-shadow: 0 4px 6px -1px rgba(15, 23, 42, 0.08), 0 12px 24px -8px rgba(15, 23, 42, 0.12);\n  border: 1px solid rgba(226, 232, 240, 0.9);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.sm-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 12px 20px -6px rgba(15, 23, 42, 0.12), 0 20px 40px -12px rgba(99, 102, 241, 0.18);\n}\n.sm-card__media {\n  position: relative;\n  aspect-ratio: 16 / 10;\n  overflow: hidden;\n}\n.sm-card__media img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.sm-card__badge {\n  position: absolute;\n  top: 0.75rem;\n  right: 0.75rem;\n  padding: 0.25rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  background: rgba(16, 185, 129, 0.95);\n  color: #fff;\n}\n.sm-card__badge--off {\n  background: rgba(100, 116, 139, 0.95);\n}\n.sm-card__body {\n  padding: 1.1rem 1.15rem 1.25rem;\n}\n.sm-card__tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-bottom: 0.5rem;\n}\n.sm-tag {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 8px;\n  background: #eef2ff;\n  color: #4338ca;\n}\n.sm-tag--soft {\n  background: #ecfdf5;\n  color: #047857;\n}\n.sm-card__title {\n  margin: 0 0 0.45rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.02em;\n}\n.sm-card__desc {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.5;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sm-card__meta {\n  font-size: 0.85rem;\n  color: #475569;\n  margin-bottom: 0.85rem;\n}\n.sm-card__btn {\n  width: 100%;\n  border-radius: 12px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-modules.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentModulesComponent, { className: "StudentModulesComponent", filePath: "src/app/pages/student/student-modules/student-modules.component.ts", lineNumber: 19 });
})();

// src/app/pages/student/student-module-cours/student-module-cours.component.ts
var _forTrack014 = ($index, $item) => $item.id ?? $index;
function StudentModuleCoursComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "mat-spinner", 3);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentModuleCoursComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentModuleCoursComponent_Conditional_4_For_11_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function StudentModuleCoursComponent_Conditional_4_For_11_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.lancerQuiz(c_r3));
    });
    \u0275\u0275text(1, "Lancer le quiz");
    \u0275\u0275elementEnd();
  }
}
function StudentModuleCoursComponent_Conditional_4_For_11_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275text(1, "Quiz indisponible");
    \u0275\u0275elementEnd();
  }
}
function StudentModuleCoursComponent_Conditional_4_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 10)(1, "div", 12)(2, "span", 13);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h3", 15);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "ul", 17)(11, "li");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "li");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "li");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 18)(18, "button", 19);
    \u0275\u0275listener("click", function StudentModuleCoursComponent_Conditional_4_For_11_Template_button_click_18_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.commencer(c_r3));
    });
    \u0275\u0275text(19, "Commencer");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(20, StudentModuleCoursComponent_Conditional_4_For_11_Conditional_20_Template, 2, 0, "button", 20)(21, StudentModuleCoursComponent_Conditional_4_For_11_Conditional_21_Template, 2, 0, "button", 21);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("#", c_r3.ordreCours);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.typeContenu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (c_r3.contenu || "").slice(0, 160), "", (c_r3.contenu || "").length > 160 ? "\u2026" : "");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u23F1 ", c_r3.duree, " min");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.gratuit ? "Gratuit" : "Payant");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.publie ? "Publi\xE9" : "Brouillon");
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_19_0 = ctx_r0.firstQuizId(c_r3)) ? 20 : 21, tmp_19_0);
  }
}
function StudentModuleCoursComponent_Conditional_4_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Aucun cours list\xE9 pour ce module.");
    \u0275\u0275elementEnd();
  }
}
function StudentModuleCoursComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 4)(1, "p", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h1", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "h2", 8);
    \u0275\u0275text(8, "Cours du module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 9);
    \u0275\u0275repeaterCreate(10, StudentModuleCoursComponent_Conditional_4_For_11_Template, 22, 9, "mat-card", 10, _forTrack014);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, StudentModuleCoursComponent_Conditional_4_Conditional_12_Template, 2, 0, "p", 11);
  }
  if (rf & 2) {
    const module_r5 = ctx;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", module_r5.categorie, " \xB7 ", module_r5.niveau);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(module_r5.description);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r0.cours());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.cours().length ? 12 : -1);
  }
}
var HTTP_TIMEOUT_MS17 = 25e3;
var StudentModuleCoursComponent = class _StudentModuleCoursComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  moduleService = inject(ModuleService);
  coursService = inject(CoursService);
  dialog = inject(MatDialog);
  currentModule = signal(null, ...ngDevMode ? [{ debugName: "currentModule" }] : []);
  cours = signal([], ...ngDevMode ? [{ debugName: "cours" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  moduleId = null;
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("moduleId")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.error.set(null);
      this.currentModule.set(null);
      this.cours.set([]);
    }), switchMap((id) => {
      if (!id) {
        this.loading.set(false);
        void this.router.navigate(["/student/modules"]);
        return EMPTY;
      }
      const mid = +id;
      if (!Number.isFinite(mid)) {
        this.loading.set(false);
        void this.router.navigate(["/student/modules"]);
        return EMPTY;
      }
      this.moduleId = mid;
      return forkJoin({
        mod: this.moduleService.getById(mid).pipe(catchError(() => of(null))),
        all: this.coursService.getAll().pipe(catchError(() => of([])))
      }).pipe(timeout(HTTP_TIMEOUT_MS17), map(({ mod, all }) => {
        if (!mod) {
          return { mod: null, cours: [] };
        }
        if (mod.cours?.length) {
          const list2 = [...mod.cours].sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0));
          return { mod, cours: list2 };
        }
        const list = all.filter((c) => c.moduleId === mid || c.module?.id === mid).sort((a, b) => (a.ordreCours ?? 0) - (b.ordreCours ?? 0));
        return { mod, cours: list };
      }), catchError(() => {
        this.error.set("D\xE9lai ou erreur r\xE9seau.");
        return of({ mod: null, cours: [] });
      }), finalize(() => this.loading.set(false)));
    })).subscribe({
      next: ({ mod, cours }) => {
        if (!mod) {
          if (!this.error()) {
            this.error.set("Module introuvable.");
          }
          return;
        }
        this.currentModule.set(mod);
        this.cours.set(cours);
      }
    });
  }
  back() {
    void this.router.navigate(["/student/modules"]);
  }
  commencer(c) {
    if (c.id != null) {
      void this.router.navigate(["/cours", c.id]);
    }
  }
  firstQuizId(c) {
    return c.quizzes?.[0]?.id;
  }
  lancerQuiz(c) {
    const qid = this.firstQuizId(c);
    if (qid == null) {
      return;
    }
    this.dialog.open(StudentQuizPassDialogComponent, {
      data: { quizId: qid },
      width: "min(760px, 96vw)",
      maxHeight: "92vh"
    });
  }
  static \u0275fac = function StudentModuleCoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentModuleCoursComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentModuleCoursComponent, selectors: [["app-student-module-cours"]], standalone: false, decls: 5, vars: 1, consts: [["mat-stroked-button", "", "type", "button", 1, "smc-back", 3, "click"], [1, "smc-loading"], [1, "smc-alert"], ["diameter", "40"], [1, "smc-head"], [1, "smc-kicker"], [1, "smc-title"], [1, "smc-desc"], [1, "smc-h2"], [1, "smc-grid"], ["appearance", "outlined", 1, "smc-card"], [1, "smc-muted"], [1, "smc-card__top"], [1, "smc-ordre"], [1, "smc-type"], [1, "smc-card__title"], [1, "smc-card__excerpt"], [1, "smc-facts"], [1, "smc-actions"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-stroked-button", "", "color", "primary", "type", "button"], ["mat-stroked-button", "", "type", "button", "disabled", "", "title", "Aucun quiz li\xE9"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentModuleCoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function StudentModuleCoursComponent_Template_button_click_0_listener() {
        return ctx.back();
      });
      \u0275\u0275text(1, "\u2190 Retour aux modules");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(2, StudentModuleCoursComponent_Conditional_2_Template, 4, 0, "div", 1)(3, StudentModuleCoursComponent_Conditional_3_Template, 2, 1, "p", 2)(4, StudentModuleCoursComponent_Conditional_4_Template, 13, 5);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 2 : ctx.error() ? 3 : (tmp_0_0 = ctx.currentModule()) ? 4 : -1, tmp_0_0);
    }
  }, dependencies: [MatButton, MatCard, MatProgressSpinner], styles: ["\n\n.smc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: #64748b;\n}\n.smc-back[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.smc-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.smc-alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.smc-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.smc-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6366f1;\n}\n.smc-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: clamp(1.5rem, 2.5vw, 1.85rem);\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.smc-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 70ch;\n  color: #64748b;\n  line-height: 1.55;\n}\n.smc-h2[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.smc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.smc-card[_ngcontent-%COMP%] {\n  padding: 1.15rem 1.2rem 1.25rem !important;\n  border-radius: 16px !important;\n  border-color: #e2e8f0 !important;\n  background: #fff !important;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.smc-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 32px -12px rgba(15, 23, 42, 0.15) !important;\n}\n.smc-card__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.65rem;\n}\n.smc-ordre[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #6366f1;\n  background: #eef2ff;\n  padding: 0.2rem 0.5rem;\n  border-radius: 8px;\n}\n.smc-type[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #047857;\n  background: #ecfdf5;\n  padding: 0.2rem 0.5rem;\n  border-radius: 8px;\n}\n.smc-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.smc-card__excerpt[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.smc-facts[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  font-size: 0.82rem;\n  color: #475569;\n}\n.smc-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.smc-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-module-cours.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentModuleCoursComponent, [{
    type: Component,
    args: [{ selector: "app-student-module-cours", standalone: false, template: `<button mat-stroked-button type="button" class="smc-back" (click)="back()">\u2190 Retour aux modules</button>\r
\r
@if (loading()) {\r
  <div class="smc-loading">\r
    <mat-spinner diameter="40" />\r
    <span>Chargement\u2026</span>\r
  </div>\r
} @else if (error()) {\r
  <p class="smc-alert">{{ error() }}</p>\r
} @else if (currentModule(); as module) {\r
  <header class="smc-head">\r
    <p class="smc-kicker">{{ module.categorie }} \xB7 {{ module.niveau }}</p>\r
    <h1 class="smc-title">{{ module.titre }}</h1>\r
    <p class="smc-desc">{{ module.description }}</p>\r
  </header>\r
\r
  <h2 class="smc-h2">Cours du module</h2>\r
\r
  <div class="smc-grid">\r
    @for (c of cours(); track c.id ?? $index) {\r
      <mat-card class="smc-card" appearance="outlined">\r
        <div class="smc-card__top">\r
          <span class="smc-ordre">#{{ c.ordreCours }}</span>\r
          <span class="smc-type">{{ c.typeContenu }}</span>\r
        </div>\r
        <h3 class="smc-card__title">{{ c.titre }}</h3>\r
        <p class="smc-card__excerpt">{{ (c.contenu || '').slice(0, 160) }}{{ (c.contenu || '').length > 160 ? '\u2026' : '' }}</p>\r
        <ul class="smc-facts">\r
          <li>\u23F1 {{ c.duree }} min</li>\r
          <li>{{ c.gratuit ? 'Gratuit' : 'Payant' }}</li>\r
          <li>{{ c.publie ? 'Publi\xE9' : 'Brouillon' }}</li>\r
        </ul>\r
        <div class="smc-actions">\r
          <button mat-flat-button color="primary" type="button" (click)="commencer(c)">Commencer</button>\r
          @if (firstQuizId(c); as qid) {\r
            <button mat-stroked-button color="primary" type="button" (click)="lancerQuiz(c)">Lancer le quiz</button>\r
          } @else {\r
            <button mat-stroked-button type="button" disabled title="Aucun quiz li\xE9">Quiz indisponible</button>\r
          }\r
        </div>\r
      </mat-card>\r
    }\r
  </div>\r
\r
  @if (!cours().length) {\r
    <p class="smc-muted">Aucun cours list\xE9 pour ce module.</p>\r
  }\r
}\r
`, styles: ["/* src/app/pages/student/student-module-cours/student-module-cours.component.css */\n.smc-loading {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: #64748b;\n}\n.smc-back {\n  margin-bottom: 1rem;\n}\n.smc-muted {\n  color: #64748b;\n}\n.smc-alert {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.smc-head {\n  margin-bottom: 1.75rem;\n}\n.smc-kicker {\n  margin: 0 0 0.35rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.08em;\n  color: #6366f1;\n}\n.smc-title {\n  margin: 0 0 0.5rem;\n  font-size: clamp(1.5rem, 2.5vw, 1.85rem);\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.smc-desc {\n  margin: 0;\n  max-width: 70ch;\n  color: #64748b;\n  line-height: 1.55;\n}\n.smc-h2 {\n  margin: 0 0 1rem;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.smc-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.smc-card {\n  padding: 1.15rem 1.2rem 1.25rem !important;\n  border-radius: 16px !important;\n  border-color: #e2e8f0 !important;\n  background: #fff !important;\n  transition: box-shadow 0.2s ease, transform 0.2s ease;\n}\n.smc-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 16px 32px -12px rgba(15, 23, 42, 0.15) !important;\n}\n.smc-card__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.65rem;\n}\n.smc-ordre {\n  font-size: 0.75rem;\n  font-weight: 800;\n  color: #6366f1;\n  background: #eef2ff;\n  padding: 0.2rem 0.5rem;\n  border-radius: 8px;\n}\n.smc-type {\n  font-size: 0.72rem;\n  font-weight: 700;\n  color: #047857;\n  background: #ecfdf5;\n  padding: 0.2rem 0.5rem;\n  border-radius: 8px;\n}\n.smc-card__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.smc-card__excerpt {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.smc-facts {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem 1rem;\n  font-size: 0.82rem;\n  color: #475569;\n}\n.smc-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.smc-actions button {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-module-cours.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentModuleCoursComponent, { className: "StudentModuleCoursComponent", filePath: "src/app/pages/student/student-module-cours/student-module-cours.component.ts", lineNumber: 21 });
})();

// src/app/pages/student/student-all-cours/student-all-cours.component.ts
var _forTrack015 = ($index, $item) => $item.id ?? $index;
function StudentAllCoursComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 6);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Chargement des cours\u2026");
    \u0275\u0275elementEnd()();
  }
}
function StudentAllCoursComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentAllCoursComponent_Conditional_9_For_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function StudentAllCoursComponent_Conditional_9_For_6_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const c_r3 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.passQuiz(c_r3));
    });
    \u0275\u0275text(1, "Passer le quiz");
    \u0275\u0275elementEnd();
  }
}
function StudentAllCoursComponent_Conditional_9_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 10)(1, "h2", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15)(8, "button", 16);
    \u0275\u0275listener("click", function StudentAllCoursComponent_Conditional_9_For_6_Template_button_click_8_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.open(c_r3));
    });
    \u0275\u0275text(9, "Voir le cours");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, StudentAllCoursComponent_Conditional_9_For_6_Conditional_10_Template, 2, 0, "button", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3("", ctx_r0.moduleLabel(c_r3), " \xB7 ordre ", c_r3.ordreCours, " \xB7 ", c_r3.typeContenu);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", (c_r3.contenu || "").slice(0, 140), "", (c_r3.contenu || "").length > 140 ? "\u2026" : "");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.firstQuizId(c_r3) != null ? 10 : -1);
  }
}
function StudentAllCoursComponent_Conditional_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Aucun cours disponible.");
    \u0275\u0275elementEnd();
  }
}
function StudentAllCoursComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 7);
    \u0275\u0275text(1, "Passer un quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "p", 8);
    \u0275\u0275text(3, "Choisis un cours qui propose un quiz, puis clique sur \xAB Passer le quiz \xBB.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275repeaterCreate(5, StudentAllCoursComponent_Conditional_9_For_6_Template, 11, 7, "mat-card", 10, _forTrack015);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StudentAllCoursComponent_Conditional_9_Conditional_7_Template, 2, 0, "p", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275repeater(ctx_r0.cours());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.cours().length ? 7 : -1);
  }
}
var HTTP_TIMEOUT_MS18 = 25e3;
var StudentAllCoursComponent = class _StudentAllCoursComponent {
  coursService = inject(CoursService);
  router = inject(Router);
  route = inject(ActivatedRoute);
  dialog = inject(MatDialog);
  cours = signal([], ...ngDevMode ? [{ debugName: "cours" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor() {
    merge(of(null), this.router.events.pipe(filter((e) => e instanceof NavigationEnd))).pipe(takeUntilDestroyed(), map(() => this.router.url.split("?")[0].replace(/\/$/, "")), distinctUntilChanged(), filter((url) => url.endsWith("/student/cours")), tap(() => {
      this.loading.set(true);
      this.error.set(null);
    }), switchMap(() => this.coursService.getAll().pipe(timeout(HTTP_TIMEOUT_MS18), catchError(() => {
      this.cours.set([]);
      this.error.set("Impossible de charger les cours (r\xE9seau, d\xE9lai ou serveur).");
      return of([]);
    }), finalize(() => this.loading.set(false))))).subscribe({
      next: (data) => {
        this.cours.set(data);
        this.scheduleScrollToQuiz();
      }
    });
    this.route.fragment.pipe(takeUntilDestroyed()).subscribe(() => this.scheduleScrollToQuiz());
  }
  scheduleScrollToQuiz() {
    queueMicrotask(() => {
      setTimeout(() => this.scrollToQuizIfNeeded(), 120);
    });
  }
  scrollToQuizIfNeeded() {
    if (this.loading()) {
      return;
    }
    const frag = this.route.snapshot.fragment ?? this.router.parseUrl(this.router.url).fragment;
    if (frag !== "passer-quiz") {
      return;
    }
    document.getElementById("passer-quiz")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  moduleLabel(c) {
    return c.module?.titre ?? "\u2014";
  }
  firstQuizId(c) {
    return c.quizzes?.[0]?.id;
  }
  open(c) {
    if (c.id != null) {
      void this.router.navigate(["/cours", c.id]);
    }
  }
  passQuiz(c) {
    const qid = this.firstQuizId(c);
    if (qid == null) {
      return;
    }
    this.dialog.open(StudentQuizPassDialogComponent, {
      data: { quizId: qid },
      width: "min(760px, 96vw)",
      maxHeight: "92vh"
    });
  }
  goModules() {
    void this.router.navigate(["/student/modules"]);
  }
  static \u0275fac = function StudentAllCoursComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentAllCoursComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentAllCoursComponent, selectors: [["app-student-all-cours"]], standalone: false, decls: 10, vars: 1, consts: [["mat-stroked-button", "", "type", "button", 1, "sac-back", 3, "click"], [1, "sac-head"], [1, "sac-title"], [1, "sac-lead"], [1, "sac-loading"], ["role", "alert", 1, "sac-alert"], ["diameter", "40"], ["id", "passer-quiz", 1, "sac-h2"], [1, "sac-hint"], [1, "sac-grid"], ["appearance", "outlined", 1, "sac-card"], [1, "sac-muted"], [1, "sac-card__title"], [1, "sac-card__meta"], [1, "sac-card__excerpt"], [1, "sac-card__actions"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"], ["mat-flat-button", "", "color", "primary", "type", "button"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentAllCoursComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "button", 0);
      \u0275\u0275listener("click", function StudentAllCoursComponent_Template_button_click_0_listener() {
        return ctx.goModules();
      });
      \u0275\u0275text(1, "\u2190 Retour aux modules");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "section", 1)(3, "h1", 2);
      \u0275\u0275text(4, "Tous les cours");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Parcourez les cours publi\xE9s sur la plateforme, ouvrez une fiche ou lancez un quiz associ\xE9.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(7, StudentAllCoursComponent_Conditional_7_Template, 4, 0, "div", 4)(8, StudentAllCoursComponent_Conditional_8_Template, 2, 1, "p", 5)(9, StudentAllCoursComponent_Conditional_9_Template, 8, 1);
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275conditional(ctx.loading() ? 7 : ctx.error() ? 8 : 9);
    }
  }, dependencies: [MatButton, MatCard, MatProgressSpinner], styles: ["\n\n.sac-back[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.sac-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.sac-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sac-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  max-width: 60ch;\n}\n.sac-h2[_ngcontent-%COMP%] {\n  scroll-margin-top: 5rem;\n  margin: 1.75rem 0 0.35rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sac-hint[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  max-width: 65ch;\n}\n.sac-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: #64748b;\n}\n.sac-alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.sac-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sac-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.sac-card[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.2rem !important;\n  border-radius: 16px !important;\n}\n.sac-card__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n  font-weight: 800;\n}\n.sac-card__meta[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.82rem;\n  color: #6366f1;\n}\n.sac-card__excerpt[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.sac-card__actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.sac-card__actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-all-cours.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentAllCoursComponent, [{
    type: Component,
    args: [{ selector: "app-student-all-cours", standalone: false, template: `<button mat-stroked-button type="button" class="sac-back" (click)="goModules()">\u2190 Retour aux modules</button>\r
\r
<section class="sac-head">\r
  <h1 class="sac-title">Tous les cours</h1>\r
  <p class="sac-lead">Parcourez les cours publi\xE9s sur la plateforme, ouvrez une fiche ou lancez un quiz associ\xE9.</p>\r
</section>\r
\r
@if (loading()) {\r
  <div class="sac-loading">\r
    <mat-spinner diameter="40" />\r
    <span>Chargement des cours\u2026</span>\r
  </div>\r
} @else if (error()) {\r
  <p class="sac-alert" role="alert">{{ error() }}</p>\r
} @else {\r
  <h2 id="passer-quiz" class="sac-h2">Passer un quiz</h2>\r
  <p class="sac-hint">Choisis un cours qui propose un quiz, puis clique sur \xAB Passer le quiz \xBB.</p>\r
\r
  <div class="sac-grid">\r
    @for (c of cours(); track c.id ?? $index) {\r
      <mat-card class="sac-card" appearance="outlined">\r
        <h2 class="sac-card__title">{{ c.titre }}</h2>\r
        <p class="sac-card__meta">{{ moduleLabel(c) }} \xB7 ordre {{ c.ordreCours }} \xB7 {{ c.typeContenu }}</p>\r
        <p class="sac-card__excerpt">{{ (c.contenu || '').slice(0, 140) }}{{ (c.contenu || '').length > 140 ? '\u2026' : '' }}</p>\r
        <div class="sac-card__actions">\r
          <button mat-stroked-button color="primary" type="button" (click)="open(c)">Voir le cours</button>\r
          @if (firstQuizId(c) != null) {\r
            <button mat-flat-button color="primary" type="button" (click)="passQuiz(c)">Passer le quiz</button>\r
          }\r
        </div>\r
      </mat-card>\r
    }\r
  </div>\r
  @if (!cours().length) {\r
    <p class="sac-muted">Aucun cours disponible.</p>\r
  }\r
}\r
`, styles: ["/* src/app/pages/student/student-all-cours/student-all-cours.component.css */\n.sac-back {\n  margin-bottom: 1rem;\n}\n.sac-head {\n  margin-bottom: 1.5rem;\n}\n.sac-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sac-lead {\n  margin: 0;\n  color: #64748b;\n  max-width: 60ch;\n}\n.sac-h2 {\n  scroll-margin-top: 5rem;\n  margin: 1.75rem 0 0.35rem;\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sac-hint {\n  margin: 0 0 1rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  max-width: 65ch;\n}\n.sac-loading {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  color: #64748b;\n}\n.sac-alert {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.sac-muted {\n  color: #64748b;\n}\n.sac-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.sac-card {\n  padding: 1.1rem 1.2rem !important;\n  border-radius: 16px !important;\n}\n.sac-card__title {\n  margin: 0 0 0.35rem;\n  font-size: 1.05rem;\n  font-weight: 800;\n}\n.sac-card__meta {\n  margin: 0 0 0.5rem;\n  font-size: 0.82rem;\n  color: #6366f1;\n}\n.sac-card__excerpt {\n  margin: 0 0 1rem;\n  font-size: 0.9rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.sac-card__actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.sac-card__actions button {\n  border-radius: 10px !important;\n  font-weight: 700 !important;\n}\n/*# sourceMappingURL=student-all-cours.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentAllCoursComponent, { className: "StudentAllCoursComponent", filePath: "src/app/pages/student/student-all-cours/student-all-cours.component.ts", lineNumber: 19 });
})();

// src/app/pages/student/student-recommandations/student-recommandations.component.ts
var _forTrack016 = ($index, $item) => $item.id ?? $index;
function StudentRecommandationsComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentRecommandationsComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentRecommandationsComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 14);
    \u0275\u0275listener("click", function StudentRecommandationsComponent_For_24_Template_article_click_0_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModule(m_r3));
    });
    \u0275\u0275elementStart(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.niveau);
  }
}
function StudentRecommandationsComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Aucun r\xE9sultat pour ce niveau.");
    \u0275\u0275elementEnd();
  }
}
function StudentRecommandationsComponent_For_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 14);
    \u0275\u0275listener("click", function StudentRecommandationsComponent_For_31_Template_article_click_0_listener() {
      const m_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModule(m_r5));
    });
    \u0275\u0275elementStart(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r5.categorie);
  }
}
function StudentRecommandationsComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1, "Aucun r\xE9sultat pour cette cat\xE9gorie.");
    \u0275\u0275elementEnd();
  }
}
var HTTP_TIMEOUT_MS19 = 25e3;
var StudentRecommandationsComponent = class _StudentRecommandationsComponent {
  reco = inject(RecommendationService);
  router = inject(Router);
  niveau = "Debutant";
  categorie = "Informatique";
  modulesNiveau = signal([], ...ngDevMode ? [{ debugName: "modulesNiveau" }] : []);
  modulesCat = signal([], ...ngDevMode ? [{ debugName: "modulesCat" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor() {
    merge(of(null), this.router.events.pipe(filter((e) => e instanceof NavigationEnd))).pipe(takeUntilDestroyed(), map(() => this.router.url.split("?")[0].replace(/\/$/, "")), distinctUntilChanged(), filter((url) => /\/student\/recommandations$/.test(url)), tap(() => {
      this.loading.set(true);
      this.error.set(null);
    }), switchMap(() => this.fetchRecommandations$())).subscribe({
      error: () => {
        this.error.set("Impossible de charger les recommandations.");
        this.loading.set(false);
      }
    });
  }
  fetchRecommandations$() {
    const n = this.niveau.trim() || "Debutant";
    const c = this.categorie.trim() || "Informatique";
    return forkJoin({
      mn: this.reco.modulesParNiveau(n).pipe(catchError(() => of([]))),
      mc: this.reco.modulesParCategorie(c).pipe(catchError(() => of([])))
    }).pipe(timeout(HTTP_TIMEOUT_MS19), tap(({ mn, mc }) => {
      this.modulesNiveau.set(mn);
      this.modulesCat.set(mc);
    }), catchError(() => {
      this.modulesNiveau.set([]);
      this.modulesCat.set([]);
      this.error.set("D\xE9lai d\xE9pass\xE9 ou serveur indisponible.");
      return of(null);
    }), finalize(() => this.loading.set(false)));
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.fetchRecommandations$().subscribe({
      error: () => {
        this.error.set("Impossible de charger les recommandations.");
        this.loading.set(false);
      }
    });
  }
  openModule(m) {
    if (m.id != null) {
      void this.router.navigate(["/student/modules", m.id, "cours"]);
    }
  }
  static \u0275fac = function StudentRecommandationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentRecommandationsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentRecommandationsComponent, selectors: [["app-student-recommandations"]], standalone: false, decls: 33, vars: 7, consts: [[1, "sr-head"], [1, "sr-title"], [1, "sr-lead"], ["appearance", "outlined", 1, "sr-filters"], [1, "sr-filters__row"], ["appearance", "outline", 1, "sr-field"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "sr-muted"], [1, "sr-alert"], [1, "sr-section"], [1, "sr-h2"], [1, "sr-grid"], [1, "sr-card"], [1, "sr-card", 3, "click"], [1, "sr-pill"], [1, "sr-pill", "sr-pill--2"]], template: function StudentRecommandationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Recommandations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Suggestions de modules selon le niveau et la cat\xE9gorie (API Spring).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-card", 3)(6, "div", 4)(7, "mat-form-field", 5)(8, "mat-label");
      \u0275\u0275text(9, "Niveau (modules)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRecommandationsComponent_Template_input_ngModelChange_10_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.niveau, $event) || (ctx.niveau = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "mat-form-field", 5)(12, "mat-label");
      \u0275\u0275text(13, "Cat\xE9gorie (modules)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "input", 6);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRecommandationsComponent_Template_input_ngModelChange_14_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categorie, $event) || (ctx.categorie = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function StudentRecommandationsComponent_Template_button_click_15_listener() {
        return ctx.load();
      });
      \u0275\u0275text(16, "Actualiser");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(17, StudentRecommandationsComponent_Conditional_17_Template, 2, 0, "p", 8);
      \u0275\u0275conditionalCreate(18, StudentRecommandationsComponent_Conditional_18_Template, 2, 1, "p", 9);
      \u0275\u0275elementStart(19, "section", 10)(20, "h2", 11);
      \u0275\u0275text(21, "Modules \u2014 m\xEAme niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 12);
      \u0275\u0275repeaterCreate(23, StudentRecommandationsComponent_For_24_Template, 7, 3, "article", 13, _forTrack016);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(25, StudentRecommandationsComponent_Conditional_25_Template, 2, 0, "p", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "section", 10)(27, "h2", 11);
      \u0275\u0275text(28, "Modules \u2014 m\xEAme cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 12);
      \u0275\u0275repeaterCreate(30, StudentRecommandationsComponent_For_31_Template, 7, 3, "article", 13, _forTrack016);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(32, StudentRecommandationsComponent_Conditional_32_Template, 2, 0, "p", 8);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275twoWayProperty("ngModel", ctx.niveau);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.categorie);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 17 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 18 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.modulesNiveau());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.modulesNiveau().length && !ctx.loading() ? 25 : -1);
      \u0275\u0275advance(5);
      \u0275\u0275repeater(ctx.modulesCat());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(!ctx.modulesCat().length && !ctx.loading() ? 32 : -1);
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatCard, MatFormField, MatLabel, MatInput], styles: ["\n\n.sr-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.sr-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.sr-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  max-width: 60ch;\n}\n.sr-filters[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1rem 1.25rem !important;\n  border-radius: 16px !important;\n}\n.sr-filters__row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1rem;\n  align-items: flex-start;\n}\n.sr-field[_ngcontent-%COMP%] {\n  flex: 1 1 180px;\n  min-width: 160px;\n}\n.sr-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sr-alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.sr-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.sr-h2[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #312e81;\n}\n.sr-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.sr-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem;\n  border-radius: 14px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.sr-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.15);\n}\n.sr-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sr-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.65rem;\n  font-size: 0.88rem;\n  color: #64748b;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sr-pill[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n  background: #eef2ff;\n  color: #4338ca;\n}\n.sr-pill--2[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n/*# sourceMappingURL=student-recommandations.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentRecommandationsComponent, [{
    type: Component,
    args: [{ selector: "app-student-recommandations", standalone: false, template: '<section class="sr-head">\r\n  <h1 class="sr-title">Recommandations</h1>\r\n  <p class="sr-lead">Suggestions de modules selon le niveau et la cat\xE9gorie (API Spring).</p>\r\n</section>\r\n\r\n<mat-card class="sr-filters" appearance="outlined">\r\n  <div class="sr-filters__row">\r\n    <mat-form-field appearance="outline" class="sr-field">\r\n      <mat-label>Niveau (modules)</mat-label>\r\n      <input matInput [(ngModel)]="niveau" />\r\n    </mat-form-field>\r\n    <mat-form-field appearance="outline" class="sr-field">\r\n      <mat-label>Cat\xE9gorie (modules)</mat-label>\r\n      <input matInput [(ngModel)]="categorie" />\r\n    </mat-form-field>\r\n    <button mat-flat-button color="primary" type="button" (click)="load()" [disabled]="loading()">Actualiser</button>\r\n  </div>\r\n</mat-card>\r\n\r\n@if (loading()) {\r\n  <p class="sr-muted">Chargement\u2026</p>\r\n}\r\n@if (error()) {\r\n  <p class="sr-alert">{{ error() }}</p>\r\n}\r\n\r\n<section class="sr-section">\r\n  <h2 class="sr-h2">Modules \u2014 m\xEAme niveau</h2>\r\n  <div class="sr-grid">\r\n    @for (m of modulesNiveau(); track m.id ?? $index) {\r\n      <article class="sr-card" (click)="openModule(m)">\r\n        <h3>{{ m.titre }}</h3>\r\n        <p>{{ m.description }}</p>\r\n        <span class="sr-pill">{{ m.niveau }}</span>\r\n      </article>\r\n    }\r\n  </div>\r\n  @if (!modulesNiveau().length && !loading()) {\r\n    <p class="sr-muted">Aucun r\xE9sultat pour ce niveau.</p>\r\n  }\r\n</section>\r\n\r\n<section class="sr-section">\r\n  <h2 class="sr-h2">Modules \u2014 m\xEAme cat\xE9gorie</h2>\r\n  <div class="sr-grid">\r\n    @for (m of modulesCat(); track m.id ?? $index) {\r\n      <article class="sr-card" (click)="openModule(m)">\r\n        <h3>{{ m.titre }}</h3>\r\n        <p>{{ m.description }}</p>\r\n        <span class="sr-pill sr-pill--2">{{ m.categorie }}</span>\r\n      </article>\r\n    }\r\n  </div>\r\n  @if (!modulesCat().length && !loading()) {\r\n    <p class="sr-muted">Aucun r\xE9sultat pour cette cat\xE9gorie.</p>\r\n  }\r\n</section>\r\n', styles: ["/* src/app/pages/student/student-recommandations/student-recommandations.component.css */\n.sr-head {\n  margin-bottom: 1.25rem;\n}\n.sr-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.sr-lead {\n  margin: 0;\n  color: #64748b;\n  max-width: 60ch;\n}\n.sr-filters {\n  margin-bottom: 1.5rem;\n  padding: 1rem 1.25rem !important;\n  border-radius: 16px !important;\n}\n.sr-filters__row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem 1rem;\n  align-items: flex-start;\n}\n.sr-field {\n  flex: 1 1 180px;\n  min-width: 160px;\n}\n.sr-muted {\n  color: #64748b;\n}\n.sr-alert {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.sr-section {\n  margin-bottom: 2rem;\n}\n.sr-h2 {\n  margin: 0 0 1rem;\n  font-size: 1.1rem;\n  font-weight: 800;\n  color: #312e81;\n}\n.sr-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 1rem;\n}\n.sr-card {\n  padding: 1rem 1.1rem;\n  border-radius: 14px;\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 4px 14px rgba(15, 23, 42, 0.06);\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n}\n.sr-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.15);\n}\n.sr-card h3 {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sr-card p {\n  margin: 0 0 0.65rem;\n  font-size: 0.88rem;\n  color: #64748b;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.sr-pill {\n  display: inline-block;\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.2rem 0.55rem;\n  border-radius: 999px;\n  background: #eef2ff;\n  color: #4338ca;\n}\n.sr-pill--2 {\n  background: #ecfdf5;\n  color: #047857;\n}\n/*# sourceMappingURL=student-recommandations.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentRecommandationsComponent, { className: "StudentRecommandationsComponent", filePath: "src/app/pages/student/student-recommandations/student-recommandations.component.ts", lineNumber: 25 });
})();

// src/app/pages/student/student-recherche/student-recherche.component.ts
var _forTrack017 = ($index, $item) => $item.id ?? $index;
function StudentRechercheComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errM());
  }
}
function StudentRechercheComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentRechercheComponent_For_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 25);
    \u0275\u0275listener("click", function StudentRechercheComponent_For_27_Template_mat_card_click_0_listener() {
      const m_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openModule(m_r3));
    });
    \u0275\u0275elementStart(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", m_r3.niveau, " \xB7 ", m_r3.categorie);
  }
}
function StudentRechercheComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errC());
  }
}
function StudentRechercheComponent_Conditional_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentRechercheComponent_For_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 24)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 26);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 27);
    \u0275\u0275listener("click", function StudentRechercheComponent_For_63_Template_button_click_7_listener() {
      const c_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.openCours(c_r5));
    });
    \u0275\u0275text(8, "Ouvrir");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r5.titre);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (c_r5.contenu || "").slice(0, 140), "\u2026");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", c_r5.typeContenu, " \xB7 ordre ", c_r5.ordreCours);
  }
}
var HTTP_TIMEOUT_MS20 = 25e3;
var StudentRechercheComponent = class _StudentRechercheComponent {
  recherche = inject(RechercheService);
  router = inject(Router);
  tab = 0;
  motCle = "";
  niveau = "";
  categorie = "";
  modules = signal([], ...ngDevMode ? [{ debugName: "modules" }] : []);
  loadingM = signal(false, ...ngDevMode ? [{ debugName: "loadingM" }] : []);
  errM = signal(null, ...ngDevMode ? [{ debugName: "errM" }] : []);
  titre = "";
  typeContenu = "";
  publieFiltre = "";
  cours = signal([], ...ngDevMode ? [{ debugName: "cours" }] : []);
  loadingC = signal(false, ...ngDevMode ? [{ debugName: "loadingC" }] : []);
  errC = signal(null, ...ngDevMode ? [{ debugName: "errC" }] : []);
  typeSeul = "";
  searchModules() {
    this.loadingM.set(true);
    this.errM.set(null);
    this.recherche.searchModules({
      motCle: this.motCle,
      niveau: this.niveau,
      categorie: this.categorie
    }).pipe(timeout(HTTP_TIMEOUT_MS20), catchError(() => {
      this.errM.set("\xC9chec de la recherche modules (r\xE9seau ou d\xE9lai).");
      return of([]);
    }), finalize(() => this.loadingM.set(false))).subscribe({
      next: (data) => this.modules.set(data)
    });
  }
  searchCours() {
    let publie;
    if (this.publieFiltre === "oui") {
      publie = true;
    } else if (this.publieFiltre === "non") {
      publie = false;
    } else {
      publie = void 0;
    }
    this.loadingC.set(true);
    this.errC.set(null);
    this.recherche.searchCours({
      titre: this.titre,
      typeContenu: this.typeContenu,
      publie
    }).pipe(timeout(HTTP_TIMEOUT_MS20), catchError(() => {
      this.errC.set("\xC9chec de la recherche cours (r\xE9seau ou d\xE9lai).");
      return of([]);
    }), finalize(() => this.loadingC.set(false))).subscribe({
      next: (data) => this.cours.set(data)
    });
  }
  searchParType() {
    const t = this.typeSeul.trim();
    if (!t) {
      return;
    }
    this.loadingC.set(true);
    this.errC.set(null);
    this.recherche.searchCoursParTypeSeul(t).pipe(timeout(HTTP_TIMEOUT_MS20), catchError(() => {
      this.errC.set("\xC9chec recherche par type (r\xE9seau ou d\xE9lai).");
      return of([]);
    }), finalize(() => this.loadingC.set(false))).subscribe({
      next: (data) => this.cours.set(data)
    });
  }
  openModule(m) {
    if (m.id != null) {
      void this.router.navigate(["/student/modules", m.id, "cours"]);
    }
  }
  openCours(c) {
    if (c.id != null) {
      void this.router.navigate(["/cours", c.id]);
    }
  }
  static \u0275fac = function StudentRechercheComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentRechercheComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentRechercheComponent, selectors: [["app-student-recherche"]], standalone: false, decls: 64, vars: 15, consts: [[1, "srec-head"], [1, "srec-title"], [1, "srec-lead"], ["animationDuration", "200ms", 1, "srec-tabs", 3, "selectedIndexChange", "selectedIndex"], ["label", "Modules"], [1, "srec-panel"], [1, "srec-fields"], ["appearance", "outline"], ["matInput", "", 3, "ngModelChange", "ngModel"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], [1, "srec-alert"], [1, "srec-muted"], [1, "srec-results"], ["appearance", "outlined", 1, "srec-card"], ["label", "Cours"], ["matInput", "", "placeholder", "VIDEO, PDF\u2026", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["value", ""], ["value", "oui"], ["value", "non"], [1, "srec-row"], [1, "srec-typeonly"], ["appearance", "outline", 1, "srec-grow"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["appearance", "outlined", 1, "srec-card", "srec-card--cours"], ["appearance", "outlined", 1, "srec-card", 3, "click"], [1, "srec-meta"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentRechercheComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Recherche avanc\xE9e");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Filtrez les modules et les cours selon vos crit\xE8res (API).");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "mat-tab-group", 3);
      \u0275\u0275twoWayListener("selectedIndexChange", function StudentRechercheComponent_Template_mat_tab_group_selectedIndexChange_5_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.tab, $event) || (ctx.tab = $event);
        return $event;
      });
      \u0275\u0275elementStart(6, "mat-tab", 4)(7, "div", 5)(8, "div", 6)(9, "mat-form-field", 7)(10, "mat-label");
      \u0275\u0275text(11, "Mot-cl\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_input_ngModelChange_12_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.motCle, $event) || (ctx.motCle = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "mat-form-field", 7)(14, "mat-label");
      \u0275\u0275text(15, "Niveau");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_input_ngModelChange_16_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.niveau, $event) || (ctx.niveau = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "mat-form-field", 7)(18, "mat-label");
      \u0275\u0275text(19, "Cat\xE9gorie");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_input_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.categorie, $event) || (ctx.categorie = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(21, "button", 9);
      \u0275\u0275listener("click", function StudentRechercheComponent_Template_button_click_21_listener() {
        return ctx.searchModules();
      });
      \u0275\u0275text(22, " Rechercher ");
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(23, StudentRechercheComponent_Conditional_23_Template, 2, 1, "p", 10);
      \u0275\u0275conditionalCreate(24, StudentRechercheComponent_Conditional_24_Template, 2, 0, "p", 11);
      \u0275\u0275elementStart(25, "div", 12);
      \u0275\u0275repeaterCreate(26, StudentRechercheComponent_For_27_Template, 7, 4, "mat-card", 13, _forTrack017);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(28, "mat-tab", 14)(29, "div", 5)(30, "div", 6)(31, "mat-form-field", 7)(32, "mat-label");
      \u0275\u0275text(33, "Titre");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_input_ngModelChange_34_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.titre, $event) || (ctx.titre = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "mat-form-field", 7)(36, "mat-label");
      \u0275\u0275text(37, "Type de contenu");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "input", 15);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_input_ngModelChange_38_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.typeContenu, $event) || (ctx.typeContenu = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "mat-form-field", 7)(40, "mat-label");
      \u0275\u0275text(41, "Publi\xE9");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "mat-select", 16);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_mat_select_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.publieFiltre, $event) || (ctx.publieFiltre = $event);
        return $event;
      });
      \u0275\u0275elementStart(43, "mat-option", 17);
      \u0275\u0275text(44, "Tous");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-option", 18);
      \u0275\u0275text(46, "Oui");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "mat-option", 19);
      \u0275\u0275text(48, "Non");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(49, "div", 20)(50, "button", 9);
      \u0275\u0275listener("click", function StudentRechercheComponent_Template_button_click_50_listener() {
        return ctx.searchCours();
      });
      \u0275\u0275text(51, " Rechercher ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 21)(53, "mat-form-field", 22)(54, "mat-label");
      \u0275\u0275text(55, "Type seul (ex. PDF)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "input", 8);
      \u0275\u0275twoWayListener("ngModelChange", function StudentRechercheComponent_Template_input_ngModelChange_56_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.typeSeul, $event) || (ctx.typeSeul = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(57, "button", 23);
      \u0275\u0275listener("click", function StudentRechercheComponent_Template_button_click_57_listener() {
        return ctx.searchParType();
      });
      \u0275\u0275text(58, " Par type ");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(59, StudentRechercheComponent_Conditional_59_Template, 2, 1, "p", 10);
      \u0275\u0275conditionalCreate(60, StudentRechercheComponent_Conditional_60_Template, 2, 0, "p", 11);
      \u0275\u0275elementStart(61, "div", 12);
      \u0275\u0275repeaterCreate(62, StudentRechercheComponent_For_63_Template, 9, 4, "mat-card", 24, _forTrack017);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("selectedIndex", ctx.tab);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.motCle);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.niveau);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.categorie);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loadingM());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errM() ? 23 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingM() ? 24 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.modules());
      \u0275\u0275advance(8);
      \u0275\u0275twoWayProperty("ngModel", ctx.titre);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.typeContenu);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.publieFiltre);
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.loadingC());
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.typeSeul);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.loadingC());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.errC() ? 59 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.loadingC() ? 60 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.cours());
    }
  }, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatButton, MatCard, MatFormField, MatLabel, MatInput, MatSelect, MatOption, MatTab, MatTabGroup], styles: ["\n\n.srec-head[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.srec-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.srec-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.srec-tabs[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 0.5rem 0.5rem 1rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);\n}\n.srec-panel[_ngcontent-%COMP%] {\n  padding: 1rem 0.25rem 0;\n}\n.srec-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.srec-row[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.srec-typeonly[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.srec-grow[_ngcontent-%COMP%] {\n  flex: 1 1 220px;\n  min-width: 0;\n}\n.srec-alert[_ngcontent-%COMP%] {\n  color: #b91c1c;\n  background: #fef2f2;\n  padding: 0.65rem 0.85rem;\n  border-radius: 10px;\n}\n.srec-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.srec-results[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.srec-card[_ngcontent-%COMP%] {\n  padding: 1rem 1.1rem !important;\n  border-radius: 14px !important;\n  cursor: pointer;\n  transition: box-shadow 0.15s ease;\n}\n.srec-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.12) !important;\n}\n.srec-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.srec-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 0.88rem;\n  color: #64748b;\n}\n.srec-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #475569;\n}\n.srec-card--cours[_ngcontent-%COMP%] {\n  cursor: default;\n}\n.srec-card--cours[_ngcontent-%COMP%]:hover {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=student-recherche.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentRechercheComponent, [{
    type: Component,
    args: [{ selector: "app-student-recherche", standalone: false, template: `<section class="srec-head">\r
  <h1 class="srec-title">Recherche avanc\xE9e</h1>\r
  <p class="srec-lead">Filtrez les modules et les cours selon vos crit\xE8res (API).</p>\r
</section>\r
\r
<mat-tab-group [(selectedIndex)]="tab" class="srec-tabs" animationDuration="200ms">\r
  <mat-tab label="Modules">\r
    <div class="srec-panel">\r
      <div class="srec-fields">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Mot-cl\xE9</mat-label>\r
          <input matInput [(ngModel)]="motCle" />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Niveau</mat-label>\r
          <input matInput [(ngModel)]="niveau" />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Cat\xE9gorie</mat-label>\r
          <input matInput [(ngModel)]="categorie" />\r
        </mat-form-field>\r
      </div>\r
      <button mat-flat-button color="primary" type="button" (click)="searchModules()" [disabled]="loadingM()">\r
        Rechercher\r
      </button>\r
      @if (errM()) {\r
        <p class="srec-alert">{{ errM() }}</p>\r
      }\r
      @if (loadingM()) {\r
        <p class="srec-muted">Chargement\u2026</p>\r
      }\r
      <div class="srec-results">\r
        @for (m of modules(); track m.id ?? $index) {\r
          <mat-card class="srec-card" appearance="outlined" (click)="openModule(m)">\r
            <h3>{{ m.titre }}</h3>\r
            <p>{{ m.description }}</p>\r
            <div class="srec-meta">{{ m.niveau }} \xB7 {{ m.categorie }}</div>\r
          </mat-card>\r
        }\r
      </div>\r
    </div>\r
  </mat-tab>\r
\r
  <mat-tab label="Cours">\r
    <div class="srec-panel">\r
      <div class="srec-fields">\r
        <mat-form-field appearance="outline">\r
          <mat-label>Titre</mat-label>\r
          <input matInput [(ngModel)]="titre" />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Type de contenu</mat-label>\r
          <input matInput [(ngModel)]="typeContenu" placeholder="VIDEO, PDF\u2026" />\r
        </mat-form-field>\r
        <mat-form-field appearance="outline">\r
          <mat-label>Publi\xE9</mat-label>\r
          <mat-select [(ngModel)]="publieFiltre">\r
            <mat-option value="">Tous</mat-option>\r
            <mat-option value="oui">Oui</mat-option>\r
            <mat-option value="non">Non</mat-option>\r
          </mat-select>\r
        </mat-form-field>\r
      </div>\r
      <div class="srec-row">\r
        <button mat-flat-button color="primary" type="button" (click)="searchCours()" [disabled]="loadingC()">\r
          Rechercher\r
        </button>\r
      </div>\r
      <div class="srec-typeonly">\r
        <mat-form-field appearance="outline" class="srec-grow">\r
          <mat-label>Type seul (ex. PDF)</mat-label>\r
          <input matInput [(ngModel)]="typeSeul" />\r
        </mat-form-field>\r
        <button mat-stroked-button color="primary" type="button" (click)="searchParType()" [disabled]="loadingC()">\r
          Par type\r
        </button>\r
      </div>\r
      @if (errC()) {\r
        <p class="srec-alert">{{ errC() }}</p>\r
      }\r
      @if (loadingC()) {\r
        <p class="srec-muted">Chargement\u2026</p>\r
      }\r
      <div class="srec-results">\r
        @for (c of cours(); track c.id ?? $index) {\r
          <mat-card class="srec-card srec-card--cours" appearance="outlined">\r
            <h3>{{ c.titre }}</h3>\r
            <p>{{ (c.contenu || '').slice(0, 140) }}\u2026</p>\r
            <div class="srec-meta">{{ c.typeContenu }} \xB7 ordre {{ c.ordreCours }}</div>\r
            <button mat-stroked-button color="primary" type="button" (click)="openCours(c)">Ouvrir</button>\r
          </mat-card>\r
        }\r
      </div>\r
    </div>\r
  </mat-tab>\r
</mat-tab-group>\r
`, styles: ["/* src/app/pages/student/student-recherche/student-recherche.component.css */\n.srec-head {\n  margin-bottom: 1rem;\n}\n.srec-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.srec-lead {\n  margin: 0;\n  color: #64748b;\n}\n.srec-tabs {\n  background: #fff;\n  border-radius: 16px;\n  padding: 0.5rem 0.5rem 1rem;\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 8px 30px rgba(15, 23, 42, 0.06);\n}\n.srec-panel {\n  padding: 1rem 0.25rem 0;\n}\n.srec-fields {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.srec-row {\n  margin-bottom: 1rem;\n}\n.srec-typeonly {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: flex-start;\n  margin-bottom: 1rem;\n}\n.srec-grow {\n  flex: 1 1 220px;\n  min-width: 0;\n}\n.srec-alert {\n  color: #b91c1c;\n  background: #fef2f2;\n  padding: 0.65rem 0.85rem;\n  border-radius: 10px;\n}\n.srec-muted {\n  color: #64748b;\n}\n.srec-results {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n.srec-card {\n  padding: 1rem 1.1rem !important;\n  border-radius: 14px !important;\n  cursor: pointer;\n  transition: box-shadow 0.15s ease;\n}\n.srec-card:hover {\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.12) !important;\n}\n.srec-card h3 {\n  margin: 0 0 0.35rem;\n  font-size: 1rem;\n  font-weight: 800;\n}\n.srec-card p {\n  margin: 0 0 0.5rem;\n  font-size: 0.88rem;\n  color: #64748b;\n}\n.srec-meta {\n  font-size: 0.8rem;\n  color: #475569;\n}\n.srec-card--cours {\n  cursor: default;\n}\n.srec-card--cours:hover {\n  box-shadow: none !important;\n}\n/*# sourceMappingURL=student-recherche.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentRechercheComponent, { className: "StudentRechercheComponent", filePath: "src/app/pages/student/student-recherche/student-recherche.component.ts", lineNumber: 17 });
})();

// src/app/pages/student/student-statistiques/student-statistiques.component.ts
function StudentStatistiquesComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentStatistiquesComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentStatistiquesComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 12);
    \u0275\u0275text(1, "Chiffres plateforme");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 13)(3, "mat-card", 14)(4, "span", 15);
    \u0275\u0275text(5, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-progress-bar", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-card", 14)(10, "span", 15);
    \u0275\u0275text(11, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "strong", 16);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "mat-progress-bar", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-card", 14)(16, "span", 15);
    \u0275\u0275text(17, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "strong", 16);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "mat-progress-bar", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.nModules());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nModules()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.nCours());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nCours()));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.nQuizzes());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nQuizzes()));
  }
}
var HTTP_TIMEOUT_MS21 = 25e3;
var StudentStatistiquesComponent = class _StudentStatistiquesComponent {
  statsApi = inject(StatistiqueService);
  router = inject(Router);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  global = signal(null, ...ngDevMode ? [{ debugName: "global" }] : []);
  /** Indicateurs locaux (mock UX — non persistés). */
  progression = 72;
  dernierScore = 85;
  constructor() {
    merge(of(null), this.router.events.pipe(filter((e) => e instanceof NavigationEnd))).pipe(takeUntilDestroyed(), map(() => this.router.url.split("?")[0].replace(/\/$/, "")), distinctUntilChanged(), filter((url) => /\/student\/statistiques$/.test(url))).subscribe(() => this.load());
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    forkJoin({
      g: this.statsApi.getStatistiquesGlobales().pipe(catchError(() => of(null)))
    }).pipe(timeout(HTTP_TIMEOUT_MS21), catchError(() => {
      this.error.set("Impossible de charger les statistiques (r\xE9seau, d\xE9lai ou serveur).");
      return of({ g: null });
    }), finalize(() => this.loading.set(false))).subscribe({
      next: ({ g }) => {
        this.global.set(g);
      }
    });
  }
  nModules() {
    const g = this.global();
    return g?.totalModules ?? g?.nombreModules ?? 0;
  }
  nCours() {
    const g = this.global();
    return g?.totalCours ?? g?.nombreCours ?? 0;
  }
  nQuizzes() {
    const g = this.global();
    return g?.totalQuizzes ?? g?.nombreQuizzes ?? 0;
  }
  barPct(value) {
    const max = Math.max(1, this.nModules(), this.nCours(), this.nQuizzes(), 1);
    return Math.min(100, value / max * 100);
  }
  static \u0275fac = function StudentStatistiquesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentStatistiquesComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentStatistiquesComponent, selectors: [["app-student-statistiques"]], standalone: false, decls: 28, vars: 6, consts: [[1, "sst-head"], [1, "sst-title"], [1, "sst-lead"], [1, "sst-muted"], [1, "sst-alert"], [1, "sst-grid"], ["appearance", "outlined", 1, "sst-card", "sst-card--accent"], ["aria-hidden", "true", 1, "sst-ico"], [1, "sst-big"], ["mode", "determinate", 3, "value"], [1, "sst-hint"], ["appearance", "outlined", 1, "sst-card"], [1, "sst-h2"], [1, "sst-kpis"], ["appearance", "outlined", 1, "kpi"], [1, "kpi__label"], [1, "kpi__val"]], template: function StudentStatistiquesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "Statistiques");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Vue d\u2019ensemble de la plateforme (API) et indicateurs de d\xE9monstration.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, StudentStatistiquesComponent_Conditional_5_Template, 2, 0, "p", 3);
      \u0275\u0275conditionalCreate(6, StudentStatistiquesComponent_Conditional_6_Template, 2, 1, "p", 4);
      \u0275\u0275elementStart(7, "div", 5)(8, "mat-card", 6)(9, "span", 7);
      \u0275\u0275text(10, "\u{1F4C8}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "h2");
      \u0275\u0275text(12, "Progression (d\xE9mo)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14);
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "mat-progress-bar", 9);
      \u0275\u0275elementStart(16, "p", 10);
      \u0275\u0275text(17, "Valeur illustrative \u2014 \xE0 relier \xE0 ton suivi r\xE9el plus tard.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-card", 11)(19, "span", 7);
      \u0275\u0275text(20, "\u{1F3AF}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "h2");
      \u0275\u0275text(22, "Dernier score (d\xE9mo)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "p", 8);
      \u0275\u0275text(24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "p", 10);
      \u0275\u0275text(26, "Synchronis\xE9 visuellement avec ton dernier quiz soumis.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275conditionalCreate(27, StudentStatistiquesComponent_Conditional_27_Template, 21, 6);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(ctx.loading() ? 5 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 6 : -1);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate1("", ctx.progression, "%");
      \u0275\u0275advance();
      \u0275\u0275property("value", ctx.progression);
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate1("", ctx.dernierScore, "%");
      \u0275\u0275advance(3);
      \u0275\u0275conditional(ctx.global() && !ctx.loading() ? 27 : -1);
    }
  }, dependencies: [MatCard, MatProgressBar], styles: ["\n\n.sst-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.sst-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sst-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  max-width: 60ch;\n}\n.sst-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.sst-alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.sst-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.sst-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.35rem !important;\n  border-radius: 18px !important;\n  position: relative;\n  overflow: hidden;\n}\n.sst-card--accent[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      145deg,\n      #eef2ff 0%,\n      #fff 55%) !important;\n  border-color: #c7d2fe !important;\n}\n.sst-ico[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  display: block;\n  margin-bottom: 0.35rem;\n}\n.sst-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #312e81;\n}\n.sst-big[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 2.25rem;\n  font-weight: 800;\n  color: #4f46e5;\n  letter-spacing: -0.03em;\n}\n.sst-hint[_ngcontent-%COMP%] {\n  margin: 0.75rem 0 0;\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.sst-h2[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sst-kpis[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.kpi[_ngcontent-%COMP%] {\n  padding: 1.1rem 1.2rem !important;\n  border-radius: 14px !important;\n}\n.kpi__label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  margin-bottom: 0.35rem;\n}\n.kpi__val[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 0.65rem;\n}\n/*# sourceMappingURL=student-statistiques.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentStatistiquesComponent, [{
    type: Component,
    args: [{ selector: "app-student-statistiques", standalone: false, template: '<section class="sst-head">\r\n  <h1 class="sst-title">Statistiques</h1>\r\n  <p class="sst-lead">Vue d\u2019ensemble de la plateforme (API) et indicateurs de d\xE9monstration.</p>\r\n</section>\r\n\r\n@if (loading()) {\r\n  <p class="sst-muted">Chargement\u2026</p>\r\n}\r\n@if (error()) {\r\n  <p class="sst-alert">{{ error() }}</p>\r\n}\r\n\r\n<div class="sst-grid">\r\n  <mat-card class="sst-card sst-card--accent" appearance="outlined">\r\n    <span class="sst-ico" aria-hidden="true">\u{1F4C8}</span>\r\n    <h2>Progression (d\xE9mo)</h2>\r\n    <p class="sst-big">{{ progression }}%</p>\r\n    <mat-progress-bar mode="determinate" [value]="progression"></mat-progress-bar>\r\n    <p class="sst-hint">Valeur illustrative \u2014 \xE0 relier \xE0 ton suivi r\xE9el plus tard.</p>\r\n  </mat-card>\r\n\r\n  <mat-card class="sst-card" appearance="outlined">\r\n    <span class="sst-ico" aria-hidden="true">\u{1F3AF}</span>\r\n    <h2>Dernier score (d\xE9mo)</h2>\r\n    <p class="sst-big">{{ dernierScore }}%</p>\r\n    <p class="sst-hint">Synchronis\xE9 visuellement avec ton dernier quiz soumis.</p>\r\n  </mat-card>\r\n</div>\r\n\r\n@if (global() && !loading()) {\r\n  <h2 class="sst-h2">Chiffres plateforme</h2>\r\n  <div class="sst-kpis">\r\n    <mat-card class="kpi" appearance="outlined">\r\n      <span class="kpi__label">Modules</span>\r\n      <strong class="kpi__val">{{ nModules() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nModules())"></mat-progress-bar>\r\n    </mat-card>\r\n    <mat-card class="kpi" appearance="outlined">\r\n      <span class="kpi__label">Cours</span>\r\n      <strong class="kpi__val">{{ nCours() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nCours())"></mat-progress-bar>\r\n    </mat-card>\r\n    <mat-card class="kpi" appearance="outlined">\r\n      <span class="kpi__label">Quiz</span>\r\n      <strong class="kpi__val">{{ nQuizzes() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nQuizzes())"></mat-progress-bar>\r\n    </mat-card>\r\n  </div>\r\n}\r\n', styles: ["/* src/app/pages/student/student-statistiques/student-statistiques.component.css */\n.sst-head {\n  margin-bottom: 1.5rem;\n}\n.sst-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sst-lead {\n  margin: 0;\n  color: #64748b;\n  max-width: 60ch;\n}\n.sst-muted {\n  color: #64748b;\n}\n.sst-alert {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.sst-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.sst-card {\n  padding: 1.25rem 1.35rem !important;\n  border-radius: 18px !important;\n  position: relative;\n  overflow: hidden;\n}\n.sst-card--accent {\n  background:\n    linear-gradient(\n      145deg,\n      #eef2ff 0%,\n      #fff 55%) !important;\n  border-color: #c7d2fe !important;\n}\n.sst-ico {\n  font-size: 1.75rem;\n  display: block;\n  margin-bottom: 0.35rem;\n}\n.sst-card h2 {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 800;\n  color: #312e81;\n}\n.sst-big {\n  margin: 0 0 0.75rem;\n  font-size: 2.25rem;\n  font-weight: 800;\n  color: #4f46e5;\n  letter-spacing: -0.03em;\n}\n.sst-hint {\n  margin: 0.75rem 0 0;\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.45;\n}\n.sst-h2 {\n  margin: 0 0 1rem;\n  font-size: 1.15rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sst-kpis {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 1rem;\n}\n.kpi {\n  padding: 1.1rem 1.2rem !important;\n  border-radius: 14px !important;\n}\n.kpi__label {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  margin-bottom: 0.35rem;\n}\n.kpi__val {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 0.65rem;\n}\n/*# sourceMappingURL=student-statistiques.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentStatistiquesComponent, { className: "StudentStatistiquesComponent", filePath: "src/app/pages/student/student-statistiques/student-statistiques.component.ts", lineNumber: 17 });
})();

// src/app/pages/student/student-quiz-result/student-quiz-result.component.ts
function StudentQuizResultComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 3)(1, "p");
    \u0275\u0275text(2, "Aucun r\xE9sultat r\xE9cent. Passez un quiz depuis un cours pour voir votre score ici.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 5);
    \u0275\u0275listener("click", function StudentQuizResultComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backModules());
    });
    \u0275\u0275text(4, "Vers les modules");
    \u0275\u0275elementEnd()();
  }
}
function StudentQuizResultComponent_Conditional_6_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Bonnes r\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const s_r4 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.bonnes(s_r4.result));
  }
}
function StudentQuizResultComponent_Conditional_6_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "span", 12);
    \u0275\u0275text(2, "Mauvaises r\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const s_r4 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.mauvaises(s_r4.result));
  }
}
function StudentQuizResultComponent_Conditional_6_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 15);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const s_r4 = \u0275\u0275readContextLet(0);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r1.progressValue(s_r4.result));
  }
}
function StudentQuizResultComponent_Conditional_6_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const s_r4 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r4.result.message);
  }
}
function StudentQuizResultComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "mat-card", 4)(2, "div", 6)(3, "div")(4, "p", 7);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h2", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 10)(11, "div", 11)(12, "span", 12);
    \u0275\u0275text(13, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong", 13);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 11)(17, "span", 12);
    \u0275\u0275text(18, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "strong", 14);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, StudentQuizResultComponent_Conditional_6_Conditional_21_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(22, StudentQuizResultComponent_Conditional_6_Conditional_22_Template, 5, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, StudentQuizResultComponent_Conditional_6_Conditional_23_Template, 1, 1, "mat-progress-bar", 15);
    \u0275\u0275conditionalCreate(24, StudentQuizResultComponent_Conditional_6_Conditional_24_Template, 2, 1, "p", 16);
    \u0275\u0275element(25, "app-student-certificat-celebration", 17);
    \u0275\u0275elementStart(26, "div", 18)(27, "button", 19);
    \u0275\u0275listener("click", function StudentQuizResultComponent_Conditional_6_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.backModules());
    });
    \u0275\u0275text(28, "Retour aux modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 20);
    \u0275\u0275listener("click", function StudentQuizResultComponent_Conditional_6_Template_button_click_29_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clear());
    });
    \u0275\u0275text(30, "Effacer l\u2019affichage");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const s_r5 = \u0275\u0275storeLet(ctx_r1.snapshot());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Quiz #", s_r5.quizId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r5.quizTitre || "\xC9valuation");
    \u0275\u0275advance();
    \u0275\u0275classProp("sqr-badge--ok", ctx_r1.valide(s_r5.result))("sqr-badge--ko", !ctx_r1.valide(s_r5.result));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.valide(s_r5.result) ? "Valid\xE9" : "Non valid\xE9", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.scoreDisplay(s_r5.result));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.pourcentageDisplay(s_r5.result));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.bonnes(s_r5.result) != null ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.mauvaises(s_r5.result) != null ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r5.result.pourcentage != null ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(s_r5.result.message ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("result", s_r5.result);
  }
}
var StudentQuizResultComponent = class _StudentQuizResultComponent {
  store = inject(QuizResultStoreService);
  router = inject(Router);
  snapshot = this.store.snapshot;
  valide(r) {
    return !!(r.valide ?? r.reussi);
  }
  pourcentageDisplay(r) {
    const p = r.pourcentage;
    if (p == null) {
      return "\u2014";
    }
    return `${Math.round(p <= 1 ? p * 100 : p)} %`;
  }
  scoreDisplay(r) {
    const s = r.score ?? r.scoreObtenu;
    const m = r.scoreMax;
    if (s != null && m != null) {
      return `${s} / ${m}`;
    }
    if (s != null) {
      return String(s);
    }
    return "\u2014";
  }
  progressValue(r) {
    const p = r.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return 0;
    }
    const v = p <= 1 ? p * 100 : p;
    return Math.max(0, Math.min(100, v));
  }
  bonnes(r) {
    return r.bonnesReponses ?? r.nombreBonnesReponses;
  }
  mauvaises(r) {
    return r.mauvaisesReponses ?? r.nombreMauvaisesReponses;
  }
  backModules() {
    void this.router.navigate(["/student/modules"]);
  }
  clear() {
    this.store.clear();
  }
  static \u0275fac = function StudentQuizResultComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentQuizResultComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentQuizResultComponent, selectors: [["app-student-quiz-result"]], standalone: false, decls: 7, vars: 1, consts: [[1, "sqr-head"], [1, "sqr-title"], [1, "sqr-lead"], ["appearance", "outlined", 1, "sqr-empty"], ["appearance", "outlined", 1, "sqr-hero"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"], [1, "sqr-hero__top"], [1, "sqr-kicker"], [1, "sqr-quiz-title"], [1, "sqr-badge"], [1, "sqr-stats"], [1, "sqr-stat"], [1, "sqr-stat__l"], [1, "sqr-stat__v"], [1, "sqr-stat__v", "sqr-stat__v--pct"], ["mode", "determinate", 3, "value"], [1, "sqr-msg"], [3, "result"], [1, "sqr-actions"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-button", "", "type", "button", "color", "warn", 3, "click"]], template: function StudentQuizResultComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "h1", 1);
      \u0275\u0275text(2, "R\xE9sultat du quiz");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p", 2);
      \u0275\u0275text(4, "Affichage du dernier score soumis dans cette session.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(5, StudentQuizResultComponent_Conditional_5_Template, 5, 0, "mat-card", 3)(6, StudentQuizResultComponent_Conditional_6_Template, 31, 15, "mat-card", 4);
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275conditional(!ctx.snapshot() ? 5 : 6);
    }
  }, dependencies: [MatButton, MatCard, MatProgressBar, StudentCertificatCelebrationComponent], styles: ["\n\n.sqr-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.sqr-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqr-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n}\n.sqr-empty[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem !important;\n  text-align: center;\n  border-radius: 18px !important;\n}\n.sqr-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #64748b;\n}\n.sqr-hero[_ngcontent-%COMP%] {\n  padding: 1.75rem 1.5rem !important;\n  border-radius: 20px !important;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f8fafc 100%) !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08) !important;\n}\n.sqr-hero__top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.sqr-kicker[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #6366f1;\n}\n.sqr-quiz-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqr-badge[_ngcontent-%COMP%] {\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.sqr-badge--ok[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.sqr-badge--ko[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.sqr-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.sqr-stat__l[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.sqr-stat__v[_ngcontent-%COMP%] {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqr-stat__v--pct[_ngcontent-%COMP%] {\n  color: #4f46e5;\n}\n.sqr-msg[_ngcontent-%COMP%] {\n  margin: 1rem 0 0;\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.95rem;\n}\n.sqr-actions[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=student-quiz-result.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentQuizResultComponent, [{
    type: Component,
    args: [{ selector: "app-student-quiz-result", standalone: false, template: `<section class="sqr-head">\r
  <h1 class="sqr-title">R\xE9sultat du quiz</h1>\r
  <p class="sqr-lead">Affichage du dernier score soumis dans cette session.</p>\r
</section>\r
\r
@if (!snapshot()) {\r
  <mat-card class="sqr-empty" appearance="outlined">\r
    <p>Aucun r\xE9sultat r\xE9cent. Passez un quiz depuis un cours pour voir votre score ici.</p>\r
    <button mat-flat-button color="primary" type="button" (click)="backModules()">Vers les modules</button>\r
  </mat-card>\r
} @else {\r
  @let s = snapshot()!;\r
  <mat-card class="sqr-hero" appearance="outlined">\r
    <div class="sqr-hero__top">\r
      <div>\r
        <p class="sqr-kicker">Quiz #{{ s.quizId }}</p>\r
        <h2 class="sqr-quiz-title">{{ s.quizTitre || '\xC9valuation' }}</h2>\r
      </div>\r
      <span class="sqr-badge" [class.sqr-badge--ok]="valide(s.result)" [class.sqr-badge--ko]="!valide(s.result)">\r
        {{ valide(s.result) ? 'Valid\xE9' : 'Non valid\xE9' }}\r
      </span>\r
    </div>\r
\r
    <div class="sqr-stats">\r
      <div class="sqr-stat">\r
        <span class="sqr-stat__l">Score</span>\r
        <strong class="sqr-stat__v">{{ scoreDisplay(s.result) }}</strong>\r
      </div>\r
      <div class="sqr-stat">\r
        <span class="sqr-stat__l">Pourcentage</span>\r
        <strong class="sqr-stat__v sqr-stat__v--pct">{{ pourcentageDisplay(s.result) }}</strong>\r
      </div>\r
      @if (bonnes(s.result) != null) {\r
        <div class="sqr-stat">\r
          <span class="sqr-stat__l">Bonnes r\xE9ponses</span>\r
          <strong class="sqr-stat__v">{{ bonnes(s.result) }}</strong>\r
        </div>\r
      }\r
      @if (mauvaises(s.result) != null) {\r
        <div class="sqr-stat">\r
          <span class="sqr-stat__l">Mauvaises r\xE9ponses</span>\r
          <strong class="sqr-stat__v">{{ mauvaises(s.result) }}</strong>\r
        </div>\r
      }\r
    </div>\r
\r
    @if (s.result.pourcentage != null) {\r
      <mat-progress-bar mode="determinate" [value]="progressValue(s.result)"></mat-progress-bar>\r
    }\r
\r
    @if (s.result.message) {\r
      <p class="sqr-msg">{{ s.result.message }}</p>\r
    }\r
\r
    <app-student-certificat-celebration [result]="s.result" />\r
\r
    <div class="sqr-actions">\r
      <button mat-stroked-button type="button" (click)="backModules()">Retour aux modules</button>\r
      <button mat-button type="button" color="warn" (click)="clear()">Effacer l\u2019affichage</button>\r
    </div>\r
  </mat-card>\r
}\r
`, styles: ["/* src/app/pages/student/student-quiz-result/student-quiz-result.component.css */\n.sqr-head {\n  margin-bottom: 1.25rem;\n}\n.sqr-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.75rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqr-lead {\n  margin: 0;\n  color: #64748b;\n}\n.sqr-empty {\n  padding: 2rem 1.5rem !important;\n  text-align: center;\n  border-radius: 18px !important;\n}\n.sqr-empty p {\n  margin: 0 0 1rem;\n  color: #64748b;\n}\n.sqr-hero {\n  padding: 1.75rem 1.5rem !important;\n  border-radius: 20px !important;\n  background:\n    linear-gradient(\n      180deg,\n      #fff 0%,\n      #f8fafc 100%) !important;\n  border-color: #e2e8f0 !important;\n  box-shadow: 0 20px 50px rgba(15, 23, 42, 0.08) !important;\n}\n.sqr-hero__top {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.sqr-kicker {\n  margin: 0 0 0.25rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #6366f1;\n}\n.sqr-quiz-title {\n  margin: 0;\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqr-badge {\n  padding: 0.35rem 0.85rem;\n  border-radius: 999px;\n  font-size: 0.8rem;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.sqr-badge--ok {\n  background: #ecfdf5;\n  color: #047857;\n}\n.sqr-badge--ko {\n  background: #fef2f2;\n  color: #b91c1c;\n}\n.sqr-stats {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n.sqr-stat__l {\n  display: block;\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.sqr-stat__v {\n  font-size: 1.35rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.sqr-stat__v--pct {\n  color: #4f46e5;\n}\n.sqr-msg {\n  margin: 1rem 0 0;\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #f1f5f9;\n  color: #334155;\n  font-size: 0.95rem;\n}\n.sqr-actions {\n  margin-top: 1.25rem;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n/*# sourceMappingURL=student-quiz-result.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentQuizResultComponent, { className: "StudentQuizResultComponent", filePath: "src/app/pages/student/student-quiz-result/student-quiz-result.component.ts", lineNumber: 12 });
})();

// src/app/pages/student/student-certificats-list/student-certificats-list.component.ts
var _forTrack018 = ($index, $item) => $item.id ?? $index;
function StudentCertificatsListComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-card", 4)(1, "mat-icon", 5);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div")(4, "h2", 6);
    \u0275\u0275text(5, "Identifiant utilisateur requis");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 7);
    \u0275\u0275text(7, " Pour lier vos quiz et certificats au backend Spring, renseignez votre ");
    \u0275\u0275elementStart(8, "strong");
    \u0275\u0275text(9, "ID utilisateur");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " (nombre) sur la page de connexion, puis reconnectez-vous. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 8);
    \u0275\u0275text(12, "Aller \xE0 la connexion");
    \u0275\u0275elementEnd()()();
  }
}
function StudentCertificatsListComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1, "Chargement de vos certificats\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificatsListComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function StudentCertificatsListComponent_Conditional_10_For_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.quizTitre);
  }
}
function StudentCertificatsListComponent_Conditional_10_For_4_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "dt");
    \u0275\u0275text(2, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "dd");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r3.moduleTitre);
  }
}
function StudentCertificatsListComponent_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 12)(1, "div", 14)(2, "mat-icon");
    \u0275\u0275text(3, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 15)(5, "span", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, StudentCertificatsListComponent_Conditional_10_For_4_Conditional_7_Template, 2, 1, "h2", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "dl", 18)(9, "div")(10, "dt");
    \u0275\u0275text(11, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "dt");
    \u0275\u0275text(16, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "dd");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div")(20, "dt");
    \u0275\u0275text(21, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "dd");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(24, StudentCertificatsListComponent_Conditional_10_For_4_Conditional_24_Template, 5, 1, "div", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 20)(26, "span", 21);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 21);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 22)(31, "button", 23);
    \u0275\u0275listener("click", function StudentCertificatsListComponent_Conditional_10_For_4_Template_button_click_31_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openDetail(c_r3));
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Voir d\xE9tail ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 24);
    \u0275\u0275listener("click", function StudentCertificatsListComponent_Conditional_10_For_4_Template_button_click_35_listener() {
      const c_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.downloadPdf(c_r3));
    });
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38, " T\xE9l\xE9charger ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r3.codeCertificat || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.quizTitre ? 7 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r3.dateObtention || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r3.score != null ? c_r3.score : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatPct(c_r3));
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r3.moduleTitre ? 24 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("scl-tag--ok", c_r3.emailEnvoye);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.emailEnvoye ? "E-mail envoy\xE9" : "E-mail non envoy\xE9");
    \u0275\u0275advance();
    \u0275\u0275classProp("scl-tag--pdf", c_r3.pdfDisponible !== false && (c_r3.pdfDisponible || c_r3.certificatPdfUrl || c_r3.id != null));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r3.pdfDisponible || c_r3.certificatPdfUrl ? "PDF disponible" : "PDF \u2014", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", c_r3.id == null);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", c_r3.id == null);
  }
}
function StudentCertificatsListComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 13)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "Aucun certificat pour l\u2019instant. R\xE9ussissez un quiz pour en g\xE9n\xE9rer un.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 25);
    \u0275\u0275listener("click", function StudentCertificatsListComponent_Conditional_10_Conditional_5_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.back());
    });
    \u0275\u0275text(6, "Explorer les modules");
    \u0275\u0275elementEnd()();
  }
}
function StudentCertificatsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, StudentCertificatsListComponent_Conditional_10_Conditional_0_Template, 2, 0, "p", 9);
    \u0275\u0275conditionalCreate(1, StudentCertificatsListComponent_Conditional_10_Conditional_1_Template, 2, 1, "p", 10);
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275repeaterCreate(3, StudentCertificatsListComponent_Conditional_10_For_4_Template, 39, 14, "mat-card", 12, _forTrack018);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, StudentCertificatsListComponent_Conditional_10_Conditional_5_Template, 7, 0, "mat-card", 13);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loading() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error() ? 1 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.items());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.loading() && !ctx_r0.error() && !ctx_r0.items().length ? 5 : -1);
  }
}
var HTTP_TIMEOUT_MS22 = 25e3;
var StudentCertificatsListComponent = class _StudentCertificatsListComponent {
  certificats = inject(CertificatService);
  router = inject(Router);
  auth = inject(AuthService);
  items = signal([], ...ngDevMode ? [{ debugName: "items" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor() {
    const uid = this.auth.userId();
    if (uid == null) {
      this.loading.set(false);
      this.error.set(null);
      this.items.set([]);
      return;
    }
    this.certificats.getByUser(uid).pipe(takeUntilDestroyed(), timeout(HTTP_TIMEOUT_MS22), catchError(() => {
      this.error.set("Impossible de charger vos certificats (r\xE9seau, d\xE9lai ou URL API).");
      return of([]);
    }), finalize(() => this.loading.set(false))).subscribe({
      next: (list) => {
        this.error.set(null);
        this.items.set(list);
      }
    });
  }
  back() {
    void this.router.navigate(["/student/modules"]);
  }
  openDetail(c) {
    if (c.id != null) {
      void this.router.navigate(["/student/certificats", c.id]);
    }
  }
  downloadPdf(c) {
    this.certificats.telechargerPdf(c);
  }
  formatPct(c) {
    const p = c.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return "\u2014";
    }
    return `${Math.round(p <= 1 ? p * 100 : p)} %`;
  }
  static \u0275fac = function StudentCertificatsListComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCertificatsListComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCertificatsListComponent, selectors: [["app-student-certificats-list"]], standalone: false, decls: 11, vars: 1, consts: [[1, "scl-head"], ["mat-stroked-button", "", "type", "button", 1, "scl-back", 3, "click"], [1, "scl-title"], [1, "scl-lead"], ["appearance", "outlined", 1, "scl-hint"], [1, "scl-hint__icon"], [1, "scl-hint__title"], [1, "scl-hint__text"], ["mat-flat-button", "", "color", "primary", "routerLink", "/login"], [1, "scl-muted"], [1, "scl-alert"], [1, "scl-grid"], ["appearance", "outlined", 1, "scl-card"], ["appearance", "outlined", 1, "scl-empty"], ["aria-hidden", "true", 1, "scl-card__ribbon"], [1, "scl-card__top"], [1, "scl-chip"], [1, "scl-card__quiz"], [1, "scl-dl"], [1, "scl-span"], [1, "scl-tags"], [1, "scl-tag"], [1, "scl-actions"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click", "disabled"], ["mat-flat-button", "", "color", "primary", "type", "button", 3, "click"]], template: function StudentCertificatsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "section", 0)(1, "button", 1);
      \u0275\u0275listener("click", function StudentCertificatsListComponent_Template_button_click_1_listener() {
        return ctx.back();
      });
      \u0275\u0275elementStart(2, "mat-icon");
      \u0275\u0275text(3, "arrow_back");
      \u0275\u0275elementEnd();
      \u0275\u0275text(4, " Retour ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1", 2);
      \u0275\u0275text(6, "Mes certificats");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8, "Retrouvez ici tous vos certificats de r\xE9ussite et t\xE9l\xE9chargez vos PDF.");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(9, StudentCertificatsListComponent_Conditional_9_Template, 13, 0, "mat-card", 4)(10, StudentCertificatsListComponent_Conditional_10_Template, 6, 3);
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275conditional(ctx.auth.userId() == null ? 9 : 10);
    }
  }, dependencies: [RouterLink, MatButton, MatCard, MatIcon], styles: ["\n\n.scl-head[_ngcontent-%COMP%] {\n  margin-bottom: 1.75rem;\n}\n.scl-back[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.scl-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: clamp(1.6rem, 3vw, 2rem);\n  font-weight: 800;\n  color: #0f172a;\n}\n.scl-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 60ch;\n  color: #64748b;\n  line-height: 1.55;\n}\n.scl-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.scl-alert[_ngcontent-%COMP%] {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.scl-hint[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem !important;\n  border-radius: 18px !important;\n  align-items: flex-start;\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb,\n      #fff) !important;\n  border-color: #fde68a !important;\n}\n.scl-hint__icon[_ngcontent-%COMP%] {\n  color: #d97706;\n  flex-shrink: 0;\n}\n.scl-hint__title[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.1rem;\n}\n.scl-hint__text[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #57534e;\n  line-height: 1.55;\n}\n.scl-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n}\n.scl-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 1.35rem 1.25rem 1.25rem !important;\n  border-radius: 20px !important;\n  overflow: hidden;\n  border: 1px solid #e2e8f0 !important;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06) !important;\n}\n.scl-card__ribbon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 72px;\n  height: 72px;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 50%,\n      rgba(99, 102, 241, 0.12) 50%);\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding: 0.5rem;\n  color: #6366f1;\n}\n.scl-card__top[_ngcontent-%COMP%] {\n  padding-right: 2rem;\n  margin-bottom: 1rem;\n}\n.scl-chip[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-family: ui-monospace, monospace;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 0.25rem 0.6rem;\n  border-radius: 8px;\n  background: #eef2ff;\n  color: #4338ca;\n}\n.scl-card__quiz[_ngcontent-%COMP%] {\n  margin: 0.65rem 0 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.scl-dl[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem 1rem;\n}\n.scl-dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.scl-dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%] {\n  margin: 0.15rem 0 0;\n  font-weight: 700;\n  color: #334155;\n}\n.scl-span[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.scl-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.scl-tag[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.3rem 0.65rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #64748b;\n}\n.scl-tag--ok[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.scl-tag--pdf[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n.scl-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.scl-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.scl-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.scl-empty[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  text-align: center;\n  padding: 2rem 1.5rem !important;\n  border-radius: 18px !important;\n}\n.scl-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #cbd5e1;\n  margin-bottom: 0.5rem;\n}\n.scl-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=student-certificats-list.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCertificatsListComponent, [{
    type: Component,
    args: [{ selector: "app-student-certificats-list", standalone: false, template: `<section class="scl-head">\r
  <button mat-stroked-button type="button" class="scl-back" (click)="back()">\r
    <mat-icon>arrow_back</mat-icon>\r
    Retour\r
  </button>\r
  <h1 class="scl-title">Mes certificats</h1>\r
  <p class="scl-lead">Retrouvez ici tous vos certificats de r\xE9ussite et t\xE9l\xE9chargez vos PDF.</p>\r
</section>\r
\r
@if (auth.userId() == null) {\r
  <mat-card class="scl-hint" appearance="outlined">\r
    <mat-icon class="scl-hint__icon">info</mat-icon>\r
    <div>\r
      <h2 class="scl-hint__title">Identifiant utilisateur requis</h2>\r
      <p class="scl-hint__text">\r
        Pour lier vos quiz et certificats au backend Spring, renseignez votre <strong>ID utilisateur</strong> (nombre)\r
        sur la page de connexion, puis reconnectez-vous.\r
      </p>\r
      <a mat-flat-button color="primary" routerLink="/login">Aller \xE0 la connexion</a>\r
    </div>\r
  </mat-card>\r
} @else {\r
  @if (loading()) {\r
    <p class="scl-muted">Chargement de vos certificats\u2026</p>\r
  }\r
  @if (error()) {\r
    <p class="scl-alert">{{ error() }}</p>\r
  }\r
\r
  <div class="scl-grid">\r
    @for (c of items(); track c.id ?? $index) {\r
      <mat-card class="scl-card" appearance="outlined">\r
        <div class="scl-card__ribbon" aria-hidden="true">\r
          <mat-icon>workspace_premium</mat-icon>\r
        </div>\r
        <div class="scl-card__top">\r
          <span class="scl-chip">{{ c.codeCertificat || '\u2014' }}</span>\r
          @if (c.quizTitre) {\r
            <h2 class="scl-card__quiz">{{ c.quizTitre }}</h2>\r
          }\r
        </div>\r
        <dl class="scl-dl">\r
          <div>\r
            <dt>Date</dt>\r
            <dd>{{ c.dateObtention || '\u2014' }}</dd>\r
          </div>\r
          <div>\r
            <dt>Score</dt>\r
            <dd>{{ c.score != null ? c.score : '\u2014' }}</dd>\r
          </div>\r
          <div>\r
            <dt>Pourcentage</dt>\r
            <dd>{{ formatPct(c) }}</dd>\r
          </div>\r
          @if (c.moduleTitre) {\r
            <div class="scl-span">\r
              <dt>Module</dt>\r
              <dd>{{ c.moduleTitre }}</dd>\r
            </div>\r
          }\r
        </dl>\r
        <div class="scl-tags">\r
          <span class="scl-tag" [class.scl-tag--ok]="c.emailEnvoye">{{ c.emailEnvoye ? 'E-mail envoy\xE9' : 'E-mail non envoy\xE9' }}</span>\r
          <span class="scl-tag" [class.scl-tag--pdf]="c.pdfDisponible !== false && (c.pdfDisponible || c.certificatPdfUrl || c.id != null)">\r
            {{ c.pdfDisponible || c.certificatPdfUrl ? 'PDF disponible' : 'PDF \u2014' }}\r
          </span>\r
        </div>\r
        <div class="scl-actions">\r
          <button mat-stroked-button type="button" color="primary" (click)="openDetail(c)" [disabled]="c.id == null">\r
            <mat-icon>visibility</mat-icon>\r
            Voir d\xE9tail\r
          </button>\r
          <button mat-flat-button color="primary" type="button" (click)="downloadPdf(c)" [disabled]="c.id == null">\r
            <mat-icon>download</mat-icon>\r
            T\xE9l\xE9charger\r
          </button>\r
        </div>\r
      </mat-card>\r
    }\r
  </div>\r
\r
  @if (!loading() && !error() && !items().length) {\r
    <mat-card class="scl-empty" appearance="outlined">\r
      <mat-icon>inbox</mat-icon>\r
      <p>Aucun certificat pour l\u2019instant. R\xE9ussissez un quiz pour en g\xE9n\xE9rer un.</p>\r
      <button mat-flat-button color="primary" type="button" (click)="back()">Explorer les modules</button>\r
    </mat-card>\r
  }\r
}\r
`, styles: ["/* src/app/pages/student/student-certificats-list/student-certificats-list.component.scss */\n.scl-head {\n  margin-bottom: 1.75rem;\n}\n.scl-back {\n  margin-bottom: 1rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.scl-title {\n  margin: 0 0 0.4rem;\n  font-size: clamp(1.6rem, 3vw, 2rem);\n  font-weight: 800;\n  color: #0f172a;\n}\n.scl-lead {\n  margin: 0;\n  max-width: 60ch;\n  color: #64748b;\n  line-height: 1.55;\n}\n.scl-muted {\n  color: #64748b;\n}\n.scl-alert {\n  padding: 0.85rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.scl-hint {\n  display: flex;\n  gap: 1rem;\n  padding: 1.5rem !important;\n  border-radius: 18px !important;\n  align-items: flex-start;\n  background:\n    linear-gradient(\n      180deg,\n      #fffbeb,\n      #fff) !important;\n  border-color: #fde68a !important;\n}\n.scl-hint__icon {\n  color: #d97706;\n  flex-shrink: 0;\n}\n.scl-hint__title {\n  margin: 0 0 0.5rem;\n  font-size: 1.1rem;\n}\n.scl-hint__text {\n  margin: 0 0 1rem;\n  color: #57534e;\n  line-height: 1.55;\n}\n.scl-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));\n  gap: 1.25rem;\n}\n.scl-card {\n  position: relative;\n  padding: 1.35rem 1.25rem 1.25rem !important;\n  border-radius: 20px !important;\n  overflow: hidden;\n  border: 1px solid #e2e8f0 !important;\n  box-shadow: 0 16px 40px rgba(15, 23, 42, 0.06) !important;\n}\n.scl-card__ribbon {\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 72px;\n  height: 72px;\n  background:\n    linear-gradient(\n      135deg,\n      transparent 50%,\n      rgba(99, 102, 241, 0.12) 50%);\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-end;\n  padding: 0.5rem;\n  color: #6366f1;\n}\n.scl-card__top {\n  padding-right: 2rem;\n  margin-bottom: 1rem;\n}\n.scl-chip {\n  display: inline-block;\n  font-family: ui-monospace, monospace;\n  font-size: 0.82rem;\n  font-weight: 700;\n  padding: 0.25rem 0.6rem;\n  border-radius: 8px;\n  background: #eef2ff;\n  color: #4338ca;\n}\n.scl-card__quiz {\n  margin: 0.65rem 0 0;\n  font-size: 1.05rem;\n  font-weight: 800;\n  color: #0f172a;\n}\n.scl-dl {\n  margin: 0 0 1rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.65rem 1rem;\n}\n.scl-dl dt {\n  margin: 0;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: #94a3b8;\n}\n.scl-dl dd {\n  margin: 0.15rem 0 0;\n  font-weight: 700;\n  color: #334155;\n}\n.scl-span {\n  grid-column: 1/-1;\n}\n.scl-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.scl-tag {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.3rem 0.65rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #64748b;\n}\n.scl-tag--ok {\n  background: #ecfdf5;\n  color: #047857;\n}\n.scl-tag--pdf {\n  background: #fffbeb;\n  color: #b45309;\n}\n.scl-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n.scl-actions button mat-icon,\n.scl-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.scl-empty {\n  margin-top: 1.5rem;\n  text-align: center;\n  padding: 2rem 1.5rem !important;\n  border-radius: 18px !important;\n}\n.scl-empty mat-icon {\n  font-size: 40px;\n  width: 40px;\n  height: 40px;\n  color: #cbd5e1;\n  margin-bottom: 0.5rem;\n}\n.scl-empty p {\n  margin: 0 0 1rem;\n  color: #64748b;\n}\n/*# sourceMappingURL=student-certificats-list.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCertificatsListComponent, { className: "StudentCertificatsListComponent", filePath: "src/app/pages/student/student-certificats-list/student-certificats-list.component.ts", lineNumber: 18 });
})();

// src/app/pages/student/student-certificat-detail/student-certificat-detail.component.ts
function StudentCertificatDetailComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 0);
    \u0275\u0275text(1, "Chargement du certificat\u2026");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificatDetailComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 1)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 2);
    \u0275\u0275listener("click", function StudentCertificatDetailComponent_Conditional_1_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275text(4, "Retour \xE0 la liste");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.error());
  }
}
function StudentCertificatDetailComponent_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Ce certificat est associ\xE9 \xE0 un autre utilisateur c\xF4t\xE9 serveur.");
    \u0275\u0275elementEnd();
  }
}
function StudentCertificatDetailComponent_Conditional_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.etudiantNom);
  }
}
function StudentCertificatDetailComponent_Conditional_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 14);
    \u0275\u0275text(2, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.quizTitre);
  }
}
function StudentCertificatDetailComponent_Conditional_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "span", 14);
    \u0275\u0275text(2, "Module");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const c_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(c_r4.moduleTitre);
  }
}
function StudentCertificatDetailComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function StudentCertificatDetailComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.back());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mes certificats ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, StudentCertificatDetailComponent_Conditional_2_Conditional_4_Template, 2, 0, "p", 4);
    \u0275\u0275elementStart(5, "article", 5)(6, "div", 6)(7, "mat-icon");
    \u0275\u0275text(8, "workspace_premium");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "p", 7);
    \u0275\u0275text(10, "Fluency \xB7 E-learning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "h1", 8);
    \u0275\u0275text(12, "Certificat de r\xE9ussite");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, StudentCertificatDetailComponent_Conditional_2_Conditional_13_Template, 2, 1, "p", 9);
    \u0275\u0275elementStart(14, "p", 10);
    \u0275\u0275text(15, "a obtenu ce certificat suite \xE0 la r\xE9ussite de l\u2019\xE9valuation suivante.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275conditionalCreate(17, StudentCertificatDetailComponent_Conditional_2_Conditional_17_Template, 5, 1, "div", 12);
    \u0275\u0275conditionalCreate(18, StudentCertificatDetailComponent_Conditional_2_Conditional_18_Template, 5, 1, "div", 12);
    \u0275\u0275elementStart(19, "div", 13)(20, "div")(21, "span", 14);
    \u0275\u0275text(22, "Score");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "strong");
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div")(26, "span", 14);
    \u0275\u0275text(27, "Pourcentage");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div")(31, "span", 14);
    \u0275\u0275text(32, "Code certificat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "strong", 15);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div")(36, "span", 14);
    \u0275\u0275text(37, "Date d\u2019obtention");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 16)(41, "span", 17)(42, "mat-icon");
    \u0275\u0275text(43, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 17)(46, "mat-icon");
    \u0275\u0275text(47, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 18)(50, "button", 19);
    \u0275\u0275listener("click", function StudentCertificatDetailComponent_Conditional_2_Template_button_click_50_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadPdf());
    });
    \u0275\u0275elementStart(51, "mat-icon");
    \u0275\u0275text(52, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " T\xE9l\xE9charger le PDF ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const c_r4 = ctx;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.ownerMismatch() ? 4 : -1);
    \u0275\u0275advance(9);
    \u0275\u0275conditional(c_r4.etudiantNom ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(c_r4.quizTitre ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(c_r4.moduleTitre ? 18 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r4.score != null ? c_r4.score : "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatPct(c_r4));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r4.codeCertificat);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(c_r4.dateObtention);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("scd-pill--ok", c_r4.emailEnvoye);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r4.emailEnvoye ? "E-mail de notification envoy\xE9" : "E-mail non envoy\xE9", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("scd-pill--gold", c_r4.pdfDisponible || c_r4.certificatPdfUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", c_r4.pdfDisponible || c_r4.certificatPdfUrl ? "PDF disponible" : "PDF indisponible", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", c_r4.id == null);
  }
}
var HTTP_TIMEOUT_MS23 = 25e3;
var StudentCertificatDetailComponent = class _StudentCertificatDetailComponent {
  route = inject(ActivatedRoute);
  router = inject(Router);
  certificats = inject(CertificatService);
  auth = inject(AuthService);
  cert = signal(null, ...ngDevMode ? [{ debugName: "cert" }] : []);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  constructor() {
    this.route.paramMap.pipe(takeUntilDestroyed(), map((pm) => pm.get("id")), distinctUntilChanged(), tap(() => {
      this.loading.set(true);
      this.error.set(null);
    }), switchMap((raw) => {
      const id = raw != null ? Math.trunc(Number(raw)) : NaN;
      if (!Number.isFinite(id) || id <= 0) {
        this.error.set("Identifiant de certificat invalide.");
        this.cert.set(null);
        this.loading.set(false);
        return EMPTY;
      }
      return this.certificats.getById(id).pipe(timeout(HTTP_TIMEOUT_MS23), tap({
        next: (c) => {
          this.cert.set(c);
          this.error.set(null);
        }
      }), catchError(() => {
        this.error.set("Certificat introuvable ou serveur indisponible.");
        this.cert.set(null);
        return of(null);
      }), finalize(() => this.loading.set(false)));
    })).subscribe();
  }
  back() {
    void this.router.navigate(["/student/certificats"]);
  }
  downloadPdf() {
    const c = this.cert();
    if (c) {
      this.certificats.telechargerPdf(c);
    }
  }
  formatPct(c) {
    const p = c.pourcentage;
    if (p == null || !Number.isFinite(p)) {
      return "\u2014";
    }
    return `${Math.round(p <= 1 ? p * 100 : p)} %`;
  }
  ownerMismatch() {
    const uid = this.auth.userId();
    const c = this.cert();
    if (uid == null || c?.userId == null) {
      return false;
    }
    return c.userId !== uid;
  }
  static \u0275fac = function StudentCertificatDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StudentCertificatDetailComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StudentCertificatDetailComponent, selectors: [["app-student-certificat-detail"]], standalone: false, decls: 3, vars: 1, consts: [[1, "scd-muted"], ["appearance", "outlined", 1, "scd-error"], ["mat-stroked-button", "", "type", "button", 3, "click"], ["mat-stroked-button", "", "type", "button", 1, "scd-back", 3, "click"], [1, "scd-warn"], [1, "scd-diploma"], ["aria-hidden", "true", 1, "scd-diploma__seal"], [1, "scd-diploma__kicker"], [1, "scd-diploma__title"], [1, "scd-diploma__name"], [1, "scd-diploma__sub"], [1, "scd-body"], [1, "scd-row"], [1, "scd-metrics"], [1, "scd-label"], [1, "scd-code"], [1, "scd-status"], [1, "scd-pill"], [1, "scd-actions"], ["mat-stroked-button", "", "color", "primary", "type", "button", 3, "click", "disabled"]], template: function StudentCertificatDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275conditionalCreate(0, StudentCertificatDetailComponent_Conditional_0_Template, 2, 0, "p", 0)(1, StudentCertificatDetailComponent_Conditional_1_Template, 5, 1, "mat-card", 1)(2, StudentCertificatDetailComponent_Conditional_2_Template, 54, 15);
    }
    if (rf & 2) {
      let tmp_0_0;
      \u0275\u0275conditional(ctx.loading() ? 0 : ctx.error() ? 1 : (tmp_0_0 = ctx.cert()) ? 2 : -1, tmp_0_0);
    }
  }, dependencies: [MatButton, MatCard, MatIcon], styles: ['\n\n.scd-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.scd-back[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.scd-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.scd-error[_ngcontent-%COMP%] {\n  padding: 1.5rem !important;\n  border-radius: 16px !important;\n}\n.scd-warn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fffbeb;\n  color: #92400e;\n  margin-bottom: 1rem;\n}\n.scd-diploma[_ngcontent-%COMP%] {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 2.25rem 2rem 2rem;\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 55%,\n      #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.1);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.scd-diploma[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 10% 0%,\n      rgba(99, 102, 241, 0.12),\n      transparent 45%),\n    radial-gradient(\n      circle at 90% 100%,\n      rgba(251, 191, 36, 0.15),\n      transparent 40%);\n  pointer-events: none;\n}\n.scd-diploma__seal[_ngcontent-%COMP%] {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 1rem;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #6366f1,\n      #4338ca);\n  color: #fff;\n  box-shadow: 0 16px 40px rgba(67, 56, 202, 0.35);\n}\n.scd-diploma__seal[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n}\n.scd-diploma__kicker[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.scd-diploma__title[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 0.75rem;\n  font-size: clamp(1.5rem, 3vw, 1.85rem);\n  font-weight: 800;\n  color: #0f172a;\n}\n.scd-diploma__name[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 0.35rem;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #312e81;\n}\n.scd-diploma__sub[_ngcontent-%COMP%] {\n  position: relative;\n  margin: 0 0 1.5rem;\n  color: #64748b;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n.scd-body[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: left;\n  padding-top: 1.25rem;\n  border-top: 1px dashed #cbd5e1;\n}\n.scd-row[_ngcontent-%COMP%] {\n  margin-bottom: 0.85rem;\n}\n.scd-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem 1.25rem;\n  margin: 1rem 0;\n}\n.scd-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 0.2rem;\n}\n.scd-code[_ngcontent-%COMP%] {\n  font-family: ui-monospace, monospace;\n  font-size: 0.95rem;\n  color: #4338ca;\n}\n.scd-status[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.scd-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #64748b;\n}\n.scd-pill[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.scd-pill--ok[_ngcontent-%COMP%] {\n  background: #ecfdf5;\n  color: #047857;\n}\n.scd-pill--gold[_ngcontent-%COMP%] {\n  background: #fffbeb;\n  color: #b45309;\n}\n.scd-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  justify-content: center;\n}\n.scd-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 520px) {\n  .scd-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=student-certificat-detail.component.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StudentCertificatDetailComponent, [{
    type: Component,
    args: [{ selector: "app-student-certificat-detail", standalone: false, template: `@if (loading()) {\r
  <p class="scd-muted">Chargement du certificat\u2026</p>\r
} @else if (error()) {\r
  <mat-card class="scd-error" appearance="outlined">\r
    <p>{{ error() }}</p>\r
    <button mat-stroked-button type="button" (click)="back()">Retour \xE0 la liste</button>\r
  </mat-card>\r
} @else if (cert(); as c) {\r
  <button mat-stroked-button type="button" class="scd-back" (click)="back()">\r
    <mat-icon>arrow_back</mat-icon>\r
    Mes certificats\r
  </button>\r
\r
  @if (ownerMismatch()) {\r
    <p class="scd-warn">Ce certificat est associ\xE9 \xE0 un autre utilisateur c\xF4t\xE9 serveur.</p>\r
  }\r
\r
  <article class="scd-diploma">\r
    <div class="scd-diploma__seal" aria-hidden="true">\r
      <mat-icon>workspace_premium</mat-icon>\r
    </div>\r
    <p class="scd-diploma__kicker">Fluency \xB7 E-learning</p>\r
    <h1 class="scd-diploma__title">Certificat de r\xE9ussite</h1>\r
    @if (c.etudiantNom) {\r
      <p class="scd-diploma__name">{{ c.etudiantNom }}</p>\r
    }\r
    <p class="scd-diploma__sub">a obtenu ce certificat suite \xE0 la r\xE9ussite de l\u2019\xE9valuation suivante.</p>\r
\r
    <div class="scd-body">\r
      @if (c.quizTitre) {\r
        <div class="scd-row">\r
          <span class="scd-label">Quiz</span>\r
          <strong>{{ c.quizTitre }}</strong>\r
        </div>\r
      }\r
      @if (c.moduleTitre) {\r
        <div class="scd-row">\r
          <span class="scd-label">Module</span>\r
          <strong>{{ c.moduleTitre }}</strong>\r
        </div>\r
      }\r
      <div class="scd-metrics">\r
        <div>\r
          <span class="scd-label">Score</span>\r
          <strong>{{ c.score != null ? c.score : '\u2014' }}</strong>\r
        </div>\r
        <div>\r
          <span class="scd-label">Pourcentage</span>\r
          <strong>{{ formatPct(c) }}</strong>\r
        </div>\r
        <div>\r
          <span class="scd-label">Code certificat</span>\r
          <strong class="scd-code">{{ c.codeCertificat }}</strong>\r
        </div>\r
        <div>\r
          <span class="scd-label">Date d\u2019obtention</span>\r
          <strong>{{ c.dateObtention }}</strong>\r
        </div>\r
      </div>\r
\r
      <div class="scd-status">\r
        <span class="scd-pill" [class.scd-pill--ok]="c.emailEnvoye">\r
          <mat-icon>email</mat-icon>\r
          {{ c.emailEnvoye ? 'E-mail de notification envoy\xE9' : 'E-mail non envoy\xE9' }}\r
        </span>\r
        <span class="scd-pill" [class.scd-pill--gold]="c.pdfDisponible || c.certificatPdfUrl">\r
          <mat-icon>picture_as_pdf</mat-icon>\r
          {{ c.pdfDisponible || c.certificatPdfUrl ? 'PDF disponible' : 'PDF indisponible' }}\r
        </span>\r
      </div>\r
\r
      <div class="scd-actions">\r
        <button mat-stroked-button color="primary" type="button" (click)="downloadPdf()" [disabled]="c.id == null">\r
          <mat-icon>download</mat-icon>\r
          T\xE9l\xE9charger le PDF\r
        </button>\r
      </div>\r
    </div>\r
  </article>\r
}\r
`, styles: ['/* src/app/pages/student/student-certificat-detail/student-certificat-detail.component.scss */\n.scd-muted {\n  color: #64748b;\n}\n.scd-back {\n  margin-bottom: 1.25rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.scd-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.scd-error {\n  padding: 1.5rem !important;\n  border-radius: 16px !important;\n}\n.scd-warn {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fffbeb;\n  color: #92400e;\n  margin-bottom: 1rem;\n}\n.scd-diploma {\n  max-width: 640px;\n  margin: 0 auto;\n  padding: 2.25rem 2rem 2rem;\n  border-radius: 28px;\n  background:\n    linear-gradient(\n      180deg,\n      #ffffff 0%,\n      #f8fafc 55%,\n      #f1f5f9 100%);\n  border: 1px solid #e2e8f0;\n  box-shadow: 0 28px 70px rgba(15, 23, 42, 0.1);\n  text-align: center;\n  position: relative;\n  overflow: hidden;\n}\n.scd-diploma::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 10% 0%,\n      rgba(99, 102, 241, 0.12),\n      transparent 45%),\n    radial-gradient(\n      circle at 90% 100%,\n      rgba(251, 191, 36, 0.15),\n      transparent 40%);\n  pointer-events: none;\n}\n.scd-diploma__seal {\n  position: relative;\n  width: 72px;\n  height: 72px;\n  margin: 0 auto 1rem;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background:\n    linear-gradient(\n      145deg,\n      #6366f1,\n      #4338ca);\n  color: #fff;\n  box-shadow: 0 16px 40px rgba(67, 56, 202, 0.35);\n}\n.scd-diploma__seal mat-icon {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n}\n.scd-diploma__kicker {\n  position: relative;\n  margin: 0 0 0.35rem;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.16em;\n  text-transform: uppercase;\n  color: #64748b;\n}\n.scd-diploma__title {\n  position: relative;\n  margin: 0 0 0.75rem;\n  font-size: clamp(1.5rem, 3vw, 1.85rem);\n  font-weight: 800;\n  color: #0f172a;\n}\n.scd-diploma__name {\n  position: relative;\n  margin: 0 0 0.35rem;\n  font-size: 1.35rem;\n  font-weight: 700;\n  color: #312e81;\n}\n.scd-diploma__sub {\n  position: relative;\n  margin: 0 0 1.5rem;\n  color: #64748b;\n  font-size: 0.95rem;\n  line-height: 1.5;\n}\n.scd-body {\n  position: relative;\n  text-align: left;\n  padding-top: 1.25rem;\n  border-top: 1px dashed #cbd5e1;\n}\n.scd-row {\n  margin-bottom: 0.85rem;\n}\n.scd-metrics {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem 1.25rem;\n  margin: 1rem 0;\n}\n.scd-label {\n  display: block;\n  font-size: 0.68rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #94a3b8;\n  margin-bottom: 0.2rem;\n}\n.scd-code {\n  font-family: ui-monospace, monospace;\n  font-size: 0.95rem;\n  color: #4338ca;\n}\n.scd-status {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.scd-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  padding: 0.4rem 0.75rem;\n  border-radius: 999px;\n  background: #f1f5f9;\n  color: #64748b;\n}\n.scd-pill mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.scd-pill--ok {\n  background: #ecfdf5;\n  color: #047857;\n}\n.scd-pill--gold {\n  background: #fffbeb;\n  color: #b45309;\n}\n.scd-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.65rem;\n  justify-content: center;\n}\n.scd-actions button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@media (max-width: 520px) {\n  .scd-metrics {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=student-certificat-detail.component.css.map */\n'] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StudentCertificatDetailComponent, { className: "StudentCertificatDetailComponent", filePath: "src/app/pages/student/student-certificat-detail/student-certificat-detail.component.ts", lineNumber: 18 });
})();

// src/app/pages/teacher/teacher-dashboard/teacher-dashboard.component.ts
var _forTrack019 = ($index, $item) => $item.route;
function TeacherDashboardComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275text(1, "Chargement\u2026");
    \u0275\u0275elementEnd();
  }
}
function TeacherDashboardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error());
  }
}
function TeacherDashboardComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TeacherDashboardComponent_For_12_Template_button_click_0_listener() {
      const s_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.go(s_r3.route));
    });
    \u0275\u0275elementStart(1, "span", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r3.desc);
  }
}
function TeacherDashboardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-card", 13)(2, "span", 14);
    \u0275\u0275text(3, "\u{1F4DA}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 15);
    \u0275\u0275text(5, "Modules");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "mat-progress-bar", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-card", 13)(10, "span", 14);
    \u0275\u0275text(11, "\u{1F4D6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 15);
    \u0275\u0275text(13, "Cours");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "strong", 16);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "mat-progress-bar", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-card", 13)(18, "span", 14);
    \u0275\u0275text(19, "\u{1F4DD}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 15);
    \u0275\u0275text(21, "Quiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "strong", 16);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275element(24, "mat-progress-bar", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-card", 13)(26, "span", 14);
    \u0275\u0275text(27, "\u2753");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 15);
    \u0275\u0275text(29, "Questions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "strong", 16);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275element(32, "mat-progress-bar", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-card", 13)(34, "span", 14);
    \u0275\u0275text(35, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span", 15);
    \u0275\u0275text(37, "R\xE9ponses");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "strong", 16);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275element(40, "mat-progress-bar", 17);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.nModules());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nModules()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.nCours());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nCours()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.nQuizzes());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nQuizzes()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.nQuestions());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nQuestions()));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.nReponses());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.barPct(ctx_r0.nReponses()));
  }
}
var HTTP_TIMEOUT_MS24 = 25e3;
var TeacherDashboardComponent = class _TeacherDashboardComponent {
  statistiqueService = inject(StatistiqueService);
  router = inject(Router);
  loading = signal(true, ...ngDevMode ? [{ debugName: "loading" }] : []);
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : []);
  stats = signal(null, ...ngDevMode ? [{ debugName: "stats" }] : []);
  shortcuts = [
    { label: "Modules", desc: "Cr\xE9er et organiser les parcours", route: "/teacher/modules", icon: "\u{1F4DA}" },
    { label: "Cours", desc: "Contenus, PDF, publication", route: "/teacher/cours", icon: "\u{1F4D6}" },
    { label: "Quiz", desc: "\xC9valuations rattach\xE9es aux cours", route: "/teacher/quizzes", icon: "\u{1F4DD}" },
    { label: "Questions", desc: "Banque de questions", route: "/teacher/questions", icon: "\u2753" },
    { label: "R\xE9ponses", desc: "Propositions et corrections", route: "/teacher/reponses", icon: "\u{1F4AC}" }
  ];
  ngOnInit() {
    this.load();
  }
  load() {
    this.loading.set(true);
    this.error.set(null);
    this.statistiqueService.getStatistiquesGlobales().pipe(timeout(HTTP_TIMEOUT_MS24), finalize(() => this.loading.set(false))).subscribe({
      next: (s) => {
        this.stats.set(s);
        this.error.set(null);
      },
      error: () => {
        this.stats.set(null);
        this.error.set("Impossible de charger les statistiques.");
      }
    });
  }
  nModules() {
    const s = this.stats();
    return s?.totalModules ?? s?.nombreModules ?? 0;
  }
  nCours() {
    const s = this.stats();
    return s?.totalCours ?? s?.nombreCours ?? 0;
  }
  nQuizzes() {
    const s = this.stats();
    return s?.totalQuizzes ?? s?.nombreQuizzes ?? 0;
  }
  nQuestions() {
    const s = this.stats();
    return s?.totalQuestions ?? s?.nombreQuestions ?? 0;
  }
  nReponses() {
    const s = this.stats();
    return s?.totalReponses ?? s?.nombreReponses ?? 0;
  }
  barPct(n) {
    const vals = [this.nModules(), this.nCours(), this.nQuizzes(), this.nQuestions(), this.nReponses()];
    const max = Math.max(1, ...vals);
    return Math.min(100, n / max * 100);
  }
  go(path) {
    void this.router.navigateByUrl(path);
  }
  static \u0275fac = function TeacherDashboardComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeacherDashboardComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TeacherDashboardComponent, selectors: [["app-teacher-dashboard"]], standalone: false, decls: 14, vars: 4, consts: [[1, "td-head"], [1, "td-title"], [1, "td-lead"], ["mat-stroked-button", "", "type", "button", "color", "primary", 3, "click", "disabled"], [1, "td-muted"], [1, "td-alert"], [1, "td-shortcuts"], ["type", "button", 1, "td-shortcut"], [1, "td-grid"], ["type", "button", 1, "td-shortcut", 3, "click"], ["aria-hidden", "true", 1, "td-shortcut__ico"], [1, "td-shortcut__label"], [1, "td-shortcut__desc"], ["appearance", "outlined", 1, "td-stat"], [1, "td-stat__ico"], [1, "td-stat__k"], [1, "td-stat__v"], ["mode", "determinate", 3, "value"]], template: function TeacherDashboardComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div")(2, "h1", 1);
      \u0275\u0275text(3, "Tableau de bord");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 2);
      \u0275\u0275text(5, "Pilotage p\xE9dagogique \u2014 statistiques globales et acc\xE8s rapides.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "button", 3);
      \u0275\u0275listener("click", function TeacherDashboardComponent_Template_button_click_6_listener() {
        return ctx.load();
      });
      \u0275\u0275text(7, "Actualiser");
      \u0275\u0275elementEnd()();
      \u0275\u0275conditionalCreate(8, TeacherDashboardComponent_Conditional_8_Template, 2, 0, "p", 4);
      \u0275\u0275conditionalCreate(9, TeacherDashboardComponent_Conditional_9_Template, 2, 1, "p", 5);
      \u0275\u0275elementStart(10, "section", 6);
      \u0275\u0275repeaterCreate(11, TeacherDashboardComponent_For_12_Template, 7, 3, "button", 7, _forTrack019);
      \u0275\u0275elementEnd();
      \u0275\u0275conditionalCreate(13, TeacherDashboardComponent_Conditional_13_Template, 41, 10, "div", 8);
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.loading());
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.loading() ? 8 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.error() ? 9 : -1);
      \u0275\u0275advance(2);
      \u0275\u0275repeater(ctx.shortcuts);
      \u0275\u0275advance(2);
      \u0275\u0275conditional(ctx.stats() && !ctx.loading() ? 13 : -1);
    }
  }, dependencies: [MatButton, MatCard, MatProgressBar], styles: ["\n\n.td-head[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.td-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.35rem;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.td-lead[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #64748b;\n  max-width: 52ch;\n}\n.td-muted[_ngcontent-%COMP%] {\n  color: #64748b;\n}\n.td-alert[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.td-shortcuts[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.85rem;\n  margin-bottom: 2rem;\n}\n.td-shortcut[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 1rem 1.1rem;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    border-color 0.15s ease;\n}\n.td-shortcut[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  border-color: #c7d2fe;\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.12);\n}\n.td-shortcut__ico[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.5rem;\n  margin-bottom: 0.35rem;\n}\n.td-shortcut__label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.td-shortcut__desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.td-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.td-stat[_ngcontent-%COMP%] {\n  padding: 1.15rem 1.2rem !important;\n  border-radius: 14px !important;\n}\n.td-stat__ico[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.35rem;\n  margin-bottom: 0.35rem;\n}\n.td-stat__k[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.td-stat__v[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 0.65rem;\n}\n/*# sourceMappingURL=teacher-dashboard.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeacherDashboardComponent, [{
    type: Component,
    args: [{ selector: "app-teacher-dashboard", standalone: false, template: '<div class="td-head">\r\n  <div>\r\n    <h1 class="td-title">Tableau de bord</h1>\r\n    <p class="td-lead">Pilotage p\xE9dagogique \u2014 statistiques globales et acc\xE8s rapides.</p>\r\n  </div>\r\n  <button mat-stroked-button type="button" color="primary" [disabled]="loading()" (click)="load()">Actualiser</button>\r\n</div>\r\n\r\n@if (loading()) {\r\n  <p class="td-muted">Chargement\u2026</p>\r\n}\r\n@if (error()) {\r\n  <p class="td-alert">{{ error() }}</p>\r\n}\r\n\r\n<section class="td-shortcuts">\r\n  @for (s of shortcuts; track s.route) {\r\n    <button type="button" class="td-shortcut" (click)="go(s.route)">\r\n      <span class="td-shortcut__ico" aria-hidden="true">{{ s.icon }}</span>\r\n      <span class="td-shortcut__label">{{ s.label }}</span>\r\n      <span class="td-shortcut__desc">{{ s.desc }}</span>\r\n    </button>\r\n  }\r\n</section>\r\n\r\n@if (stats() && !loading()) {\r\n  <div class="td-grid">\r\n    <mat-card class="td-stat" appearance="outlined">\r\n      <span class="td-stat__ico">\u{1F4DA}</span>\r\n      <span class="td-stat__k">Modules</span>\r\n      <strong class="td-stat__v">{{ nModules() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nModules())"></mat-progress-bar>\r\n    </mat-card>\r\n    <mat-card class="td-stat" appearance="outlined">\r\n      <span class="td-stat__ico">\u{1F4D6}</span>\r\n      <span class="td-stat__k">Cours</span>\r\n      <strong class="td-stat__v">{{ nCours() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nCours())"></mat-progress-bar>\r\n    </mat-card>\r\n    <mat-card class="td-stat" appearance="outlined">\r\n      <span class="td-stat__ico">\u{1F4DD}</span>\r\n      <span class="td-stat__k">Quiz</span>\r\n      <strong class="td-stat__v">{{ nQuizzes() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nQuizzes())"></mat-progress-bar>\r\n    </mat-card>\r\n    <mat-card class="td-stat" appearance="outlined">\r\n      <span class="td-stat__ico">\u2753</span>\r\n      <span class="td-stat__k">Questions</span>\r\n      <strong class="td-stat__v">{{ nQuestions() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nQuestions())"></mat-progress-bar>\r\n    </mat-card>\r\n    <mat-card class="td-stat" appearance="outlined">\r\n      <span class="td-stat__ico">\u{1F4AC}</span>\r\n      <span class="td-stat__k">R\xE9ponses</span>\r\n      <strong class="td-stat__v">{{ nReponses() }}</strong>\r\n      <mat-progress-bar mode="determinate" [value]="barPct(nReponses())"></mat-progress-bar>\r\n    </mat-card>\r\n  </div>\r\n}\r\n', styles: ["/* src/app/pages/teacher/teacher-dashboard/teacher-dashboard.component.css */\n.td-head {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.td-title {\n  margin: 0 0 0.35rem;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  letter-spacing: -0.03em;\n}\n.td-lead {\n  margin: 0;\n  color: #64748b;\n  max-width: 52ch;\n}\n.td-muted {\n  color: #64748b;\n}\n.td-alert {\n  padding: 0.75rem 1rem;\n  border-radius: 12px;\n  background: #fef2f2;\n  color: #b91c1c;\n  margin-bottom: 1rem;\n}\n.td-shortcuts {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 0.85rem;\n  margin-bottom: 2rem;\n}\n.td-shortcut {\n  text-align: left;\n  padding: 1rem 1.1rem;\n  border-radius: 14px;\n  border: 1px solid #e2e8f0;\n  background: #fff;\n  cursor: pointer;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    border-color 0.15s ease;\n}\n.td-shortcut:hover {\n  transform: translateY(-2px);\n  border-color: #c7d2fe;\n  box-shadow: 0 12px 28px rgba(99, 102, 241, 0.12);\n}\n.td-shortcut__ico {\n  display: block;\n  font-size: 1.5rem;\n  margin-bottom: 0.35rem;\n}\n.td-shortcut__label {\n  display: block;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 0.25rem;\n}\n.td-shortcut__desc {\n  font-size: 0.82rem;\n  color: #64748b;\n  line-height: 1.4;\n}\n.td-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  gap: 1rem;\n}\n.td-stat {\n  padding: 1.15rem 1.2rem !important;\n  border-radius: 14px !important;\n}\n.td-stat__ico {\n  display: block;\n  font-size: 1.35rem;\n  margin-bottom: 0.35rem;\n}\n.td-stat__k {\n  display: block;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #64748b;\n  margin-bottom: 0.25rem;\n}\n.td-stat__v {\n  display: block;\n  font-size: 1.65rem;\n  font-weight: 800;\n  color: #0f172a;\n  margin-bottom: 0.65rem;\n}\n/*# sourceMappingURL=teacher-dashboard.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TeacherDashboardComponent, { className: "TeacherDashboardComponent", filePath: "src/app/pages/teacher/teacher-dashboard/teacher-dashboard.component.ts", lineNumber: 16 });
})();

// src/app/elearning/elearning-routing.module.ts
var routes = [
  { path: "", component: LandingHomeComponent },
  {
    path: "login",
    loadComponent: () => import("./chunk-4BQ4BHHL.js").then((m) => m.LoginComponent),
    canActivate: [guestOnly]
  },
  {
    path: "student",
    component: StudentLayoutComponent,
    canActivate: [requireStudent],
    children: [
      { path: "", pathMatch: "full", redirectTo: "modules" },
      { path: "modules", component: StudentModulesComponent },
      { path: "cours", component: StudentAllCoursComponent },
      { path: "modules/:moduleId/cours", component: StudentModuleCoursComponent },
      { path: "quiz/:id", component: QuizPassComponent },
      { path: "resultat", component: StudentQuizResultComponent },
      { path: "certificats", component: StudentCertificatsListComponent },
      { path: "certificats/:id", component: StudentCertificatDetailComponent },
      { path: "recommandations", component: StudentRecommandationsComponent },
      { path: "recherche", component: StudentRechercheComponent },
      { path: "statistiques", component: StudentStatistiquesComponent }
    ]
  },
  {
    path: "teacher",
    component: TeacherLayoutComponent,
    canActivate: [requireTeacher],
    children: [
      { path: "", pathMatch: "full", redirectTo: "dashboard" },
      { path: "dashboard", component: TeacherDashboardComponent },
      { path: "modules/new", component: ModuleFormComponent },
      { path: "modules/edit/:id", component: ModuleFormComponent },
      { path: "modules/:id", component: ModuleDetailComponent },
      { path: "modules", component: ModuleListComponent },
      { path: "cours/new", component: CoursFormComponent },
      { path: "cours/edit/:id", component: CoursFormComponent },
      { path: "cours/:id", component: CoursDetailComponent },
      { path: "cours", component: CoursListComponent },
      { path: "quizzes/new", component: QuizFormComponent },
      { path: "quizzes/edit/:id", component: QuizFormComponent },
      { path: "quizzes/:id/pass", component: QuizPassComponent },
      { path: "quizzes/:id", component: QuizDetailComponent },
      { path: "quizzes", component: QuizListComponent },
      { path: "questions/new", component: QuestionFormComponent },
      { path: "questions/edit/:id", component: QuestionFormComponent },
      { path: "questions/:id", component: QuestionDetailComponent },
      { path: "questions", component: QuestionListComponent },
      { path: "reponses/new", component: ReponseFormComponent },
      { path: "reponses/edit/:id", component: ReponseFormComponent },
      { path: "reponses/:id", component: ReponseDetailComponent },
      { path: "reponses", component: ReponseListComponent }
    ]
  },
  /* Routes legacy (hors espaces role-based) */
  { path: "modules/new", component: ModuleFormComponent },
  { path: "modules/edit/:id", component: ModuleFormComponent },
  { path: "modules/:id", component: ModuleDetailComponent },
  { path: "modules", component: ModuleListComponent },
  { path: "cours/new", component: CoursFormComponent },
  { path: "cours/edit/:id", component: CoursFormComponent },
  { path: "cours/:id", component: CoursDetailComponent },
  { path: "cours", component: CoursListComponent },
  { path: "quizzes/new", component: QuizFormComponent },
  { path: "quizzes/edit/:id", component: QuizFormComponent },
  { path: "quizzes/:id/pass", component: QuizPassComponent },
  { path: "quizzes/:id", component: QuizDetailComponent },
  { path: "quizzes", component: QuizListComponent },
  { path: "recommandations/modules", component: RecommandationsModulesComponent },
  { path: "recommandations/cours", component: RecommandationsCoursComponent },
  { path: "recherche/modules", component: RechercheModulesComponent },
  { path: "recherche/cours", component: RechercheCoursComponent },
  { path: "admin/dashboard", component: DashboardAdminComponent },
  { path: "questions/new", component: QuestionFormComponent },
  { path: "questions/edit/:id", component: QuestionFormComponent },
  { path: "questions/:id", component: QuestionDetailComponent },
  { path: "questions", component: QuestionListComponent },
  { path: "reponses/new", component: ReponseFormComponent },
  { path: "reponses/edit/:id", component: ReponseFormComponent },
  { path: "reponses/:id", component: ReponseDetailComponent },
  { path: "reponses", component: ReponseListComponent }
];
var ElearningRoutingModule = class _ElearningRoutingModule {
  static \u0275fac = function ElearningRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElearningRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ElearningRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElearningRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/elearning/elearning.module.ts
var ElearningModule = class _ElearningModule {
  static \u0275fac = function ElearningModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ElearningModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ElearningModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ElearningRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatRadioModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatTabsModule,
    MatIconModule,
    StudentCertificatCelebrationComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ElearningModule, [{
    type: NgModule,
    args: [{
      declarations: [
        FoNavbarComponent,
        FoFooterComponent,
        LandingHomeComponent,
        StudentLayoutComponent,
        TeacherLayoutComponent,
        StudentModulesComponent,
        StudentModuleCoursComponent,
        StudentAllCoursComponent,
        StudentRecommandationsComponent,
        StudentRechercheComponent,
        StudentStatistiquesComponent,
        StudentQuizResultComponent,
        StudentCertificatsListComponent,
        StudentCertificatDetailComponent,
        TeacherDashboardComponent,
        ModuleListComponent,
        ModuleFormComponent,
        ModuleDetailComponent,
        CoursListComponent,
        CoursFormComponent,
        CoursDetailComponent,
        QuizListComponent,
        QuizFormComponent,
        QuizDetailComponent,
        QuestionListComponent,
        QuestionFormComponent,
        QuestionDetailComponent,
        ReponseListComponent,
        ReponseFormComponent,
        ReponseDetailComponent,
        QuizPassComponent,
        RecommandationsModulesComponent,
        RecommandationsCoursComponent,
        RechercheModulesComponent,
        RechercheCoursComponent,
        DashboardAdminComponent
      ],
      imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ElearningRoutingModule,
        MatTableModule,
        MatButtonModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,
        MatDialogModule,
        MatRadioModule,
        MatProgressBarModule,
        MatProgressSpinnerModule,
        MatTabsModule,
        MatIconModule,
        StudentCertificatCelebrationComponent
      ]
    }]
  }], null, null);
})();
export {
  ElearningModule
};
/*! Bundled license information:

@angular/core/fesm2022/rxjs-interop.mjs:
  (**
   * @license Angular v21.2.0
   * (c) 2010-2026 Google LLC. https://angular.dev/
   * License: MIT
   *)
*/
//# sourceMappingURL=chunk-2ABUPGEY.js.map
