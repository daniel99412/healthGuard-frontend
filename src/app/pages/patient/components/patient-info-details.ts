import { booleanAttribute, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
    selector: 'app-patient-info-details',
    imports: [PopoverModule],
    template: `
    <p-popover #details>
        <div class="flex flex-col gap-4 w-[30rem]">
            <div class="flex flex-col gap-4">
                <div class="flex items-center flex-warp gap-10">
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Fecha nacimiento</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">26/10/1994</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">CURP</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">PELJ941010HJCRPN05</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Email</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">john.doe@mail.com</div>
                    </div>
                </div>
                <div class="flex items-center flex-warp gap-10">
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Télefono</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">334 455 6677</div>
                    </div>
                    <div>
                        <span class="text-sm text-surface-500 dark:text-surface-300">Domicilio</span>
                        <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">Calle 123, Col. Onia, Ciudad</div>
                    </div>
                </div>
                <div class="flex items-center flex-warp gap-10">
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
        </div>
    </p-popover>
    `,
    styles: ['']
})

export class PatientInfoDetails implements OnInit {
    @ViewChild('details') details!: Popover;

    constructor() {
    }

    ngOnInit() {
    }

    toggleDetails(event: Event) {
        this.details.toggle(event);
    }
}