import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/models/users.models';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthUsersService } from 'src/app/services/auth-users.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  newUser: Iusers;
  confirmPass: string;
  password: string;
  errorMsg: string = "";
  temp: boolean;
  id:number;
  constructor(private fb: FormBuilder, private router: Router, private _usersService: UsersService,public _authUsers:AuthUsersService) { }


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
  }

  onSubmit() {
    console.log(this.temp);
    if (this.temp) {

      this.newUser = {
        name:this.registrationForm.value.name,
        email:this.registrationForm.value.email,
        password:this.registrationForm.value.password
       }

      console.log(this.newUser);
      if(this._authUsers.getUserFromEmailAndPassword(this.Email).subscribe(val =>{
        console.log(val);
      })){
        alert("aleready exist");
        
      }
      else
      {
        this._authUsers.addUser(this.newUser).subscribe((val)=>
        {
          console.log(val);
          this.router.navigateByUrl('/signinsignup/signin')
        });
      
      }
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
