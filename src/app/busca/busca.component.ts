import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from './../global/global.service';

@Component({
    selector: 'app-busca',
    templateUrl: './busca.component.html',
    styleUrls: ['./busca.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BuscaComponent implements OnInit {

    public sub;
    public params;
    public vars: any;
    public json2str(arg) {
        return JSON.stringify(arg);
    }
    constructor(private gd: GlobalService, private route: ActivatedRoute, private router: Router) {
        var self = this;
        self.vars = gd.vars;
    }
    ngOnInit() {
        var self = this;
        self.sub = self.route
            .params
            .subscribe(params => {
                self.params = {
                    id: params.id,
                    in: params.in || '',
                    out: params.out || '',
                    rooms: params.rooms || ''
                }
            });
    }

    ngOnDestroy() {
        var self = this;
        self.sub.unsubscribe();
    }

}
