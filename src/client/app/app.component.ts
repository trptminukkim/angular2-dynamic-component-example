import { Component } from '@angular/core';

import { BlockComponent } from './block.component';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  moduleId: module.id,
  selector: 'sd-app',
  template: `
  <h2>Dynamic</h2>
  <div>
    <button (click)="self.addComponent('p')">P</button>
    <button (click)="self.addComponent('textarea')">TextArea</button>
    <button (click)="self.addComponent('textarea', true)">TextArea (Listener)</button>
    <button (click)="self.addComponent('my-block')">MyBlock</button>
    <button (click)="self.addComponent('my-button')">MyButton</button>
  </div>
  <div *componentOutlet="html; context:self; selector:'my-dynamic-component'"></div>
  `,
})
export class AppComponent {
  self = this; // copy of context
  html = ``;

  addComponent(tagName: string, addChangeListener?: boolean) {
    this.html += `<${tagName}${addChangeListener ? ' (change)=log($event.target.value)' : ''}>${Math.floor(Math.random() * 100)}</${tagName}>`;
  }

  log(str: string) {
    console.log('%c' + str, 'color: red');
  }
}
