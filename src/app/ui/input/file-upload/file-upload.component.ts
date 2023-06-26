import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Output() public fileSelected = new EventEmitter<any>();

  private selectedFile?: any;

  public setSelectedFile(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append('file', file);

      this.selectedFile = formData;

      this.fileSelected.emit(this.selectedFile);
    }
  }
}
