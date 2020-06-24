import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DesatrancosComponent } from './desatrancos.component';

describe('DesatrancosComponent', () => {
  let component: DesatrancosComponent;
  let fixture: ComponentFixture<DesatrancosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DesatrancosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DesatrancosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
