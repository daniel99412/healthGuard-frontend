import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkeletonModule } from 'primeng/skeleton';
import { ButtonModule } from 'primeng/button';
import { PatientChronologicalVitalsigns } from '@/pages/patient/components/patient-chronological-vitalsigns';
import { PaginatorModule, PaginatorState } from 'primeng/paginator';

@Component({
    selector: 'app-patient-vitalsigns',
    imports: [CardModule, AccordionModule, FontAwesomeModule, SkeletonModule, ButtonModule, PatientChronologicalVitalsigns, PaginatorModule],
    template: `
    <p-card  class="vitalsigns-card">
        <ng-template #header>
            <div class="flex flex-row items-center justify-between items-center pt-2 pl-4 pr-2">
                <div class="">
                    <span class="text-md">Últimos Signos Vitales</span>
                </div>
                <div class="">
                    <p-button variant="text" [rounded]="true" [icon]="pButtonIcon" [label]="pButtonLabel" (click)="switchChronologicalView()" />
                </div>
            </div>
        </ng-template>
        <ng-template #content>
            @if (!chronologicalViewEnabled) {
                <p-accordion value="-1">
                    <p-accordion-panel value="0">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="ruler-vertical"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Estatura</span>
                                <span class="ml-auto mr-2">1.70 mts</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="1">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="weight-hanging"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Peso</span>
                                <span class="ml-auto mr-2">70 kg</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="2">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="thermometer"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Temperatura</span>
                                <span class="ml-auto mr-2">36 °C</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="3">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="lungs"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Frecc. Respiratoria</span>
                                <span class="ml-auto mr-2">17 r/m</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="4">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="droplet"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Saturación de Oxígeno</span>
                                <span class="ml-auto mr-2">90 %</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="5">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="heart-pulse"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Frecc. Cardiaca</span>
                                <span class="ml-auto mr-2">80 lpm</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="6">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="stethoscope"></fa-icon>
                                <span class="font-bold whitespace-nowrap">Presión Arterial</span>
                                <span class="ml-auto mr-2">120/80 mmHg</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                    <p-accordion-panel value="7">
                        <p-accordion-header>
                            <ng-template #toggleicon let-active="active">
                                @if(active) {
                                    <fa-icon icon="chevron-up"></fa-icon>
                                } @else {
                                    <fa-icon icon="chevron-down"></fa-icon>
                                }
                            </ng-template>
                            <span class="flex items-center gap-2 w-full">
                                <fa-icon icon="gauge-high"></fa-icon>
                                <span class="font-bold whitespace-nowrap">IMC</span>
                                <span class="ml-auto mr-2">23.3 IMC</span>
                            </span>
                        </p-accordion-header>
                        <p-accordion-content>
                            <p-skeleton height="10rem"/>
                        </p-accordion-content>
                    </p-accordion-panel>
                </p-accordion>
            } @else {
                @for (value of paginatedVitalSigns; track value.date) {
                    <app-patient-chornological-vitalsigns [chronologicalVitalsigns]="value" />
                }

                <p-paginator
                    (onPageChange)="onPageChange3($event)"
                    [first]="first"
                    [rows]="rows"
                    [totalRecords]="totalRecords"
                    [showFirstLastIcon]="false"
                    [showCurrentPageReport]="true"
                    currentPageReportTemplate="Página {currentPage} de {totalPages}"
                />
            }
        </ng-template>
    </p-card>
    `,
    styles: [`
    `],
    standalone: true,
    providers: []
})

export class PatientVitalSigns implements OnInit {
    chronologicalViewEnabled = false;
    pButtonLabel = "Vista Cronológica"
    pButtonIcon = "pi pi-calendar-clock"

    vitalSigns = [
        {
            label: 'Consulta General',
            date: new Date('2026-03-25T10:30:00'),
            height: 170,
            weight: 70,
            temperature: 36.5,
            respiratoryRate: 17,
            oxygenSaturation: 98,
            heartRate: 72,
            bloodPressure: { systolic: 120, diastolic: 80 },
            bmi: 24.2
        },
        {
            label: 'Control',
            date: new Date('2026-03-20T14:15:00'),
            height: 170,
            weight: 71,
            temperature: 36.8,
            respiratoryRate: 16,
            oxygenSaturation: 97,
            heartRate: 75,
            bloodPressure: { systolic: 118, diastolic: 78 },
            bmi: 24.6
        },
        {
            label: 'Emergencia',
            date: new Date('2026-03-15T08:45:00'),
            height: 170,
            weight: 69,
            temperature: 37.2,
            respiratoryRate: 19,
            oxygenSaturation: 95,
            heartRate: 88,
            bloodPressure: { systolic: 125, diastolic: 85 },
            bmi: 23.9
        },
        {
            label: 'Seguimiento',
            date: new Date('2026-03-10T11:00:00'),
            height: 170,
            weight: 70,
            temperature: 36.4,
            respiratoryRate: 15,
            oxygenSaturation: 99,
            heartRate: 68,
            bloodPressure: { systolic: 115, diastolic: 75 },
            bmi: 24.2
        },
        {
            label: 'Seguimiento',
            date: new Date('2026-03-09T11:00:00'),
            height: 170,
            weight: 70,
            temperature: 36.4,
            respiratoryRate: 15,
            oxygenSaturation: 99,
            heartRate: 68,
            bloodPressure: { systolic: 115, diastolic: 75 },
            bmi: 24.2
        },
        {
            label: 'Admisión',
            date: new Date('2026-03-01T09:30:00'),
            height: 170,
            weight: 72,
            temperature: 36.7,
            respiratoryRate: 18,
            oxygenSaturation: 96,
            heartRate: 78,
            bloodPressure: { systolic: 122, diastolic: 82 },
            bmi: 24.9
        }
    ]

    first: number = 0;
    rows: number = 2;
    totalRecords: number = this.vitalSigns.length;

    onPageChange3(event: PaginatorState) {
        this.first = event.first ?? 0;
        this.rows = event.rows ?? 10;
    }

    constructor() { }

    ngOnInit() { }

    switchChronologicalView() {
        this.chronologicalViewEnabled = !this.chronologicalViewEnabled;
        if (this.chronologicalViewEnabled) {
            this.pButtonLabel = "Atras"
            this.pButtonIcon = "pi pi-arrow-left"
        } else {
            this.pButtonLabel = "Vista Cronológica"
            this.pButtonIcon = "pi pi-calendar-clock"
        }
    }

    get paginatedVitalSigns() {
        return this.vitalSigns.slice(this.first, this.first + this.rows)
    }
}
