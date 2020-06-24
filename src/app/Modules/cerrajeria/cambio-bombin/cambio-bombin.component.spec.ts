import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioBombinComponent } from './cambio-bombin.component';

describe('CambioBombinComponent', () => {
  let component: CambioBombinComponent;
  let fixture: ComponentFixture<CambioBombinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioBombinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioBombinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
