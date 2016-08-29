import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

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
    <button (click)="self.addComponent('my-block')">MyBlock</button>
    <button (click)="self.addComponent('my-button')">MyButton</button>
  </div>
  <div *componentOutlet="htmlSubject; context:self; selector:'my-dynamic-component'"></div>
  `,
})
export class AppComponent {
  self = this; // copy of context
  html = ``;
  htmlSubject = new Subject<string>();

  addComponent(tagName: string) {
    // this.html += `<${tagName}>${Math.floor(Math.random() * 100)}</${tagName}>`;
    this.htmlSubject.next(`<${tagName}>${Math.floor(Math.random() * 100)}</${tagName}>`);
  }
}
