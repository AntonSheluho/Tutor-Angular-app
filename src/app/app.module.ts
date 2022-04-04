import { environment } from './../environments/environment';
import { registrationAction } from './component/store/actions/register.action';
import { RegistrationUsersService } from './component/registration-users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { UserPageModule } from './user-page/user-page.module';
import { HeroesService } from './heroes-service.service';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EntranceComponent } from './component/entrance/entrance.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { MyButtonComponent } from './UI/my-button/my-button.component';
import { MyInputComponent } from './UI/my-input/my-input.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    EntranceComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    MyButtonComponent,
    MyInputComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserPageModule,
    HttpClientModule,
    ReactiveFormsModule,    
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [HeroesService, RegistrationUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
