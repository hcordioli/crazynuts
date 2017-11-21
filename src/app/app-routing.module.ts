import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ErrComponent } from './err/err.component';

const routes: Routes = [{
  path: '',
  children: [{
      path: '',
      component: HomeComponent
    }, {
      path: 'home',
      redirectTo: '/'
    }
  ]
}, {
  path: '**',
  component: ErrComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
