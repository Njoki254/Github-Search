import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { UserComponent } from '../user/user.component';
import { RepoComponent } from '../repo/repo.component';
import { SearchFormComponent } from '../search-form/search-form.component';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
