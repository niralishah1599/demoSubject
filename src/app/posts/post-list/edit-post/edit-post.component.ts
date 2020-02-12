import { Component, OnInit, Input } from '@angular/core';
import { PostService} from 'src/app/services/post.service';
import {ActivatedRoute,Router} from '@angular/router';
import {Ipost} from 'src/app/models/Ipost';
@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {

  constructor(public _PostService:PostService,public actRoute:ActivatedRoute,public route:Router) { }
 
  id=this.actRoute.snapshot.params['id'];

  postData={};
  
  ngOnInit() {

    
  this._PostService.getPost(this.id).subscribe((data)=>{
    this.postData=data;

  })

}
updatePost()
{
  this._PostService.updatePost(this.postData).subscribe(d=>{console.log(d)});
  this.route.navigateByUrl('/posts/postlist');
}
}
