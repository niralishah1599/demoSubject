import { Injectable } from '@angular/core';
import {Iusers} from 'src/app/models/users.models';
import {UsersService} from 'src/app/services/users.service';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private localStorage = window.localStorage;
  
  constructor(private _usersservice:UsersService) { }
  

  loggedIn():boolean
  {

    return this.localStorage.getItem('token') ? true:false;
 
  }
 
getToken()
  {
    return this.localStorage.getItem('token');
  }
}
