import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCategoryViewComponent } from './expense-category-view.component';

describe('ExpenseCategoryViewComponent', () => {
  let component: ExpenseCategoryViewComponent;
  let fixture: ComponentFixture<ExpenseCategoryViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCategoryViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCategoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
