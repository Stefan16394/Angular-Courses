import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import './login.component.css'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  private model

  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService) { 
    this.model={
      username:'',
      password:''
    }
  }

  submit() {
    this.authService.login(this.model).subscribe(data => {
      this.successfullLogin(data)
    })
  }

  successfullLogin(data) {

    this.authService.authToken = data['_kmd']['authtoken']
    localStorage.setItem('authtoken',data['_kmd']['authtoken'])  
    localStorage.setItem('userId',data['_id'])
    localStorage.setItem('roleId',data['roles'][0])
    this.toastr.success('Logged in!','Success')
    this.router.navigate(["/"]).then(()=>location.reload())
  }

}
