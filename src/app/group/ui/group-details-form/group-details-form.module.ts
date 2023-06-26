import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupDetailsFormComponent } from './group-details-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FileUploadModule } from '../../../ui/input/file-upload/file-upload.module';

@NgModule({
  declarations: [GroupDetailsFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    FileUploadModule,
  ],
  exports: [GroupDetailsFormComponent],
})
export class GroupDetailsFormModule {}
