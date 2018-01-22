import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './../global/global.service';

@Injectable()
export class UGuard implements CanActivate {
    private vars: any;
    constructor(private router: Router, gd: GlobalService) {
        var self = this;
        self.vars = gd.vars;
    }
    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Observable < boolean > | Promise < boolean > | boolean {
            var self = this,
                arr = state.url.split(';'),
                params = {
                    required: ['id', 'in', 'out', 'apt'],
                    optional: ['fl', 'fm', 'fn', 'fo', 'go', 'sort'],
                    // id: '141417',
                    in: '022018',
                    out: '022218'
                },
                i, b, tmp;
            arr.shift();
            for (i = 0; i < arr.length; i++) {
                arr[i] = decodeURI(arr[i]);
                tmp = /(.*?)=(.*?)($|[\/])+/gi.exec(arr[i]);
                params[tmp[1]] = tmp[2];
            }
            for (i in params) {
                if (!params.hasOwnProperty(i) || /required|optional/gi.test(i))
                    continue;
                tmp = params.required.indexOf(i);
                if (tmp >= 0) {
                    params.required.splice(tmp, 1);
                }
                self.vars.params[i] = params[i];
            }
            self.vars.path = '/';
            b = !params.required.length;
            return b;
        }
}
