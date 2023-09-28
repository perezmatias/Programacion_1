import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminDtComponent } from './admin-dt.component';

describe('AdminDtComponent', () => {
  let component: AdminDtComponent;
  let fixture: ComponentFixture<AdminDtComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminDtComponent]
    });
    fixture = TestBed.createComponent(AdminDtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
