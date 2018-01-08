import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetalheComponent } from './detalhe/detalhe.component';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';

const date: Date = new Date();
const today: string = ([
    ('0' + date.getDate()).slice(-2),
    ('0' + (date.getMonth() + 1)).slice(-2),
    ('0' + date.getFullYear()).slice(-2)
].join('-'));

const routes: Routes = [{
    path: '',
    children: [{
        path: '',
        component: HomeComponent
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
        component: HomeComponent
    }, {
        path: 'confirmacao',
        component: HomeComponent
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
                        component: HomeComponent,
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
    component: HomeComponent
}];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
