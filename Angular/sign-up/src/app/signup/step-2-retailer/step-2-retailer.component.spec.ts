import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2RetailerComponent } from './step-2-retailer.component';

describe('Step2RetailerComponent', () => {
  let component: Step2RetailerComponent;
  let fixture: ComponentFixture<Step2RetailerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2RetailerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2RetailerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
