import { Component, ElementRef, ViewChild, Input } from '@angular/core';
import { InternetStatusService } from './internet-status.service';

@Component({
  selector: 'app-internet-status',
  templateUrl: './internet-status.component.html',
  styleUrls: ['./internet-status.component.scss']
})
export class InternetStatusComponent {

  @ViewChild('statusDiv', { static: true }) statusDivRef: ElementRef;

  constructor(private internetService: InternetStatusService) {
  }

  get htmlElement(): HTMLDivElement {
    return this.statusDivRef.nativeElement;
  }

  getScroll() {
    if (window.pageYOffset != undefined) {
      return [pageXOffset, pageYOffset];
    } else {
      var sx,
        sy,
        d = document,
        r = d.documentElement,
        b = d.body;
      sx = r.scrollLeft || b.scrollLeft || 0;
      sy = r.scrollTop || b.scrollTop || 0;
      return [sx, sy];
    }
  }

  get OnlineStatusMessage() {
    return this.internetService.connectionStatusMessage
  }

  get OnlineStatus() {
    return this.internetService.connectionStatus
  }

  get HideWhenOnline() {
    return this.internetService.hideWhenOnline
  }

}
