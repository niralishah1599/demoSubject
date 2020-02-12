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
  data: string;
  name: any;
  constructor(public _userService: UsersService, public router: Router) {

  }

  ngOnInit() {
    console.log('in init');
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      console.log('IN events');
      this._userService.getUserStatus().subscribe((val) => {
        this.data = val;
        console.log("in app", this.data);
      })
  }

  onChanges() {
    console.log('this.name home', this.name);
    // // this._userService.userName.next(this.name);
    // this._userService.setUserName(this.name);
  }

}
