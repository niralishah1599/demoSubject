import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from 'src/app/services/auth.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
 
  constructor(private injector:Injector) { }

  intercept(req,next)
  {
    const token = window.localStorage.getItem('token');
    let tokenizedReq=req.clone({
      setHeaders:{
         Authorization:`nirali  ${token}`
      }
    })
  
    return next.handle(tokenizedReq);
  }
}
