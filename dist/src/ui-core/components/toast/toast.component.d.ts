import { OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ToastService } from '../../services/toast.service';
import { Toast } from '../../models/toast.model';
export declare class UIToastComponent implements OnInit, OnDestroy {
    private toastService;
    toasts: Toast[];
    destroyed$: Subject<boolean>;
    constructor(toastService: ToastService);
    ngOnInit(): void;
    onRemove(toast: Toast): void;
    ngOnDestroy(): void;
}
