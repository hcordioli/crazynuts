import { Injectable } from '@angular/core';

interface Obj {
    [id: string]: any;
}

@Injectable()
export class GlobalService {
    vars: Obj = {
        hotelsUrl: {
            base: '',
            filter: '',
            sort: '',
            page: ''
        },
        hotelList: {
            HotelListResponse: null,
            HotelListResponseStr: '',
            properties: 0,
            state: 0,
            searchId: '',
            regionId: '',
            hasMorePages: false,
            page: 0
        },
        mdl: {
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
                lastRegion: '',
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
