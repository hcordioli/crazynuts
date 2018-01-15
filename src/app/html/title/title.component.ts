import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
