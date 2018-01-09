import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle, NgForOf, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CompleterModule } from "ng2-completer";
import { Daterangepicker } from 'ng2-daterangepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';
import { RangePipe } from './range.pipe';
import { NouisliderModule } from 'ng2-nouislider';
import localePt from '@angular/common/locales/pt';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { RegionsService } from './regions.service';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrComponent,
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
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR', providers: [RegionsService] }],
    bootstrap: [AppComponent]
})
export class AppModule {}
