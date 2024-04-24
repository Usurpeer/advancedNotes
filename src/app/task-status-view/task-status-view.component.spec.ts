import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskStatusViewComponent } from './task-status-view.component';

describe('TaskStatusViewComponent', () => {
  let component: TaskStatusViewComponent;
  let fixture: ComponentFixture<TaskStatusViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskStatusViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskStatusViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
