import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxDocViewerComponent } from './ngx-doc-viewer.component';

describe('NgxDocViewerComponent', () => {
  let component: NgxDocViewerComponent;
  let fixture: ComponentFixture<NgxDocViewerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgxDocViewerComponent]
    });
    fixture = TestBed.createComponent(NgxDocViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
