import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
//import { AuthService} from 'src/app/services/auth.service';
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad{

  constructor(private _router:Router){}

  canActivate():boolean{
   if(window.localStorage.getItem('token'))
   {
     console.log('token post');
     //this._router.navigate(['/posts/postlist'])
     return true;
   }
   else
   {
     this._router.navigateByUrl('/signinsignup/signin');
     return false;
   }
  

 }

  canLoad():boolean
  { 
  if(window.localStorage.getItem('token'))
   {
     console.log(window.localStorage.getItem('token'))
     this._router.navigate(['/posts/postlist']);
    return false;
   } 
   else
   {
    return true;
   }
 }
}
