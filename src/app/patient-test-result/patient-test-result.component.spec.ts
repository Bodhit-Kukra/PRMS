import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTestResultComponent } from './patient-test-result.component';

describe('PatientTestResultComponent', () => {
  let component: PatientTestResultComponent;
  let fixture: ComponentFixture<PatientTestResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientTestResultComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTestResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
