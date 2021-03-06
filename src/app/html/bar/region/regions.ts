import { Subject } from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { CompleterData, CompleterItem } from 'ng2-completer';

export class Regions extends Subject < CompleterItem[] > implements CompleterData {
    constructor(private http: Http) {
        super();
    }
    public search(term: string): void {
        this.http.get('https://s9fcnig6dc.execute-api.us-east-1.amazonaws.com/Test/regions?termo=' + term)
            .subscribe((ret) => {
                let data = ret.json();
                let matches: CompleterItem[] = data.map((item: any) => this.convertToItem(item));
                this.next(matches);

            }, (err) => {
                let data = JSON.parse('[]');
                let matches: CompleterItem[] = data.map((item: any) => this.convertToItem(item));
                this.next(matches);
            });
    }

    public cancel() {
    }

    public convertToItem(data: any): CompleterItem | null {
        var nome = '';
        if (!data) {
            return null;
        }
        nome = !data.regionType ? 'default' :
            (data.level && data.level.indexOf('1') > -1 ? 'lvl1' :
                (data.regionType.indexOf('Point of Interest') > -1 ? 'interest' :
                    (data.regionType.indexOf('Hotel') > -1 ? 'hotel' :
                        (data.regionType.indexOf('Metro') > -1 ? 'train' :
                            (data.regionType.indexOf('Train') > -1 ? 'train' :
                                (data.regionType.indexOf('Airport') > -1 ? 'airport' : 'default'))))));
        return ( < CompleterItem > {
            title: typeof data === 'string' ? data : data.regionNameLong,
            image: 'assets/img/icons/region/' + nome + '.png',
            description: data.regionId || data.description || 0,
            originalObject: data
        });
    }
}
