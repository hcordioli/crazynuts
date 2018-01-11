import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Route } from './route/route';

@NgModule({
    imports: [RouterModule.forRoot(Route)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
