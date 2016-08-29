import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ComponentOutlet } from './component-outlet';
import { BlockComponent } from './block.component';
import { ButtonComponent } from './button.component';

@NgModule({
  imports: [BrowserModule, HttpModule],
  declarations: [AppComponent, ComponentOutlet, BlockComponent, ButtonComponent],
  providers: [{
    provide: APP_BASE_HREF,
    useValue: '<%= APP_BASE %>'
  }],
  bootstrap: [AppComponent]
})

export class AppModule { }
