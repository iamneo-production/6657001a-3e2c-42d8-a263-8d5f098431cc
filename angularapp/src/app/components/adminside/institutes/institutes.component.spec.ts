import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { InstitutesComponent } from './institutes.component';

describe('InstitutesComponent', () => {
  let component: InstitutesComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [InstitutesComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(InstitutesComponent);
    component = fixture.componentInstance;
  });
  it('FE_institutesTest', () => {
    expect(component).toBeTruthy();
  });
});