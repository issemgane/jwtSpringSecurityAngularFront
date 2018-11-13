import { AuthentificationService } from './../../services/authentification.service';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

private mode:number = 0;

  constructor(private autheService: AuthentificationService,private router:Router) { }

  ngOnInit() {
  }

  onLogin(user) {
    this.autheService.login(user).subscribe(
      response=>{
        let jwtToken=response.headers.get('authorization');
        this.autheService.saveToken(jwtToken);
        this.router.navigateByUrl('/tasks');
        
    },
  error=>{
   this.mode=1;
  });

  }

}
