import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoanCopyService {

  constructor() { }

  generateLoanNumbers(): string[] {
    return [
      '100000',
      '100001',
      '100002'
    ];
  }
}
