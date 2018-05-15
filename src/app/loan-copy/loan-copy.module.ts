import { NgModule } from '@angular/core';

import { LoanCopyRoutingModule } from './loan-copy-routing.module';
import { LoanCopyPageComponent } from './containers/loan-copy-page/loan-copy-page.component';
import { LoanCopyService } from './loan-copy.service';

import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    LoanCopyRoutingModule,
    SharedModule
  ],
  declarations: [
    LoanCopyPageComponent
  ],
  providers: [
    LoanCopyService
  ]
})
export class LoanCopyModule { }
