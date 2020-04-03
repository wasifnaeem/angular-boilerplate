import { Injectable, OnDestroy } from '@angular/core';
import { SubSink } from 'subsink';
import { Observable, fromEvent } from 'rxjs';

@Injectable()
export class InternetStatusService implements OnDestroy {

  private subs: SubSink
  private onlineEvent: Observable<Event>;
  private offlineEvent: Observable<Event>;

  hideWhenOnline: boolean;
  connectionStatusMessage: string;
  connectionStatus: string;

  constructor() {
    this.subs = new SubSink()

    this.onlineEvent = fromEvent(window, 'online');
    this.offlineEvent = fromEvent(window, 'offline');

    this.subs.sink = this.onlineEvent.subscribe(e => {
      this.connectionStatusMessage = `Welcome Back! You are online`;
      this.connectionStatus = 'online';

      setTimeout(() => {
        this.hideWhenOnline = true;
      }, 2500);
    })

    this.subs.sink = this.offlineEvent.subscribe(e => {
      this.hideWhenOnline = false;
      this.connectionStatusMessage = 'Connection lost! You are not connected to internet';
      this.connectionStatus = 'offline';
    })
  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
