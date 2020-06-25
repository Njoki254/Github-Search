import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { RepoComponent } from './repo/repo.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { HighlightDirective } from './highlight.directive';

import { HttpClientModule }    from '@angular/common/http';
import { UserService} from './user.service';
import { RepoService} from './repo.service';
import { FormsModule }   from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    SearchFormComponent,
    HighlightDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [UserService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
