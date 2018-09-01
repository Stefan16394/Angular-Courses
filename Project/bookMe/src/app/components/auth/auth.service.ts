import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { adminRoleId } from './../../services/kinveyConfig';


const appKey = 'kid_r1bG4BgIm'; // APP KEY HERE;
const appSecret = "879a84d9729a4b82a2c01835f38b6bba"; // APP SECRET HERE;
const masterSecret = "42ffcd2b23804f3d9afa04bcc2a14be8"
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private currentToken: string;
    private roleId:string

    constructor(private http: HttpClient) {
        this.currentToken = localStorage.getItem('authtoken')
        this.roleId=localStorage.getItem('roleId')
    }

    login(loginModel) {
        return this.http.post(loginUrl, JSON.stringify(loginModel))
    }

    register(registerModel) {
        return this.http.post(registerUrl, JSON.stringify(registerModel))
    }

    logout() {
        return this.http.post(logoutUrl, {})
    }

    set authToken(value: string) {
        this.currentToken = value
    }

    checkIfLogged() {
        return this.currentToken !== null
    }

    isAdmin(){
        return this.roleId===adminRoleId
    }
}