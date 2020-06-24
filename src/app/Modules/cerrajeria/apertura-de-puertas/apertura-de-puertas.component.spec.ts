import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AperturaDePuertasComponent } from './apertura-de-puertas.component';

describe('AperturaDePuertasComponent', () => {
  let component: AperturaDePuertasComponent;
  let fixture: ComponentFixture<AperturaDePuertasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AperturaDePuertasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AperturaDePuertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
