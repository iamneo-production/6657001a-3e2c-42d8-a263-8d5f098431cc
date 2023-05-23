import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CoursesComponent } from './courses.component';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [CoursesComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
  });
  it('FE_coursesTest', () => {
    expect(component).toBeTruthy();
  });
});