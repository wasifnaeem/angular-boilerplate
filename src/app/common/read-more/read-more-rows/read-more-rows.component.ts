import { Component, Input } from '@angular/core';

@Component({
  selector: 'read-more-rows',
  templateUrl: './read-more-rows.component.html',
  styleUrls: ['./read-more-rows.component.scss']
})
export class ReadMoreRowsComponent {

  @Input() maxHeight = 69;
  isCollapsed = true;
  constructor() { }

  changeCollapseStatus() {
    this.isCollapsed = !this.isCollapsed;
  }

}
