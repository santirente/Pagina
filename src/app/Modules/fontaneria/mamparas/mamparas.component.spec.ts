import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MamparasComponent } from './mamparas.component';

describe('MamparasComponent', () => {
  let component: MamparasComponent;
  let fixture: ComponentFixture<MamparasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MamparasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MamparasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
