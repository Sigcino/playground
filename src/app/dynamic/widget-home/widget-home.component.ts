import { Component, EnvironmentInjector, Injectable, Injector, OnInit, ViewChild, ViewContainerRef, inject } from '@angular/core';
import { DynamixXComponent } from '../dynamix-x/dynamix-x.component';
import { timer } from 'rxjs';
import { DynamixXxComponent } from '../dynamix-xx/dynamix-xx.component';

@Component({
  selector: 'app-widget-home',
  templateUrl: './widget-home.component.html',
  styleUrls: ['./widget-home.component.scss']
})
export class WidgetHomeComponent implements OnInit {

  @ViewChild('container', {read: ViewContainerRef}) container!: ViewContainerRef;

  constructor(private injector: Injector, private environement: EnvironmentInjector) {}
  ngOnInit(): void {

  }

  createComponent() {
    this.container.clear();
    this.container.createComponent(DynamixXComponent);
    this.container.createComponent(DynamixXxComponent);
  }

  createComponentX(comp: string = 'DynamixXComponent') {
    return console.log("Not implemented");
    debugger;
    this.environement.runInContext(() => {
      const clazz = class {
        private foo = inject(Foo); // From the local provider
        private bar = inject(Bar); // From the global provider
        public test;

        constructor() {
          this.test = 'some value';
          console.log(this.foo.rand, this.bar.rand);
        }
      };

      // Here is the trick to change the class name
      Object.defineProperty(clazz, 'name', { value: 'TheName' });

      // Define the component using Component decorator.
      const component = Component({
        selector: 'test',
        template:
          '<div>This is the dynamic template.<br> Test value: {{test}}</div>',
        styles: [':host {color: red}'],
        providers: [{ provide: Foo, useClass: Foo }],
      })(clazz);

      const componentRef = this.container.createComponent(component, {
        injector: this.injector,
      });

      timer(0, 1000).subscribe((val) => {
        componentRef.instance.test = val % 2 ? 'tic' : 'tac';
      });
    });
  }
}

@Injectable()
class Foo {
  rand = Math.random();
}

@Injectable({ providedIn: 'root' })
class Bar {
  rand = Math.random();
}
