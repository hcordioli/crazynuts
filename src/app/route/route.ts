import { AppComponent } from './../app/app.component';
import { Routes } from '@angular/router';
import { DetalheComponent } from './../detalhe/detalhe.component';
import { date2str } from './../utils';

const today: string = date2str('');
const tomorrow: string = date2str('', new Date((new Date()).getTime() + (864e5)))

export default <Routes> [{
    path: '',
    children: [{
        path: '',
        component: AppComponent
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
                            redirectTo: '',
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
                redirectTo: today + '/' + today + '/' + 'room1',
                pathMatch: 'full'
            }]
        }]
    }, {
        path: 'booking',
        component: AppComponent
    }, {
        path: 'confirmacao',
        component: AppComponent
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
                        component: AppComponent,
                        pathMatch: 'full',
                        children: [{
                            path: '**',
                            redirectTo: 'room1',
                            pathMatch: 'full'
                        }]
                    }, {
                        path: '**',
                        redirectTo: '',
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
    }]
}, {
    path: '**',
    component: AppComponent
}];