import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'task-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.scss'
})
export class TaskListComponent {
  @Input() taskList:any[]=[];
  @Output() important=new EventEmitter<any>();
  @Output() completed=new EventEmitter<any>();

  isImportant(task:any) {
    this.important.emit(task);
  }

  isCompleted(task:any) {
    this.completed.emit(task);
  }




}
