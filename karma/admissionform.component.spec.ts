import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AdmissionFormComponent } from './admissionform.component';

describe('AdmissionFormComponent', () => {
  let component: AdmissionFormComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [AdmissionFormComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(AdmissionFormComponent);
    component = fixture.componentInstance;
  });
  it('FE_admissionFormTest', () => {
    expect(component).toBeTruthy();
  });
});