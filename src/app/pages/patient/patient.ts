import { Component, OnInit } from '@angular/core';
import { PatientInfo } from './components/patient-info';
import { PatientVitalSigns } from "./components/patient-vitalsigns";
import { PatientArchives } from "./components/patient-archives";
import { PatientBackground } from "./components/patient-background";
import { PatientAppointment } from "./components/patient-appointment";
import { PAtientMedicine } from "./components/patient-medicines";

@Component({
    selector: 'app-patient',
    imports: [PatientInfo, PatientVitalSigns, PatientArchives, PatientBackground, PatientAppointment, PAtientMedicine],
    template: `
    <div class="grid gap-4 mb-4">
        <app-patient-info/>
    </div>
    <div class="grid lg:grid-cols-3 gap-4">
        <app-patient-vitalsigns class="lg:row-start-1"></app-patient-vitalsigns>
        <app-patient-archives class="col-start-1 lg:row-start-2 row-start-5"></app-patient-archives>
        <app-patient-back class="lg:col-start-2 lg:row-start-1"></app-patient-back>
        <app-patient-medicines class="lg:col-start-2 lg:row-start-2"></app-patient-medicines>
        <app-patient-appointment class="lg:col-start-3 lg:row-start-1"></app-patient-appointment>
    </div>
    `,
    styles: [``],
    providers: []
})

export class Patient implements OnInit {
    constructor() { }

    ngOnInit() { }
}