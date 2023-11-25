import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginBoxComponent } from './components/login-box/login-box.component';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { TwitterComponent } from './pages/twitter/twitter.component';
import { GoogleComponent } from './pages/google/google.component';
import { PageOptionsComponent } from './components/page-options/page-options.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule } from '@angular/forms';
import { InstaRegisterComponent } from './components/insta-register/insta-register.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginBoxComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    GoogleComponent,
    PageOptionsComponent,
    CardComponent,
    HomeComponent,
    InstaRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
