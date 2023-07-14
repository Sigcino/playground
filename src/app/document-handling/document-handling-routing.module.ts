import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgxDocViewerComponent } from './ngx-doc-viewer/ngx-doc-viewer.component';
import { NgxDocViewerComponent as pdfV } from 'ngx-doc-viewer';

const routes: Routes = [
  {path: 'ngx-doc', component: NgxDocViewerComponent},
  { path: 'ngx-doc-viewer', component: pdfV }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DocumentHandlingRoutingModule { }
