import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from './../../../global/global.service';
import { Utils } from "./../../../utils/utils";
import { Http } from "@angular/http";
import { Regions } from './regions';

@Component({
    selector: '.html-bar-region',
    templateUrl: './region.component.html',
    styleUrls: ['./region.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class RegionComponent implements OnInit {
    public busca = {
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
    };
    public regions: Regions;
    public vars: any;
    constructor(private gd: GlobalService, private http: Http) {
        var self = this;
        self.vars = gd.vars;
        self.regions = new Regions(self.http);
        if (Utils.cookie('busca-val')) {
            self.busca.init = {
                title: Utils.cookie('busca-val'),
                image: Utils.cookie('busca-img'),
                description: Utils.cookie('busca-id')
            };
        }

    }

    ngOnInit() {}

    public onCompleterInput(e) {
        var self = this;
        self.busca.cls = (self.busca.val || '').length < 3 ? 'lessthanthree' : '';
    }
    public onCompleterFocus(e) {
        var self = this;
        self.busca.cls = (self.busca.val || '').length < 3 ? 'lessthanthree' : '';
    }
    public onCompleterBlur(e) {
        var self = this;
        setTimeout(function() {
            self.busca.val = (self.busca.val !== self.busca.lastVal ? (self.busca.val ? self.busca.lastVal : self.busca.val) : self.busca.val);
            self.busca.cls = (self.busca.val || '').length < 3 ? 'lessthanthree' : '';
        }, 100);
    }
    public onCompleterSelected(e) {
        var title = e && e.originalObject ? (e.originalObject.title || e.originalObject.regionNameLong) : (e ? e.title : ''),
            self = this;
        if (e && e.description) {
            self.busca.lastRegion = self.busca.regionId;
            self.busca.regionId = e.description || '0';
            self.busca.icon = e.image;
            self.busca.val = title;
            self.vars.hotelsUrl.base = '';
            self.vars.filter.hotelname.active = false;
            if (self.busca.lastVal !== title) {
                self.busca.lastVal = title;
                if (self.vars.hotelList.hasMorePages)
                    self.vars.hotelList.hasMorePages = false;
            } else {
                self.busca.lastVal = title;
            }
        }
    }
}