import { Component, AfterViewInit, ViewEncapsulation, ViewChild, ElementRef } from '@angular/core';
import { GlobalService } from './../../../global/global.service';
import { Utils } from "./../../../utils/utils";
import { Router } from '@angular/router';

@Component({
    selector: '.html-bar-apt',
    templateUrl: './apt.component.html',
    styleUrls: ['./apt.component.scss'],
    encapsulation: ViewEncapsulation.None,
    host: {
        '(document:click)': 'onClick($event)',
        '(document:keyup)': 'onFocus($event)',
        '(document:keydown)': 'onKey($event)',
        '(window:mouseup)': 'onClick($event)',
        '(window:touchend)': 'onClick($event)'
    }
})
export class AptComponent implements AfterViewInit {
    @ViewChild('rooms') rooms: ElementRef;
    public vars: any;
    public show = -1;
    public room = {
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
    public cookied = false;
    constructor(private gd: GlobalService, private router: Router) {
        var self = this,
            cookie;
        self.vars = gd.vars;
        cookie = Utils.cookie('room');
        if (self.vars.params.apt) {
            self.param2model();
        } else if (cookie) {
            self.vars.params.apt = cookie;
            self.cookied = true;
            self.param2model();
        } else {
            self.model2param();
        }
    }
    public model2paramt: any;
    public model2param() {
        var self = this;
        clearTimeout(self.model2paramt);
        self.model2paramt = setTimeout(function() {
            var str = '',
                i;
            for (i = 0; i < self.room.total; i++) {
                str += (i ? '~' : '') + 'room' + (i + 1) + ':';
                str += self.room.people.list[i].more18;
                if (self.room.people.list[i].less18.list.length)
                    str += ',' + self.room.people.list[i].less18.list.map(function(a) {
                        return a.age;
                    }).join(',');
            }
            self.rooms.nativeElement.className += ' touched';
            self.vars.params = self.vars.params || {};
            self.vars.params.apt = str;
        }, 0);
    }
    public param2modelt: any;
    public param2model() {
        var self = this,
            rooms = self.vars.params.apt.split('~room');
        clearTimeout(self.param2modelt);
        self.param2modelt = setTimeout(function() {
            var i, tmp;
            for (i = 0; i < rooms.length; i++) {
                tmp = rooms[i].split(':');
                if (tmp.length > 1) {
                    tmp = tmp[1].split(',');
                    if (i)
                        self.addRoom(i, true);
                    self.changeAdult(i, tmp[0], 'adults[' + i + ']', true)
                    tmp.shift();
                    self.changeChild(i, tmp.length, ('children[' + i + ']'), tmp);
                }
            }
            self.rooms.nativeElement.className += ' touched';
        }, 0);
    }
    ngAfterViewInit() {
        var self = this;
        if (self.cookied)
            self.rooms.nativeElement.className += ' touched';
    }
    public selectRoom(index) {
        var self = this;
        self.show = index;
    }
    public counter = 0;
    public addRoom(index, emulated) {
        var self = this,
            r = self.room,
            i = r.people.list.length,
            ii = index,
            name = ++self.counter,
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
            self.show = ii;
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
        if (!emulated)
            self.model2param();
    }
    public changeAdult(index, val, nome, emulated) {
        var self = this,
            p = self.room.people,
            i = index,
            old = p.list[i].more18,
            el;
        val = (val | 0);
        if ((p.total + (val - old)) > p.limit) {
            p.list[i].more18 = old;
            el = document.getElementById(nome);
            if (el)
                el.value = old;
        } else {
            p.list[i].more18 = val;
            p.total += val - old;
        }
        self.room.disabled = p.total >= p.limit;
        if (!emulated)
            self.model2param();
    }
    public changeChild(index, val, nome, emulated) {
        function resize(arr, size, defval) {
            var delta = arr.length - size,
                i;
            if (emulated)
                for (i = 0; i < arr.length; i++)
                    if (arr[i].age && i < emulated.length)
                        arr[i].age = emulated[i];
            if (delta > 0)
                arr.length = size;
            else
                for (i = 0; delta++ < 0; i++) {
                    if (emulated) {
                        if (!i) {
                            setTimeout(function() {
                                self.show = -1;
                            }, 0);
                        }
                        arr.push({ age: emulated[i] | 0 });
                    } else
                        arr.push(defval);
                }
            return arr;
        }
        var self = this,
            p = self.room.people,
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
        self.room.disabled = p.total >= p.limit;
        if (!emulated)
            self.model2param();
    }
    public changeChildAgeT: any;
    public changeChildAge(e, n) {
        var self = this,
            p = n;
        clearTimeout(self.changeChildAgeT);
        self.changeChildAgeT = setTimeout(function() {
            var str = ((self.room.people.list[p] && self.room.people.list[p].less18.list).map(function(a) {
                return a.age;
            }).join(','));
            self.vars.params.apt = self.vars.params.apt.replace(new RegExp('(^|~)(room' + (p + 1) + ':.*?[0-9],)([,0-9]+)(~|$)', 'i'), '$1$2' + str + '$4');
        }, 0);
    }
    public rmRoom(index) {
        var self = this,
            i = index;
        if (self.room.total <= 1)
            return;
        setTimeout(function() {
            var r = self.room,
                p = r.people,
                tp = p.list[i].more18 + p.list[i].less18.total;
            p.total -= tp;
            r.total--;
            p.list.splice(i, 1);
            if (self.show)
                self.show--;
            r.disabled = p.total >= p.limit;
        }, 0);
        self.model2param();
    }
    public onKey(e) {
        var self = this,
            el;
        if (e.key === 'Escape') {
            if (self.show >= 0)
                self.show = -1;
        }
    }
    public onFocus(e) {
        var self = this;
        self.onClick.apply(this, arguments)
    }
    public onClick(e) {
        var self = this,
            tgt = e.target,
            el = document.querySelector('#pickMe'),
            start = false,
            val, date;
        if (!e || !tgt)
            return true;
        if (self.rooms.nativeElement) {
            if (self.rooms.nativeElement.contains(tgt)) {
                self.show = Math.max(self.show, 0);
                if (!/touched/.test(self.rooms.nativeElement.className))
                    self.rooms.nativeElement.className += ' touched';
                if (!/focus/.test(self.rooms.nativeElement.className))
                    self.rooms.nativeElement.className += ' focus';
            } else {
                self.rooms.nativeElement.className = self.rooms.nativeElement.className.replace(/\s*focus\s*/gi, ' ');
                self.show = -1;
            }
        }
        return true;
    }

}
