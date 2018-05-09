import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanCopyRoutingModule } from './loan-copy-routing.module';
import { LoanCopyPageComponent } from './containers/loan-copy-page/loan-copy-page.component';

@NgModule({
  imports: [
    CommonModule,
    LoanCopyRoutingModule
  ],
  declarations: [
    LoanCopyPageComponent
  ]
})
export class LoanCopyModule { }
