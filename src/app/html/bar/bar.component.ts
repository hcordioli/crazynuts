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
        if (Utils.cookie('cid')) {
            self.keys = {
                cid: Utils.cookie('cid'),
                api: Utils.cookie('api'),
                secret: Utils.cookie('secret')
            }
            self.model2param();
        }
    }

    ngAfterViewInit() {
        var self = this;
        if (!Utils.cookie('cid'))
            self.show.keys = true;

    }

    public model2param() {
        var self = this,
            k = self.keys;
        self.vars.keys = (function(arr) {
            var str = '',
                i;
            for (i = 0; i < arr.length; i++)
                str += (i ? '~' : '') + arr[i][0] + ':' + arr[i][1];
            return str;
        }([
            ['cid', k.cid],
            ['apiKey', k.api],
            ['secret', k.secret]
        ]));
    }

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
            self.model2param();
        }
        p.go = true;
        Utils.cookie('room', self.vars.params.apt);
        delete self.vars.loadSearch;
        self.router.navigate(['/', 'u', p]);
    }
}
