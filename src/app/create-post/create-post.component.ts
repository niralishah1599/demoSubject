import { Component, OnInit,Input } from '@angular/core';
import { PostService} from 'src/app/services/post.service';
import { Router } from '@angular/router';
import {Ipost} from 'src/app/models/Ipost';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {

  
  postDetails={};

 constructor(
    public _PostService:PostService,
    public router:Router
    ) { }
  
   
    
  ngOnInit() {}

  addPost()
  {
    this._PostService.createPost(this.postDetails).subscribe((data:{})=>{
    this.router.navigate(['/posts/postlist']);
    })
  }
  
 

}
