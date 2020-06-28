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
    searchRepo(searchedUser){
      this.repoService.getUserRepos(searchedUser).then(
        (result)=>{
          this.repo = this.repoService.repositories
          console.log(this.repo)
        }
      );
      this.repo = this.repoService.repositories;
      console.log(this.repo);
    }
    
  resetSearch() {
   
  }

  ngOnInit() {
   
 this.getProfileInfo('Njoki254');

  }
  }