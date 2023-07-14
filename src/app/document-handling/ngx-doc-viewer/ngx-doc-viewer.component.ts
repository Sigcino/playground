import { Component } from '@angular/core';
import { viewerType } from 'ngx-doc-viewer';

@Component({
  selector: 'app-ngx-doc-viewer',
  templateUrl: './ngx-doc-viewer.component.html',
  styleUrls: ['./ngx-doc-viewer.component.scss']
})
export class NgxDocViewerComponent {
  viewer: viewerType = 'url';
  DemoDoc = ""
  uploadedFiles: any[] = [];

  files: object[] = [{
    filePath: undefined,
    content: undefined,
    notes: undefined,
    dateActioned: undefined
  }];
  constructor() { }

  onUpload(event: any) {
    let fileReader = new FileReader();
    for (let file of event.files) {
      this.uploadedFiles.push(file);

      fileReader.readAsDataURL(file);
      fileReader.onload = async () => {
        let result = fileReader.result?.toString();
        let action: object = {
          filePath: file.name,
          content: result,
          notes: file.name,
          dateActioned: new Date().toISOString()
        };
        this.files.push(action);
        this.display(action)
      };
    }
  }

  display(file: any) {
    const base64Image: string = file.content;
    const parts = base64Image.split(';base64,');
    const docType = parts[0].split(':')[1];
    const decodedData = window.atob(parts[1]);
    const uInt8Array = new Uint8Array(decodedData.length);
    for (let i = 0; i < decodedData.length; ++i) {
      uInt8Array[i] = decodedData.charCodeAt(i);
    }

    if (docType === "application/octet-stream" || docType === "text/plain") {
      const blob = new Blob([decodedData], { type: 'text/plain' });
      const url = window.URL.createObjectURL(blob);
      this.DemoDoc = url;
    } else {
      const blob = new Blob([uInt8Array], { type: docType });
      const url = window.URL.createObjectURL(blob);

      this.DemoDoc = url;
    }
  }
}
