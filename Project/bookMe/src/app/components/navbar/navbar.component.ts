import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{
   
  constructor(private authService:AuthService,private router:Router) {    
  }

  logout(){
    this.authService.logout().subscribe(()=>{
      localStorage.clear()
      this.authService.authToken=null
      this.router.navigate(['/user/login']).then(()=>location.reload())
    })
  }
}
