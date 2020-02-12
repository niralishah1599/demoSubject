import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PostListComponent } from './post-list.component';
import { EditPostComponent } from './edit-post/edit-post.component';
import { NgxSpinnerModule } from 'ngx-spinner';

const routes: Routes =
[

  
  {
    path:'postlist',
    component:PostListComponent,
   
  },
  {
    path:'edit/:id',
    component:EditPostComponent
  },
  {
    path:'',
    redirectTo:'./home',
    pathMatch:'full'
  }
  
  
  

]

@NgModule({
  declarations: [
    PostListComponent,
    EditPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
    NgxSpinnerModule
   
  ],
  exports:[
    RouterModule
  ]
})
export class PostListRoutingModule { }
