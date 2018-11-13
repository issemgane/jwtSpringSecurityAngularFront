import { Injectable } from "@angular/core";
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APP_URLS } from './../app/config/api.url.config';
@Injectable()
export class AuthentificationService{
    
    public jwtToken=null;

    constructor(private httpClient: HttpClient) { }

    login(user){
        return this.httpClient.post(APP_URLS.LOGIN_URL,user,{observe:'response'});
    }


    saveToken(jwt:string){
        localStorage.setItem('jwtToken',jwt);
    }
    

    logout(){
        this.jwtToken=null;
        localStorage.removeItem('jwtToken');
    }

    
    loadToken(){
        this.jwtToken=localStorage.getItem('jwtToken');
    }

}