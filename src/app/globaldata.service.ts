import { Injectable } from '@angular/core';

interface Obj {
    [id: string]: any;
}

@Injectable()
export class GlobalDataService {
    obj: Obj = {};
}
