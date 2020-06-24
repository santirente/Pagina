import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorInteriorComponent } from './exterior-interior.component';

describe('ExteriorInteriorComponent', () => {
  let component: ExteriorInteriorComponent;
  let fixture: ComponentFixture<ExteriorInteriorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExteriorInteriorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorInteriorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
