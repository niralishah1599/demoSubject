
import { Injectable } from '@angular/core';
import {Iusers} from 'src/app/models/users.models';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthUsersService {


  private url="http://localhost:5000/userData";

  
  constructor(private http:HttpClient) { }


  addUser(user:Iusers): Observable<Iusers> {
    return this.http.post<Iusers>(this.url, {name:user.name,email:user.email,password:user.password});
  }
 

  getUserFromEmailAndPassword(email: any, password?: any) {
    return this.http.get<Iusers[]>(this.url + '?email=' + email + '&password=' + password);
  }

  getUserName(data){
    return this.http.patch(this.url+'/'+window.localStorage.getItem('id'),{'name':data})
   }

  
}
  