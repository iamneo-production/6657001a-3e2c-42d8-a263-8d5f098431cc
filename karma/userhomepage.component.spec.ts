import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { RouterTestingModule } from '@angular/router/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UserHomePageComponent } from './userhomepage.component';

describe('UserHomePageComponent', () => {
  let component: UserHomePageComponent;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule], 
    providers: [UserHomePageComponent]
  }));
  beforeEach(() => {
    const fixture = TestBed.createComponent(UserHomePageComponent);
    component = fixture.componentInstance;
  });
  it('FE_userHomePageTest', () => {
    expect(component).toBeTruthy();
  });
});