import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';
import { AccordionModule } from 'primeng/accordion';

@Component({
    selector: 'app-patient-vitalsigns',
    imports: [CardModule, AccordionModule],
    template: `
    <p-card>
        <ng-template #title>
            Signos Vitales
        </ng-template>
        <ng-template #content>
            <p-accordion value="4">
                <p-accordion-panel value="0">
                    <p-accordion-header>Altura</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="1">
                    <p-accordion-header>Peso</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="2">
                    <p-accordion-header>BMI</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="3">
                    <p-accordion-header>Temperatura</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="4">
                    <p-accordion-header>Frecc. Respiratoria</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="5">
                    <p-accordion-header>Saturación O2</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="6">
                    <p-accordion-header>Frecc. Cardiaca</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
                </p-accordion-panel>
                <p-accordion-panel value="7">
                    <p-accordion-header>Presion Arterial</p-accordion-header>
                    <p-accordion-content>Hola</p-accordion-content>
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