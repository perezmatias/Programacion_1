import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumDtComponent } from './alum-dt.component';

describe('AlumDtComponent', () => {
  let component: AlumDtComponent;
  let fixture: ComponentFixture<AlumDtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlumDtComponent]
    });
    fixture = TestBed.createComponent(AlumDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
