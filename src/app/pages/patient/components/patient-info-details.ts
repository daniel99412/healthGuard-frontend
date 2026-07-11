import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Popover, PopoverModule } from 'primeng/popover';
import { Fieldset } from 'primeng/fieldset';

@Component({
    selector: 'app-patient-info-details',
    imports: [PopoverModule, Fieldset],
    template: `
        <p-fieldset [toggleable]="true" [collapsed]="true" class="w-[100%]">
            <ng-template #header>
                <ng-template #expandicon>
                    <i class="pi pi-angle-double-down"></i>
                </ng-template>
                <ng-template #collapseicon>
                    <i class="pi pi-angle-double-up"></i>
                </ng-template>
                <span class="font-bold">Más Detalles</span>
            </ng-template>
            <div class="flex flex-col">
                <div class="grid lg:grid-cols-5 grid-cols-2 gap-2">
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">CURP</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 lg:text-sm text-xs font-semibold">PELJ941010HJCRPN05</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Télefono</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">334 455 6677</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Email</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">john.doe&#64;mail.com</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Domicilio</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">Calle 123, Col. Onia, Ciudad</div>
                    </div>
                </div>
                <div class="grid lg:grid-cols-5 grid-cols-2 gap-2">
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Contacto Emergencia</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">Contacto Emergencia Paciente</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Relación</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">Madre</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Télefono</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">334 455 6677</div>
                    </div>
                </div>
            </div>
        </p-fieldset>
    `,
    styles: [`::ng-deep .p-fieldset {
        border: none !important;
        padding: 0;
    }
    `],
    standalone: true
})

export class PatientInfoDetails implements OnInit {
    constructor() {
    }

    ngOnInit() {
    }
}
