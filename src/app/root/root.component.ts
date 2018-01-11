import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RootComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

// import { Component, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
// import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
// import { DaterangePickerComponent } from 'ng2-daterangepicker';
// import { CompleterService, RemoteData } from 'ng2-completer';
// import { ActivatedRoute, Router } from '@angular/router';
// import { Regions } from './../http/regions';
// import Filters from './../http/filters';
// import { NgModel } from '@angular/forms';
// import { Http } from "@angular/http";
// import { cookie } from "./../utils";

// @Component({
//     selector: 'app-root',
//     templateUrl: './root.component.html',
//     styleUrls: ['./root.component.scss'],
//     encapsulation: ViewEncapsulation.None,
//     host: {
//         '(window:scroll)': 'onScroll($event)',
//         '(document:click)': 'onClick($event)',
//         '(document:keyup)': 'onFocus($event)',
//         '(document:keydown)': 'onKey($event)',
//         '(window:mouseup)': 'onClick($event)',
//         '(window:touchend)': 'onClick($event)'
//     }
// })
/*export class RootComponent implements AfterViewInit {
    constructor(private route: ActivatedRoute, private router: Router) {}
    public sub;
    public params;
    public json2str(arg) {
        return JSON.stringify(arg);
    }
    ngAfterViewInit() {

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

        var self = this,
            fn = [self.rangepicker.datePicker.clickDate,
                self.rangepicker.datePicker.outsideClick
            ],

            i, j;
        if (self.cookied)
            self.rooms.nativeElement.className += ' touched';

    }

    ngOnDestroy() {
        var self = this;
        self.sub.unsubscribe();
    }

export class RootComponent implements AfterViewInit {
    constructor() {}
    ngAfterViewInit() {
        var self = this;
    }
}

export class RootComponent implements AfterViewInit {
    @ViewChild(DaterangePickerComponent) rangepicker: DaterangePickerComponent;
    @ViewChild('rooms') rooms: ElementRef;
    public daterange: any = {};
    public options: any = {
        locale: {
            format: 'MM/DD/YYYY',
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            daysOfWeek: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        },
        alwaysShowCalendars: false,
        autoApply: false,
        autoUpdateInput: true,
        showDropdowns: true,
        minDate: (new Date()),
        dateLimit: {
            days: 28
        },
        parentEl: '#pickMe'
    };
    public hotelsUrl = {
        base: '',
        sort: '',
        filter: '',
        page: ''
    };
    public vars = {
        slogan: 'Encontre o hotel ideal para o seu cliente,<br>com a melhor comissão para você!',
        logo: {
            alt: 'HOTAX',
            url: 'assets/img/logo.svg'
        },
        filter: {
            hotelname: {
                val: '',
                active: false
            },
            hotelprice: {
                val: [0, 2000],
                min: 0,
                max: 2000
            },
            bit: {
                val: 0,
                mask: 0,
                masks: []
            }
        },
        sort: {
            price: {
                desc: false,
                asc: false
            },
            rating: {
                desc: false,
                asc: false
            }
        },
        icons: {
            base: 'assets/img/icons/',
            map: 'map.png',
            loading: 'loading.gif',
            hot: 'hot.svg',
            sugestoes: 'hotdeals.png',
            people: 'room-people.png',
            room: 'room-bed.png',
            remove: 'room-remove.png'
        },
        name: 0,
        hotelList: {
            HotelListResponse: null,
            HotelListResponseStr: '',
            properties: 0,
            state: 0,
            searchId: '',
            regionId: '',
            hasMorePages: false,
            page: 0
        }
    }
    public open = {
        rooms: false,
        keys: false
    }
    public show = {
        calendarRight: false,
        room: 0,
        masks: [],
        cardImg: [],
        valueAdds: [],
        remainAdds: [],
        compare: []
    }
    public mdl = {
        busca: {
            val: '',
            lastVal: '',
            init: {
                title: '',
                description: '',
                image: ''
            },
            icon: '',
            regionId: '0',
            lastRegion: '',
            placeholder: 'Ex: São Paulo',
            cls: ''
        },
        entrada: {
            val: '',
            txt: ''
        },
        saida: {
            val: '',
            txt: ''
        },
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
    public customData: Regions;
    public dataService: RemoteData;
    private cookied = false;

    constructor(private _sanitizer: DomSanitizer, private http: Http, private completerService: CompleterService) {
        var self = this,
            roomCok;
        self.customData = new Regions(self.http);
        if (!cookie('cid'))
            self.open.keys = true;
        else {
            self.mdl.keys = {
                cid: cookie('cid'),
                api: cookie('api'),
                secret: cookie('secret')
            }
            if (cookie('busca-val')) {
                self.mdl.busca.init = {
                    title: cookie('busca-val'),
                    image: cookie('busca-img'),
                    description: cookie('busca-id')
                };
            }
            self.mdl.entrada.val = cookie('entrada');
            self.mdl.entrada.txt = self.mdl.entrada.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            self.mdl.saida.val = cookie('saida');
            self.mdl.saida.txt = self.mdl.saida.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            roomCok = cookie('room');
            if (roomCok) {
                if (roomCok !== JSON.stringify(self.mdl.room)) {
                    self.mdl.room = JSON.parse(roomCok);
                    self.cookied = true;
                }
            }
        }
    }
    ngAfterViewInit() {
        var self = this,
            fn = [self.rangepicker.datePicker.clickDate,
                self.rangepicker.datePicker.outsideClick
            ],
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
            ],
            i, j;
        if (self.cookied)
            self.rooms.nativeElement.className += ' touched';
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
    public filterAdd(i, j) {
        console.log(i, j);
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
    public sortBy(str, bool) {
        var self = this,
            ord = bool ? 'asc' : 'desc';
        if (self.vars.sort[str][ord] && self.hotelsUrl.sort) {
            self.vars.sort[str].asc = false;
            self.vars.sort[str].desc = false;
            self.hotelsUrl.sort = '';
            self.onSubmit(false);
        } else if (self.vars.sort[str] && ord in self.vars.sort[str]) {
            self.vars.sort[str].asc = false;
            self.vars.sort[str].desc = false;
            self.vars.sort[str][ord] = true;
            self.hotelsUrl.sort = 'sort=price&sortorder=' + ord;
            self.onSubmit(false);
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
                self.hotelsUrl.page = 'page=' + self.vars.hotelList.page;
                self.hotelsUrl.filter = '';
                self.vars.filter.hotelname.active = false;
                self.onSubmit(false);
            } else if (str) {
                self.hotelsUrl.filter = append;
                self.vars.filter.hotelname.active = true;
                self.onSubmit(false);
            }
        }
    }
    public nextInput(ev) {
        var tgt = ev.target;
        tgt = tgt ? tgt.parentNode.parentNode.parentNode : document;
        tgt = tgt.querySelector('.room input');
        this.open.rooms = true;
        if (tgt)
            tgt.focus();
    }
    public addRoom(index) {
        var self = this,
            r = self.mdl.room,
            i = r.people.list.length,
            ii = index,
            name = ++self.vars.name,
            el;
        setTimeout(function() {
            el = document.activeElement;
            if (el)
                el.blur();
        }, 0)
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
    public changeAdult(index, val, nome) {
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
    public changeChild(index, val, nome) {
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
    public rmRoom(index) {
        var self = this,
            i = index;
        if (self.mdl.room.total <= 1)
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
    public onCompleterInput(e) {
        var self = this;
        self.mdl.busca.cls = (self.mdl.busca.val || '').length < 3 ? 'lessthanthree' : '';
    }
    public onCompleterFocus(e) {
        var self = this;
        self.mdl.busca.cls = (self.mdl.busca.val || '').length < 3 ? 'lessthanthree' : '';
    }
    public onCompleterBlur(e) {
        var self = this;
        setTimeout(function() {
            self.mdl.busca.val = (self.mdl.busca.val !== self.mdl.busca.lastVal ? (self.mdl.busca.val ? self.mdl.busca.lastVal : self.mdl.busca.val) : self.mdl.busca.val);
            self.mdl.busca.cls = (self.mdl.busca.val || '').length < 3 ? 'lessthanthree' : '';
        }, 100);
    }
    public onCompleterSelected(e) {
        var title = e && e.originalObject ? (e.originalObject.title || e.originalObject.regionNameLong) : (e ? e.title : ''),
            self = this;
        if (e && e.description) {
            self.mdl.busca.lastRegion = self.mdl.busca.regionId;
            self.mdl.busca.regionId = e.description || '0';
            self.mdl.busca.icon = e.image;
            self.mdl.busca.val = title;
            self.hotelsUrl.base = '';
            self.vars.filter.hotelname.active = false;
            if (self.mdl.busca.lastVal !== title) {
                self.mdl.busca.lastVal = title;
                if (self.vars.hotelList.hasMorePages)
                    self.vars.hotelList.hasMorePages = false;
            } else {
                self.mdl.busca.lastVal = title;
            }
        }
    }
    public onKey(e) {
        var el;
        if (e.key === 'Escape') {
            el = < HTMLElement > document.querySelector('#pickMe .daterangepicker');
            if (this.open.rooms)
                this.open.rooms = false;
            else if (el && el.style.display !== 'none')
                el.style.display = 'none';
        }
    }
    public onFocus(e) {
        console.log([this, arguments]);
        this.onClick.apply(this, arguments)
    }
    public onClickTimer;
    public onClick(e) {
        console.log([this, arguments]);
        var self = this,
            tgt = e.target,
            el = document.querySelector('#pickMe'),
            start = false,
            val, date;
        if (!e || !tgt)
            return true;
        if (tgt.id === 'pickMe' || /check(in|out)/gi.exec(tgt.className))
            tgt = e.target.parentNode.querySelector('.check' + (tgt.id || tgt.className.indexOf('in') > 0 ? 'in' : 'out') + ' > span');
        if (/check(in|out)/gi.exec(tgt.parentNode.className)) {
            start = tgt.parentNode.className.indexOf('in') > 0;
            self.show.calendarRight = !start;
            date = el.querySelector('[name="daterangepicker_' + (start ? 'start' : 'end') + '"]');
            if (date) {
                clearTimeout(self.onClickTimer);
                self.onClickTimer = setTimeout(function() {
                    self.rangepicker.datePicker.formInputsFocused.call(self.rangepicker.datePicker, {
                        target: date
                    });
                }, 0);
            }
        } else if (/(start|end)[-]date/.exec(tgt.className)) {
            self.show.calendarRight = self.mdl.saida.val === '';
            start = (tgt.className.indexOf('start') > 0 && !self.show.calendarRight) || false;
            val = el.querySelector('[name="daterangepicker_' + (start ? 'start' : 'end') + '"]');
            val = val ? val.value : '';
            val = (val || '/').split('/');
            if (val && val.length && val.length > 2 && (parseInt(val[1], 10) === parseInt(tgt.innerHTML, 10))) {
                date = val.join('/');
                val[2] = val[2].slice(-2);
                clearTimeout(self.onClickTimer);
                self.onClickTimer = setTimeout(function() {
                    if (self.rangepicker.datePicker.startDate)
                        self.blurDates[0] = self.rangepicker.datePicker.startDate.clone();
                    if (start && self.rangepicker.datePicker.endDate)
                        self.blurDates[1] = self.rangepicker.datePicker.endDate.clone();
                    else
                        self.blurDates[1] = null;
                    self.rangepicker.datePicker['set' + (start ? 'Start' : 'End') + 'Date'](date);
                    self.mdl[start ? 'entrada' : 'saida'] = {
                        val: val.join('/'),
                        txt: [val[1], val[0], val[2]].join('/')
                    };
                    if (!start) {
                        self.rangepicker.datePicker.hide.call(self.rangepicker.datePicker, {})
                        self.show.calendarRight = null;
                    } else {
                        self.mdl.saida = {
                            val: '',
                            txt: ''
                        };
                        self.show.calendarRight = true;
                    }
                }, 0);
            }
        } else if (self.rooms.nativeElement) {
            if (self.rooms.nativeElement.contains(tgt)) {
                self.open.rooms = true;
                if (!/touched/.test(self.rooms.nativeElement.className))
                    self.rooms.nativeElement.className += ' touched';
                if (!/focus/.test(self.rooms.nativeElement.className))
                    self.rooms.nativeElement.className += ' focus';
            } else {
                */
