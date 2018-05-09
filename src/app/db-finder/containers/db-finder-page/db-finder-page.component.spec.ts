import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DbFinderPageComponent } from './db-finder-page.component';

describe('DbFinderPageComponent', () => {
  let component: DbFinderPageComponent;
  let fixture: ComponentFixture<DbFinderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DbFinderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DbFinderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
