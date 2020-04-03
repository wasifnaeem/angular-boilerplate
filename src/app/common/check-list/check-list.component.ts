import { Component, Input, OnInit } from '@angular/core';
import { ICheckList } from './check-list.mode';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {

  @Input('data') checklist: ICheckList
  constructor() { }

  ngOnInit() {
  }

}
