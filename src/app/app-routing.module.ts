import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacebookComponent } from './pages/facebook/facebook.component';
import { InstagramComponent } from './pages/instagram/instagram.component';
import { GoogleComponent } from './pages/google/google.component';
import { TwitterComponent } from './pages/twitter/twitter.component';

const routes: Routes = [
  {path: 'Facebook', component: FacebookComponent},
  {path: 'Instagram', component: InstagramComponent},
  {path: 'Google', component: GoogleComponent},
  {path: 'Twitter', component: TwitterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
