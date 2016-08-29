import {
  Component,
  Directive,
  Input,
  ComponentMetadata,
  ViewContainerRef,
  ReflectiveInjector,
  Compiler
} from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Directive({
  selector: '[componentOutlet]',
})
export class ComponentOutlet {
  @Input('componentOutlet') private template: Subject<string>;
  @Input('componentOutletSelector') private selector: string;
  @Input('componentOutletContext') private context: Object;

  constructor(private vcRef: ViewContainerRef, private compiler: Compiler) { }

  private _createDynamicComponent(template: string) {
    this.context = this.context || {};

    const metadata = new ComponentMetadata({
      selector: this.selector,
      template: template,
    });

    const cmpClass = class _ { };
    cmpClass.prototype = this.context;
    return Component(metadata)(cmpClass);
  }

  ngOnChanges() {
    if (!this.template) return;
    this.template.subscribe(template => {
      this.compiler.compileComponentAsync(this._createDynamicComponent(template))
        .then(factory => {
          const injector = ReflectiveInjector.fromResolvedProviders([], this.vcRef.parentInjector);
          this.vcRef.createComponent(factory, undefined, injector);
        });
    });
  }
}
