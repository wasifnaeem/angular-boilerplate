import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit, OnDestroy {

  @Input('enable_read_more') enable_read_more: boolean = true
  @Input('read_only_mode') read_only_mode: boolean = false
  @Input('summary') summary: string;
  private subs: SubSink
  last_summary: string
  isAdding = false;

  constructor() {
    this.subs = new SubSink()
  }

  ngOnInit() {
  }

  changeEditMode(is_cancel?: boolean) {

  }

  ngOnDestroy() {
    this.subs.unsubscribe()
  }

}
