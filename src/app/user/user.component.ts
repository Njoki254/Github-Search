import { Component, OnInit } from '@angular/core';
import { UserService} from '../user.service';
import { RepoService} from '../repo.service';
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

  constructor(private userService: UserService, public repoService: RepoService) { }

  getProfileInfo(searchedUser) {
    this.userService.searchUser(searchedUser).then(
      (success)=>{
        this.user= this.userService.currentUser;
      },

      (error)=>{
        console.log(error)
      }
    );
    
    } 
 

  ngOnInit() {
   //created instance of promise object that will be default, important it is in the lifehook
 this.getProfileInfo('Njoki254');

  }
  }