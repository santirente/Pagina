import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstalacionCerraduraComponent } from './instalacion-cerradura.component';

describe('InstalacionCerraduraComponent', () => {
  let component: InstalacionCerraduraComponent;
  let fixture: ComponentFixture<InstalacionCerraduraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstalacionCerraduraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstalacionCerraduraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
