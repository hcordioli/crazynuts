import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from "@angular/http";
import { CompleterService, RemoteData } from 'ng2-completer';
import { CustomData } from './regions';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(document:click)': 'onClick($event)',
        '(document:keyup)': 'onFocus($event)',
        '(document:keydown)': 'onKey($event)'
    }
})
export class HomeComponent implements OnInit {
    public daterange: any = {};

    // see original project for full list of options
    // can also be setup using the config service to apply to multiple pickers
    public options: any = {
        locale: {
            format: 'MM/DD/YYYY',
            monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            daysOfWeek: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
        },
        alwaysShowCalendars: false,
        autoApply: true,
        showDropdowns: false,
        minDate: (new Date()),
        dateLimit: {
            days: 28
        },
        parentEl: '#pickMe'
    };

    public selectedDate(value: any) {
        this.mdl.entrada.val = value.start.format('MM/DD/YYYY');
        this.mdl.entrada.txt = value.start.format('DD/MM/YY');
        this.mdl.saida.val = value.end.format('MM/DD/YYYY');
        this.mdl.saida.txt = value.end.format('DD/MM/YY');
        this.onClick({
            target: this.vars.el
        })
        this.daterange.start = value.start;
        this.daterange.end = value.end;
        this.daterange.label = '';
    }

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
    constructor(private http: Http, private httpC: HttpClient, private completerService: CompleterService) {}
    ngOnInit() {
        var roomCok;
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
            if (this.cookie('busca-val')) {
                this.mdl.busca.init = {
                    title: this.cookie('busca-val'),
                    image: this.cookie('busca-img'),
                    description: this.cookie('busca-id')
                };
            }
            this.mdl.entrada.val = this.cookie('entrada');
            this.mdl.entrada.txt = this.mdl.entrada.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            this.mdl.saida.val = this.cookie('saida');
            this.mdl.saida.txt = this.mdl.saida.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            roomCok = this.cookie('room');
            if (roomCok) {
                if (roomCok !== JSON.stringify(this.mdl.room)) {
                    this.mdl.room = JSON.parse(roomCok);
                    this.vars.el.className += ' touched';
                } else {
                    console.log('same');
                }
            }
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
    cookie = function(prop, val ? , eternal ? ) {
        var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
        if (val !== undefined)
            document.cookie = prop + '=' + val + (eternal ? '; expires=' + new Date('01/01/2038').toUTCString() : '') + '; path=/;';
        return val ? val : (ret && ret.length > 1 ? ret[1] : '');
    }
    addRoom(index) {
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
    onCompleterSelected(e) {
        var title = e.originalObject ? (e.originalObject.title || e.originalObject.regionNameLong) : e.title;
        if (e && e.description) {
            this.mdl.busca.regionId = e.description || '0';
            this.mdl.busca.icon = e.image;
            this.mdl.busca.val = title;
        }
    }
    onKey(e) {
        var el = < HTMLElement > document.querySelector('#pickMe .daterangepicker');
        if (e.key === 'Escape') {
            if (this.open.rooms)
                this.open.rooms = false;
            else if (el && el.style.display !== 'none')
                el.style.display = 'none';
        }
    }
    onFocus(e) {
        this.onClick.apply(this, arguments)
    }
    onClick(e) {
        if (!e || !e.target)
            return true;
        if (this.vars.el) {
            if (this.vars.el.contains(e.target)) {
                this.open.rooms = true;
                if (!/touched/.test(this.vars.el.className))
                    this.vars.el.className += ' touched';
                if (!/focus/.test(this.vars.el.className))
                    this.vars.el.className += ' focus';
            } else {
                this.vars.el.className = this.vars.el.className.replace(/\s*focus\s*/gi, ' ');
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
                    for (var i = 0; i < h.HotelListResponse.length; ++i)
                        h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
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
