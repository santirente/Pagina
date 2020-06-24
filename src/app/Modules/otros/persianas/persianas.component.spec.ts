import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersianasComponent } from './persianas.component';

describe('PersianasComponent', () => {
  let component: PersianasComponent;
  let fixture: ComponentFixture<PersianasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersianasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersianasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
