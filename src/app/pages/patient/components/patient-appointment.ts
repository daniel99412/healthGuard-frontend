import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-patient-appointment',
    imports: [CardModule],
    template: `
    <p-card>
        Citas
    </p-card>
    `,
    styles: [``],
    providers: []
})

export class PatientAppointment implements OnInit {
    constructor() { }

    ngOnInit() { }
}