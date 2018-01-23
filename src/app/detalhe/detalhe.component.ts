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

    public vars: any;
    constructor(private route: ActivatedRoute, private router: Router, private gd: GlobalService, private httpC: HttpClient) {
        var self = this;
        self.vars = gd.vars;
        self.vars.path = 'detalhe';
        self.vars.loadSearch = false;
    }
    ngOnInit() {
        var self = this;
        if (/;hi=(.*?)(;|$|\/)/.test(self.router.url)) {
            self.hi = /;hi=(.*?)(;|$|\/)/.exec(self.router.url);
            self.hi = self.hi.length > 1 ? self.hi[1] : "";
            self.loadInfo();
        } else
            console.log('!id');
    }
    public res: any;
    public hi: any;
    public loadInfo() {
        var self = this,
            h = self.vars.hotelList,
            k = self.vars.keys,
            id = self.hi;
        self.vars.path = 'detalhe';
        self.vars.keys = self.vars.keys || Utils.cookie('keys');
        if (!self.vars.keys) {
            alert('Favor inserir token');
            return;
        }
        var p = self.vars.params,
            date2p = function(str) {
                return str.replace(/^(\d{2})(\d{2})(\d{2})$/gi, '$1\/$2\/20$3');
            },
            o = {
                id: self.hi || p.id,
                in: date2p(p.in),
                out: date2p(p.out),
                apt: p.apt.replace(/[~]+/gi, '&').replace(/[:]+/gi, '='),
                keys: k.replace(/[~]+/gi, '&').replace(/[:]+/gi, '=')
            };
        self.httpC.get(('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelinfo?hotelId=' + o.id +
                (o.in ? '&checkin=' + o.in + '&checkout=' + (o.out || o.in) : '') + (o.apt || '') + '&' + o.keys))
            .subscribe(data => {
                var tmp;
                self.res = data;
                tmp = Utils.tripRating(self.res.hotelTripAdvisorRating);
                if (tmp)
                    self.res.hotelTripAdvisorLabel = tmp;
            }, err => {
                var erro = err ? err.error && err.error.text : '{messagem: Erro!}';
                setTimeout(function() {
                    erro = 'Erro: ' + erro;
                    h.HotelListResponseStr = erro;
                    setTimeout(function() {
                        self.router.navigate(['/', 'u', self.vars.params]);
                    }, 0);
                }, 1000)
            });
    }
}
