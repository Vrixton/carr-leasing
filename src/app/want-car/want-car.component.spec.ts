import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WantCarComponent } from './want-car.component';

describe('WantCarComponent', () => {
  let component: WantCarComponent;
  let fixture: ComponentFixture<WantCarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WantCarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WantCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
