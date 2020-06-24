import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaletsComponent } from './chalets.component';

describe('ChaletsComponent', () => {
  let component: ChaletsComponent;
  let fixture: ComponentFixture<ChaletsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChaletsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChaletsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
