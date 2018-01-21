import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from './../global/global.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './root.component.html',
    styleUrls: ['./root.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RootComponent implements OnInit {
    public vars: any;
    public sub: any;
    public params: any;
    public json2str(arg) {
        return JSON.stringify(arg);
    }
    constructor(private route: ActivatedRoute, private router: Router, private gd: GlobalService) {
        var self = this;
        self.vars = gd.vars;
        self.vars.path = '/';
        self.route.data.subscribe(data => {
            if (data && data.redirecting)
                self.router.navigate(['/'], { queryParams: { '404': self.router.url } });
        });

    }
    ngOnInit() {
        this.sub = this.route.queryParams.subscribe(params => {
            this.params = params;
        });
    }
}
