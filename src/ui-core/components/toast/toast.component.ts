import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import { ToastService } from '../../services/toast.service';
import { Toast } from '../../models/toast.model';

@Component({
    selector: 'ui-toast',
    templateUrl: './toast.component.html',
    styleUrls: ['./toast.component.min.css']
})

export class UIToastComponent implements OnInit, OnDestroy {
    
    toasts: Toast[] = [];
    destroyed$: Subject<boolean> = new Subject<boolean>();
    
    constructor(private toastService: ToastService) {
    }
    
    ngOnInit(): void {
        
        this.toastService.toasts$.takeUntil(this.destroyed$).subscribe((toasts: Toast[]) => {
            this.toasts = toasts;
        });
        
    }
    
    onRemove(toast: Toast): void {
        this.toastService.remove(toast);
    }
    
    ngOnDestroy(): void {
        this.destroyed$.next(true);
    }
    
}
