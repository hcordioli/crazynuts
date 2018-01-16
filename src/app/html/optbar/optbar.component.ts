import { Component, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { DaterangePickerComponent } from 'ng2-daterangepicker';
import { GlobalService } from './../../global/global.service';
import { Regions } from './../../http/regions';
import { Utils } from "./../../utils/utils";
import { Http } from "@angular/http";
import { Router } from '@angular/router';

@Component({
    selector: 'html-optbar',
    templateUrl: './optbar.component.html',
    styleUrls: ['./optbar.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(window:scroll)': 'onScroll($event)',
        '(document:click)': 'onClick($event)',
        '(document:keyup)': 'onFocus($event)',
        '(document:keydown)': 'onKey($event)',
        '(window:mouseup)': 'onClick($event)',
        '(window:touchend)': 'onClick($event)'
    }
})
export class OptbarComponent implements AfterViewInit {
    @ViewChild(DaterangePickerComponent) rangepicker: DaterangePickerComponent;
    @ViewChild('rooms') rooms: ElementRef;
    public urlSubmit = {
    	id: '',
    	in: '',
    	out: '',
    	apt: ''
    };
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
    public vars: any;
    public regions: Regions;
    private cookied = false;
    public show = {
        keys: false,
        rooms: false,
        room: 0,
        calendarRight: false
    }
    constructor(private gd: GlobalService, private http: Http, private router: Router) {
        var self = this,
            roomCok;
        self.vars = gd.vars;
        self.regions = new Regions(self.http);
        if (!Utils.cookie('cid'))
            self.show.keys = true;
        else {
            self.vars.mdl.keys = {
                cid: Utils.cookie('cid'),
                api: Utils.cookie('api'),
                secret: Utils.cookie('secret')
            }
            if (Utils.cookie('busca-val')) {
                self.vars.mdl.busca.init = {
                    title: Utils.cookie('busca-val'),
                    image: Utils.cookie('busca-img'),
                    description: Utils.cookie('busca-id')
                };
            }
            self.vars.mdl.entrada.val = Utils.cookie('entrada');
            self.vars.mdl.entrada.txt = self.vars.mdl.entrada.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            self.vars.mdl.saida.val = Utils.cookie('saida');
            self.vars.mdl.saida.txt = self.vars.mdl.saida.val.replace(/^(\d*?)(.)(\d*?)(.)(\d{2})(\d{2})$/gi, '$3$4$1$2$6');
            roomCok = Utils.cookie('room');
            if (roomCok) {
                if (roomCok !== JSON.stringify(self.vars.mdl.room)) {
                    self.vars.mdl.room = JSON.parse(roomCok);
                    self.cookied = true;
                }
            }
        }
    }

    ngAfterViewInit() {}

    public addRoom(index) {
        var self = this,
            r = self.vars.mdl.room,
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
        var self = this,
            p = self.vars.mdl.room.people,
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
        self.vars.mdl.room.disabled = p.total >= p.limit;
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
        var self = this,
            p = self.vars.mdl.room.people,
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
        self.vars.mdl.room.disabled = p.total >= p.limit;
    }
    public rmRoom(index) {
        var self = this,
            i = index;
        if (self.vars.mdl.room.total <= 1)
            return;
        setTimeout(function() {
            var r = self.vars.mdl.room,
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
        self.vars.mdl.busca.cls = (self.vars.mdl.busca.val || '').length < 3 ? 'lessthanthree' : '';
    }
    public onCompleterFocus(e) {
        var self = this;
        self.vars.mdl.busca.cls = (self.vars.mdl.busca.val || '').length < 3 ? 'lessthanthree' : '';
    }
    public onCompleterBlur(e) {
        var self = this;
        setTimeout(function() {
            self.vars.mdl.busca.val = (self.vars.mdl.busca.val !== self.vars.mdl.busca.lastVal ? (self.vars.mdl.busca.val ? self.vars.mdl.busca.lastVal : self.vars.mdl.busca.val) : self.vars.mdl.busca.val);
            self.vars.mdl.busca.cls = (self.vars.mdl.busca.val || '').length < 3 ? 'lessthanthree' : '';
        }, 100);
    }
    public onCompleterSelected(e) {
        var title = e && e.originalObject ? (e.originalObject.title || e.originalObject.regionNameLong) : (e ? e.title : ''),
            self = this;
        if (e && e.description) {
            self.vars.mdl.busca.lastRegion = self.vars.mdl.busca.regionId;
            self.vars.mdl.busca.regionId = e.description || '0';
            self.vars.mdl.busca.icon = e.image;
            self.vars.mdl.busca.val = title;
            self.vars.hotelsUrl.base = '';
            if (self.vars.filter) {
                self.vars.filter.hotelname.active = false;
            }
            if (self.vars.mdl.busca.lastVal !== title) {
                self.vars.mdl.busca.lastVal = title;
                if (self.vars.hotelList.hasMorePages)
                    self.vars.hotelList.hasMorePages = false;
            } else {
                self.vars.mdl.busca.lastVal = title;
            }
        }
    }
    public onKey(e) {
        var self = this,
            el;
        if (e.key === 'Escape') {
            el = < HTMLElement > document.querySelector('#pickMe .daterangepicker');
            if (self.show.rooms)
                self.show.rooms = false;
            else if (el && el.style.display !== 'none')
                el.style.display = 'none';
        }
    }
    public onFocus(e) {
        var self = this;
        self.onClick.apply(this, arguments)
    }
    public onClickTimer;
    public onClick(e) {
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
            self.show.calendarRight = self.vars.mdl.saida.val === '';
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
                    self.vars.mdl[start ? 'entrada' : 'saida'] = {
                        val: val.join('/'),
                        txt: [val[1], val[0], val[2]].join('/')
                    };
                    if (!start) {
                        self.rangepicker.datePicker.hide.call(self.rangepicker.datePicker, {})
                        self.show.calendarRight = null;
                    } else {
                        self.vars.mdl.saida = {
                            val: '',
                            txt: ''
                        };
                        self.show.calendarRight = true;
                    }
                }, 0);
            }
        } else if (self.rooms.nativeElement) {
            if (self.rooms.nativeElement.contains(tgt)) {
                self.show.rooms = true;
                if (!/touched/.test(self.rooms.nativeElement.className))
                    self.rooms.nativeElement.className += ' touched';
                if (!/focus/.test(self.rooms.nativeElement.className))
                    self.rooms.nativeElement.className += ' focus';
            } else {
                self.rooms.nativeElement.className = self.rooms.nativeElement.className.replace(/\s*focus\s*/gi, ' ');
                self.show.rooms = false;
            }
        }
        return true;
    }
    public nextInput(ev) {
        var self = this,
            tgt = ev.target;
        tgt = tgt ? tgt.parentNode.parentNode.parentNode : document;
        tgt = tgt.querySelector('.room input');
        self.show.rooms = true;
        if (tgt)
            tgt.focus();
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
        console.log(value);	
        if (value.start) {
            self.vars.mdl.entrada.val = value.start.format('MM/DD/YYYY');
            self.vars.mdl.entrada.txt = value.start.format('DD/MM/YY');
			self.urlSubmit.in = Utils.date2str('', value.start._d);
            self.daterange.start = value.start;
        }
        if (value.end) {
            self.vars.mdl.saida.val = value.end.format('MM/DD/YYYY');
            self.vars.mdl.saida.txt = value.end.format('DD/MM/YY');
			self.urlSubmit.out = Utils.date2str('', value.end._d);
            self.daterange.end = value.end;
        } else {
            self.vars.mdl.saida.val = '';
            self.vars.mdl.saida.txt = '';
            self.daterange.end = value.start || '';
        }
        if ('label' in value) {
            self.onClick({
                target: self.rangepicker.datePicker.element[0]
            })
            self.daterange.label = '';
        }
    }
    public onSubmit() {
        var self = this,
            m = self.vars.mdl,
            h = self.vars.hotelList,
            k = m.keys,
            quartos = '',
            tmp, i, j;
        if (!self.vars.hotelsUrl.base) {
            for (i = 0; i < m.room.people.list.length; i++) {
                tmp = m.room.people.list[i];
                quartos += '_' + (i + 1) + '=' + tmp.more18;
                if (tmp.less18.total)
                    for (j = 0; j < tmp.less18.list.length; j++)
                        quartos += ',' + tmp.less18.list[j].age
            }
            quartos = quartos.replace(/^[_]/, '');
            if (self.show.keys) {
                if (!k.api || !k.cid || !k.secret) {
                    alert('Favor inserir token');
                    return;
                } else {
                    Utils.cookie('cid', k.cid, true);
                    Utils.cookie('api', k.api, true);
                    Utils.cookie('secret', k.secret, true);
                    self.show.keys = false;
                }
            }
            if (!m.busca.val || m.busca.regionId === '0' || !m.entrada.val || !m.saida.val) {
                alert('Favor preencher todos os campos');
                return;
            } else {
                Utils.cookie('busca-val', m.busca.val);
                Utils.cookie('busca-img', m.busca.icon);
                Utils.cookie('busca-id', m.busca.regionId);
                Utils.cookie('entrada', m.entrada.val);
                Utils.cookie('saida', m.saida.val);
                Utils.cookie('room', JSON.stringify(m.room));
            }
            h.HotelListResponse = null;
            h.HotelListResponseStr = null;
            self.vars.loadSearch = null;
            m.busca.lastVal = m.busca.val;
        } else {
            self.vars.loadSearch = null;
            h.HotelListResponse = null;
            h.HotelListResponseStr = null;
        }
        h.regionId = m.busca.regionId;
        self.vars.hotelsUrl.page = 'page=0';
        self.vars.hotelList.page = 0;
        self.urlSubmit.id = m.busca.regionId;
        tmp = [
        	self.urlSubmit.id,
        	self.urlSubmit.in,
        	self.urlSubmit.out,
        	quartos
        ].join('/');
        self.router.navigate(['/' + tmp]);
    }
}
