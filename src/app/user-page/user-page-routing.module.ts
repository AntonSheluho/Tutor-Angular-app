import { PhotosComponent } from './posts/photos/photos.component';
import { UsersComponent } from './posts/users/users.component';
import { AlbumsComponent } from './posts/albums/albums.component';
import { TodosComponent } from './posts/todos/todos.component';
import { CommentsComponent } from './posts/comments/comments.component';
import { PageNotFoundComponent } from './../component/page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts/posts.component';

const routes: Routes = [
  {path: '', component: MainPageComponent, children: [
    {path: '', component: PostsComponent, },
    {path: 'posts', component: PostsComponent, },
    {path: 'comments', component: CommentsComponent, },
    {path: 'albums', component: AlbumsComponent, },
    {path: 'photos', component: PhotosComponent, },
    {path: 'users', component: UsersComponent, },
    {path: 'todos', component: TodosComponent, },
    {path: '**', component: PageNotFoundComponent, },
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserPageRoutingModule { }
