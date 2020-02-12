import { Injectable } from '@angular/core';
import { Iusers } from 'src/app/models/users.models';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    public userName: Subject<any> = new Subject();
    data: string;
    v: any;
    public usersList: Iusers[] =
        [
            { 'name': 'nirali', 'email': 's@g.c', 'password': 'shah' }
        ]

    constructor() {
        console.log('service constructor', this.userName)
    }

    public sendUserStatus(value: string) {
        console.log('sendUserStatus',value);
        this.userName.next(value);
    }

    public getUserStatus(): Observable<any> {
        console.log('getUserStatus', this.userName);
        this.userName.subscribe(user => {
            console.log(user);

        })
        return this.userName.asObservable();
    }
}