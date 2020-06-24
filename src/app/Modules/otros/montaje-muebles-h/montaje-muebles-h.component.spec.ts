import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontajeMueblesHComponent } from './montaje-muebles-h.component';

describe('MontajeMueblesHComponent', () => {
  let component: MontajeMueblesHComponent;
  let fixture: ComponentFixture<MontajeMueblesHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontajeMueblesHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontajeMueblesHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
