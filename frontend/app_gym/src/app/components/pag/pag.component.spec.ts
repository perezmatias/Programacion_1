import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagComponent } from './pag.component';

describe('PagComponent', () => {
  let component: PagComponent;
  let fixture: ComponentFixture<PagComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PagComponent]
    });
    fixture = TestBed.createComponent(PagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
