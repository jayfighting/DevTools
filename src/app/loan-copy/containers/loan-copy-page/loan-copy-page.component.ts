import { Component, OnInit } from '@angular/core';
import { LoanCopyService } from '../../loan-copy.service';

@Component({
  selector: 'app-loan-copy-page',
  templateUrl: './loan-copy-page.component.html',
  styleUrls: ['./loan-copy-page.component.scss']
})
export class LoanCopyPageComponent implements OnInit {
  constructor(private _loanCopyService: LoanCopyService) { }
  ngOnInit() {
    
    console.log(this._loanCopyService.generateLoanNumbers());
  }
}
