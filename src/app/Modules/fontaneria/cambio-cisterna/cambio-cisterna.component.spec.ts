import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambioCisternaComponent } from './cambio-cisterna.component';

describe('CambioCisternaComponent', () => {
  let component: CambioCisternaComponent;
  let fixture: ComponentFixture<CambioCisternaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambioCisternaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambioCisternaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
