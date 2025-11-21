import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SkeletonModule } from 'primeng/skeleton';

@Component({
    selector: 'app-patient-vitalsigns',
    imports: [CardModule, AccordionModule, FontAwesomeModule, SkeletonModule],
    template: `
    <p-card>
        <ng-template #title>
            Signos Vitales
        </ng-template>
        <ng-template #content>
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
                            <span class="font-bold whitespace-nowrap">Altura</span>
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
                            <fa-icon icon="gauge-high"></fa-icon>
                            <span class="font-bold whitespace-nowrap">BMI</span>
                            <span class="ml-auto mr-2">23.3 BMI</span>
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
                            <fa-icon icon="thermometer"></fa-icon>
                            <span class="font-bold whitespace-nowrap">Temperatura</span>
                            <span class="ml-auto mr-2">36 °C</span>
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
                            <fa-icon icon="lungs"></fa-icon>
                            <span class="font-bold whitespace-nowrap">Frecc. Respiratoria</span>
                            <span class="ml-auto mr-2">17 r/m</span>
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
                            <fa-icon icon="droplet"></fa-icon>
                            <span class="font-bold whitespace-nowrap">Saturación O2</span>
                            <span class="ml-auto mr-2">90 %</span>
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
                            <fa-icon icon="heart-pulse"></fa-icon>
                            <span class="font-bold whitespace-nowrap">Frecc. Cardiaca</span>
                            <span class="ml-auto mr-2">80 lpm</span>
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
                            <fa-icon icon="stethoscope"></fa-icon>
                            <span class="font-bold whitespace-nowrap">Presión Arterial</span>
                            <span class="ml-auto mr-2">120/80 mmHg</span>
                        </span>
                    </p-accordion-header>
                    <p-accordion-content>
                        <p-skeleton height="10rem"/>
                    </p-accordion-content>
                </p-accordion-panel>
            </p-accordion>
        </ng-template>
    </p-card>
    `,
    styles: [``],
    providers: []
})

export class PatientVitalSigns implements OnInit {
    constructor() { }

    ngOnInit() { }
}