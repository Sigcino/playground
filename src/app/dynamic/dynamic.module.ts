import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicRoutingModule } from './dynamic-routing.module';
import { WidgetHomeComponent } from './widget-home/widget-home.component';
import { DynamixXComponent } from './dynamix-x/dynamix-x.component';
import { DynamixXxComponent } from './dynamix-xx/dynamix-xx.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    WidgetHomeComponent,
    DynamixXComponent,
    DynamixXxComponent
  ],
  imports: [
    CommonModule,
    DynamicRoutingModule,
    ButtonModule
  ]
})
export class DynamicModule { }
