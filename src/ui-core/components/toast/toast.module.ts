import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UIToastComponent } from './toast.component';

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

export class UIToastModule {
}
