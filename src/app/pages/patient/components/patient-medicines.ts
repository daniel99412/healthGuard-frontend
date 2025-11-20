import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-patient-medicines',
    imports: [CardModule],
    template: `
    <p-card>
        Medicamento
    </p-card>
    `,
    styles: [``],
    providers: []
})

export class PAtientMedicine implements OnInit {
    constructor() { }

    ngOnInit() { }
}