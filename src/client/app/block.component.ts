import { Component } from '@angular/core';

/**
 * This class represents the main application component. Within the @Routes annotation is the configuration of the
 * applications routes, configuring the paths for the lazy loaded components (HomeComponent, AboutComponent).
 */
@Component({
  selector: 'my-block',
  template: `
  sdfsdfsdfd
  `,
  styles: [`
    :host {
      display: block;
      min-width: 2rem;
      min-height: 2rem;
      margin: .5rem;
      border: .25rem solid black;
      background: rgba(120, 80, 80, 1);
      color: white;
      box-sizing: border-box;
    }
    `]
})

export class BlockComponent {}
