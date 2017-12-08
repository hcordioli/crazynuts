import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Ng2CompleterModule } from "ng2-completer";
import { Daterangepicker } from 'ng2-daterangepicker';
import { StickyModule } from 'ng2-sticky-kit';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';
import { RangePipe } from './range.pipe';

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
        StickyModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
