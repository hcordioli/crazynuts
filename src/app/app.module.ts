import { FormsModule } from '@angular/forms';
import { RangePipe } from './pipe/range.pipe';
import { AppComponent } from './app.component';
import { NouisliderModule } from 'ng2-nouislider';
import localePt from '@angular/common/locales/pt';
import { Ng2CompleterModule } from "ng2-completer";
import { NgModule, LOCALE_ID } from '@angular/core';
import { RootComponent } from './root/root.component';
import { Daterangepicker } from 'ng2-daterangepicker';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { GlobalService } from './global/global.service';
import { BrowserModule } from '@angular/platform-browser';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { CommonModule, NgStyle, NgForOf, registerLocaleData } from '@angular/common';
import { BuscaComponent } from './busca/busca.component';
import { TitleComponent } from './html/title/title.component';
import { FiltrosComponent } from './filtros/filtros.component';
import { UComponent } from './u/u.component';
import { UGuard } from './u/u.guard';
import { BuscaGuard } from './busca/busca.guard';
import { BarComponent } from './html/bar/bar.component';
import { RegionComponent } from './html/bar/region/region.component';
import { CalendarComponent } from './html/bar/calendar/calendar.component';
import { AptComponent } from './html/bar/apt/apt.component';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [
        RangePipe,
        AppComponent,
        RootComponent,
        BookingComponent,
        DetalheComponent,
        ConfirmacaoComponent,
        BuscaComponent,
        TitleComponent,
        FiltrosComponent,
        UComponent,
        BarComponent,
        RegionComponent,
        CalendarComponent,
        AptComponent
    ],
    imports: [
        FormsModule,
        CommonModule,
        BrowserModule,
        Daterangepicker,
        HttpClientModule,
        AppRoutingModule,
        NouisliderModule,
        Ng2CompleterModule
    ],
    providers: [
        GlobalService,
        UGuard,
        BuscaGuard,
        { provide: LOCALE_ID, useValue: 'pt-BR' }
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}
