import { booleanAttribute, Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-profile',
    imports: [DrawerModule],
    template: `
    <p-drawer header="Profile" [(visible)]="visible" position="right" (onHide)="handleHide()">
        Hola
    </p-drawer>
    `,
    providers: [LayoutService]
})

export class Profile implements OnInit {
    @Input({ transform: booleanAttribute }) visible: boolean = false;
    @Output() visibleChange = new EventEmitter<boolean>();

    constructor() { }

    ngOnInit() { }

    handleHide() {
        this.visible = false;
        this.visibleChange.emit(false);
    }
}