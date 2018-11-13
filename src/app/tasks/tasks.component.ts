import { Router } from '@angular/router';
import { AuthentificationService } from './../../services/authentification.service';
import { TasksService } from './../../services/tasks.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {


  private tasksList:any[];

  constructor(private tasksService: TasksService,
              private autheService: AuthentificationService,
              private router:Router) { }

  ngOnInit() {
    this.loadTaskList();
  }

  loadTaskList(){

    this.tasksService.getTasks().subscribe(

          (data:any)=>{this.tasksList=data},
      
          (error) => {
              console.log('Something went wrong with API Call !!!! ');
              this.autheService.logout();
              this.router.navigateByUrl('/login');
          },
      
          () => {
              console.log('Loading Data done !');
          }
        
    );
  }

  onNewTask(){
    this.router.navigateByUrl('/new-task');
  }

}
