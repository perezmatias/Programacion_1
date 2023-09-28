import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfClassComponent } from './prof-class.component';

describe('ProfClassComponent', () => {
  let component: ProfClassComponent;
  let fixture: ComponentFixture<ProfClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfClassComponent]
    });
    fixture = TestBed.createComponent(ProfClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
