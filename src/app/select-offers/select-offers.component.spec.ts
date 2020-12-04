import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectOffersComponent } from './select-offers.component';

describe('SelectOffersComponent', () => {
  let component: SelectOffersComponent;
  let fixture: ComponentFixture<SelectOffersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectOffersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
