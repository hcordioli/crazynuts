export class Amenities {
    private data = {
        //for(var k in o) console.log([k, o.hasOwnProperty(k)])
        icons: [
        	{
                'fa-coffee': [
                    '2098',
                    '1073742786',
                    '1073742621',
                    '2111'
                ]
            },
            {
                'fa-cutlery': [
                    '2106',
                    '2107',
                    '1073742625',
                    '1073742626',
                    '2102',
                    '2103',
                    '2104',
                    '2105',
                    '2193',
                    '2194',
                    '2203',
                    '2205',
                    '2209',
                    '2210',
                    '2211',
                    '1073742857',
                    '2233'
                ]
            },
            {
                'fa-wifi': [
                    '2097',
                    '2191',
                    '2192',
                    '2220',
                    '1073742787'
                ]
            },
            {
                'parking': [
                    '2109',
                    '2215',
                    '2110'
                ]
            },
            {
                'fa-bell-o': [
                    '2216',
                    '2195'
                ]
            },
            {
                'fa-bus': [
                    '2196',
                    '2214',
                    '2221',
                    '1073742859',
                    '1073742860'
                ]
            },
            {
                'xe013': [
                    '1073743286'
                ]
            },
            {
                'fa-ticket': [
                    '1073742861',
                    '2204',
                    '1073742617',
                    '1073743288'
                ]
            },
            {
                'fa-glass': [
                    '1073742551',
                    '2217',
                    '2219'
                ]
            },
            {
                'xe25e': [
                    '2212'
                ]
            },
            {
                'fa-money': [
                    '2108',
                    '2198',
                    '2201',
                    '2235'
                ]
            },
            {
                'svg-spa': [
                    '2200',
                    '1073742618'
                ]
            },
            {
                'fa-calendar-check-o': [
                    '2226',
                    '2227',
                    '1073743274',
                    '1073743275'
                ]
            },
            {
                'fa-level-up': [
                    '2197',
                    '2224',
                    '2225'
                ]
            },
            {
                'xe013': [
                    '2228',
                    '1073743287',
                    '2213',
                    '2218',
                    '2222',
                    '2202',
                    '2199',
                    '1073742858',
                    '2096',
                    '1073742680',
                    '1073742681',
                    '2223',
                    '1073742736'
                ]
            },
            {
                'fa-check': [
                    '1073742624',
                    '2175',
                    '1073742862',
                    '1073742863',
                    '1073742909',
                    '1073742627',
                    '1073742552',
                    '2236',
                    '2232',
                    '2234',
                    '2206',
                    '2207',
                    '2208'
                ]
            }
        ],
        hotels: {}
    }
    public addValue(hotel: string, icon: string) {
    	var self = this;
    	if(self.data.hotels[hotel].html)
    		return self.data.hotels[hotel];
    	self.data.hotels[hotel] = {
    		html: 
    	}
    }
    constructor(valueAdds) {
        var self = this;
        if (!valueAdds)
            return;
        self.show.remainAdds[i] = [];
        self.show.valueAdds.push(new Array(self.valueAdds.icons.length));
        valueAdds = h.HotelListResponse[i].RoomRateDetailsList.RoomRateDetails.ValueAdds;
        if (valueAdds) {
            if (!Array.isArray(valueAdds.ValueAdd))
                valueAdds.ValueAdd = [valueAdds.ValueAdd];
            for (j = 0; j < valueAdds.ValueAdd.length; j++) {
                k = valueAdds.ValueAdd[j];
                if (k['@id'] in self.valueAdds.ids) {
                    if (!self.show.valueAdds[i][self.valueAdds.ids[k['@id']]])
                        self.show.valueAdds[i][self.valueAdds.ids[k['@id']]] = k.description;
                    else
                        self.show.remainAdds[i].push(k.description);
                } else {
                    self.show.remainAdds[i].push(k.description);
                }
            }
        }

    }
    private valueAdds = {
        ids: {
            '2098': 0,
            '1073742786': 0,
            '1073742621': 0,
            '2111': 0,
            '2106': 1,
            '2107': 1,
            '1073742625': 1,
            '1073742626': 1,
            '2102': 1,
            '2103': 1,
            '2104': 1,
            '2105': 1,
            '2193': 1,
            '2194': 1,
            '2203': 1,
            '2205': 1,
            '2209': 1,
            '2210': 1,
            '2211': 1,
            '1073742857': 1,
            '2233': 1,
            '2097': 2,
            '2191': 2,
            '2192': 2,
            '2220': 2,
            '1073742787': 2,
            '2109': 3,
            '2215': 3,
            '2110': 3,
            '2216': 4,
            '2195': 4,
            '2196': 5,
            '2214': 5,
            '2221': 5,
            '1073742859': 5,
            '1073742860': 5,
            '1073743286': 6,
            '1073742861': 7,
            '2204': 7,
            '1073742617': 7,
            '1073743288': 7,
            '1073742551': 8,
            '2217': 8,
            '2219': 8,
            '2212': 9,
            '2108': 10,
            '2198': 10,
            '2201': 10,
            '2235': 10,
            '2200': 11,
            '1073742618': 11,
            '2226': 12,
            '2227': 12,
            '1073743274': 12,
            '1073743275': 12,
            '2197': 13,
            '2224': 13,
            '2225': 13,
            '2228': 14,
            '1073743287': 14,
            '2213': 14,
            '2218': 14,
            '2222': 14,
            '2202': 14,
            '2199': 14,
            '1073742858': 14,
            '2096': 14,
            '1073742680': 14,
            '1073742681': 14,
            '2223': 14,
            '1073742736': 14,
            '1073742624': 15,
            '2175': 15,
            '1073742862': 15,
            '1073742863': 15,
            '1073742909': 15,
            '1073742627': 15,
            '1073742552': 15,
            '2236': 15,
            '2232': 15,
            '2234': 15,
            '2206': 15,
            '2207': 15,
            '2208': 15,

        },
        icons: [
            'fa-coffee',
            'fa-cutlery',
            'fa-wifi',
            'parking',
            'fa-bell-o',
            'fa-bus',
            'xe013',
            'fa-ticket',
            'fa-glass',
            'xe25e',
            'fa-money',
            'svg-spa',
            'fa-calendar-check-o',
            'fa-level-up',
            'xe013',
            'fa-check'
        ]
    }
    public get(index: number) {
        if (!index) {
            return null;
        }
        return
    }


    // 		<i *ngIf="valueAdds.icons[k].indexOf('fa-') === 0" [attr.class]="'fa ' + valueAdds.icons[k]"></i>
    // 	<span style="font-family: icomoon;" *ngIf="valueAdds.icons[k].indexOf('x') === 0" [innerHTML]="decodeHTML('&' + '#' + valueAdds.icons[k] + ';')"></span>
    // <span *ngIf="valueAdds.icons[k].indexOf('parking') === 0" class="fa-stack" style="font-size: 0.6rem;">
    // 		<i class="fa fa-square fa-stack-2x"></i>
    // 		<strong class="fa-stack-1x fa-inverse icon-text">P</strong>
    // 	</span>
    // <span class="svg" *ngIf="valueAdds.icons[k].indexOf('svg-') === 0">
    // 		<img [attr.src]="vars.icons.base + valueAdds.icons[k] + '.svg'" alt="">
    // 	</span>

}
