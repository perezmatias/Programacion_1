import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfesorComponent } from './profesor.component';

describe('ProfesorComponent', () => {
  let component: ProfesorComponent;
  let fixture: ComponentFixture<ProfesorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfesorComponent]
    });
    fixture = TestBed.createComponent(ProfesorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
