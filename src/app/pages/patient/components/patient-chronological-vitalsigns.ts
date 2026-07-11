import { Component, Input, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { ChipModule } from 'primeng/chip';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-patient-chornological-vitalsigns',
    imports: [CardModule, ChipModule, DatePipe],
    template: `
        <p-card class="chornologial-vitalsigns-card m-4">
            <ng-template #header>
                <div class="flex flex-row justify-between p-2">
                    <div class="flex">
                        <p-chip [label]="chronologicalVitalsigns.label"  />
                    </div>
                    <div class="flex">
                        <span class="text-sm">{{ chronologicalVitalsigns.date | date:'dd-MM-yyyy HH:mm' }}</span>
                    </div>
                </div>
            </ng-template>

            <div class="grid grid-cols-2 gap-10 hover:text-blue-500 gap-2">
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Estatura</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.height }} cm</span>
                </div>
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Peso</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.weight }} kg</span>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 hover:text-blue-500  gap-2">
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Temperatura</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.temperature }} °C</span>
                </div>
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Frecc. Respiratoria</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.respiratoryRate }} r/m</span>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 hover:text-blue-500  gap-2">
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Saturación de Oxígeno</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.oxygenSaturation }} %</span>
                </div>
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Frecc. Cardiaca</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.heartRate }} lpm</span>
                </div>
            </div>
            <div class="grid grid-cols-2 gap-10 hover:text-blue-500  gap-2">
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">Presión Arterial</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.bloodPressure.systolic }}/ {{ chronologicalVitalsigns.bloodPressure.diastolic }} mmHg</span>
                </div>
                <div class="grid grid-cols-2 items-center">
                    <span class="text-sm">IMC</span>
                    <span class="text-sm font-bold lg:text-left text-right">{{ chronologicalVitalsigns.bmi }} IMC</span>
                </div>
            </div>
        </p-card>
    `,
    styles: [`
    .chornologial-vitalsigns-card {
        background: #F2F8FC;
    }
    .p-chip {
        background: blue;
        color: white
    }
    `],
    standalone: true,
    providers: []
})
export class PatientChronologicalVitalsigns implements OnInit {
    @Input() chronologicalVitalsigns: any;
    constructor() { }

    ngOnInit() { }
}
