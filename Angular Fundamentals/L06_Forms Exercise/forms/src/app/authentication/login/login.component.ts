import { Component, OnInit } from '@angular/core'
import { LoginModel } from '../models/login.model'
import { AuthService } from '../auth.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: LoginModel
  hasError: boolean
  errorMsg: string

  constructor(private authService: AuthService,private router:Router) {
    this.model = new LoginModel('', '')
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(data => {
      this.successfullLogin(data)
    }, (err => {
      this.hasError = true
      this.errorMsg = err.error.description
    }))
  }

  successfullLogin(data) {
    this.authService.authToken = data['_kmd']['authtoken']
    localStorage.setItem('authtoken',data['_kmd']['authtoken'])  
    localStorage.setItem('username',data['username'])
    this.router.navigate(["/home"])
  }

}
