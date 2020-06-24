import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APuertasLabadorasComponent } from './apuertas-labadoras.component';

describe('APuertasLabadorasComponent', () => {
  let component: APuertasLabadorasComponent;
  let fixture: ComponentFixture<APuertasLabadorasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APuertasLabadorasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APuertasLabadorasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
