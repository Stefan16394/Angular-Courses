import { userRoleId } from './../../../services/kinveyConfig';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service'
import './register.component.css'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent{
  private model:Object

  constructor(private authService:AuthService,private router:Router,private toastr:ToastrService) { 
    this.model={
      username:'',
      password:'',
      roles:[userRoleId]
    }
  }

  submit(e){
    e.preventDefault()
    this.authService.register(this.model).subscribe(user=>{
       this.toastr.success('Registration succesfull! Please login.','Success')
       this.router.navigate(['/user/login'])
    })
    
  }

}
