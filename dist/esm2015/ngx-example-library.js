import { Component, Injectable, NgModule } from '@angular/core';
import { Subject } from 'rxjs/Rx';
import { CommonModule } from '@angular/common';
import { Subject as Subject$2 } from 'rxjs/Subject';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Toast {
    /**
     * @param {?} toast
     */
    constructor(toast) {
        this.duration = 6000;
        Object.assign(this, toast);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastService$1 {
    constructor() {
        this.toasts$ = new Subject();
        this.toasts = [];
    }
    /**
     * @param {?} message
     * @return {?}
     */
    success(message) {
        this.add(new Toast({
            message: message,
            type: 'success'
        }));
    }
    ;
    /**
     * @param {?} message
     * @return {?}
     */
    error(message) {
        this.add(new Toast({
            message: message,
            type: 'error'
        }));
    }
    ;
    /**
     * @param {?} message
     * @return {?}
     */
    warning(message) {
        this.add(new Toast({
            message: message,
            type: 'warning'
        }));
    }
    ;
    /**
     * @param {?} message
     * @return {?}
     */
    info(message) {
        this.add(new Toast({
            message: message,
            type: 'info'
        }));
    }
    ;
    /**
     * @param {?} toast
     * @return {?}
     */
    add(toast) {
        toast.show = false;
        this.toasts.push(toast);
        this.toasts$.next(this.toasts);
        setTimeout(() => {
            if (this.toasts[this.toasts.indexOf(toast)]) {
                this.toasts[this.toasts.indexOf(toast)].show = true;
                this.toasts$.next(this.toasts);
            }
        }, 5);
        setTimeout(() => {
            if (this.toasts[this.toasts.indexOf(toast)]) {
                this.toasts[this.toasts.indexOf(toast)].show = false;
                this.toasts$.next(this.toasts);
            }
        }, toast.duration);
        setTimeout(() => {
            if (this.toasts[this.toasts.indexOf(toast)]) {
                this.toasts.splice(this.toasts.indexOf(toast), 1);
                this.toasts$.next(this.toasts);
            }
        }, toast.duration + 200);
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    remove(toast) {
        if (this.toasts[this.toasts.indexOf(toast)]) {
            this.toasts[this.toasts.indexOf(toast)].show = false;
            this.toasts$.next(this.toasts);
            setTimeout(() => {
                this.toasts.splice(this.toasts.indexOf(toast), 1);
                this.toasts$.next(this.toasts);
            }, 200);
        }
    }
}
ToastService$1.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ToastService$1.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UIToastComponent {
    /**
     * @param {?} toastService
     */
    constructor(toastService) {
        this.toastService = toastService;
        this.toasts = [];
        this.destroyed$ = new Subject$2();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toastService.toasts$.takeUntil(this.destroyed$).subscribe((toasts) => {
            this.toasts = toasts;
        });
    }
    /**
     * @param {?} toast
     * @return {?}
     */
    onRemove(toast) {
        this.toastService.remove(toast);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed$.next(true);
    }
}
UIToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'ui-toast',
                template: `
      <ul [class.has-toasts]="toasts.length > 0">
          <li *ngFor="let t of toasts"
              [class.show]="t.show"
              [class.error]="t.type === 'error'"
              [class.warning]="t.type === 'warning'"
              [class.success]="t.type === 'success'">
              <p>{{ t.message }}</p>
              <i class="icon-cross icon-button" (click)="onRemove(t)"></i>
          </li>
      </ul>
    `,
                styles: [`
      :host{position:fixed;z-index:30000;bottom:16px;width:288px;right:0}:host ul{position:relative}:host ul li{background:#2156A0;color:#FFF;overflow:hidden;position:relative;bottom:initial;height:auto;max-height:0;transition:right .1s ease-in-out 0s,max-height .1s ease-in-out .1s,margin-top .1s ease-in-out .1s;margin-top:0;left:auto;right:calc(-100% - 16px);border-radius:3px;display:-ms-flexbox;display:flex;-ms-flex-pack:justify;justify-content:space-between;-ms-flex-align:center;align-items:center;padding:0 8px 0 0}:host ul li p{line-height:1.4em;color:#FFF;margin:0;font-size:13px;padding:16px 16px 16px 24px}:host ul li .icon-cross{-ms-flex-negative:0;flex-shrink:0;color:rgba(255,255,255,.5);font-size:12px}:host ul li .icon-cross:hover{color:#FFF;background:rgba(255,255,255,.15)}:host ul li.success{background:#2B9F57}:host ul li.error{background:#D63535}:host ul li.warning{background:#F57F15}:host ul li.show{bottom:0;right:16px;max-height:160px;transition:right .2s ease-in-out .2s,max-height .2s ease-in-out 0s,margin-top .2s ease-in-out 0s;margin-top:8px}@media screen and (max-width:959px){:host{bottom:64px}}
    `]
            },] },
];
/** @nocollapse */
UIToastComponent.ctorParameters = () => [
    { type: ToastService, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UIToastModule {
}
UIToastModule.decorators = [
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
UIToastModule.ctorParameters = () => [];

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

export { ToastService$1 as ToastService, Toast, UIToastModule, UIToastComponent as ɵa };
