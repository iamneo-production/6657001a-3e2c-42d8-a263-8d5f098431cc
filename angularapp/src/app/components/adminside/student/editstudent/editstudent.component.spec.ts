import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditstudentComponent } from './editstudent.component';

describe('EditstudentComponent', () => {
  let component: EditstudentComponent;
  let fixture: ComponentFixture<EditstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
