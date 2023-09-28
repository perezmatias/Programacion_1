import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestClassComponent } from './gest-class.component';

describe('GestClassComponent', () => {
  let component: GestClassComponent;
  let fixture: ComponentFixture<GestClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GestClassComponent]
    });
    fixture = TestBed.createComponent(GestClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
