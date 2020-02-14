import { Injectable } from '@angular/core';
import { Iusers } from 'src/app/models/users.models';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    public userName  = new BehaviorSubject<string>(window.localStorage.getItem('name'));
  
    
  
    
   
}