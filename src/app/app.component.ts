import { AuthentificationService } from './../services/authentification.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jwtSpringSecurityAngularFront';

  constructor(private router:Router, private autheService: AuthentificationService){
    
      }

      onLogout(){
        this.autheService.logout();
        this.router.navigateByUrl('/login');
      }
}
