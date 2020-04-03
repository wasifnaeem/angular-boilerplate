import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { ImageViewerComponent } from './image-viewer.component';

@NgModule({
  declarations: [
    ImageViewerComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule
  ],
  exports: [
    ImageViewerComponent,
  ],
})
export class ImageViewerModule { }
