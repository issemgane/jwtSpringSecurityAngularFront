import { TasksService } from './../services/tasks.service';
import { AuthentificationService } from './../services/authentification.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TasksComponent } from './tasks/tasks.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { RegistrationComponent } from './registration/registration.component';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from "@angular/forms";

const appRoutes: Routes = [
  { 
    path: '', 
    redirectTo :'/login',
    pathMatch:'full'
  },
  {
     path: 'login', component: LoginComponent 
  },
  {
     path: 'tasks', component: TasksComponent 
  },
  {
     path: 'new-task', component: NewTaskComponent 
  },
  {
     path: 'registration', component: RegistrationComponent 
  }
 ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasksComponent,
    NewTaskComponent,
    RegistrationComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),
    FormsModule,HttpClientModule
  ],
  providers: [AuthentificationService,TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
