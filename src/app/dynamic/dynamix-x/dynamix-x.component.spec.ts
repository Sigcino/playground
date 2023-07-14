import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamixXComponent } from './dynamix-x.component';

describe('DynamixXComponent', () => {
  let component: DynamixXComponent;
  let fixture: ComponentFixture<DynamixXComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamixXComponent]
    });
    fixture = TestBed.createComponent(DynamixXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
