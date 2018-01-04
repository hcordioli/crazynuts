import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle, registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CompleterModule } from "ng2-completer";
import { Daterangepicker } from 'ng2-daterangepicker';
import { NguiStickyModule } from '@ngui/sticky';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';
import { RangePipe } from './range.pipe';
import { NouisliderModule } from 'ng2-nouislider';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt, 'pt-BR');

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ErrComponent,
        RangePipe
    ],
    imports: [
        BrowserModule,
        Daterangepicker,
        HttpClientModule,
        AppRoutingModule,
        Ng2CompleterModule,
        FormsModule,
        CommonModule,
        NguiStickyModule,
        NouisliderModule
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
    bootstrap: [AppComponent]
})
export class AppModule {}
