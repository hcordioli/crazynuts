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
        self.res = null;
        self.img = null;
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
    public apt = { in: 0,
        out: 0,
        noites: 0,
        adult: 0,
        kid: 0
    };
    public res: any;
    public img: any;
    public imgHeight = { height: 'auto' };
    public hi: any;
    public show = {
        moreImg: false,
        img: 0
    };
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
                return str.replace(/^(\d{2})(\d{2})(\d{2})$/gi, '$2\/$1\/20$3');
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
        self.httpC.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelimages?hotelId=' + o.id + '&' + o.keys).subscribe(data => {
            var i;
            self.img = data;
            for (i = 0; i < self.img.hotelImages.HotelImage.length; i++)
                if (self.img.hotelImages.HotelImage[i].main && i) {
                    self.img.hotelImages.HotelImage[i].unshift(self.img.hotelImages.HotelImage[i]);
                    self.img.hotelImages.HotelImage[i].splice(i, 1);
                }
        });
    }
    public imgRatio(tgt, i) {
        var self = this;
        self.img.hotelImages.HotelImage[i].cls = tgt.height * 1.333 > tgt.width ? 'tall' : 'wide';
        if (self.imgHeight.height === 'auto')
            self.imgHeight.height = (tgt.parentNode.parentNode.offsetWidth * 0.75) + 'px';
    }
}
