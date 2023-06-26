import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  @Output() public file = new EventEmitter<any>();

  private selectedFile?: any;

  public setSelectedFile(event: any): void {
    this.selectedFile = event.target.files[0];
    console.log(this.selectedFile);
  }
}
