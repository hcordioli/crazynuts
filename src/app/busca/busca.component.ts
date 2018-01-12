import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-busca',
    templateUrl: './busca.component.html',
    styleUrls: ['./busca.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BuscaComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) {}
    public sub;
    public params;
    public json2str(arg) {
        return JSON.stringify(arg);
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