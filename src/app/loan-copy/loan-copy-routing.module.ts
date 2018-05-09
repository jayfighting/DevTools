import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoanCopyPageComponent } from './containers/loan-copy-page/loan-copy-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoanCopyPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanCopyRoutingModule { }
