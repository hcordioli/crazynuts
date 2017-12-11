import { Component, Directive, AfterViewInit, ViewEncapsulation, ViewChild, QueryList, ElementRef } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { CompleterService, RemoteData } from 'ng2-completer';
import { CustomData } from './regions';
import { DaterangePickerComponent } from 'ng2-daterangepicker';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(document:click)': 'onClick($event)',
        '(document:keyup)': 'onFocus($event)',
        '(document:keydown)': 'onKey($event)',
        '(window:mouseup)': 'onClick($event)',
        '(window:touchend)': 'onClick($event)'
    }
})

export class HomeComponent implements AfterViewInit {
    @ViewChild(DaterangePickerComponent) rangepicker: DaterangePickerComponent;
    public daterange: any = {};
    public options: any = {
        locale: {
            format: 'MM/DD/YYYY',
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            daysOfWeek: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        },
        alwaysShowCalendars: false,
        autoApply: false,
        autoUpdateInput: false,
        showDropdowns: true,
        minDate: (new Date()),
        dateLimit: {
            days: 28
        },
        parentEl: '#pickMe'
    };
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
            properties: 0,
            HotelListResponseStr: '',
            state: 0
        }
    }
    open = {
        rooms: false,
        keys: false
    }
    show = {
        room: 0,
        cardImg: []
    }
    mdl = {
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
    public customData: CustomData;
    public dataService: RemoteData;
    private cookied = false;
    constructor(private http: Http, private httpC: HttpClient, private completerService: CompleterService) {
        var self = this,
            roomCok;
        self.customData = new CustomData(self.http);
        if (!self.cookie('cid'))
            self.open.keys = true;
        else {
            self.mdl.keys = {
                cid: self.cookie('cid'),
                api: self.cookie('api'),
                secret: self.cookie('secret')
            }
            if (self.cookie('busca-val')) {
                self.mdl.busca.init = {
                    title: self.cookie('busca-val'),
                    image: self.cookie('busca-img'),
                    description: self.cookie('busca-id')
                };
            }
            self.mdl.entrada.val = self.cookie('entrada');
            self.mdl.entrada.txt = self.mdl.entrada.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            self.mdl.saida.val = self.cookie('saida');
            self.mdl.saida.txt = self.mdl.saida.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            roomCok = self.cookie('room');
            if (roomCok) {
                if (roomCok !== JSON.stringify(self.mdl.room)) {
                    self.mdl.room = JSON.parse(roomCok);
                    self.cookied = true;
                } else {
                    console.log('same');
                }
            }
        }
    }
    ngAfterViewInit() {
        var self = this,
            fn = [self.rangepicker.datePicker.clickDate,
                self.rangepicker.datePicker.outsideClick
            ];
        self.vars.el = document.getElementById('rooms');
        if (self.cookied)
            self.vars.el.className += ' touched';
    }
    public nextInput(ev) {
        var tgt = ev.target;
        tgt = tgt ? tgt.parentNode.parentNode.parentNode : document;
        tgt = tgt.querySelector('.room input');
        this.open.rooms = true;
        if (tgt)
            tgt.focus();
    }
    public cookie = function(prop, val ? , eternal ? ) {
        var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
        if (val !== undefined)
            document.cookie = prop + '=' + val + (eternal ? '; expires=' + new Date('01/01/2038').toUTCString() : '') + '; path=/;';
        return val ? val : (ret && ret.length > 1 ? ret[1] : '');
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
    public onCompleterSelected(e) {
        var title = e && e.originalObject ? (e.originalObject.title || e.originalObject.regionNameLong) : (e ? e.title : '');
        if (e && e.description) {
            this.mdl.busca.regionId = e.description || '0';
            this.mdl.busca.icon = e.image;
            this.mdl.busca.val = title;
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
        this.onClick.apply(this, arguments)
    }
    public onClick(e) {
        var self = this,
            el = document.querySelector('#pickMe'),
            start = false,
            val, date;
        if (!e || !e.target)
            return true;
        if (/(start|end)[-]date/.exec(e.target.className)) {
            start = e.target.className.indexOf('start') > 0;
            val = el.querySelector('[name="daterangepicker_' + (start ? 'start' : 'end') + '"]');
            val = val ? val.value : '';
            val = (val || '/').split('/');
            if (val && val.length && val.length > 2 && (parseInt(val[1], 10) === parseInt(e.target.innerHTML, 10))) {
                date = val.join('/');
                val[2] = val[2].slice(-2);
                setTimeout(function() {
                    self.rangepicker.datePicker['set' + (start ? 'Start' : 'End') + 'Date'](date);
                    self.mdl[start ? 'entrada' : 'saida'].val = val.join('/');
                    self.mdl[start ? 'entrada' : 'saida'].txt = [val[1], val[0], val[2]].join('/');
                    if (!start)
                        self.rangepicker.datePicker.hide.call(self.rangepicker.datePicker, {})
                }, 0);
            }
        } else if (self.vars.el) {
            if (self.vars.el.contains(e.target)) {
                self.open.rooms = true;
                if (!/touched/.test(self.vars.el.className))
                    self.vars.el.className += ' touched';
                if (!/focus/.test(self.vars.el.className))
                    self.vars.el.className += ' focus';
            } else {
                self.vars.el.className = self.vars.el.className.replace(/\s*focus\s*/gi, ' ');
                self.open.rooms = false;
            }
        }
        return true;
    }
    public showCal(e) {
        console.log(e);
    }
    public selectedDate(value: any) {
        var self = this;
        self.mdl.entrada.val = value.start.format('MM/DD/YYYY');
        self.mdl.entrada.txt = value.start.format('DD/MM/YY');
        self.mdl.saida.val = value.end.format('MM/DD/YYYY');
        self.mdl.saida.txt = value.end.format('DD/MM/YY');
        self.onClick({
            target: self.rangepicker.datePicker.element[0]
        })
        self.daterange.start = value.start;
        self.daterange.end = value.end;
        self.daterange.label = '';
    }
    public decodeHTML(html) {
        var txt = document.createElement("textarea");
        txt.innerHTML = html;
        return txt.value;
    }
    public onSubmit() {
        var self = this,
            m = self.mdl,
            k = m.keys,
            quartos = '',
            tmp, i, j;
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
                self.cookie('cid', k.cid, true);
                self.cookie('api', k.api, true);
                self.cookie('secret', k.secret, true);
                self.open.keys = false;
            }
        }
        if (!m.busca.val || m.busca.regionId === '0' || !m.entrada.val || !m.saida.val) {
            alert('Favor preencher todos os campos');
            return;
        } else {
            self.cookie('busca-val', m.busca.val);
            self.cookie('busca-img', m.busca.icon);
            self.cookie('busca-id', m.busca.regionId);
            self.cookie('entrada', m.entrada.val);
            self.cookie('saida', m.saida.val);
            self.cookie('room', JSON.stringify(m.room));
        }
        self.vars.hotelList.HotelListResponse = null;
        self.vars.hotelList.HotelListResponseStr = 'Loading...';
        self.vars.hotelList.state = 1;
        m.busca.lastVal = m.busca.val;
        self.httpC.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelsavailable?' +
                'cid=' + k.cid +
                '&apiKey=' + k.api +
                '&secret=' + k.secret +
                '&checkin=' + m.entrada.val +
                '&checkout=' + m.saida.val +
                '&regionId=' + m.busca.regionId +
                quartos)
            .subscribe(hotelList => {
                var h = self.vars.hotelList,
                    tgtComP = 0.13,
                    storeComP = 0.15,
                    gpShare = 0.5,
                    msg = 'Erro!';
                try {
                    h.HotelListResponseStr = JSON.stringify(hotelList);
                    h.HotelListResponse = hotelList,
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
                    h.HotelListResponse = h.HotelListResponse.HotelListResponse.HotelList;
                    h.properties = h.HotelListResponse['@activePropertyCount'];
                    h.HotelListResponse = h.HotelListResponse['HotelSummary'];
                    if (!Array.isArray(h.HotelListResponse))
                        h.HotelListResponse = [h.HotelListResponse];
                    self.show.cardImg = new Array(h.HotelListResponse.length);
                    for (var i = 0; i < h.HotelListResponse.length; ++i) {
                        h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
                        self.show.cardImg[i] = 0;
                    }
                } else {
                    h.HotelListResponseStr = msg;
                    h.HotelListResponse = null;
                }
                h.state = 2;
            }, err => {
                var h = self.vars.hotelList,
                    erro = err ? err.error && err.error.text : '{messagem: Erro!}';
                try {
                    h.HotelListResponseStr = erro;
                    h.HotelListResponse = JSON.parse(erro);
                } catch (e) {
                    h.HotelListResponseStr = 'Erro!';
                    h.HotelListResponse = null;
                }
                h.state = 3;
            });
        return;
    }
}
