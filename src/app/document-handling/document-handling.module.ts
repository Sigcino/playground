import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentHandlingRoutingModule } from './document-handling-routing.module';
import { NgxDocViewerComponent } from './ngx-doc-viewer/ngx-doc-viewer.component';
import { NgxDocViewerModule } from 'ngx-doc-viewer';
import { FileUploadModule } from 'primeng/fileupload';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  declarations: [
    NgxDocViewerComponent
  ],
  imports: [
    CommonModule,
    DocumentHandlingRoutingModule,
    NgxDocViewerModule,
    FileUploadModule,
    DialogModule
  ]
})
export class DocumentHandlingModule { }
