import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http'
import {AuthGuard} from 'src/app/guard/auth.guard';
import {TokenInterceptorService} from 'src/app/services/token-interceptor.service';

const routes: Routes = [
  
  {
    path:'home',
    component:HomeComponent,
  
  },
  {
    path:'create',
    component:CreatePostComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'posts',
    loadChildren: () => import('./posts/post-list/post-list-routing.module').then(p => p.PostListRoutingModule),
    //canActivate:[AuthGuard]
  },
  {
    path:'signinsignup',
    loadChildren:() => import('./authentication/signin-signup/signin-signup.module').then(s=>s.SigninSignupModule),
    canLoad:[AuthGuard]
  },
  {
    path:'',
    redirectTo:'/home',
    pathMatch:'full'
}
];

@NgModule({
  declarations: [
    HomeComponent,
   CreatePostComponent
  ],
  imports: [
  RouterModule.forRoot(routes),
  CommonModule,
  FormsModule,
  HttpClientModule
],
providers:[
],
  exports: [RouterModule]
})
export class AppRoutingModule { }
