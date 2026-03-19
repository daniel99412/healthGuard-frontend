import { booleanAttribute, Component, EventEmitter, input, Input, OnInit, Output } from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { LayoutService } from '../service/layout.service';

@Component({
    selector: 'app-profile',
    standalone: true,
    imports: [DrawerModule],
    template: `
    <p-drawer header="Profile" [(visible)]="visible" position="right" (onHide)="handleHide()" styleClass="lg:!shadow-md dark:!shadow-slate-700 lg:!w-[30rem] lg:!h-[95%] lg:!mt-[1.5rem] lg:!rounded-l-lg" [modal]="false">
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
