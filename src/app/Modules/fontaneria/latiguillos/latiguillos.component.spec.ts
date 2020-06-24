import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatiguillosComponent } from './latiguillos.component';

describe('LatiguillosComponent', () => {
  let component: LatiguillosComponent;
  let fixture: ComponentFixture<LatiguillosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatiguillosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatiguillosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
