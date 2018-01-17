import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from './../global/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Utils } from './../utils/utils';

@Component({
    selector: 'app-detalhe',
    templateUrl: './detalhe.component.html',
    styleUrls: ['./detalhe.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class DetalheComponent implements OnInit {

    public sub;
    public params;
    public json2str(arg) {
        return JSON.stringify(arg);
    }
    public vars: any;
    constructor(private route: ActivatedRoute, private router: Router, private gd: GlobalService, private httpC: HttpClient) {
        var self = this;
        self.vars = gd.vars;
        self.vars.path = 'detalhe';
        self.vars.loadSearch = false;
    }
    ngOnInit() {
        var self = this;
        self.sub = self.route
            .params
            .subscribe(params => {
                var arr = [],
                    tmp;
                self.params = {
                    id: params.id,
                    in: params.in || '',
                    out: params.out || '',
                    apt: params.apt || ''
                }
                if (!params.id) {
                    console.log('/');
                    self.router.navigate(['/']);
                } else {
                    if (!(params.in | 0))
                        self.params.in = Utils.date2str('');
                    arr.push(params.id);
                    arr.push((self.params.in | 0));
                    arr.push((params.out | 0) || self.params.in);
                    arr.push(params.apt || '_1=2');
                    if (!params.apt) {
                        console.log('/');
                        self.router.navigate([arr.join('/')]);
                    } else {
                        self.loadInfo();
                    }
                }
            });
    }
    public res: any;
    public loadInfo() {
        var self = this,
            m = self.vars.mdl,
            h = self.vars.hotelList,
            k = m.keys;
        self.vars.hotelsUrl.keys = self.vars.hotelsUrl.keys || Utils.cookie('keys');
        if (!self.vars.hotelsUrl.keys) {
            alert('Favor inserir token');
            return;
        }
        self.httpC.get(
            'https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelinfo?' +
            'hotelId=' + self.params.id +
            self.vars.hotelsUrl.keys).subscribe(data => {
            self.res = data;
        }, err => {
            var erro = err ? err.error && err.error.text : '{messagem: Erro!}';
            alert(erro);
            setTimeout(function() {
                erro = 'Erro: ' + erro;
                h.HotelListResponseStr = erro;
                setTimeout(function() {
                    var arr = [];
                    arr.push(self.params.id);
                    arr.push((self.params.in | 0));
                    arr.push((self.params.out | 0) || self.params.in);
                    arr.push(self.params.apt || '_1=2');
                    console.log(arr);
                    self.router.navigate([arr.join('/')]);
                }, 0);
            }, 1000)
        });
    }
    ngOnDestroy() {
        var self = this;
        self.sub.unsubscribe();
    }
}
