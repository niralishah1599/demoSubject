import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Ipost} from 'src/app/models/Ipost';

@Injectable({
    providedIn: 'root'
})
export class PostService

{
   private _url="http://localhost:3000/posts";
;

   constructor(private http:HttpClient)
   {

   }
  
   getPostData():Observable<Ipost[]>
   {
      return this.http.get<Ipost[]>(this._url);
   }

   getPost(postId):Observable<Ipost>
   {
      return this.http.get<Ipost>(this._url+'/'+postId)
   }

   updatePost(post):Observable<Ipost>
   {
      return this.http.put<Ipost>(this._url+'/'+post.id,{
         'id':post.id,
         'title':post.title,
         'body':post.body
      })
   }
   deletePost(postId):Observable<Ipost>
   {
     return this.http.delete<Ipost>(this._url + '/' +postId)
   }
   createPost(post):Observable<Ipost>
   {
    
    return this.http.post<Ipost>(this._url,{
      'id':post.id,
     'title':post.title,
      'body':post.body
    })
  
   }
}