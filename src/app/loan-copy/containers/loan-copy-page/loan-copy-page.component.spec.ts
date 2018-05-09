import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanCopyPageComponent } from './loan-copy-page.component';

describe('LoanCopyPageComponent', () => {
  let component: LoanCopyPageComponent;
  let fixture: ComponentFixture<LoanCopyPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanCopyPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanCopyPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
