import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step1FarmerComponent } from './step-1-farmer.component';

describe('Step1FarmerComponent', () => {
  let component: Step1FarmerComponent;
  let fixture: ComponentFixture<Step1FarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step1FarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step1FarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
