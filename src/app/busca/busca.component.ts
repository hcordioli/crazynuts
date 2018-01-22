import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { GlobalService } from './../global/global.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Utils } from './../utils/utils';

@Component({
    selector: 'app-busca',
    templateUrl: './busca.component.html',
    styleUrls: ['./busca.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BuscaComponent implements OnInit {
    public hotelList = {
        HotelListResponse: < any > null,
        HotelListResponseStr: '',
        properties: 0,
        state: 0,
        searchId: '',
        regionId: '',
        hasMorePages: false,
        page: 0
    };
    public sub;
    public vars: any;
    public infinityScrolling = false;
    public show = {
        compare: [],
        masks: [],
        cardImg: [],
        valueAdds: [],
        remainAdds: []
    };
    public cardShadow(hex) {
        hex = (hex || 'fff').replace(/^\#/gi, '');
        return this._sanitizer.bypassSecurityTrustStyle('box-shadow: 4px 4px 18px 0px #' + hex);
    }
    public decodeHTML(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    public valueAdds = {
        ids: {
            '2098': 0,
            '1073742786': 0,
            '1073742621': 0,
            '2111': 0,
            '2106': 1,
            '2107': 1,
            '1073742625': 1,
            '1073742626': 1,
            '2102': 1,
            '2103': 1,
            '2104': 1,
            '2105': 1,
            '2193': 1,
            '2194': 1,
            '2203': 1,
            '2205': 1,
            '2209': 1,
            '2210': 1,
            '2211': 1,
            '1073742857': 1,
            '2233': 1,
            '2097': 2,
            '2191': 2,
            '2192': 2,
            '2220': 2,
            '1073742787': 2,
            '2109': 3,
            '2215': 3,
            '2110': 3,
            '2216': 4,
            '2195': 4,
            '2196': 5,
            '2214': 5,
            '2221': 5,
            '1073742859': 5,
            '1073742860': 5,
            '1073743286': 6,
            '1073742861': 7,
            '2204': 7,
            '1073742617': 7,
            '1073743288': 7,
            '1073742551': 8,
            '2217': 8,
            '2219': 8,
            '2212': 9,
            '2108': 10,
            '2198': 10,
            '2201': 10,
            '2235': 10,
            '2200': 11,
            '1073742618': 11,
            '2226': 12,
            '2227': 12,
            '1073743274': 12,
            '1073743275': 12,
            '2197': 13,
            '2224': 13,
            '2225': 13,
            '2228': 14,
            '1073743287': 14,
            '2213': 14,
            '2218': 14,
            '2222': 14,
            '2202': 14,
            '2199': 14,
            '1073742858': 14,
            '2096': 14,
            '1073742680': 14,
            '1073742681': 14,
            '2223': 14,
            '1073742736': 14,
            '1073742624': 15,
            '2175': 15,
            '1073742862': 15,
            '1073742863': 15,
            '1073742909': 15,
            '1073742627': 15,
            '1073742552': 15,
            '2236': 15,
            '2232': 15,
            '2234': 15,
            '2206': 15,
            '2207': 15,
            '2208': 15,

        },
        icons: [
            'fa-coffee',
            'fa-cutlery',
            'fa-wifi',
            'parking', //parking
            'fa-bell-o',
            'fa-bus',
            'xe013',
            'fa-ticket',
            'fa-glass',
            'xe25e',
            'fa-money',
            'adds-spa',
            'fa-calendar-check-o',
            'fa-level-up',
            'xe013',
            'fa-check'
        ]
    }
    constructor(private gd: GlobalService, private _sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router, private httpC: HttpClient) {
        var self = this,
            arr = [],
            i, j;
        self.vars = gd.vars;
        self.httpC = httpC;
        arr = [{
                str: 'Filtros Mais Usados',
                arr: [
                    { str: 'Café da manhã incluído' },
                    { str: 'Piscina' },
                    { str: 'Wi-Fi grátis' },
                    { str: 'Estacionamento grátis' },
                    { str: 'Aceita animais de estimação' }
                ]
            },
            {
                str: 'Estrelas',
                arr: [
                    { str: '5 estrelas' },
                    { str: '4 estrelas' },
                    { str: '3 estrelas' },
                    { str: '2 estrelas' },
                    { str: '1 estrelas' },
                    { str: 'Sem classificação' }
                ]
            },
            {
                str: 'Tipo de tarifa',
                arr: [
                    { str: 'Reembolsável' },
                    { str: 'Não Reembolsável' }
                ]
            },
            {
                str: 'Bairro',
                arr: [
                    { str: 'Moema' },
                    { str: 'Itaim' },
                    { str: 'Vila Olímpia' },
                    { str: 'Vila Nova' },
                    { str: 'Jardins' },
                    { str: 'Pinheiros' },
                    { str: 'Vila Madalena' }
                ]
            },
            {
                str: 'Ponto de Interesse',
                arr: [
                    { str: 'Álcool' },
                    { str: 'Mulheres' },
                    { str: 'Jogo' },
                    { str: 'Loucuras' },
                    { str: 'Aventuras' }
                ]
            },
            {
                str: 'Tipo de Acomodação',
                arr: [
                    { str: 'Álcool' },
                    { str: 'Mulheres' },
                    { str: 'Jogo' },
                    { str: 'Loucuras' },
                    { str: 'Aventuras' }
                ]
            },
            {
                str: 'Comodidades',
                arr: [
                    { str: 'Piscina' },
                    { str: 'TV' },
                ]
            },
            {
                str: 'Tipos de Hotel e de Viagem',
                arr: [
                    { str: 'Botique' },
                    { str: 'Campo' },
                    { str: 'Luxo' },
                    { str: 'Executivo' },
                    { str: 'Jardins' }
                ]
            },
            {
                str: 'Acessibilidade',
                arr: [
                    { str: 'Álcool' },
                    { str: 'Mulheres' },
                    { str: 'Jogo' },
                    { str: 'Loucuras' },
                    { str: 'Aventuras' }
                ]
            },
            {
                str: 'Refeição',
                arr: [
                    { str: 'Só hospedagem' },
                    { str: 'Café da Manhã Incluído' }
                ]
            }
        ];
        self.hotelList.HotelListResponseStr = null;
        for (i = 0; i < arr.length; i++) {
            self.vars.filter.bit.masks.push({
                str: arr[i].str,
                mask: 1 << i,
                arr: []
            });
            self.vars.filter.bit.mask |= 1 << i;
            for (j = 0; j < arr[i].arr.length; j++) {
                self.vars.filter.bit.masks[i].arr.push({
                    str: arr[i].arr[j].str,
                    val: false,
                    mask: 1 << j
                });
                self.vars.filter.bit.masks[i].mask |= self.vars.filter.bit.masks[i].mask
            }
        }
        self.show.masks = new Array(self.vars.filter.bit.masks.length);
        for (i = 0; i < self.show.masks.length; i++)
            self.show.masks[i] = true;
        self.route.params.subscribe(params => {
            var p = self.vars.params;
            setTimeout(function() {
                if (p.sort) {
                    self.sortBy(null, 'price', p.sort > 1);
                }
                if (p.fn) {
                    self.filterBy('hotelname', decodeURI(p.fn));
                }
                if (self.vars.keys && p && p.go)
                    self.loadHotel();
            }, 0);
        });
    }
    ngOnInit() {}
    public rParam(obj) {
        var self = this,
            i,
            ret = {};
        for (i in self.vars.params)
            if (self.vars.params.hasOwnProperty(i))
                ret[i] = self.vars.params[i];
        for (i in obj) {
            if (!obj.hasOwnProperty(i))
                continue;
            ret[i] = obj[i];
        }
        return ret;
    }
    public loadSearch = undefined;
    public scrolling = false;
    loadHotel() {
        var self = this,
            h = self.hotelList,
            k = self.vars.keys,
            p = self.vars.params,
            b = false,
            date2p = function(str) {
                return str.replace(/^(\d{2})(\d{2})(\d{2})$/gi, '$2\/$1\/20$3');
            },
            o = {
                id: p.id,
                in: date2p(p.in),
                out: date2p(p.out),
                apt: p.apt.replace(/[~]+/gi, '&').replace(/[:]+/gi, '='),
                keys: k.replace(/[~]+/gi, '&').replace(/[:]+/gi, '=')
            },
            isScroll = self.scrolling;
        self.vars.last.busca = self.vars.last.city;
        self.vars.hotelsUrl.base = 'https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelsavailable?' +
            'regionId=' + o.id;
        self.vars.hotelsUrl.avail = '&checkin=' + o.in + '&checkout=' + o.out + '&' + o.apt;
        if (h.regionId === o.id) {
            if (h.searchId && self.vars.hotelsUrl.base.indexOf('searchId=') < 0)
                self.vars.hotelsUrl.base += '&searchId=' + h.searchId;
            if (h.hasMorePages) {
                self.infinityScrolling = true;
                if (h.searchId && isScroll)
                    self.vars.hotelsUrl.page = 'page=' + h.page;
            }
        } else {
            b = self.vars.filter.hotelname.active = !h.regionId;
            h.regionId = o.id;
            self.vars.hotelsUrl.page = 'page=0';
            self.hotelList.page = 0;
            self.vars.filter.hotelname.active = false;
        }
        self.vars.keys = self.vars.keys || Utils.cookie('keys');
        if (!self.vars.keys) {
            alert('Favor inserir token!');
            return;
        }
        h.HotelListResponse = null;
        self.vars.loadSearch = false;
        self.hotelList.searchId = '';
        self.loadSearch = self.vars.loadSearch;
        self.httpC.get((self.vars.hotelsUrl.base +
            self.vars.hotelsUrl.avail +
            '&' + [
                o.keys,
                self.vars.hotelsUrl.page,
                self.vars.hotelsUrl.sort,
                (self.vars.filter.hotelname.active ?
                    self.vars.hotelsUrl.filter : ''
                )
            ].join('&')).replace(/\&+/gi, '&').replace(/\&*$/gi, '')).subscribe(hotelList => {
            self.vars.loadSearch = true;
            self.loadSearch = self.vars.loadSearch;
            var msg = 'Erro!',
                valueAdds,
                i, j, k, tmp;
            if (isScroll && h.hasMorePages) {
                try {
                    tmp = hotelList;
                } catch (e) {
                    tmp = null;
                }
                if (!tmp)
                    return;
                i = (h.HotelListResponse && h.HotelListResponse.length) || 0;
                h.hasMorePages = tmp.HotelListResponse.moreResultsAvailable;
                h.regionId = o.id;
                setTimeout(function() {
                    self.infinityScrolling = false;
                    self.scrolling = false;
                }, 0);
                h.HotelListResponse = h.HotelListResponse || [];
                h.HotelListResponse = h.HotelListResponse.concat(tmp.HotelListResponse.HotelList.HotelSummary);
                for (; i < h.HotelListResponse.length; i++) {
                    self.show.cardImg.push(0);
                    self.show.valueAdds.push(new Array(self.valueAdds.icons.length));
                    self.show.remainAdds[i] = [];
                    h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
                    valueAdds = h.HotelListResponse[i].RoomRateDetailsList.RoomRateDetails.ValueAdds;
                    tmp = h.HotelListResponse[i].tripAdvisorRating;
                    if (tmp && tmp >= 3.5) {
                        if (tmp <= 3.9)
                            tmp = 'Bom!';
                        else if (tmp <= 4.2)
                            tmp = 'Muito Bom!';
                        else if (tmp <= 4.4)
                            tmp = 'Incrível!';
                        else if (tmp <= 4.6)
                            tmp = 'Fantástico!';
                        else if (tmp <= 5)
                            tmp = 'Excepcional!';
                        h.HotelListResponse[i].tripAdvisorLabel = tmp;
                    }
                    if (valueAdds) {
                        if (!Array.isArray(valueAdds.ValueAdd))
                            valueAdds.ValueAdd = [valueAdds.ValueAdd];
                        for (j = 0; j < valueAdds.ValueAdd.length; j++) {
                            k = valueAdds.ValueAdd[j];
                            if (k['@id'] in self.valueAdds.ids) {
                                if (!self.show.valueAdds[i][self.valueAdds.ids[k['@id']]])
                                    self.show.valueAdds[i][self.valueAdds.ids[k['@id']]] = k.description;
                                else
                                    self.show.remainAdds[i].push(k.description);
                            } else {
                                self.show.remainAdds[i].push(k.description);
                            }
                        }
                    }
                }
            } else {
                if (b && !h.searchId) {
                    setTimeout(function() {
                        self.vars.filter.hotelname.active = true;
                        self.infinityScrolling = false;
                        self.scrolling = false;
                        self.loadHotel();
                    }, 0);
                }
                try {
                    h.HotelListResponseStr = '';
                    h.HotelListResponse = hotelList;
                    msg = h.HotelListResponse.messagem;
                } catch (e) {
                    h.HotelListResponseStr = '';
                    h.HotelListResponse = null;
                }
                if (h.HotelListResponse.HotelListResponse && h.HotelListResponse.HotelListResponse.HotelList['@size']) {
                    if (h.HotelListResponse.HotelListResponse.EanWsError && h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage) {
                        h.HotelListResponseStr = h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage;
                        h.HotelListResponse = null;
                        return;
                    }
                    h.HotelListResponse = h.HotelListResponse.HotelListResponse;
                    h.properties = h.HotelListResponse.HotelList['@activePropertyCount'];
                    self.vars.last.props = h.properties;
                    self.vars.last.busca = self.vars.last.city;
                    h.searchId = h.HotelListResponse.customerSessionId;
                    h.hasMorePages = h.HotelListResponse.moreResultsAvailable;
                    h.HotelListResponse = h.HotelListResponse.HotelList['HotelSummary'];
                    if (!h.HotelListResponse.length) {
                        setTimeout(function() {
                            h.HotelListResponse = null;
                            h.HotelListResponseStr = 'Não há hoteis com o nome: "' + self.vars.filter.hotelname.val + '".';
                            delete self.vars.params.fn;
                            self.router.navigate(['/', 'u', self.vars.params]);
                        }, 0);
                    } else {
                        if (!Array.isArray(h.HotelListResponse))
                            h.HotelListResponse = [h.HotelListResponse];
                        self.show.cardImg = new Array(h.HotelListResponse.length);
                        self.show.valueAdds = new Array(h.HotelListResponse.length);
                        for (i = 0; i < h.HotelListResponse.length; i++) {
                            h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
                            self.show.cardImg[i] = 0;
                            self.show.valueAdds[i] = new Array(self.valueAdds.icons.length);
                            self.show.remainAdds[i] = [];
                            valueAdds = h.HotelListResponse[i].RoomRateDetailsList.RoomRateDetails.ValueAdds;
                            tmp = h.HotelListResponse[i].tripAdvisorRating;
                            if (tmp && tmp >= 3.5) {
                                if (tmp <= 3.9)
                                    tmp = 'Bom!';
                                else if (tmp <= 4.2)
                                    tmp = 'Muito Bom!';
                                else if (tmp <= 4.4)
                                    tmp = 'Incrível!';
                                else if (tmp <= 4.6)
                                    tmp = 'Fantástico!';
                                else if (tmp <= 5)
                                    tmp = 'Excepcional!';
                                h.HotelListResponse[i].tripAdvisorLabel = tmp;
                            }
                            if (valueAdds) {
                                if (!Array.isArray(valueAdds.ValueAdd))
                                    valueAdds.ValueAdd = [valueAdds.ValueAdd];
                                for (j = 0; j < valueAdds.ValueAdd.length; j++) {
                                    k = valueAdds.ValueAdd[j];
                                    if (k['@id'] in self.valueAdds.ids) {
                                        if (!self.show.valueAdds[i][self.valueAdds.ids[k['@id']]])
                                            self.show.valueAdds[i][self.valueAdds.ids[k['@id']]] = k.description;
                                        else
                                            self.show.remainAdds[i].push(k.description);
                                    } else {
                                        self.show.remainAdds[i].push(k.description);
                                    }
                                }
                            }
                        }
                    }
                } else {
                    h.HotelListResponseStr = msg;
                    h.HotelListResponse = null;
                }
            }
            setTimeout(function() {
                self.hotelList.HotelListResponse = h.HotelListResponse;
                setTimeout(function() {
                    self.infinityScrolling = false;
                    self.scrolling = false;
                }, 0);
            }, 0)
        }, err => {
            var erro = err ? err.error && err.error.text : '{messagem: Erro!}';
            setTimeout(function() {
                erro = isScroll ? '' : 'Erro: ' + erro;
                h.HotelListResponseStr = erro;
                setTimeout(function() {
                    self.router.navigate(['/', 'u', self.vars.params]);
                }, 0);
            }, 1000)
        });
    }
    public onScrollTimer;
    public onScroll(e) {
        var self = this,
            ev = e;
        clearTimeout(self.onScrollTimer);
        self.onScrollTimer = setTimeout(function() {
            var d = ev.target,
                el = d.querySelector('.app-main'),
                dH = Math.max(
                    d.body.scrollHeight, d.documentElement.scrollHeight,
                    d.body.offsetHeight, d.documentElement.offsetHeight,
                    d.body.clientHeight, d.documentElement.clientHeight
                ),
                h = dH - (el ? el.offsetHeight : 0),
                s = d.body.scrollTop || d.documentElement.scrollTop;
            h *= 0.75;
            if (s >= h && !self.infinityScrolling) {
                if (self.hotelList.hasMorePages) {
                    self.scrolling = true;
                    self.loadHotel();
                }
            }
        }, 400);
    }

    public filterAdd(i, j) {
        var self = this,
            bit = self.vars.filter.bit;
        bit.val &= bit.mask;
        bit.val |= bit.masks[i].mask;
        bit.masks[i].val |= bit.masks[i].arr[j].mask;
    };
    public filterRm(i, j) {
        var self = this,
            bit = self.vars.filter.bit;
        bit.masks[i].val &= ~(bit.masks[i].arr[j].mask);
        bit.masks[i].arr[j].val = false;
        if (!bit.masks[i].val)
            bit.val &= ~(bit.masks[i].mask);
    };
    public filterClean() {
        var self = this,
            bit = self.vars.filter.bit,
            i, j;
        for (i = 0; i < bit.masks.length; i++) {
            bit.masks[i].val = 0;
            for (j = 0; j < bit.masks[i].arr.length; j++) {
                bit.masks[i].arr[j].val = false;
            }
        }
        bit.val = 0;
    };
    public filterOpen(i) {
        var self = this;
        self.show.masks[i] = !self.show.masks[i];
    }
    public filterOpened(i) {
        var self = this;
        return self.show.masks[i];
    }
    public compareAdd(ev, cardId) {
        if (!ev || !ev.target)
            return;
        var self = this,
            cardNo = cardId | 0,
            index = self.show.compare.indexOf(cardNo);
        if (cardNo && index >= 0) {
            self.show.compare.splice(index, 1);
            return;
        } else if (self.show.compare.length >= 5)
            return;
        else if (cardNo)
            self.show.compare.push(cardNo);
    }
    public compareBtn(ev) {
        if (!ev || !ev.target)
            return;
        var self = this;
        if (self.show.compare.length)
            alert(self.show.compare.join(','));
    }
    public sortBy(e, str, bool) {
        var self = this,
            ord = bool ? 'asc' : 'desc';
        if (e && e.stopPropagation)
            e.stopPropagation()
        if (self.vars.params.sort === '0' || (self.vars.sort[str][ord] && self.vars.hotelsUrl.sort)) {
            self.vars.sort[str].asc = false;
            self.vars.sort[str].desc = false;
            self.vars.hotelsUrl.sort = '';
        } else if (self.vars.sort[str] && ord in self.vars.sort[str]) {
            self.vars.sort[str].asc = false;
            self.vars.sort[str].desc = false;
            self.vars.sort[str][ord] = true;
            self.vars.hotelsUrl.sort = 'sort=price&sortorder=' + ord;
        }
    }
    public hotelnameChange() {
        var self = this;
        if (!self.vars.filter.hotelname.val.length) {
            self.filterBy('hotelname', '');
        }
    }
    public filterBy(field, str) {
        var self = this,
            append = 'filterfield=' + field + '&filtervalue=' + str;
        if (field === 'hotelname') {
            if (!str && self.vars.filter.hotelname.active) {
                self.hotelList.page = 0;
                self.vars.hotelsUrl.page = 'page=' + self.hotelList.page;
                self.vars.hotelsUrl.filter = '';
                self.vars.filter.hotelname.active = false;
                delete self.vars.params.fn;
                if (self.vars.filter.hotelname.val)
                    self.vars.filter.hotelname.val = '';
                self.router.navigate(['/', 'u', self.vars.params]);
            } else if (str) {
                console.log(str);
                self.vars.hotelsUrl.filter = append;
                self.vars.last.filterName = str;
                self.vars.filter.hotelname.active = true;
                self.vars.params.fn = str;
                if (self.vars.filter.hotelname.val !== str)
                    self.vars.filter.hotelname.val = str;
                self.router.navigate(['/', 'u', self.vars.params]);
            }
        }
    }
}
