import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../../../services/http.service';
import { PageTitleComponent } from '../../page-title/page-title.component';
import { TaskListComponent } from '../../task-list/task-list.component';

@Component({
  selector: 'app-all-tasks',
  standalone: true,
  imports: [FormsModule, PageTitleComponent, TaskListComponent],
  templateUrl: './all-tasks.component.html',
  styleUrl: './all-tasks.component.scss'
})
export class AllTasksComponent {
  newTask="";
  taskList:any[]=[];
  httpService = inject(HttpService);

  ngOnInit(){
    this.getAllTasks();
  }

  addTask() {
    this.httpService.addtask(this.newTask).subscribe(()=>{
      this.newTask="";
      this.getAllTasks();
    })
  }

  getAllTasks() {
    this.httpService.getAllTasks().subscribe((result:any)=>{
      this.taskList=result;
    })
  }

  onCompleted(task:any) {

    task.completed = !task.completed;

    this.httpService.UpdateTask(task).subscribe(()=>{
      console.log("Completed", task);
    })
  }

  onImportant(task:any) {
    
    task.important = !task.important;

    this.httpService.UpdateTask(task).subscribe(()=>{
      console.log("Important", task);
    })
  }

  

}
