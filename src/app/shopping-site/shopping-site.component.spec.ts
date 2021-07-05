import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingSiteComponent } from './shopping-site.component';

describe('ShoppingSiteComponent', () => {
  let component: ShoppingSiteComponent;
  let fixture: ComponentFixture<ShoppingSiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingSiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingSiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
