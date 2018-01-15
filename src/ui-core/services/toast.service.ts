import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Rx';

import { Toast } from '../models/toast.model';

@Injectable()
export class ToastService {
    
    toasts$: Subject<any> = new Subject<any>();
    toasts: Toast[] = [];
    
    success(message: string): void {
        this.add(new Toast({
            message: message,
            type: 'success'
        }));
    };
    
    error(message: string): void {
        this.add(new Toast({
            message: message,
            type: 'error'
        }));
    };
    
    warning(message: string): void {
        this.add(new Toast({
            message: message,
            type: 'warning'
        }));
    };
    
    info(message: string): void {
        this.add(new Toast({
            message: message,
            type: 'info'
        }));
    };
    
    add(toast: Toast): void {
        
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
    
    remove(toast: Toast): void {
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
