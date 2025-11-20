import { Component, OnInit } from '@angular/core';
import { CardModule } from 'primeng/card';

@Component({
    selector: 'app-patient-archives',
    imports: [CardModule],
    template: `
    <p-card>
        Archivos
    </p-card>
    `
    ,
    styles: [``],
    providers: []
})

export class PatientArchives implements OnInit {
    constructor() { }

    ngOnInit() { }
}