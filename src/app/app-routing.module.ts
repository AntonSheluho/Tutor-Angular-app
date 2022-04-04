import { PostsComponent } from './user-page/posts/posts/posts.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { EntranceComponent } from './component/entrance/entrance.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  // {path: 'posts', component: PostsComponent, outlet: 'posts'},
  {path: 'entrance', component: EntranceComponent},
  {path: 'mainPage', loadChildren:() => import('./user-page/user-page.module').then(m => m.UserPageModule), canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: '', redirectTo: 'entrance', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
