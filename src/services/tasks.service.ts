import { AuthentificationService } from './authentification.service';
import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URLS } from './../app/config/api.url.config';

@Injectable()
export class TasksService{


    constructor(private httpClient: HttpClient,private autheService: AuthentificationService) { }

    getTasks(){

        if(this.autheService.jwtToken==null){
            this.autheService.loadToken();
        }
        
        return this.httpClient.get(APP_URLS.TASKS_URL,{headers:new HttpHeaders(
            {'Authorization':this.autheService.jwtToken}
        )});

       
    }

}