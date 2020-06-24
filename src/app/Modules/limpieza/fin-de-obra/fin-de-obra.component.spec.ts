import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinDeObraComponent } from './fin-de-obra.component';

describe('FinDeObraComponent', () => {
  let component: FinDeObraComponent;
  let fixture: ComponentFixture<FinDeObraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinDeObraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinDeObraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
