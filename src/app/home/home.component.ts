import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { CompleterService, RemoteData } from 'ng2-completer';
import { CustomData } from "./regions";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(document:click)': 'onClick($event)',
        '(document:keydown)': 'onKey($event)',
    }
})
export class HomeComponent implements OnInit {

    vars = {
        slogan: 'Encontre o hotel ideal para o seu cliente,<br>com a melhor comissão para você!',
        logo: {
            alt: 'HOTAX',
            url: 'assets/img/logo.svg'
        },
        icons: {
            people: 'assets/img/icons/people.png',
            room: 'assets/img/icons/room.png',
            remove: 'assets/img/icons/remove.png'
        },
        el: null,
        name: 0,
        hotelList: {
            HotelListResponse: null,
            HotelListResponseStr: '',
            markup: []
        }
    }
    open = {
        rooms: false,
        keys: false
    }
    show = {
        room: 0
    }
    /*
        &room[room number, starting with 1]=
        [number of adults],
        [comma-delimited list of children's ages] 

        city=Seattle
        arrivalDate=12/2/2017
        departureDate=12/4/2017
        numberOfAdults=2
        
        
        countryCode=US
        numberOfResults=500
        rateType=sim
    */
    mdl = {
        busca: {
            val: '',
            init: '',
            placeholder: 'Ex: São Paulo'
        },
        entrada: '',
        saida: '',
        keys: {
            cid: '',
            api: '',
            secret: ''
        },
        room: {
            limit: 4,
            total: 1,
            disabled: false,
            people: {
                total: 2,
                limit: 8,
                list: [{
                    name: 0,
                    more18: 2,
                    less18: {
                        total: 0,
                        list: []
                    }
                }]
            }
        }
    }
    public customData: CustomData;
    public dataService: RemoteData;
    constructor(private http: Http, private httpC: HttpClient, private completerService: CompleterService) {}
    ngOnInit() {
        this.customData = new CustomData(this.http);
        this.vars.el = document.getElementById('rooms');
        if (!this.cookie('cid'))
            this.open.keys = true;
        else {
            this.mdl.keys = {
                cid: this.cookie('cid'),
                api: this.cookie('api'),
                secret: this.cookie('secret')
            }
            this.mdl.busca.init = this.cookie('busca');
            this.mdl.entrada = this.cookie('entrada');
            this.mdl.saida = this.cookie('saida');
        }
    }
    nextInput(ev) {
        var tgt = ev.target;
        tgt = tgt ? tgt.parentNode.parentNode.parentNode : document;
        tgt = tgt.querySelector('.room input');
        this.open.rooms = true;
        if (tgt)
            tgt.focus();
    }
    cookie = function(prop, val ? ) {
        var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
        if (val !== undefined)
            document.cookie = prop + '=' + val + '' + '; expires=' + new Date('01/01/2038').toUTCString() + '; path=/;';
        return val ? val : (ret && ret.length > 1 ? ret[1] : '');
    }
    addRoom(index) {
        var self = this,
            r = self.mdl.room,
            i = r.people.list.length,
            ii = index,
            name = ++self.vars.name;
        if (r.total >= r.limit)
            return;
        if (r.people.total >= r.people.limit) {
            r.disabled = true;
            return;
        }
        setTimeout(function() {
            self.show.room = ii;
        }, 0);
        r.total++;
        r.people.list.push({
            name: name,
            more18: 0,
            less18: {
                total: 0,
                list: []
            }
        });
        r.people.total++;
        r.people.list[i].more18 = 1;
        r.disabled = r.people.total >= r.people.limit;
    }
    changeAdult(index, val, nome) {
        var p = this.mdl.room.people,
            i = index,
            old = p.list[i].more18,
            el;
        val = val | 0;
        if ((p.total + (val - old)) > p.limit) {
            p.list[i].more18 = old;
            el = document.getElementById(nome);
            if (el)
                el.value = old;
        } else {
            p.list[i].more18 = val;
            p.total += val - old;
        }
        this.mdl.room.disabled = p.total >= p.limit;
    }
    changeChild(index, val, nome) {
        function resize(arr, size, defval) {
            var delta = arr.length - size;
            if (delta > 0)
                arr.length = size;
            else
                while (delta++ < 0)
                    arr.push(defval);
            return arr;
        }
        var p = this.mdl.room.people,
            a = p.list[index].less18,
            old = p.list[index].less18.total,
            i = index,
            el;
        val = val | 0;
        if ((p.total + (val - old)) > p.limit) {
            el = document.getElementById(nome);
            if (el)
                el.value = old;
        } else {
            a.list = resize(a.list, val, { age: 0 });
            p.total += val - old;
            a.total = val;
        }
        this.mdl.room.disabled = p.total >= p.limit;
    }
    rmRoom(index) {
        var self = this,
            i = index;
        if(self.mdl.room.total <= 1)
            return;
        setTimeout(function() {
            var r = self.mdl.room,
                p = r.people,
                tp = p.list[i].more18 + p.list[i].less18.total;
            p.total -= tp;
            r.total--;
            p.list.splice(i, 1);
            if (self.show.room)
                self.show.room--;
            r.disabled = p.total >= p.limit;
        }, 0);
    }
    onKey(e) {
        if(e.key === 'Escape' && this.open.rooms) {
            this.open.rooms = false;
        }
    }
    onClick(e) {
        if (!e || !e.target)
            return true;
        if (this.vars.el) {
            if (this.vars.el.contains(e.target)) {
                this.open.rooms = true;
                if (!/touched/.test(this.vars.el.className))
                    this.vars.el.className += ' touched';
            } else {
                this.open.rooms = false;
            }
        }
        return true;
    }
    decodeHTML(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    onSubmit() {
        var self = this,
            m = self.mdl,
            k = m.keys;
        if (self.open.keys) {
            if (!k.api || !k.cid || !k.secret) {
                alert('Favor inserir token');
                return;
            } else {
                self.cookie('cid', k.cid);
                self.cookie('api', k.api);
                self.cookie('secret', k.secret);
                self.open.keys = false;
            }
        }
        if (!m.busca.val || !m.entrada || !m.saida) {
            alert('Favor preencher todos os campos');
            return;
        } else {
            self.cookie('busca', m.busca.val);
            self.cookie('entrada', m.entrada);
            self.cookie('saida', m.saida);
        }
        self.vars.hotelList.HotelListResponse = null;
        self.vars.hotelList.HotelListResponseStr = 'Loading...';
        self.httpC.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotels?' +
                'eanCID=' + k.cid +
                '&eanAPIKey=' + k.api +
                '&eanSharedSecret=' + k.secret +
                '&city=' + m.busca.val.replace(/\s+/gi, '%20') +
                '&countryCode=US&arrivalDate=' + m.entrada +
                '&departureDate=' + m.saida +
                '&numberOfAdults=' + m.room.people.total +
                '&numberOfResults=10&rateType=sim')
            .subscribe(hotelList => {
                var h = self.vars.hotelList,
                    tgtComP = 0.13,
                    storeComP = 0.15,
                    gpShare = 0.5,
                    rateInfo, gpShareH, eanNet, hInitialPrice, hInitialCom, hInitialComP, markup, hFinalPrice, storeCom, hFinalCom, hFinalComP;
                h.HotelListResponseStr = < string > hotelList;
                h.HotelListResponse = JSON.parse( < string > hotelList);
                if (h.HotelListResponse.HotelListResponse) {
                    if (h.HotelListResponse.HotelListResponse.EanWsError && h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage) {
                        h.HotelListResponseStr = h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage;
                        h.HotelListResponse = null;
                        return;
                    }
                    h.HotelListResponse = h.HotelListResponse.HotelListResponse.HotelList.HotelSummary;
                    if (!Array.isArray(h.HotelListResponse))
                        h.HotelListResponse = [h.HotelListResponse];
                    for (var i = 0; i < h.HotelListResponse.length; ++i) {
                        h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
                        rateInfo = h.HotelListResponse[i].RoomRateDetailsList.RoomRateDetails.RateInfos.RateInfo;
                        gpShareH = rateInfo.ChargeableRateInfo['@grossProfitOnline'] * gpShare;
                        eanNet = rateInfo.ChargeableRateInfo['@total'] - gpShareH;
                        hInitialPrice = rateInfo['@pkgSavingsAmount'] + rateInfo.ChargeableRateInfo['@total'];
                        hInitialCom = gpShareH + rateInfo['@pkgSavingsAmount'];
                        hInitialComP = hInitialCom / hInitialPrice;
                        markup = 0.0;
                        if (hInitialComP >= (tgtComP + storeComP))
                            markup = 1;
                        else
                            markup = (tgtComP + storeComP - 1) * -1;
                        hFinalPrice = 0;
                        if (markup >= 1)
                            hFinalPrice = hInitialPrice;
                        else
                            hFinalPrice = eanNet / markup;
                        storeCom = hFinalPrice * storeComP;
                        hFinalCom = hFinalPrice - eanNet - storeCom;
                        hFinalComP = hFinalCom / hFinalPrice;
                        h.HotelListResponse[i].Markup = markup.toFixed(2);
                        h.HotelListResponse[i].HotaxFinalPrice = hFinalPrice.toFixed(2);
                        h.HotelListResponse[i].HotaxFinalCommission = hFinalComP.toFixed(2);
                    }
                }
            });
        return;
    }
}
