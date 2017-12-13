import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Step2FarmerComponent } from './step-2-farmer.component';

describe('Step2FarmerComponent', () => {
  let component: Step2FarmerComponent;
  let fixture: ComponentFixture<Step2FarmerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Step2FarmerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Step2FarmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
