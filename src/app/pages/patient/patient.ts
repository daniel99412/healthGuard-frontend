import { Component, OnInit } from '@angular/core';
import { PatientInfo } from './components/patient-info';
import { PatientVitalSigns } from "./components/patient-vitalsigns";
import { PatientArchives } from "./components/patient-archives";
import { PatientBackground } from "./components/patient-background";
import { Button } from "primeng/button";
import { PatientAppointment } from "./components/patient-appointment";
import { PAtientMedicine } from "./components/patient-medicines";

@Component({
    selector: 'app-patient',
    imports: [PatientInfo, PatientVitalSigns, PatientArchives, PatientBackground, Button, PatientAppointment, PAtientMedicine],
    template: `
    <div class="grid gap-4 mb-4">
        <app-patient-info/>
    </div>
    <div class="grid lg:grid-cols-3 gap-4">
        <div class="grid gap-4">
            <app-patient-vitalsigns></app-patient-vitalsigns>
            <app-patient-archives></app-patient-archives>
        </div>
        <div class="grid gap-4">
            <app-patient-back></app-patient-back>
            <app-patient-medicines></app-patient-medicines>
        </div>
        <div class="grid gap-4">
            <app-patient-app></app-patient-app>
        </div>
    </div>
    `,
    styles: [``],
    providers: []
})

export class Patient implements OnInit {
    constructor() { }

    ngOnInit() { }
}