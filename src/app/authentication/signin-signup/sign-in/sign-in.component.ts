import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/models/users.models';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  user: Iusers[] = [];
  users: Iusers;
  email: string;
  password: string;
  name: string;
  private localStorage = window.localStorage;

  constructor(private fb: FormBuilder, private router: Router, private _usersService: UsersService, private _authService: AuthService) { }
  LoginForm = this.fb.group({
    email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-z]+$")]],
    password: ["", Validators.required],
  })

  ngOnInit() { }

  onSubmit() {
    console.log("submit");
    this.email = this.LoginForm.value.email;
    this.password = this.LoginForm.value.password

    this._usersService.usersList.filter(item => {
      if (item.email == this.LoginForm.value.email && item.password == this.LoginForm.value.password) {
        this.localStorage.setItem('name', item.name);
        this.router.navigateByUrl('/products/productlist');
      }
      else {

        this.router.navigateByUrl('/signinsignup/signup')
      }
    })


    if (this._authService.validateUser(this.email, this.password)) {
      this.router.navigate(["/posts/postlist"]);
    } else {
      alert("username and password are not valid");

    }


  }

}
