import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SubSink } from 'subsink';
import { ICheckList } from '../check-list/check-list.mode';
import { PasswordService } from './password.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  @Input('placeholder') placeholder: string
  @Input('label') label: string
  @Output('onPasswordChange') onPasswordChange: EventEmitter<FormControl>
  show_label: string = 'never'

  subs: SubSink
  password: FormControl
  checklist: ICheckList = {}
  constructor(public passwordService: PasswordService) {
    this.onPasswordChange = new EventEmitter()
    this.password = new FormControl('', [Validators.required, Validators.minLength(8), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)])
    this.subs = new SubSink()
  }

  ngOnInit() {
    this._onPasswordChange()
    this.feedPasswordValidations()

    if (this.label) {
      this.show_label = 'always'
    }
  }

  feedPasswordValidations() {
    this.checklist.elements = []
    this.checklist.elements.push({
      is_satisfied: false,
      items: ['Alpha numeric', '']
    })

    this.checklist.elements.push({
      is_satisfied: false,
      items: ['Uppercase Alphabet', '']
    })

    this.checklist.elements.push({
      is_satisfied: false,
      items: ['Min. 8 characters', '']
    })
  }

  _onPasswordChange() {
    this.subs.sink = this.password.valueChanges.subscribe(value => {
      if (this.passwordService.hasLowercaseLetter(value) && this.passwordService.hasDigit(this.password.value)) {
        this.checklist.elements[0].is_satisfied = true
      }
      else {
        this.checklist.elements[0].is_satisfied = false
      }

      if (this.passwordService.hasUppercaseLetter(value)) {
        this.checklist.elements[1].is_satisfied = true
      }
      else {
        this.checklist.elements[1].is_satisfied = false
      }

      if (this.password.errors && (this.password.errors.required || this.password.errors.minlength)) {
        this.checklist.elements[2].is_satisfied = false
      }
      else {
        this.checklist.elements[2].is_satisfied = true
      }

      this.onPasswordChange.next(this.password)
    }, err => console.log(err))
  }

}
