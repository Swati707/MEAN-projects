import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1RetailerComponent } from './step-1-retailer.component';

describe('Step1RetailerComponent', () => {
  let component: Step1RetailerComponent;
  let fixture: ComponentFixture<Step1RetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1RetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1RetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
