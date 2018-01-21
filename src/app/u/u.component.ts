import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from './../global/global.service';

@Component({
    selector: 'app-u',
    templateUrl: './u.component.html',
    styleUrls: ['./u.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class UComponent implements OnInit {
	public vars: any;
    constructor(private gd: GlobalService) {
        var self = this;
        self.vars = gd.vars;
    }
    ngOnInit() {}

}
