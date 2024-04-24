import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusEditComponent } from './task-status-edit.component';

describe('TaskStatusEditComponent', () => {
  let component: TaskStatusEditComponent;
  let fixture: ComponentFixture<TaskStatusEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatusEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
