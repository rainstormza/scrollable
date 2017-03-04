/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/linker/ng_module_factory';
import * as import1 from './index';
import * as import2 from '@angular/common/src/common_module';
import * as import3 from '@angular/core/src/application_module';
import * as import4 from '@angular/platform-browser/src/browser';
import * as import5 from '@angular/forms/src/directives';
import * as import6 from '@angular/forms/src/form_providers';
import * as import7 from '@angular/common/src/localization';
import * as import8 from '@angular/core/src/application_init';
import * as import9 from '@angular/core/src/testability/testability';
import * as import10 from '@angular/core/src/application_ref';
import * as import11 from '@angular/core/src/linker/compiler';
import * as import12 from '@angular/platform-browser/src/dom/events/hammer_gestures';
import * as import13 from '@angular/platform-browser/src/dom/events/event_manager';
import * as import14 from '@angular/platform-browser/src/dom/shared_styles_host';
import * as import15 from '@angular/platform-browser/src/dom/dom_renderer';
import * as import16 from '@angular/platform-browser/src/security/dom_sanitization_service';
import * as import17 from '@angular/core/src/animation/animation_queue';
import * as import18 from '@angular/core/src/linker/view_utils';
import * as import19 from '@angular/platform-browser/src/browser/title';
import * as import20 from '@angular/forms/src/directives/radio_control_value_accessor';
import * as import21 from '@angular/core/src/di/injector';
import * as import22 from '@angular/core/src/i18n/tokens';
import * as import23 from '@angular/core/src/application_tokens';
import * as import24 from '@angular/platform-browser/src/dom/events/dom_events';
import * as import25 from '@angular/platform-browser/src/dom/events/key_events';
import * as import26 from '@angular/core/src/zone/ng_zone';
import * as import27 from '@angular/platform-browser/src/dom/debug/ng_probe';
import * as import28 from '@angular/core/src/console';
import * as import29 from '@angular/core/src/error_handler';
import * as import30 from '@angular/platform-browser/src/dom/dom_tokens';
import * as import31 from '@angular/platform-browser/src/dom/animation_driver';
import * as import32 from '@angular/core/src/render/api';
import * as import33 from '@angular/core/src/security';
import * as import34 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import35 from '@angular/core/src/change_detection/differs/keyvalue_differs';
class Ng2ScrollableModuleInjector extends import0.NgModuleInjector<import1.Ng2ScrollableModule> {
  _CommonModule_0:import2.CommonModule;
  _ApplicationModule_1:import3.ApplicationModule;
  _BrowserModule_2:import4.BrowserModule;
  _InternalFormsSharedModule_3:import5.InternalFormsSharedModule;
  _FormsModule_4:import6.FormsModule;
  _Ng2ScrollableModule_5:import1.Ng2ScrollableModule;
  __LOCALE_ID_6:any;
  __NgLocalization_7:import7.NgLocaleLocalization;
  _ErrorHandler_8:any;
  _ApplicationInitStatus_9:import8.ApplicationInitStatus;
  _Testability_10:import9.Testability;
  _ApplicationRef__11:import10.ApplicationRef_;
  __ApplicationRef_12:any;
  __Compiler_13:import11.Compiler;
  __APP_ID_14:any;
  __DOCUMENT_15:any;
  __HAMMER_GESTURE_CONFIG_16:import12.HammerGestureConfig;
  __EVENT_MANAGER_PLUGINS_17:any[];
  __EventManager_18:import13.EventManager;
  _DomSharedStylesHost_19:import14.DomSharedStylesHost;
  __AnimationDriver_20:any;
  __DomRootRenderer_21:import15.DomRootRenderer_;
  __RootRenderer_22:any;
  __DomSanitizer_23:import16.DomSanitizerImpl;
  __Sanitizer_24:any;
  __AnimationQueue_25:import17.AnimationQueue;
  __ViewUtils_26:import18.ViewUtils;
  __IterableDiffers_27:any;
  __KeyValueDiffers_28:any;
  __SharedStylesHost_29:any;
  __Title_30:import19.Title;
  __RadioControlRegistry_31:import20.RadioControlRegistry;
  constructor(parent:import21.Injector) {
    super(parent,([] as any[]),([] as any[]));
  }
  get _LOCALE_ID_6():any {
    if ((this.__LOCALE_ID_6 == null)) { (this.__LOCALE_ID_6 = import3._localeFactory(this.parent.get(import22.LOCALE_ID,(null as any)))); }
    return this.__LOCALE_ID_6;
  }
  get _NgLocalization_7():import7.NgLocaleLocalization {
    if ((this.__NgLocalization_7 == null)) { (this.__NgLocalization_7 = new import7.NgLocaleLocalization(this._LOCALE_ID_6)); }
    return this.__NgLocalization_7;
  }
  get _ApplicationRef_12():any {
    if ((this.__ApplicationRef_12 == null)) { (this.__ApplicationRef_12 = this._ApplicationRef__11); }
    return this.__ApplicationRef_12;
  }
  get _Compiler_13():import11.Compiler {
    if ((this.__Compiler_13 == null)) { (this.__Compiler_13 = new import11.Compiler()); }
    return this.__Compiler_13;
  }
  get _APP_ID_14():any {
    if ((this.__APP_ID_14 == null)) { (this.__APP_ID_14 = import23._appIdRandomProviderFactory()); }
    return this.__APP_ID_14;
  }
  get _DOCUMENT_15():any {
    if ((this.__DOCUMENT_15 == null)) { (this.__DOCUMENT_15 = import4._document()); }
    return this.__DOCUMENT_15;
  }
  get _HAMMER_GESTURE_CONFIG_16():import12.HammerGestureConfig {
    if ((this.__HAMMER_GESTURE_CONFIG_16 == null)) { (this.__HAMMER_GESTURE_CONFIG_16 = new import12.HammerGestureConfig()); }
    return this.__HAMMER_GESTURE_CONFIG_16;
  }
  get _EVENT_MANAGER_PLUGINS_17():any[] {
    if ((this.__EVENT_MANAGER_PLUGINS_17 == null)) { (this.__EVENT_MANAGER_PLUGINS_17 = [
      new import24.DomEventsPlugin(),
      new import25.KeyEventsPlugin(),
      new import12.HammerGesturesPlugin(this._HAMMER_GESTURE_CONFIG_16)
    ]
    ); }
    return this.__EVENT_MANAGER_PLUGINS_17;
  }
  get _EventManager_18():import13.EventManager {
    if ((this.__EventManager_18 == null)) { (this.__EventManager_18 = new import13.EventManager(this._EVENT_MANAGER_PLUGINS_17,this.parent.get(import26.NgZone))); }
    return this.__EventManager_18;
  }
  get _AnimationDriver_20():any {
    if ((this.__AnimationDriver_20 == null)) { (this.__AnimationDriver_20 = import4._resolveDefaultAnimationDriver()); }
    return this.__AnimationDriver_20;
  }
  get _DomRootRenderer_21():import15.DomRootRenderer_ {
    if ((this.__DomRootRenderer_21 == null)) { (this.__DomRootRenderer_21 = new import15.DomRootRenderer_(this._DOCUMENT_15,this._EventManager_18,this._DomSharedStylesHost_19,this._AnimationDriver_20,this._APP_ID_14)); }
    return this.__DomRootRenderer_21;
  }
  get _RootRenderer_22():any {
    if ((this.__RootRenderer_22 == null)) { (this.__RootRenderer_22 = import27._createConditionalRootRenderer(this._DomRootRenderer_21,this.parent.get(import27.NgProbeToken,(null as any)),this.parent.get(import10.NgProbeToken,(null as any)))); }
    return this.__RootRenderer_22;
  }
  get _DomSanitizer_23():import16.DomSanitizerImpl {
    if ((this.__DomSanitizer_23 == null)) { (this.__DomSanitizer_23 = new import16.DomSanitizerImpl()); }
    return this.__DomSanitizer_23;
  }
  get _Sanitizer_24():any {
    if ((this.__Sanitizer_24 == null)) { (this.__Sanitizer_24 = this._DomSanitizer_23); }
    return this.__Sanitizer_24;
  }
  get _AnimationQueue_25():import17.AnimationQueue {
    if ((this.__AnimationQueue_25 == null)) { (this.__AnimationQueue_25 = new import17.AnimationQueue(this.parent.get(import26.NgZone))); }
    return this.__AnimationQueue_25;
  }
  get _ViewUtils_26():import18.ViewUtils {
    if ((this.__ViewUtils_26 == null)) { (this.__ViewUtils_26 = new import18.ViewUtils(this._RootRenderer_22,this._Sanitizer_24,this._AnimationQueue_25)); }
    return this.__ViewUtils_26;
  }
  get _IterableDiffers_27():any {
    if ((this.__IterableDiffers_27 == null)) { (this.__IterableDiffers_27 = import3._iterableDiffersFactory()); }
    return this.__IterableDiffers_27;
  }
  get _KeyValueDiffers_28():any {
    if ((this.__KeyValueDiffers_28 == null)) { (this.__KeyValueDiffers_28 = import3._keyValueDiffersFactory()); }
    return this.__KeyValueDiffers_28;
  }
  get _SharedStylesHost_29():any {
    if ((this.__SharedStylesHost_29 == null)) { (this.__SharedStylesHost_29 = this._DomSharedStylesHost_19); }
    return this.__SharedStylesHost_29;
  }
  get _Title_30():import19.Title {
    if ((this.__Title_30 == null)) { (this.__Title_30 = new import19.Title()); }
    return this.__Title_30;
  }
  get _RadioControlRegistry_31():import20.RadioControlRegistry {
    if ((this.__RadioControlRegistry_31 == null)) { (this.__RadioControlRegistry_31 = new import20.RadioControlRegistry()); }
    return this.__RadioControlRegistry_31;
  }
  createInternal():import1.Ng2ScrollableModule {
    this._CommonModule_0 = new import2.CommonModule();
    this._ApplicationModule_1 = new import3.ApplicationModule();
    this._BrowserModule_2 = new import4.BrowserModule(this.parent.get(import4.BrowserModule,(null as any)));
    this._InternalFormsSharedModule_3 = new import5.InternalFormsSharedModule();
    this._FormsModule_4 = new import6.FormsModule();
    this._Ng2ScrollableModule_5 = new import1.Ng2ScrollableModule();
    this._ErrorHandler_8 = import4.errorHandler();
    this._ApplicationInitStatus_9 = new import8.ApplicationInitStatus(this.parent.get(import8.APP_INITIALIZER,(null as any)));
    this._Testability_10 = new import9.Testability(this.parent.get(import26.NgZone));
    this._ApplicationRef__11 = new import10.ApplicationRef_(this.parent.get(import26.NgZone),this.parent.get(import28.Console),this,this._ErrorHandler_8,this,this._ApplicationInitStatus_9,this.parent.get(import9.TestabilityRegistry,(null as any)),this._Testability_10);
    this._DomSharedStylesHost_19 = new import14.DomSharedStylesHost(this._DOCUMENT_15);
    return this._Ng2ScrollableModule_5;
  }
  getInternal(token:any,notFoundResult:any):any {
    if ((token === import2.CommonModule)) { return this._CommonModule_0; }
    if ((token === import3.ApplicationModule)) { return this._ApplicationModule_1; }
    if ((token === import4.BrowserModule)) { return this._BrowserModule_2; }
    if ((token === import5.InternalFormsSharedModule)) { return this._InternalFormsSharedModule_3; }
    if ((token === import6.FormsModule)) { return this._FormsModule_4; }
    if ((token === import1.Ng2ScrollableModule)) { return this._Ng2ScrollableModule_5; }
    if ((token === import22.LOCALE_ID)) { return this._LOCALE_ID_6; }
    if ((token === import7.NgLocalization)) { return this._NgLocalization_7; }
    if ((token === import29.ErrorHandler)) { return this._ErrorHandler_8; }
    if ((token === import8.ApplicationInitStatus)) { return this._ApplicationInitStatus_9; }
    if ((token === import9.Testability)) { return this._Testability_10; }
    if ((token === import10.ApplicationRef_)) { return this._ApplicationRef__11; }
    if ((token === import10.ApplicationRef)) { return this._ApplicationRef_12; }
    if ((token === import11.Compiler)) { return this._Compiler_13; }
    if ((token === import23.APP_ID)) { return this._APP_ID_14; }
    if ((token === import30.DOCUMENT)) { return this._DOCUMENT_15; }
    if ((token === import12.HAMMER_GESTURE_CONFIG)) { return this._HAMMER_GESTURE_CONFIG_16; }
    if ((token === import13.EVENT_MANAGER_PLUGINS)) { return this._EVENT_MANAGER_PLUGINS_17; }
    if ((token === import13.EventManager)) { return this._EventManager_18; }
    if ((token === import14.DomSharedStylesHost)) { return this._DomSharedStylesHost_19; }
    if ((token === import31.AnimationDriver)) { return this._AnimationDriver_20; }
    if ((token === import15.DomRootRenderer)) { return this._DomRootRenderer_21; }
    if ((token === import32.RootRenderer)) { return this._RootRenderer_22; }
    if ((token === import16.DomSanitizer)) { return this._DomSanitizer_23; }
    if ((token === import33.Sanitizer)) { return this._Sanitizer_24; }
    if ((token === import17.AnimationQueue)) { return this._AnimationQueue_25; }
    if ((token === import18.ViewUtils)) { return this._ViewUtils_26; }
    if ((token === import34.IterableDiffers)) { return this._IterableDiffers_27; }
    if ((token === import35.KeyValueDiffers)) { return this._KeyValueDiffers_28; }
    if ((token === import14.SharedStylesHost)) { return this._SharedStylesHost_29; }
    if ((token === import19.Title)) { return this._Title_30; }
    if ((token === import20.RadioControlRegistry)) { return this._RadioControlRegistry_31; }
    return notFoundResult;
  }
  destroyInternal():void {
    this._ApplicationRef__11.ngOnDestroy();
    this._DomSharedStylesHost_19.ngOnDestroy();
  }
}
export const Ng2ScrollableModuleNgFactory:import0.NgModuleFactory<import1.Ng2ScrollableModule> = new import0.NgModuleFactory(Ng2ScrollableModuleInjector,import1.Ng2ScrollableModule);