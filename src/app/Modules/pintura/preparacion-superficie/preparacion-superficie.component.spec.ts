import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreparacionSuperficieComponent } from './preparacion-superficie.component';

describe('PreparacionSuperficieComponent', () => {
  let component: PreparacionSuperficieComponent;
  let fixture: ComponentFixture<PreparacionSuperficieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreparacionSuperficieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreparacionSuperficieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
