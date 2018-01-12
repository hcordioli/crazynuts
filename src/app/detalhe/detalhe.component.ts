import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-detalhe',
    templateUrl: './detalhe.component.html',
    styleUrls: ['./detalhe.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetalheComponent implements OnInit {

    constructor(private route: ActivatedRoute, private router: Router) {}
    public sub;
    public params;
    public json2str(arg) {
        return JSON.stringify(arg);
    }
    ngOnInit() {
        var self = this;
        console.log('detalhe');
        self.sub = self.route
            .params
            .subscribe(params => {
                console.log(params);
                self.params = params;
            });
    }

    ngOnDestroy() {
        var self = this;
        self.sub.unsubscribe();
    }
}
