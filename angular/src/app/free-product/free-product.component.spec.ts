import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeProductComponent } from './free-product.component';

describe('FreeProductComponent', () => {
  let component: FreeProductComponent;
  let fixture: ComponentFixture<FreeProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FreeProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
