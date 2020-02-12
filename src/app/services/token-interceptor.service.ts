import { Injectable,Injector } from '@angular/core';
import {HttpInterceptor} from '@angular/common/http';
import {AuthService} from 'src/app/services/auth.service';
@Injectable()
export class TokenInterceptorService implements HttpInterceptor{
 
  constructor(private injector:Injector) { }

  intercept(req,next)
  {
    let authService = this.injector.get(AuthService)
    let tokenizedReq=req.clone({
      setHeaders:{
      
         Authorization:`nirali  ${authService.getToken()}`
      }
    })
    console.log(tokenizedReq);
    return next.handle(tokenizedReq);
  }
}
