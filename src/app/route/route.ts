import { Routes, UrlMatcher, UrlSegment } from '@angular/router';
import { RootComponent } from './../root/root.component';
import { BuscaComponent } from './../busca/busca.component';
import { BookingComponent } from './../booking/booking.component';
import { ConfirmacaoComponent } from './../confirmacao/confirmacao.component';
import { DetalheComponent } from './../detalhe/detalhe.component';
import { Utils } from './../utils/utils';

const today: string = Utils.date2str('');
const tomorrow: string = Utils.date2str('', new Date((new Date()).getTime() + (864e5)))

function OptionalRoute(path) {
    let parts = path.split('/');

    return (urlSegments: UrlSegment[]) => {
        let posParams: {
            [name: string]: UrlSegment;
        } = {};
        for (let i = 0; i < parts.length; i++) {
            if (parts[i].substr(0, 1) == ':' && parts[i].substr(-1, 1) == '?') {
                if (urlSegments[i]) {
                    posParams[parts[i].substr(1, parts[i].length - 2)] = urlSegments[i];
                }
            } else if (parts[i].substr(0, 1) == ':') {
                if (!urlSegments[i]) {
                    return null;
                }
                posParams[parts[i].substr(1, parts[i].length - 1)] = urlSegments[i];
            } else {
                if (!urlSegments[i] || urlSegments[i].path != parts[i]) {
                    return null;
                }
            }
        }
        return {
            consumed: urlSegments,
            posParams: posParams
        };
    };
}

export const Route: Routes = [{
        path: 'booking',
        component: BookingComponent
    },
    {
        path: 'confirmacao',
        component: ConfirmacaoComponent
    },
    {
        matcher: OptionalRoute('detalhe/:id/:in?/:out?/:apt?'),
        component: DetalheComponent
    },
    {
        matcher: OptionalRoute(':id/:in?/:out?/:apt?'),
        component: DetalheComponent
    }
];
