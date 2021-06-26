import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechgamingCartComponent } from './techgaming-cart.component';

describe('TechgamingCartComponent', () => {
  let component: TechgamingCartComponent;
  let fixture: ComponentFixture<TechgamingCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechgamingCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechgamingCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
