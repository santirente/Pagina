import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FalsoTechoComponent } from './falso-techo.component';

describe('FalsoTechoComponent', () => {
  let component: FalsoTechoComponent;
  let fixture: ComponentFixture<FalsoTechoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FalsoTechoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FalsoTechoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
