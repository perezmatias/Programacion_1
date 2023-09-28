import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfDtComponent } from './prof-dt.component';

describe('ProfDtComponent', () => {
  let component: ProfDtComponent;
  let fixture: ComponentFixture<ProfDtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfDtComponent]
    });
    fixture = TestBed.createComponent(ProfDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
