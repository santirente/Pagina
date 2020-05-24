import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcarreosComponent } from './acarreos.component';

describe('AcarreosComponent', () => {
  let component: AcarreosComponent;
  let fixture: ComponentFixture<AcarreosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcarreosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcarreosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
