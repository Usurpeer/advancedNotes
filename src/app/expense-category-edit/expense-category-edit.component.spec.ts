import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpenseCategoryEditComponent } from './expense-category-edit.component';

describe('ExpenseCategoryEditComponent', () => {
  let component: ExpenseCategoryEditComponent;
  let fixture: ComponentFixture<ExpenseCategoryEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpenseCategoryEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExpenseCategoryEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
