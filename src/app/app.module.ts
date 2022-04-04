import { RegistrationUsersService } from './component/registration-users.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { HeroesService } from './heroes-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { EntranceComponent } from './component/entrance/entrance.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { UserPageModule } from './user-page/user-page.module';
import { MyButtonComponent } from './UI/my-button/my-button.component';
import { MyInputComponent } from './UI/my-input/my-input.component';
import { ReactiveFormsModule } from '@angular/forms';

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
  ],
  providers: [HeroesService, RegistrationUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
