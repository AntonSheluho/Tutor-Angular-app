import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
// import { MatButtonModule } from '@angular/material/button';

import { UserPageRoutingModule } from './user-page-routing.module';
import { PostsComponent } from './posts/posts/posts.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { TodosComponent } from './posts/todos/todos.component';
import { AlbumsComponent } from './posts/albums/albums.component';
import { UsersComponent } from './posts/users/users.component';
import { PhotosComponent } from './posts/photos/photos.component';


@NgModule({
  declarations: [
    MainPageComponent,
    PostsComponent,
    CommentsComponent,
    TodosComponent,
    AlbumsComponent,
    UsersComponent,
    PhotosComponent,
    // MatToolbarModule,
    // MatProgressSpinnerModule,
    // MatButtonModule,
  ],
  imports: [
    CommonModule,
    UserPageRoutingModule,
    
  ]
})
export class UserPageModule { }
