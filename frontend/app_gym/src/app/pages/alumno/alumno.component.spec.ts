import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoComponent } from './alumno.component';

describe('AlumnoComponent', () => {
  let component: AlumnoComponent;
  let fixture: ComponentFixture<AlumnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumnoComponent]
    });
    fixture = TestBed.createComponent(AlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
