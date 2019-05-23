import { RouteGuard } from './route-guard';
import { AllpostsComponent } from './allposts/allposts.component';
import { AddpostComponent } from './addpost/addpost.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'login', component:LoginComponent},
{path:'register', component:RegisterComponent},
{path:'**', component:PagenotfoundComponent},
{path:'addpost', component:AddpostComponent , canActivate:[RouteGuard] },
{path:'allposts', component:AllpostsComponent,canActivate:[RouteGuard]}
  
  

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
