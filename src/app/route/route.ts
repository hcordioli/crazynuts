import { Routes } from '@angular/router';
import { RootComponent } from './../root/root.component';
import { DetalheComponent } from './../detalhe/detalhe.component';
import { Utils } from './../utils/utils';

const today: string = Utils.date2str('');
const tomorrow: string = Utils.date2str('', new Date((new Date()).getTime() + (864e5)))

export const Route: Routes = [
{
    path: '',
    children: [
        {
            path: '',
            component: RootComponent
        }, {
            path: 'detalhe',
            children: [{
                path: '',
                redirectTo: '/',
                pathMatch: 'full'
            }, {
                path: ':id',
                children: [{
                    path: ':in',
                    children: [{
                        path: ':out',
                        children: [{
                            path: ':rooms',
                            children: [{
                                path: '',
                                component: DetalheComponent,
                                pathMatch: 'full',
                                children: [{
                                    path: '**',
                                    redirectTo: 'room1',
                                    pathMatch: 'full'
                                }]
                            }, {
                                path: '**',
                                redirectTo: 'test',
                                pathMatch: 'full'
                            }]
                        }, {
                            path: '**',
                            redirectTo: 'room1',
                            pathMatch: 'full'
                        }]
                    }]
                }, {
                    path: '**',
                    redirectTo: today + '/' + today + '/' + 'room1',
                    pathMatch: 'full'
                }]
            }]
        }, {
            path: 'booking',
            component: RootComponent
        }, {
            path: 'confirmacao',
            component: RootComponent
        }, {
            path: 'home',
            redirectTo: '/'
        }, {
            path: ':id',
            children: [{
                path: ':in',
                children: [{
                    path: ':out',
                    children: [{
                        path: ':rooms',
                        children: [{
                            path: '',
                            component: RootComponent,
                            pathMatch: 'full',
                            children: [{
                                path: '**',
                                redirectTo: 'room1',
                                pathMatch: 'full'
                            }]
                        }, {
                            path: '**',
                            redirectTo: 'testa',
                            pathMatch: 'full'
                        }]
                    }, {
                        path: '**',
                        redirectTo: 'room1',
                        pathMatch: 'full'
                    }]
                }, {
                    path: '**',
                    redirectTo: today + '/' + 'room1',
                    pathMatch: 'full'
                }]
            }, {
                path: '**',
                redirectTo: '/',
                pathMatch: 'full'
            }]
        }
x    ]
},
{
        path: '**',
        component: RootComponent
}
];
