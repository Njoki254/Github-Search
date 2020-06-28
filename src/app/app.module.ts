import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//for modules and components to be availabe everywhere they need to be imported in the root module, and declared
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
import { TimePassedPipe } from './time-passed.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressHttpClientModule } from '@ngx-progressbar/http-client';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    RepoComponent,
    SearchFormComponent,
    HighlightDirective,
    TimePassedPipe,
    NavbarComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgProgressModule.forRoot(),
    NgProgressHttpClientModule
  ],
  providers: [UserService, RepoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
