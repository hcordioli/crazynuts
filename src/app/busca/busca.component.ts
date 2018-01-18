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

    public sub;
    public params;
    public vars: any;
    public infinityScrolling = false;
    public show = {
        compare: [],
        masks: [],
        cardImg: [],
        valueAdds: [],
        remainAdds: []
    };
    public json2str(arg) {
        return JSON.stringify(arg);
    }
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
        self.vars.path = 'busca';
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
        self.vars.loadSearch = false;
        self.vars.hotelList.HotelListResponseStr = null;
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
                    apt: params.apt || '',
                    page: params.page || '0',
                    sort: params.sort || '00',
                    fMask: params.fMask || '0',
                    fName: params.fName || 'null'
                }
                self.loading = true;
                self.vars.filter.bit.val = params.fMask;
                if (self.params.fName === 'null')
                    self.vars.filter.hotelname.active = false;
                else if (self.vars.filter.hotelname.active)
                    self.vars.filter.hotelname.val = self.params.fName;
                tmp = (self.params.sort[0] | 0);
                if (tmp)
                    self.sortBy(null, 'price', (tmp > 1 ? 'asc' : 'desc'));
                tmp = (self.params.sort[1] | 0);
                if (tmp)
                    self.sortBy(null, 'rating', (tmp > 1 ? 'asc' : 'desc'));
                if (!params.id) {
                    self.router.navigate(['/']);
                }
                else {
                    if (!(params.in | 0))
                        self.params.in = Utils.date2str('');
                    arr.push(params.id);
                    arr.push((self.params.in | 0));
                    arr.push((params.out | 0) || self.params.in);
                    arr.push(params.apt || '_1=2');
                    if (!(self.params.out | 0)) {
                        self.router.navigate([arr.join('/')]);
                    }
                    else {
                        self.loading = false;
                        if (!self.vars.hotelList.HotelListResponseStr)
                            self.loadHotel();
                    }
                }
            });

    }

    public scrolling = false;
    public loading = true;
    loadHotel() {
        var self = this,
            m = self.vars.mdl,
            h = self.vars.hotelList,
            k = m.keys,
            isScroll = self.scrolling;
        if (self.loading)
            return;
        self.vars.loadSearch = false;
        self.vars.hotelsUrl.base = 'https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelsavailable?' +
            'regionId=' + (self.params.id || m.busca.regionId);
        self.vars.hotelsUrl.avail = '&checkin=' + m.entrada.val +
            '&checkout=' + m.saida.val +
            self.params.apt.replace(/[_]+/gi, '&room').replace(/[-]+/gi, '=');
        if (h.regionId === m.busca.regionId) {
            if (h.searchId && self.vars.hotelsUrl.base.indexOf('searchId=') < 0)
                self.vars.hotelsUrl.base += '&searchId=' + h.searchId;
            if (h.hasMorePages && h.searchId && isScroll)
                self.vars.hotelsUrl.page = 'page=' + h.page;
        } else {
            h.regionId = m.busca.regionId;
            self.vars.hotelsUrl.page = 'page=0';
            self.vars.hotelList.page = 0;
        }
        self.vars.hotelsUrl.keys = self.vars.hotelsUrl.keys || Utils.cookie('keys');
        if (!self.vars.hotelsUrl.keys) {
            alert('Favor inserir token');
            return;
        }
        self.httpC.get((self.vars.hotelsUrl.base +
            self.vars.hotelsUrl.keys +
            self.vars.hotelsUrl.avail +
            '&' + [
                self.vars.hotelsUrl.page,
                self.vars.hotelsUrl.sort,
                (self.vars.filter.hotelname.active ?
                    self.vars.hotelsUrl.filter : ''
                )
            ].join('&')).replace(/\&+/gi, '&').replace(/\&*$/gi, '')).subscribe(hotelList => {
            setTimeout(function() {
                self.vars.loadSearch = true;
            }, 0);
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
                i = h.HotelListResponse.length;
                h.hasMorePages = tmp.HotelListResponse.moreResultsAvailable;
                h.regionId = m.busca.regionId;
                self.infinityScrolling = false;
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
                    h.searchId = h.HotelListResponse.customerSessionId;
                    h.hasMorePages = h.HotelListResponse.moreResultsAvailable;
                    h.HotelListResponse = h.HotelListResponse.HotelList['HotelSummary'];
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
                } else {
                    h.HotelListResponseStr = msg;
                    h.HotelListResponse = null;
                }
            }
        }, err => {
            var erro = err ? err.error && err.error.text : '{messagem: Erro!}';
            alert(erro);
            setTimeout(function() {
                erro = isScroll ? '' : 'Erro: ' + erro;
                h.HotelListResponseStr = erro;
                setTimeout(function() {
                    var arr = [];
                    arr.push(self.params.id);
                    arr.push((self.params.in | 0));
                    arr.push((self.params.out | 0) || self.params.in);
                    arr.push(self.params.apt || '_1=2');
                    self.router.navigate([arr.join('/')]);
                }, 0);
            }, 1000)
        });
    }
    public onScrollTimer;
    public onScroll(e) {
        /*
            var el = document.querySelector('aside > section > div'),
                        carrinhoPaddingTop = 0,
                        width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
                    clearTimeout($.ev.scroll.timeout1);
                    $.ev.scroll.timeout1 = setTimeout(function() {
                        if ($.util.cls.has(document.body, 'loading'))
                            return;
                        if (width <= 768 && !$.ev.scroll.lastAba) {
                            $.ev.scroll.lastAba = $.util.getChecked($.el['internal.canalAba']);
                            if ($.ev.scroll.lastAba && !/1|2/.test($.ev.scroll.lastAba.value))
                                $.util.setChecked('internal.canalAba', 1, 2, 1, true);
                        } else if (width > 768 && $.ev.scroll.lastAba) {
                            $.ev.scroll.lastAba.checked = true;
                            $.ev.scroll.lastAba = undefined;
                            $.ev.update.call(null);
                        }
                    }, 0);
                    if (!el)
                        return;
                    var sT = Math.max(window.pageYOffset || 0, Math.max((document.documentElement && document.documentElement.scrollTop) || 0, document.body.scrollTop || 0)),
                        oldSt = $.ev.scroll.oldSt || 0,
                        mH = document.querySelector('main'),
                        wB = sT + (window.innerHeight || document.documentElement.clientHeight),
                        eH = el.offsetHeight,
                        eT = el.offsetTop || sT + el.getBoundingClientRect().top,
                        eB = eH + eT;
                    mH = mH && mH.offsetHeight;
                    if ((sT > oldSt) && (eB < wB) && (sT > eT)) {
                        if (sT - eT < wB - eB)
                            el.style.top = sT + 'px';
                        else
                            el.style.top = (wB - eH) + 'px';
                    } else if (sT < oldSt && sT < eT) {
                        el.style.top = sT + 'px';
                    } else if ((sT < eT) && (wB < eB)) {
                        if (sT - eT > wB - eB)
                            el.style.top = sT + 'px';
                        else
                            el.style.top = (wB - eH) + 'px';
                    }
                    if (!el.style.top || (el.style.top && window.parseInt(el.style.top.replace(/\D+$/, ''), 10) < carrinhoPaddingTop))
                        el.style.top = carrinhoPaddingTop + 'px';
                    if (eB > mH)
                        el.style.top = (mH - eH) + 'px';
                    $.ev.scroll.oldSt = sT;
                    el = document.querySelector('.comboTurbine');
                    if (!window.scrollHappening && el && el.offsetParent) {
                        el = document.querySelector('.combo .abasCanais');
                        if (el && el.offsetParent) {
                            clearTimeout($.ev.scroll.timeout2);
                            $.ev.scroll.timeout2 = $.util.timeout(function(el) {
                                if (window.scrollHappening)
                                    return;
                                var eT = el.offsetTop || sT + el.getBoundingClientRect().top;
                                el = document.querySelector('.cta input.submit');
                                if (!el)
                                    return;
                                el.style.backgroundPosition = Math.floor(Math.max(0, Math.min(((100 * sT) / eT), 100))) + '%';
                                $.util.cls[sT >= (eT) ? 'remove' : 'add'](el, 'turbine');
                            }, 1, el);
                        }
                    }
        */
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
                if (self.vars.hotelList.hasMorePages)
                    self.loadHotel();
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
    public hotelUrl(id) {
        var self = this,
            url = self.router.url.split('/').slice(0, 5);
        url[1] = id;
        return document.baseURI + 'detalhe' + url.join('/');
    }
    public sortBy(e, str, bool) {
        var self = this,
            ord = bool ? 'asc' : 'desc';
        if (e && e.stopPropagation)
            e.stopPropagation()
        if (self.vars.sort[str][ord] && self.vars.hotelsUrl.sort) {
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
                self.vars.hotelList.page = 0;
                self.vars.hotelsUrl.page = 'page=' + self.vars.hotelList.page;
                self.vars.hotelsUrl.filter = '';
                self.vars.filter.hotelname.active = false;
                self.loadHotel();
            } else if (str) {
                self.vars.hotelsUrl.filter = append;
                self.vars.filter.hotelname.active = true;
                self.loadHotel();
            }
        }
    }

    ngOnDestroy() {
        var self = this;
        self.sub.unsubscribe();
    }

}
