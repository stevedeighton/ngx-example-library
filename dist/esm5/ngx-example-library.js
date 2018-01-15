import { Component, Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { CommonModule } from '@angular/common';
import { Subject as Subject$2 } from 'rxjs/Subject';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Toast = (function () {
    function Toast(toast) {
        this.duration = 6000;
        Object.assign(this, toast);
    }
    return Toast;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastService$1 = (function () {
    function ToastService() {
        this.toasts$ = new Subject();
        this.toasts = [];
    }
    /**
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.success = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.add(new Toast({
            message: message,
            type: 'success'
        }));
    };
    
    /**
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.error = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.add(new Toast({
            message: message,
            type: 'error'
        }));
    };
    
    /**
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.warning = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.add(new Toast({
            message: message,
            type: 'warning'
        }));
    };
    
    /**
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.info = /**
     * @param {?} message
     * @return {?}
     */
    function (message) {
        this.add(new Toast({
            message: message,
            type: 'info'
        }));
    };
    
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastService.prototype.add = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        var _this = this;
        toast.show = false;
        this.toasts.push(toast);
        this.toasts$.next(this.toasts);
        setTimeout(function () {
            if (_this.toasts[_this.toasts.indexOf(toast)]) {
                _this.toasts[_this.toasts.indexOf(toast)].show = true;
                _this.toasts$.next(_this.toasts);
            }
        }, 5);
        setTimeout(function () {
            if (_this.toasts[_this.toasts.indexOf(toast)]) {
                _this.toasts[_this.toasts.indexOf(toast)].show = false;
                _this.toasts$.next(_this.toasts);
            }
        }, toast.duration);
        setTimeout(function () {
            if (_this.toasts[_this.toasts.indexOf(toast)]) {
                _this.toasts.splice(_this.toasts.indexOf(toast), 1);
                _this.toasts$.next(_this.toasts);
            }
        }, toast.duration + 200);
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    ToastService.prototype.remove = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        var _this = this;
        if (this.toasts[this.toasts.indexOf(toast)]) {
            this.toasts[this.toasts.indexOf(toast)].show = false;
            this.toasts$.next(this.toasts);
            setTimeout(function () {
                _this.toasts.splice(_this.toasts.indexOf(toast), 1);
                _this.toasts$.next(_this.toasts);
            }, 200);
        }
    };
    ToastService.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    ToastService.ctorParameters = function () { return []; };
    return ToastService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UIToastComponent = (function () {
    function UIToastComponent(toastService) {
        this.toastService = toastService;
        this.toasts = [];
        this.destroyed$ = new Subject$2();
    }
    /**
     * @return {?}
     */
    UIToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.toastService.toasts$.takeUntil(this.destroyed$).subscribe(function (toasts) {
            _this.toasts = toasts;
        });
    };
    /**
     * @param {?} toast
     * @return {?}
     */
    UIToastComponent.prototype.onRemove = /**
     * @param {?} toast
     * @return {?}
     */
    function (toast) {
        this.toastService.remove(toast);
    };
    /**
     * @return {?}
     */
    UIToastComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroyed$.next(true);
    };
    UIToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ui-toast',
                    template: "\n      <ul [class.has-toasts]=\"toasts.length > 0\">\n          <li *ngFor=\"let t of toasts\"\n              [class.show]=\"t.show\"\n              [class.error]=\"t.type === 'error'\"\n              [class.warning]=\"t.type === 'warning'\"\n              [class.success]=\"t.type === 'success'\">\n              <p>{{ t.message }}</p>\n              <i class=\"icon-cross icon-button\" (click)=\"onRemove(t)\"></i>\n          </li>\n      </ul>\n    ",
                    styles: ["\n      :host{position:fixed;z-index:30000;bottom:16px;width:288px;right:0}:host ul{position:relative}:host ul li{background:#2156A0;color:#FFF;overflow:hidden;position:relative;bottom:initial;height:auto;max-height:0;transition:right .1s ease-in-out 0s,max-height .1s ease-in-out .1s,margin-top .1s ease-in-out .1s;margin-top:0;left:auto;right:calc(-100% - 16px);border-radius:3px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:0 8px 0 0}:host ul li p{line-height:1.4em;color:#FFF;margin:0;font-size:13px;padding:16px 16px 16px 24px}:host ul li .icon-cross{-ms-flex-negative:0;flex-shrink:0;color:rgba(255,255,255,.5);font-size:12px}:host ul li .icon-cross:hover{color:#FFF;background:rgba(255,255,255,.15)}:host ul li.success{background:#2B9F57}:host ul li.error{background:#D63535}:host ul li.warning{background:#F57F15}:host ul li.show{bottom:0;right:16px;max-height:160px;transition:right .2s ease-in-out .2s,max-height .2s ease-in-out 0s,margin-top .2s ease-in-out 0s;margin-top:8px}@media screen and (max-width:959px){:host{bottom:64px}}\n    "]
                },] },
    ];
    /** @nocollapse */
    UIToastComponent.ctorParameters = function () { return [
        { type: ToastService, },
    ]; };
    return UIToastComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UICoreModule = (function () {
    function UICoreModule() {
    }
    /**
     * @return {?}
     */
    UICoreModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: UICoreModule, providers: [ToastService$1] };
    };
    UICoreModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        UIToastComponent,
                    ],
                    providers: [],
                    imports: [
                        CommonModule,
                    ],
                    exports: [
                        UIToastComponent,
                    ]
                },] },
    ];
    /** @nocollapse */
    UICoreModule.ctorParameters = function () { return []; };
    return UICoreModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { ToastService$1 as ToastService, Toast, UICoreModule, UIToastComponent as ɵa };
