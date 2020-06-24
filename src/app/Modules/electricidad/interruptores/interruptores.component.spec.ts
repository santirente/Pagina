import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterruptoresComponent } from './interruptores.component';

describe('InterruptoresComponent', () => {
  let component: InterruptoresComponent;
  let fixture: ComponentFixture<InterruptoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterruptoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterruptoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
