import { Component, EventEmitter, Output, Input, inject } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Title } from "@angular/platform-browser";
import { NewTaskData } from "../task/task.model";
import { TasksService } from "../tasks.service";

@Component({
  selector: "app-new-task",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./new-task.component.html",
  styleUrl: "./new-task.component.css",
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  //other way to inject a service class, this is an alternative to use constructor
  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
    this.close.emit();
  }
}
