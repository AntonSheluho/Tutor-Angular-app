import { PostsComponent } from './user-page/posts/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EntranceComponent } from './component/entrance/entrance.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  // {path: 'posts', component: PostsComponent, outlet: 'posts'},
  {path: 'mainPage', loadChildren:() => import('./user-page/user-page.module').then(m => m.UserPageModule)},
  {path: 'entrance', component: EntranceComponent},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: 'entrance', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
