import { Subject } from 'rxjs/Rx';
import { Toast } from '../models/toast.model';
export declare class ToastService {
    toasts$: Subject<any>;
    toasts: Toast[];
    success(message: string): void;
    error(message: string): void;
    warning(message: string): void;
    info(message: string): void;
    add(toast: Toast): void;
    remove(toast: Toast): void;
}
