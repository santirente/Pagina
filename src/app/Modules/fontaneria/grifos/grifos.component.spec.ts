import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrifosComponent } from './grifos.component';

describe('GrifosComponent', () => {
  let component: GrifosComponent;
  let fixture: ComponentFixture<GrifosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrifosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrifosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
