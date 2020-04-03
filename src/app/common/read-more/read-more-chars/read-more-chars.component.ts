import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'read-more-chars',
  templateUrl: './read-more-chars.component.html',
  styleUrls: ['./read-more-chars.component.scss']
})
export class ReadMoreCharsComponent implements OnChanges {

  @Input() enable_read_more: boolean = true
  @Input() text: string;
  @Input() maxLength = 150;
  currentText: string;
  hideToggle = true;

  public isCollapsed = true;

  constructor() {
  }

  toggleView() {
    this.isCollapsed = !this.isCollapsed;
    this.determineView();
  }

  determineView() {
    if (this.enable_read_more) {
      if (!this.text || this.text.length <= this.maxLength) {
        this.currentText = this.text;
        this.isCollapsed = false;
        this.hideToggle = true;
        return;
      }

      this.hideToggle = false;
      if (this.isCollapsed == true) {
        this.currentText = this.text.substring(0, this.maxLength) + '...';
      } else if (this.isCollapsed == false) {
        this.currentText = this.text;
      }
    }
    else {
      this.currentText = this.text
    }
  }

  ngOnChanges() {
    this.determineView();
  }

}
