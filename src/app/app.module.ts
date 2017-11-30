import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CompleterModule } from "ng2-completer";
import { Daterangepicker } from 'ng2-daterangepicker';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { ErrComponent } from './err/err.component';
import { RangePipe } from './range.pipe';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        BuscaComponent,
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
        CommonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
