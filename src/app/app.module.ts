import { Regions } from './http/regions';
import { FormsModule } from '@angular/forms';
import { RangePipe } from './pipe/range.pipe';
import { AppComponent } from './app.component';
import { NouisliderModule } from 'ng2-nouislider';
import localePt from '@angular/common/locales/pt';
import { Ng2CompleterModule } from "ng2-completer";
import { NgModule, LOCALE_ID } from '@angular/core';
import { Daterangepicker } from 'ng2-daterangepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { CommonModule, NgStyle, NgForOf, registerLocaleData } from '@angular/common';
import { GlobalDataService } from './globaldata.service';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent,
        RangePipe,
        DetalheComponent,
        BookingComponent,
        ConfirmacaoComponent,
    ],
    imports: [
        BrowserModule,
        Daterangepicker,
        HttpClientModule,
        AppRoutingModule,
        Ng2CompleterModule,
        FormsModule,
        CommonModule,
        NouisliderModule
    ],
    providers: [GlobalDataService, { provide: LOCALE_ID, useValue: 'pt-BR' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
