import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VitroceramicaComponent } from './vitroceramica.component';

describe('VitroceramicaComponent', () => {
  let component: VitroceramicaComponent;
  let fixture: ComponentFixture<VitroceramicaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VitroceramicaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VitroceramicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
