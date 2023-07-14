import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WidgetHomeComponent } from './widget-home/widget-home.component';

const routes: Routes = [
  {path: '', component: WidgetHomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicRoutingModule { }
