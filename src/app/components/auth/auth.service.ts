import { Injectable } from '@angular/core';
import { IUser } from './user';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    currentUser: IUser
    constructor() { }

    loginUser(username: string, password: string){
        if(!username || !password){
            alert('enter username and password')
            return
        }
        this.currentUser = {
            id: 1,
            userName: username
        }
    }

    logoutUSer(){
        this.currentUser = null
    }

    get isLoggedIn(){
        return !!this.currentUser
    }
}