import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { GoogleComponent } from './pages/google/google.component';
import { TwitterComponent } from './pages/twitter/twitter.component';
import { HomeComponent } from './pages/home/home.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Facebook', component: FacebookComponent},
  {path: 'Instagram', component: InstagramComponent},
  {path: 'Google', component: GoogleComponent},
  {path: 'Twitter', component: TwitterComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    HttpClientModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
