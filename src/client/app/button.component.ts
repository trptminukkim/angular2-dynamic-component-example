import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
  <div class="my-button">
    <ng-content></ng-content>
  </div>
  `,
  styles: [`
    .my-button {
      display: inline-block;
      border: 1px solid black;
      padding: .5em;
      color: black;
      background: #eee;
    }
    .my-button:active {
      background: #ddd;
    }
    `]
})

export class ButtonComponent implements OnInit {
  ngOnInit() {
    console.log('button init');
  }
}
