import { Component, OnInit } from '@angular/core';
import { Iusers } from 'src/app/models/users.models';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { AuthUsersService } from 'src/app/services/auth-users.service';

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
  dataFetched:boolean=false;
  private localStorage = window.localStorage;

  constructor(private fb: FormBuilder, private router: Router, private _usersService: UsersService, private _authService: AuthService,private _authUser:AuthUsersService) { }
  LoginForm = this.fb.group({
    email: ["", [Validators.required, Validators.pattern("^[a-zA-Z0–9_.+-]+@[a-zA-Z0–9-]+.[a-z]+$")]],
    password: ["", Validators.required],
  })

  ngOnInit() { 
    setTimeout(()=>{
    this.dataFetched=true;  
    },2000)
  }

  onSubmit() {
    console.log("submit");
    this.email = this.LoginForm.value.email;
    this.password = this.LoginForm.value.password

  
  console.log('data');
    this._authUser.getUserFromEmailAndPassword(this.email,this.password).subscribe((data)=>
    {
   
      if(data.length!=0)
      {
        
        this.localStorage.setItem('name',data[0]['name']);
        this.localStorage.setItem("token",this.uuidv4());
       this.localStorage.setItem('id',data[0]['id']);
        this.router.navigateByUrl("/posts/postlist");
      }
      else
      {
        alert("invalid");
      }
    })
}

uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

}