import { Routes } from '@angular/router';
import { RootComponent } from './../root/root.component';
import { BuscaComponent } from './../busca/busca.component';
import { BookingComponent } from './../booking/booking.component';
import { ConfirmacaoComponent } from './../confirmacao/confirmacao.component';
import { DetalheComponent } from './../detalhe/detalhe.component';
import { Utils } from './../utils/utils';

const today: string = Utils.date2str('');
const tomorrow: string = Utils.date2str('', new Date((new Date()).getTime() + (864e5)))

export const Route: Routes = [{
        path: '',
        children: [{
                path: 'booking',
                component: BookingComponent
            }, {
                path: 'confirmacao',
                component: ConfirmacaoComponent
            },
            {
                path: 'detalhe/:id',
                children: [{
                        path: '**',
                        redirectTo: ':id/detalhe'
                    }
                ]
            },
            {
                path: ':id',
                children: [{
                    path: ':in',
                    children: [{
                        path: ':out',
                        children: [{
                            path: ':apt',
                            children: [{
                                path: '',
                                children: [
                                    { path: '**', component: BuscaComponent }
                                ]
                            }]
                        }]
                    }]
                }]
            }
        ]
    },
    { path: '**', redirectTo: '/' }
];
