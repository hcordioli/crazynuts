import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { GlobalService } from './../global/global.service';

@Injectable()
export class BuscaGuard implements CanActivate {
    public vars: any;
    constructor(private router: Router, gd: GlobalService) {
        var self = this;
        self.vars = gd.vars;
    }
    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable < boolean > | Promise < boolean > | boolean {
        var self = this,
            arr = state.url.split('/'),
            params = {
                required: ['go'],
                optional: ['id', 'in', 'out', 'apt', 'fl', 'fm', 'fn', 'fo']
            },
            i, b, tmp;
        arr.shift();
        arr = arr[0].split(';');
        arr.shift();
        for (i = 0; i < arr.length; i++) {
            arr[i] = decodeURI(arr[i]);
            tmp = /(.*?)=(.*)/gi.exec(arr[i]);
            params[tmp[1]] = tmp[2];
        }
        for (i in params) {
            if (!params.hasOwnProperty(i) || /required|optional/gi.test(i))
                continue;
            if (params[i]) {
                tmp = params.required.indexOf(i);
                if (tmp >= 0) {
                    params.required.splice(tmp, 1);
                }
                self.vars.params[i] = params[i];
            } else {
                console.log(i, self.vars.params[i]);
                delete self.vars.params[i];
            }
        }
        b = !params.required.length
        b = b && (self.vars.params.go == 'true') || 'go' in self.vars.params;
        if (self.vars.path !== 'detalhe') {
            self.vars.path = b ? 'busca' : '/';
            if (!b) {
                self.router.navigate(['/']);
            }
        } else
            return false;
        return b;
    }
}
