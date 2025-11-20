import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-patient-back',
    imports: [CardModule],
    template: `
    <p-card>
        Antecedentes
    </p-card>
    `,
    styles: [``],
    providers: []
})

export class PatientBackground implements OnInit {
    constructor() { }

    ngOnInit() { }
}