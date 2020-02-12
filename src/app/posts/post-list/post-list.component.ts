import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Ipost } from 'src/app/models/Ipost';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {


  posts: Ipost[] = [];
  sub: Subscription;
  token: string = 'false';
  userNames;
  name: string = ''

  constructor(public _PostService: PostService, public _authService: AuthService, public router: Router, public spinner: NgxSpinnerService, public _userService: UsersService) {
   
  }


  ngOnInit() {
    this.spinner.show();
    this.token = window.localStorage.getItem('token');
    console.log(this.token);
    this.loadPost();
  }
  loadPost() {
    this.sub = this._PostService.getPostData().subscribe(data => {
      this.posts = data;
      this.spinner.hide();
    })
  }

  deletePost(id) {
    this._PostService.deletePost(id).subscribe((data) => { this.loadPost() });
  }

  abc() {
    window.history.forward();
  }


  logoutUser() {
    window.localStorage.removeItem('token');
    this.router.navigateByUrl('/home');
    console.log(localStorage.getItem('token'));
    window.localStorage.removeItem('name');

  }
  ngOnDestroy(): void {

    // this.sub.unsubscribe();
    // console.log("destroy call");
  }

  onChanges() {
    console.log('this.name on change', this.name);
    // this._userService.userName.next(this.name);
    // this._userService.setUserName(this.name);

    this._userService.sendUserStatus(this.name);
  }

}


