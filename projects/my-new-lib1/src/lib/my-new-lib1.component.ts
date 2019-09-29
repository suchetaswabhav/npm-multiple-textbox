import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-my-new-lib1',
  template: `
    <p>
      my-new-lib1 works!
    </p>
  `,
  styles: []
})
export class MyNewLib1Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
