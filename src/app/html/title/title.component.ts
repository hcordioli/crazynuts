import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { GlobalService } from './../../global/global.service';

@Component({
    selector: 'html-title',
    templateUrl: './title.component.html',
    styleUrls: ['./title.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnInit {
    public vars: any;
    public logo = {
        alt: 'HOTAX',
        url: 'assets/img/logo.svg'
    };
    public slogan = 'Encontre o hotel ideal para o seu cliente,<br>com a melhor comissão para você!';
    public menu = [
        { txt: 'BRL', href: 'javascript;' },
        { txt: 'Login', link: ['/'] }
    ];

    constructor(private gd: GlobalService) {
        this.vars = this.gd.vars;
    };

    ngOnInit() {};
}
