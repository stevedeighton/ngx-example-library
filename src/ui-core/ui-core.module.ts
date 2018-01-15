import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIToastComponent } from './components/toast/toast.component';
import { ToastService } from './services/toast.service';

@NgModule({
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
})

export class UICoreModule {
    
    public static forRoot(): ModuleWithProviders {
        return {ngModule: UICoreModule, providers: [ToastService]};
    }
    
}
