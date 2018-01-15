export class Toast {
    
    message: string;
    type: string;
    duration?: number = 6000;
    show?: boolean;
    
    constructor(toast: Toast) {
        Object.assign(this, toast);
    }
    
}
