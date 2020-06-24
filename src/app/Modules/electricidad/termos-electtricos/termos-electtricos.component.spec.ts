import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TermosElecttricosComponent } from './termos-electtricos.component';

describe('TermosElecttricosComponent', () => {
  let component: TermosElecttricosComponent;
  let fixture: ComponentFixture<TermosElecttricosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TermosElecttricosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TermosElecttricosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
