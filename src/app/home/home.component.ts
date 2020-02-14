import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { typeWithParameters } from '@angular/compiler/src/render3/util';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  localStorage = window.localStorage;
  data:string;
  
  constructor(public _userService: UsersService, public router: Router) {
    this._userService.userName.subscribe((val) => {
      console.log('val', val);
     //this._userService.data = val;
     this.data=val; 
   
       
    })
  }

  ngOnInit() {
  
  }


}
