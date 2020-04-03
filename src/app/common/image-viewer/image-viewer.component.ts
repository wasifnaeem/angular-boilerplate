import { Component, HostListener, Inject, Input, OnChanges, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

export interface IImageViewer {
  _id: string
  file_url: string
  title: string
}

export interface IImageViewerData {
  all_images: IImageViewer[]
  first_image: IImageViewer
}

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit, OnChanges {

  current_image_index: number = 0
  @Input('images') imagesPath: IImageViewer[] = []
  @Input('first_image') first_image: IImageViewer
  constructor(@Inject(MAT_DIALOG_DATA) private data: IImageViewerData) { }

  ngOnInit() {
    if (this.data.all_images)
      this.imagesPath = this.data.all_images

    if (this.data.first_image)
      this.first_image = this.data.first_image

    this.current_image_index = this.imagesPath.findIndex(x => x.file_url == this.first_image.file_url)
  }

  ngOnChanges() {
    if (this.first_image && this.imagesPath.length) {
      this.current_image_index = this.imagesPath.findIndex(x => x.file_url == this.first_image.file_url)
    }
  }

  get SelectedImage() {
    return this.imagesPath[this.current_image_index]
  }

  nextPortfolio() {
    if (this.current_image_index < this.imagesPath.length - 1)
      this.current_image_index += 1
  }

  previousPortfolio() {
    if (this.current_image_index > 0)
      this.current_image_index -= 1
  }

  get showRightArrow() {
    return this.current_image_index < this.imagesPath.length - 1
  }

  get showLeftArrow() {
    return this.current_image_index > 0
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {

    if (event.keyCode === KEY_CODE.RIGHT_ARROW) {
      this.nextPortfolio();
    }

    if (event.keyCode === KEY_CODE.LEFT_ARROW) {
      this.previousPortfolio();
    }
  }

}
