import {Component, OnInit} from '@angular/core';

import {Todo} from './Todo/todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor() { }

  ngOnInit() {}
}
