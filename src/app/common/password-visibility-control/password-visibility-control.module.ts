import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { PasswordVisibilityControlComponent } from './password-visibility-control.component';

@NgModule({
  declarations: [
    PasswordVisibilityControlComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    PasswordVisibilityControlComponent
  ]
})
export class PasswordVisibilityControlModule { }
