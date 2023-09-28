import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PcGestorComponent } from './pc-gestor.component';

describe('PcGestorComponent', () => {
  let component: PcGestorComponent;
  let fixture: ComponentFixture<PcGestorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PcGestorComponent]
    });
    fixture = TestBed.createComponent(PcGestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
