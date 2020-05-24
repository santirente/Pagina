import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontaneriaComponent } from './fontaneria.component';

describe('FontaneriaComponent', () => {
  let component: FontaneriaComponent;
  let fixture: ComponentFixture<FontaneriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontaneriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontaneriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
