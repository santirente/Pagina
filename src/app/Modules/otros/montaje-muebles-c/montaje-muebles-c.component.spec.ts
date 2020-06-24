import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MontajeMueblesCComponent } from './montaje-muebles-c.component';

describe('MontajeMueblesCComponent', () => {
  let component: MontajeMueblesCComponent;
  let fixture: ComponentFixture<MontajeMueblesCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MontajeMueblesCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MontajeMueblesCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
