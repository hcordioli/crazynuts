import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgModel } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

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
            room: 'assets/img/icons/room.png',
            remove: 'assets/img/icons/remove.png'
        },
        el: null,
        name: 0,
        hotelList: {}
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
        busca: '',
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
                    more18: 2,
                    less18: {
                        total: 0,
                        list: []
                    }
                }]
            }
        }
    }
    constructor(private http: HttpClient) {}
    cookie = function(prop, val ? ) {
        var ret = prop ? document.cookie.match((new RegExp(prop.toString() + '=(.*?)(;|$)'))) : ['', false];
        if (val !== undefined)
            document.cookie = prop + '=' + val + '' + '; path=/';
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
        p.list[index].less18.list = resize(p.list[index].less18.list, val, { age: 0 });
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
        if (!this.cookie('cid'))
            this.open.keys = true;
        else {
            this.mdl.keys = {
                cid: this.cookie('cid'),
                api: this.cookie('api'),
                secret: this.cookie('secret')
            }
            this.mdl.busca = this.cookie('busca');
            this.mdl.entrada = this.cookie('entrada');
            this.mdl.saida = this.cookie('saida');
        }
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
        if (!m.busca || !m.entrada || !m.saida) {
            alert('Favor preencher todos os campos');
            return;
        } else {
            self.cookie('busca', m.busca);
            self.cookie('entrada', m.entrada);
            self.cookie('saida', m.saida);
        }
        self.http.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotels?' +
                'eanCID=' + k.cid +
                '&eanAPIKey=' + k.api +
                '&eanSharedSecret=' + k.secret +
                '&city=' + m.busca +
                '&countryCode=US&arrivalDate=' + m.entrada +
                '&departureDate=' + m.saida +
                '&numberOfAdults=' + m.room.people.total +
                '&numberOfResults=10&rateType=sim')
            .subscribe(hotelList => {
                self.vars.hotelList = hotelList;
                console.log(self.vars.hotelList)
            }, error => {
                self.http.get('/proxy/hotels?' +
                        'eanCID=' + k.cid +
                        '&eanAPIKey=' + k.api +
                        '&eanSharedSecret=' + k.secret +
                        '&city=' + m.busca +
                        '&countryCode=US&arrivalDate=' + m.entrada +
                        '&departureDate=' + m.saida +
                        '&numberOfAdults=' + m.room.people.total +
                        '&numberOfResults=10&rateType=sim')
                    .subscribe(hotelList => {
                        self.vars.hotelList = hotelList;
                        console.log(self.vars.hotelList)
                    });
            });
        return;
    }
}
