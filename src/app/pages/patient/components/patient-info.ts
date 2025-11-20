import { Component, OnInit } from '@angular/core';
import { AvatarModule } from "primeng/avatar";
import { SkeletonModule } from "primeng/skeleton";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-patient-info',
    imports: [CardModule, AvatarModule, SkeletonModule, ButtonModule],
    template: `
    <p-card>
        <div class="flex items-center flex-col lg:flex-row lg:justify-between">
            <div class="flex items-start flex-col md:flex-row gap-8">
                <p-avatar label="PC" class="mr-2 bg-indigo-100! w-[6.4rem]! h-[6.4rem]!" size="xlarge" shape="circle"></p-avatar>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center">
                        <span class="text-surface-900 dark:text-surface-0 font-bold text-3xl">Paciente Nombre Completo</span>
                    </div>
                    <div class="flex items-center flex-wrap gap-10">
                        <div>
                            <span class="text-surface-500 dark:text-surface-300">Nacimiento</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">10/10/1994</div>
                        </div>
                        <div>
                            <span class="text-surface-500 dark:text-surface-300">Edad</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">26</div>
                        </div>
                        <div>
                            <span class="text-surface-500 dark:text-surface-300">Sexo</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">Masculino/Femenino</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 lg:mt-0 flex items-center gap-4">
                <p-button icon="pi pi-pencil" [rounded]="true" [raised]="true" [outlined]="true" severity="secondary"/>
                <p-button icon="pi pi-eye" [rounded]="true" [raised]="true" [outlined]="true" severity="secondary"/>
                <p-button [rounded]="true" [raised]="true" label="Iniciar nueva consulta" icon="pi pi-plus" />
            </div>
        </div>
    </p-card>
    `,
    styles: [``],
    providers: []
})

export class PatientInfo implements OnInit {
    constructor() { }

    ngOnInit() { }
}