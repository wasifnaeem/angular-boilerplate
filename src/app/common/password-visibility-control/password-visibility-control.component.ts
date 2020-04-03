import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'password-visibility-control',
  templateUrl: './password-visibility-control.component.html',
  styleUrls: ['./password-visibility-control.component.scss']
})
export class PasswordVisibilityControlComponent implements OnInit {

  @Input('inputElement') inputElement: HTMLInputElement
  isInputTypePassword: boolean = true
  constructor() { }

  ngOnInit() {
  }

  hide() {
    this.isInputTypePassword = true
    this.inputElement.type = 'password'
  }

  show() {
    this.isInputTypePassword = false
    this.inputElement.type = 'text'
  }

}
