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
    standalone: true,
    providers: []
})

export class PatientBackground implements OnInit {
    constructor() { }

    ngOnInit() { }
}
