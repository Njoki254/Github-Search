import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RepoComponent } from './repo/repo.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:"profile", component: UserComponent},
  {path:"portfolio", component: RepoComponent},
  {path:"navbar", component: NavbarComponent},
  {path:"searchForm", component: SearchFormComponent},
  {path:"notFound", component: NotFoundComponent},

  { path: '', redirectTo:"profile", pathMatch:"full"},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }