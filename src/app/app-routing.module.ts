import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes) // if # required in url then add ,{ useHash: true }
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
