import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PisosTuristicosComponent } from './pisos-turisticos.component';

describe('PisosTuristicosComponent', () => {
  let component: PisosTuristicosComponent;
  let fixture: ComponentFixture<PisosTuristicosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PisosTuristicosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PisosTuristicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
