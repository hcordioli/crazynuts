import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { CompleterService, CompleterData } from 'ng2-completer';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(document:click)': 'onClick($event)',
    }
})
export class HomeComponent implements OnInit {

    dataService: CompleterData;
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
            loading: 'Buscando: ',
            noRet: 'Não foram encontrados resultados contenham: ',
            placeholder: 'Ex: São Paulo',
            dataSrc: [{
                    "regionId": "234",
                    "regionType": "Province (State)",
                    "regionName": "New York",
                    "regionNameLong": "New York, United States of America",
                    "parentRegionId": "201",
                    "level": "0"
                },
                {
                    "regionId": "1208",
                    "regionType": "City",
                    "regionName": "Fishers Island",
                    "regionNameLong": "Fishers Island, New York, United States of America",
                    "parentRegionId": "234",
                    "parentRegionName": "New York, United States of America"
                },
                {
                    "regionId": "1524",
                    "regionType": "City",
                    "regionName": "East Hampton",
                    "regionNameLong": "East Hampton, New York, United States of America",
                    "parentRegionId": "234",
                    "parentRegionName": "New York, United States of America"
                },
                {
                    "regionId": "7391",
                    "regionType": "City",
                    "regionName": "Waterloo",
                    "regionNameLong": "Waterloo, New York, United States of America",
                    "parentRegionId": "234",
                    "parentRegionName": "New York, United States of America"
                },
                {
                    "regionId": "6181516",
                    "regionType": "Point of Interest",
                    "regionName": "Discovery Center",
                    "regionNameLong": "Discovery Center, Binghamton, New York, United States of America",
                    "parentRegionId": "234",
                    "level": "1"
                },
                {
                    "regionId": "2297",
                    "regionType": "City",
                    "regionName": "Miami",
                    "regionNameLong": "Miami, Florida, United States of America",
                    "parentRegionId": "178286",
                    "level": "0"
                },
                {
                    "regionId": "800070",
                    "regionType": "Neighborhood",
                    "regionName": "Downtown Miami",
                    "regionNameLong": "Downtown Miami, Miami, Florida, United States of America",
                    "parentRegionId": "2297",
                    "level": "1"
                },
                {
                    "regionId": "6048102",
                    "regionType": "Neighborhood",
                    "regionName": "South Miami",
                    "regionNameLong": "South Miami, Miami, Florida, United States of America",
                    "parentRegionId": "2297",
                    "level": "1"
                }
            ]
        },
        entrada: '',
        saida: '',
        keys: {
            cid: '',
            api: '',
            secret: ''
        },
        room: {
            total: 1,
            people: {
                total: 2,
                list: [{
                    name: 0,
                    limit: [4, 4],
                    more18: 2,
                    less18: {
                        total: 0,
                        list: []
                    }
                }]
            }
        }
    }
    constructor(private http: HttpClient, private completerService: CompleterService) {}
    ngOnInit() {
        this.dataService = this.completerService.local(this.mdl.busca.dataSrc, 'regionNameLong', 'regionNameLong').imageField('regionType');
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
    cookie = function(prop, val ? ) {
        var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
        if (val !== undefined)
            document.cookie = prop + '=' + val + '' + '; expires=' + new Date('01/01/2038').toUTCString() + '; path=/;';
        return val ? val : (ret && ret.length > 1 ? ret[1] : '');
    }
    addRoom(index) {
        this.vars.name++;
        var self = this,
            r = self.mdl.room,
            i = r.people.list.length,
            name = this.vars.name;
        r.total++;
        r.people.list.push({
            name: name,
            limit: [4, 4],
            more18: 0,
            less18: {
                total: 0,
                list: []
            }
        });
        r.people.total++;
        r.people.list[i].more18 = 1;
    }
    changeAdult(index, val) {
        var p = this.mdl.room.people,
            old = p.list[index].more18;
        val = val | 0;
        p.total += val - old;
        p.list[index].more18 = val;
        p.list[index].limit = [8 - val, 4 - val]; //TODO 4 adulto ou 4 kid
    }
    changeChild(index, val) {
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
            old = p.list[index].less18.total;
        val = val | 0;
        p.total += val - old;
        p.list[index].less18.list = resize(p.list[index].less18.list, val, { age: 0 });
        p.list[index].less18.total = val;
        val = p.list[index].more18;
        p.list[index].limit = [8 - val, 4 - val]; //TODO 4 adulto ou 4 kid
    }
    rmRoom(index) {
        var self = this,
            i = index;
        setTimeout(function() {
            var r = self.mdl.room,
                p = r.people;
            p.total -= p.list[i].more18 + p.list[i].less18.total;
            r.total--;
            p.list.splice(i, 1);
        }, 0);
    }
    onClick(e) {
        if (!e || !e.target)
            return;
        if (this.vars.el) {
            if (this.vars.el.contains(e.target)) {
                this.open.rooms = true;
                if (!/touched/.test(this.vars.el.className))
                    this.vars.el.className += ' touched';
            } else {
                this.open.rooms = false;
            }
        }
    }
    decodeHTML(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    onSubmit(frm) {
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
        self.http.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotels?' +
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
                    h.HotelListResponse = h.HotelListResponse.HotelListResponse.HotelList.HotelSummary;
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
