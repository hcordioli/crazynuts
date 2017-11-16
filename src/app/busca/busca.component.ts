import { Component, ViewEncapsulation, AfterViewInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTableDataSource } from '@angular/material';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class BuscaComponent implements AfterViewInit {
  displayedColumns = ['created', 'state', 'number', 'title'];
//  db: GetTable | null;
  dataSource = new MatTableDataSource();

  total = 0;
  isLoading = false;
  isEnd = false;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngAfterViewInit() {
	/*
    this.db = new GetTable(this.http);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    Observable.merge(this.sort.sortChange, this.paginator.page)
      .startWith(null)
      .switchMap(() => {
        this.isLoading = true;
        return this.db!.getHotels(
          this.city, this.uf, this.country, this.dataIda, this.dataVolta, this.len, this.adults, this.rate);
      })
      .map(data => {
        // Flip flag to show that loading has finished.
        this.isLoading = false;
        this.isEnd = false;
        this.total = data.total_count;

        return data.items;
      })
      .catch(() => {
        this.isLoading = false;
        // Catch if the GitHub API has reached its rate limit. Return empty data.
        this.isEnd = true;
        return Observable.of([]);
      })
      .subscribe(data => this.dataSource.data = data);
  }
}

export interface EanApi {
  items: GithubIssue[];
  total_count: number;
}

export interface GithubIssue {
  created_at: string;
  number: string;
  state: string;
  title: string;
}

export class GetTable {
  constructor(private http: HttpClient) {}

  getHotels(city: string, uf: string, country: string, dataIda: string, dataVolta: string, len: number, adults: number, kids: number, rate: boolean): Observable<EanApi>{
    const api = '';
    const href = '/eanapi/list';
    const temRate = rate ? '' : '<rateType>MerchantPackage</rateType>';
    const sig = Md5.hashStr(api + '' + Math.floor(new Date().getTime() / 1000));
    const requestUrl = `${href}
        ?cid=
        &apiKey=$(api)
        &sig=$(sig)
        &minorRev=99
        &locale=pt_BR
        &currencyCode=BRL
        &xml=
            <HotelListRequest>
                <city>
                    $(city)
                </city>
                <stateProvinceCode>
                    $(uf)
                </stateProvinceCode>
                <countryCode>
                    $(country)
                </countryCode>
                <departureDate>
                    $(dataIda)
                </departureDate>
                <arrivalDate>
                    $(dataVolta)
                </arrivalDate>
                <RoomGroup>
                    <Room>
                        <numberOfAdults>
                            $(adults)
                        </numberOfAdults>
                        <numberOfChildren>
                            $(kids)
                        </numberOfChildren>
                        <childAges>
                        </childAges>
                    </Room>
                </RoomGroup>
                <numberOfResults>
                    $(len)
                </numberOfResults>
                $(temRate)
            </HotelListRequest>
        `;
    return this.http.get<EanApi>(requestUrl);
  */
  }
}
