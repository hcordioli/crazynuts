import { HttpClient } from '@angular/common/http';
import { GlobalDataService } from './../globaldata.service';
import { cookie } from './../utils';

export class Calendar {
	private conf: any = {
		url: 'https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/hotelsavailable?',
	}
    private data: Object[]
    constructor(private httpC: HttpClient, private gd: GlobalDataService, param ? : any) {
    	param = param || {
    		cid: 
    	};
        var self = this,
            params = [
                'cid' + cookie('cid'),
                'apiKey' + cookie('api'),
                'secret' + cookie('secret'),
                'checkin' + param.checkin,
                'checkout' + param.checkout,
                'regionId' + param.regionId,
                (function(argument) {

                }())
            ];
        self.gd.obj.hotels = self.gd.obj.hotels || {};
        self.gd.obj.hotels[opt.urlBase] = {
            opt: opt,
            data: null,
            hotels: []
        };
        self.httpC.get(self.conf.url + (
            '&' + [
                self.hotelsUrl.page,
                self.hotelsUrl.sort,
                (self.vars.filter.hotelname.active ?
                    self.hotelsUrl.filter : ''
                )
            ].join('&')).replace(/\&+/gi, '&').replace(/\&*$/gi, '')).subscribe(hotelList => {
            var tgtComP = 0.13,
                storeComP = 0.15,
                gpShare = 0.5,
                msg = 'Erro!',
                valueAdds,
                i, j, k, tmp;
            if (scrolling && h.hasMorePages) {
                try {
                    tmp = hotelList;
                } catch (e) {
                    tmp = null;
                }
                if (!tmp)
                    return;
                i = h.HotelListResponse.length;
                h.hasMorePages = tmp.HotelListResponse.moreResultsAvailable;
                h.regionId = m.busca.regionId;
                self.infinityScrolling = false;
                h.HotelListResponse = h.HotelListResponse.concat(tmp.HotelListResponse.HotelList.HotelSummary);
                for (; i < h.HotelListResponse.length; i++) {
                    self.show.cardImg.push(0);
                    h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
                    tmp = h.HotelListResponse[i].tripAdvisorRating;
                    if (tmp && tmp >= 3.5) {
                        if (tmp <= 3.9)
                            tmp = 'Bom!';
                        else if (tmp <= 4.2)
                            tmp = 'Muito Bom!';
                        else if (tmp <= 4.4)
                            tmp = 'Incrível!';
                        else if (tmp <= 4.6)
                            tmp = 'Fantástico!';
                        else if (tmp <= 5)
                            tmp = 'Excepcional!';
                        h.HotelListResponse[i].tripAdvisorLabel = tmp;
                    }
                }
            } else {
                try {
                    h.HotelListResponseStr = '';
                    h.HotelListResponse = hotelList;
                    msg = h.HotelListResponse.messagem;
                } catch (e) {
                    h.HotelListResponseStr = '';
                    h.HotelListResponse = null;
                }
                if (h.HotelListResponse.HotelListResponse && h.HotelListResponse.HotelListResponse.HotelList['@size']) {
                    if (h.HotelListResponse.HotelListResponse.EanWsError && h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage) {
                        h.HotelListResponseStr = h.HotelListResponse.HotelListResponse.EanWsError.presentationMessage;
                        h.HotelListResponse = null;
                        return;
                    }
                    h.HotelListResponse = h.HotelListResponse.HotelListResponse;
                    h.properties = h.HotelListResponse.HotelList['@activePropertyCount'];
                    h.searchId = h.HotelListResponse.customerSessionId;
                    h.hasMorePages = h.HotelListResponse.moreResultsAvailable;
                    h.HotelListResponse = h.HotelListResponse.HotelList['HotelSummary'];
                    if (!Array.isArray(h.HotelListResponse))
                        h.HotelListResponse = [h.HotelListResponse];
                    self.show.cardImg = new Array(h.HotelListResponse.length);
                    self.show.valueAdds = new Array(h.HotelListResponse.length);
                    for (i = 0; i < h.HotelListResponse.length; i++) {
                        h.HotelListResponse[i].shortDescription = self.decodeHTML(h.HotelListResponse[i].shortDescription);
                        self.show.cardImg[i] = 0;
                        self.show.valueAdds[i] = new Array(self.valueAdds.icons.length);
                        self.show.remainAdds[i] = [];
                        valueAdds = h.HotelListResponse[i].RoomRateDetailsList.RoomRateDetails.ValueAdds;
                        tmp = h.HotelListResponse[i].tripAdvisorRating;
                        if (tmp && tmp >= 3.5) {
                            if (tmp <= 3.9)
                                tmp = 'Bom!';
                            else if (tmp <= 4.2)
                                tmp = 'Muito Bom!';
                            else if (tmp <= 4.4)
                                tmp = 'Incrível!';
                            else if (tmp <= 4.6)
                                tmp = 'Fantástico!';
                            else if (tmp <= 5)
                                tmp = 'Excepcional!';
                            h.HotelListResponse[i].tripAdvisorLabel = tmp;
                        }
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
                } else {
                    h.HotelListResponseStr = msg;
                    h.HotelListResponse = null;
                }
            }
            h.state = 2;
        }, err => {
            var erro = err ? err.error && err.error.text : '{messagem: Erro!}';
            alert(erro);
            setTimeout(function() {
                h.HotelListResponseStr = isScroll ? '' : 'Erro: ' + erro;
            }, 1000)
            // try {
            //     h.HotelListResponseStr = erro;
            //     h.HotelListResponse = JSON.parse(erro);
            // } catch (e) {
            //     h.HotelListResponseStr = 'Erro!';
            //     h.HotelListResponse = null;
            // }
            // h.state = 3;
        });
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
