import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanCopyRoutingModule } from './loan-copy-routing.module';
import { LoanCopyPageComponent } from './containers/loan-copy-page/loan-copy-page.component';
import { MaterialModule } from '../shared/material.module'

@NgModule({
  imports: [
    CommonModule,
    LoanCopyRoutingModule,
    MaterialModule
  ],
  declarations: [
    LoanCopyPageComponent
  ]
})
export class LoanCopyModule { }
