import { Injectable } from '@angular/core';

interface Obj {
    [id: string]: any;
}


@Injectable()
export class GlobalService {
    vars: Obj = {
        show: {
            calendarRight: false
        },
        params: {},
        keys: '',
        last: {
            busca: '',
            props: 0
        },
        hotelsUrl: {
            base: '',
            keys: '',
            avail: '',
            filter: '',
            sort: '',
            page: ''
        },
        filter: {
            hotelname: {
                val: '',
                active: false
            },
            hotelprice: {
                val: [0, 2000],
                min: 0,
                max: 2000
            },
            bit: {
                val: 0,
                mask: 0,
                masks: []
            }
        },
        sort: {
            price: {
                desc: false,
                asc: false
            },
            rating: {
                desc: false,
                asc: false
            }
        },
        hotels: {},
        loading: 'assets/img/loading.gif',
        loadSearch: undefined,
        path: '',
        icons: {
            base: 'assets/img/icons/',
            hot: 'card/hot.svg',
            cafe: 'card/cafe.svg',
            map: 'view/map.png',
            sugestoes: 'view/hotdeals.png',
            people: 'room/people.png',
            room: 'room/bed.png',
            remove: 'room/remove.png'
        }
    };
}
