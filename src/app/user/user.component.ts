import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: User;
  repo: Repo;

  constructor() { }

  ngOnInit(): void {
  }

}
