import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-copy-page',
  templateUrl: './loan-copy-page.component.html',
  styleUrls: ['./loan-copy-page.component.scss']
})
export class LoanCopyPageComponent implements OnInit {
  constructor() { }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  ngOnInit() { }
}

export class SelectOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}
