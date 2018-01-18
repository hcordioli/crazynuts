import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { OptionalRoute } from './app.fn'
import { RootComponent } from './root/root.component';
import { BuscaComponent } from './busca/busca.component';
import { BookingComponent } from './booking/booking.component';
import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { DetalheComponent } from './detalhe/detalhe.component';

@NgModule({
    imports: [RouterModule.forRoot([{
            path: 'booking',
            component: BookingComponent
        },
        {
            path: 'confirmacao',
            component: ConfirmacaoComponent
        },
        {
            component: DetalheComponent
        },
        {
            component: BuscaComponent
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
