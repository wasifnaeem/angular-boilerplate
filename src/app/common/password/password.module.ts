import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PasswordComponent } from './password.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PasswordVisibilityControlModule } from '../password-visibility-control/password-visibility-control.module';
import { CheckListModule } from '../check-list/check-list.module';

@NgModule({
  declarations: [
    PasswordComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    NgbModule,
    PasswordVisibilityControlModule,
    CheckListModule,
  ],
  exports: [
    PasswordComponent
  ]
})
export class PasswordModule { }