// self.rooms.nativeElement.className = self.rooms.nativeElement.className.replace(/\s*focus\s*/gi, ' ');
/*                self.open.rooms = false;
            }
        }
        return true;
    }
    public onScrollTimer;
    public onScroll(e) {

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
/*
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
                    self.onSubmit(true);
            }
        }, 400);
    }
    public blurDates = [];
    public blurDate(value: any) {
        var self = this;
        if (self.blurDates.length >= 2 && self.show.calendarRight !== null && !self.blurDates[1]) {
            // self.selectedDate.call(self, {
            //     start: self.blurDates[0],
            //     end: self.blurDates[1]
            // });
        }
    }
    public selectedDate(value: any) {
        var self = this;
        if (value.start) {
            self.mdl.entrada.val = value.start.format('MM/DD/YYYY');
            self.mdl.entrada.txt = value.start.format('DD/MM/YY');
            self.daterange.start = value.start;
        }
        if (value.end) {
            self.mdl.saida.val = value.end.format('MM/DD/YYYY');
            self.mdl.saida.txt = value.end.format('DD/MM/YY');
            self.daterange.end = value.end;
        } else {
            self.mdl.saida.val = '';
            self.mdl.saida.txt = '';
            self.daterange.end = value.start || '';
        }
        if ('label' in value) {
            self.onClick({
                target: self.rangepicker.datePicker.element[0]
            })
            self.daterange.label = '';
        }
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
    public infinityScrolling = false;
    public onSubmit(scrolling) {
        var self = this,
            m = self.mdl,
            h = self.vars.hotelList,
            k = m.keys,
            quartos = '',
            isScroll = scrolling,
            tmp, i, j;
        if (!self.hotelsUrl.base) {
            for (i = 0; i < m.room.people.list.length; i++) {
                tmp = m.room.people.list[i];
                quartos += '&room' + (i + 1) + '=' + tmp.more18;
                if (tmp.less18.total)
                    for (j = 0; j < tmp.less18.list.length; j++)
                        quartos += ',' + tmp.less18.list[j].age
            }
            if (self.open.keys) {
                if (!k.api || !k.cid || !k.secret) {
                    alert('Favor inserir token');
                    return;
                } else {
                    cookie('cid', k.cid, true);
                    cookie('api', k.api, true);
                    cookie('secret', k.secret, true);
                    self.open.keys = false;
                }
            }
            if (!m.busca.val || m.busca.regionId === '0' || !m.entrada.val || !m.saida.val) {
                alert('Favor preencher todos os campos');
                return;
            } else {
                cookie('busca-val', m.busca.val);
                cookie('busca-img', m.busca.icon);
                cookie('busca-id', m.busca.regionId);
                cookie('entrada', m.entrada.val);
                cookie('saida', m.saida.val);
                cookie('room', JSON.stringify(m.room));
            }
            h.HotelListResponse = null;
            h.HotelListResponseStr = null;
            h.state = 1;
            m.busca.lastVal = m.busca.val;
            self.hotelsUrl.base =
                quartos;
        } else {
            h.state = 1;
            if (!scrolling) {
                h.HotelListResponse = null;
                h.HotelListResponseStr = null;
            } else {
                if (h.hasMorePages) {
                    h.page++;
                    h.state = 2;
                    self.infinityScrolling = true;
                }
            }
        }
        if (h.regionId === m.busca.regionId) {
            if (h.searchId && self.hotelsUrl.base.indexOf('searchId=') < 0)
                self.hotelsUrl.base += '&searchId=' + h.searchId;
            if (h.hasMorePages && h.searchId && scrolling)
                self.hotelsUrl.page = 'page=' + h.page;
        } else {
            h.regionId = m.busca.regionId;
            self.hotelsUrl.page = 'page=0';
            self.vars.hotelList.page = 0;
        }

        return;
    }
}
*/
