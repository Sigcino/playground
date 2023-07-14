import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import(`./dynamic/dynamic.module`).then(m => m.DynamicModule) },
  { path: 'documents', loadChildren: () => import(`./document-handling/document-handling.module`).then(m => m.DocumentHandlingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
