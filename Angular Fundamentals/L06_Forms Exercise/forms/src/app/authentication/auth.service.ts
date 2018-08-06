import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = "kid_SJAJWcu4m" // APP KEY HERE;
const appSecret = "9a3989fc9aa14d688cce7c6e2961a4f2" // APP SECRET HERE;
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {

    private currentToken:string;

    constructor(private http: HttpClient) {
    }

    createAuthHeaders(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-type': 'application/json'
            })
        }
        else {
            return new HttpHeaders({
                'Authorization': `Kinvey ` + localStorage.getItem('authtoken'),
                'Content-type': 'application/json'
            })
        }
    }

    login(loginModel: LoginModel) {
       return this.http.post(loginUrl, JSON.stringify(loginModel),
            {
                 headers: this.createAuthHeaders('Basic')
           });
    }

    register(registerModel: RegisterModel) {
        return  this.http.post(registerUrl, JSON.stringify(registerModel),
            {
                 headers: this.createAuthHeaders('Basic')
           });
    }

    logout(){
        return  this.http.post(logoutUrl,{},
        {
            headers:this.createAuthHeaders('Kinvey')
        })
    }

    get authToken(){
        return this.currentToken
    }

    set authToken(value:string){
        this.currentToken=value
    }

    checkIfLogged(){
        return this.currentToken===localStorage.getItem('authtoken')
    }
}