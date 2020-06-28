import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';
//routes tells views what to display
//the Notfound component is a more formal way to infor user of an error
//import all components, add paths to them in in const routes, and add router links in the html
const routes: Routes = [
  {path:"user", component: UserComponent},
  {path:'repository/:id', component: RepoComponent},
  {path:"navbar", component: NavbarComponent},
  {path:"searchForm", component: SearchFormComponent},
  {path:"**", component: NotFoundComponent},
  //the astericks are used as sort of a wild card in case of rout not present
//important to add a redirect path in case of an empty path in the app., to avoid empty screens
  { path: '', redirectTo:"profile", pathMatch:"full"},
];
//id token allows one to pass parameter for specific repo
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
