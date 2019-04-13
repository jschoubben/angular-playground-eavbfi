import { Component, OnInit } from '@angular/core';
import { CoreService } from './core/core.service'

@Component({
  selector: 'my-app',
  template: `
    Hello world!
  `
})
export class AppComponent implements OnInit {
  constructor(private coreService: CoreService){}

  ngOnInit() {
    console.log('app component: Initializing component');
  }
}