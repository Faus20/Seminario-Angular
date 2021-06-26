import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechgamingProductsComponent } from './techgaming-products.component';

describe('TechgamingProductsComponent', () => {
  let component: TechgamingProductsComponent;
  let fixture: ComponentFixture<TechgamingProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TechgamingProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TechgamingProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
