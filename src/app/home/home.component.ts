import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';

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
    vars = {
        slogan: 'Encontre o hotel ideal para o seu cliente,<br>com a melhor comissão para você!',
        logo: {
            alt: 'HOTAX',
            url: 'assets/img/logo.svg'
        },
        icons: {
            people: 'assets/img/icons/people.png',
            room: 'assets/img/icons/room.png'
        },
        el: null,
        name: 0
    }
    open = {
        rooms: false
    }
    /*
        &room[room number, starting with 1]=
        [number of adults],
        [comma-delimited list of children's ages] 
    */
    mdl = {
        busca: '',
        entrada: '',
        saida: '',
        room: {
            total: 1,
            people: {
                total: 2,
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
    constructor() {}
    addRoom(index) {
        this.vars.name++;
        var self = this,
            r = self.mdl.room,
            i = r.people.list.length,
            name = this.vars.name;
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
    }
    changeAdult(index, val) {
        var p = this.mdl.room.people,
            old = p.list[index].more18;
        val = val | 0;
        p.total += val - old;
        p.list[index].more18 = val;
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
        p.list[index].less18.list = resize(p.list[index].less18.list, val, {age:0});
        p.list[index].less18.total = val;
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
    ngOnInit() {
        this.vars.el = document.getElementById('rooms');
    }
    onSubmit(frm) {
        return false;
    }

}
