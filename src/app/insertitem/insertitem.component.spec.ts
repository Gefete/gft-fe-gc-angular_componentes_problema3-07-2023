import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertitemComponent } from './insertitem.component';

describe('InsertitemComponent', () => {
  let component: InsertitemComponent;
  let fixture: ComponentFixture<InsertitemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InsertitemComponent]
    });
    fixture = TestBed.createComponent(InsertitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
