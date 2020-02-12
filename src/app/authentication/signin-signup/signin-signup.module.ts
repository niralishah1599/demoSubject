import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SignInComponent}from './sign-in/sign-in.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import {AuthGuard} from 'src/app/guard/auth.guard';
const routes: Routes = [
  { path: 'signup', component:SignUpComponent},
  { path:'signin',component:SignInComponent}
  
  
    
];

@NgModule({
  declarations: [
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)

  ],
  exports:[
    RouterModule,
    FormsModule
  ]
})
export class SigninSignupModule { }
