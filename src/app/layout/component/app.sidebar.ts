import { Component, ElementRef } from '@angular/core';
import { AppMenu } from './app.menu';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [AppMenu],
    template: `
    <div class="layout-sidebar shadow-md dark:!shadow-slate-700">
        <app-menu></app-menu>
        <div class="flex flex-col">
            hola
        </div>
    </div>`
})
export class AppSidebar {
    constructor(public el: ElementRef) { }
}
