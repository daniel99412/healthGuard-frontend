import { Component, OnInit, ViewChild } from '@angular/core';
import { AvatarModule } from "primeng/avatar";
import { SkeletonModule } from "primeng/skeleton";
import { ButtonModule } from "primeng/button";
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { PatientInfoDetails } from "./patient-info-details";

@Component({
    selector: 'app-patient-info',
    imports: [CardModule, AvatarModule, SkeletonModule, ButtonModule, FontAwesomeModule, ChipModule, PatientInfoDetails],
    template: `
    <p-card>
        <div class="flex items-center flex-col lg:flex-row lg:justify-between">
            <div class="flex items-start flex-col md:flex-row gap-8">
                <p-avatar label="NC" class="mr-2 bg-indigo-100! w-[6.4rem]! h-[6.4rem]!" size="xlarge" shape="circle"></p-avatar>
                <div class="flex flex-col gap-4">
                    <div class="flex items-center">
                        <span class="text-surface-900 dark:text-surface-0 font-bold text-3xl">Nombre Completo Paciente</span>
                    </div>
                    <div class="flex items-center flex-wrap gap-10">
                        <div>
                            <span class="text-sm text-surface-500 dark:text-surface-300">Edad</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">26</div>
                        </div>
                        <div>
                            <span class="text-sm text-surface-500 dark:text-surface-300">Sexo</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">M/F</div>
                        </div>
                        <div>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">
                                <p-chip class="!py-0 !pl-0 !pr-4">
                                    <span class="bg-cyan-600 text-primary-contrast rounded-full w-8 h-8 flex items-center justify-center">
                                        <fa-icon icon="user-shield"></fa-icon>
                                    </span>
                                    <span class="ml-2 font-medium">
                                        Menor de edad
                                    </span>
                                </p-chip>
                            </div>
                        </div>
                        <div>
                            <span class="text-sm text-surface-500 dark:text-surface-300">Padre/Tutor</span>
                            <div class="text-surface-700 dark:text-surface-100 mt-1 text-sm font-semibold">Nombre Responsable completo</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-6 lg:mt-0 flex items-center gap-4">
                <button pButton [rounded]="true" [raised]="true" [outlined]="true" severity="secondary">
                    <fa-icon icon="pencil" pButtonIcon/>
                </button>
                <button pButton  [rounded]="true" [raised]="true" [outlined]="true" severity="secondary" (click)="patientInfoDetails.toggleDetails($event)">
                    <fa-icon icon="address-card" pButtonIcon/>
                </button>
                <button pButton [rounded]="true" [raised]="true">
                    <fa-icon icon="plus" pButtonIcon/>
                    <span pButtonLabel>Iniciar nueva consulta</span>
                </button>
            </div>
        </div>
        <div class="flex flex-col mt-4">
            <app-patient-info-details />
        </div>
        
    </p-card>
    `,
    styles: [``],
    providers: []
})

export class PatientInfo implements OnInit {
    @ViewChild(PatientInfoDetails) patientInfoDetails!: PatientInfoDetails;
    constructor() { }

    ngOnInit() { }
}