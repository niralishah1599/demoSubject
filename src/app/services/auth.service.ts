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
  public user;
  validateUser=(username:string,password:string)=>{
    this.user=this._usersservice.usersList.find((value)=>value.email===username && value.password===password) 
  if(this.user)
  {
    this.localStorage.setItem("token",this.uuidv4())
    return true;
  } 
  else{
    return false;
  }
  }

  loggedIn():boolean
  {

    return this.localStorage.getItem('token') ? true:false;
 
  }
 

  uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  logout(){
    this.localStorage.removeItem('token');
    this.localStorage.removeItem('name');
  }

  getToken()
  {
    return this.localStorage.getItem('token');
  }
}
