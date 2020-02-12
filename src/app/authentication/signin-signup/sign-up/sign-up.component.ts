import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/models/users.models';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  registerUser: Iusers[] = [];
  newUser: Iusers;
  confirmPass: string;
  password: string;
  errorMsg: string = "";
  temp: boolean;
  
  constructor(private fb: FormBuilder, private router: Router, private _usersService: UsersService) { }


  get Email() {
    return this.registrationForm.get('email');
  }
  get Password() {
    return this.registrationForm.get('password');
  }

  registrationForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-z]+$")]],
    password: ["", Validators.required],

  });


  ngOnInit() {
    this.registerUser = this._usersService.usersList;
  }

  onSubmit() {
    console.log(this.temp);
    if (this.temp) {

      this.newUser = this.registrationForm.value;
      this.registerUser.push(this.newUser);
      console.log("object", this.newUser);
      this.router.navigateByUrl('/signinsignup/signin');
    }
  }

  onKey(event) {

    if (event.target.value == this.Password.value) {
      this.errorMsg = "";
      this.temp = true;
      return this.temp;
    }
    else {
      this.errorMsg = "mismatch";
      this.temp = false;
      return this.temp;
    }


  }
}
