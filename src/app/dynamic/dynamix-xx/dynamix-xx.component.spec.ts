import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamixXxComponent } from './dynamix-xx.component';

describe('DynamixXxComponent', () => {
  let component: DynamixXxComponent;
  let fixture: ComponentFixture<DynamixXxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamixXxComponent]
    });
    fixture = TestBed.createComponent(DynamixXxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
