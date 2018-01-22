import { Component, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from './../../global/global.service';
import { Utils } from "./../../utils/utils";
import { Router } from '@angular/router';

@Component({
    selector: '.html-bar',
    templateUrl: './bar.component.html',
    styleUrls: ['./bar.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class BarComponent implements AfterViewInit {
    public keys: {
        cid: '',
        api: '',
        secret: ''
    }
    public urlSubmit = {
        id: '',
        in: '',
        out: '',
        apt: ''
    };
    public vars: any;
    public show = {
        keys: false,
        rooms: false,
        room: 0
    }
    constructor(private gd: GlobalService, private router: Router) {
        var self = this,
            roomCok;
        self.vars = gd.vars;
        if (!Utils.cookie('cid'))
            self.show.keys = true;
        else {
            self.keys = {
                cid: Utils.cookie('cid'),
                api: Utils.cookie('api'),
                secret: Utils.cookie('secret')
            }
        }
    }

    ngAfterViewInit() {}


    public onSubmit() {
        var self = this,
            p = self.vars.params,
            k = self.keys;
        if (!k.api || !k.cid || !k.secret) {
            alert('Favor inserir token');
            return;
        } else {
            self.show.keys = false;
            Utils.cookie('cid', k.cid, true);
            Utils.cookie('api', k.api, true);
            Utils.cookie('secret', k.secret, true);
            self.vars.keys = (function(arr){
                var str = '',
                    i;
                for(i = 0; i < arr.length; i++)
                    str += (i ? '~' : '') + arr[i][0] + ':' + arr[i][1];
                return str;
            }([
                ['cid', k.cid],
                ['apiKey', k.api],
                ['secret', k.secret]
            ]));
        }
        p.go = true;
        self.router.navigate(['/u', p]);
        /*
            var self = this,
                m = self.mdl,
                h = self.vars.hotelList,
                k = m.keys,
                quartos = '',
                params = [],
                tmp, i, j;
            if (!self.vars.hotelsUrl.base) {
                for (i = 0; i < m.room.people.list.length; i++) {
                    tmp = m.room.people.list[i];
                    quartos += '_' + (i + 1) + '-' + tmp.more18;
                    if (tmp.less18.total)
                        for (j = 0; j < tmp.less18.list.length; j++)
                            quartos += ',' + tmp.less18.list[j].age
                }
                if (self.show.keys) {
                    if (!k.api || !k.cid || !k.secret) {
                        alert('Favor inserir token');
                        return;
                    } else {
                        self.show.keys = false;
                        Utils.cookie('cid', k.cid, true);
                        Utils.cookie('api', k.api, true);
                        Utils.cookie('secret', k.secret, true);
                    }
                }
                if (k.api && k.cid && k.secret) {
                    self.vars.hotelsUrl.keys = '&cid=' + k.cid + '&apiKey=' + k.api + '&secret=' + k.secret;
                    Utils.cookie('keys', self.vars.hotelsUrl.keys, true);
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
                self.vars.loadSearch = true;
                m.busca.lastVal = m.busca.val;
            } else {
                self.vars.loadSearch = true;
                h.HotelListResponse = null;
                h.HotelListResponseStr = null;
            }
            h.regionId = m.busca.regionId;
            self.vars.hotelsUrl.page = 'page=0';
            self.vars.hotelList.page = 0;
            self.urlSubmit.id = m.busca.regionId;
            self.urlSubmit.apt = quartos;
            tmp = [self.vars.sort.price, self.vars.sort.rating];
            tmp[2] = tmp[0].asc ? '2' : (tmp[0].desc ? '1' : '0');
            tmp[2] += tmp[1].asc ? '2' : (tmp[1].desc ? '1' : '0');
            params.push(tmp[2]);
            params.push(!self.vars.filter.hotelname.active ? 'null' : self.vars.hotelsUrl.filter);
            params.push(self.vars.filter.bit.val);
            tmp = ([
                self.urlSubmit.id,
                self.urlSubmit.in || Utils.date2str(''),
                self.urlSubmit.out || Utils.date2str(''),
                quartos,
                self.vars.hotelList.page
            ]).concat(params).join('/');
            h.HotelListResponseStr = null;
            self.router.navigate(['/' + tmp]);*/
    }
}
