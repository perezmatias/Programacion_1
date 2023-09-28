import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcAlumComponent } from './pc-alum.component';

describe('PcAlumComponent', () => {
  let component: PcAlumComponent;
  let fixture: ComponentFixture<PcAlumComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcAlumComponent]
    });
    fixture = TestBed.createComponent(PcAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
