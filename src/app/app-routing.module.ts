import { ConfirmacaoComponent } from './confirmacao/confirmacao.component';
import { RouterModule, UrlMatcher, UrlSegment } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { DetalheComponent } from './detalhe/detalhe.component';
import { BuscaComponent } from './busca/busca.component';
import { RootComponent } from './root/root.component';
import { BuscaGuard } from './busca/busca.guard';
import { UComponent } from './u/u.component';
import { NgModule } from '@angular/core';
import { UGuard } from './u/u.guard';

@NgModule({
    imports: [RouterModule.forRoot([{
            path: '',
            component: RootComponent,
            children: [{
                    path: 'u',
                    component: UComponent,
                    canActivate: [UGuard],
                    children: [{
                        path: 'detalhe',
                        component: DetalheComponent
                    }, {
                        path: '',
                        pathMatch: 'full',
                        component: BuscaComponent,
                        canActivate: [BuscaGuard]
                    }]
                },
                {
                    path: 'booking',
                    component: BookingComponent
                },
                {
                    path: 'confirmacao',
                    component: ConfirmacaoComponent
                }

            ]
        },
        {
            path: '**',
            data: {
                redirecting: true
            },
            component: RootComponent
        }
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule {}
