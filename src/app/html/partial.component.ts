import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'partial',
    templateUrl: './partial.component.html',
    styleUrls: ['./partial.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class PartialComponent implements OnInit {
	@Input() nome: string;

    constructor() {}

    ngOnInit() {}

}
