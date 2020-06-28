import { Component, OnInit } from '@angular/core';
import { RepoService} from '../repo.service';
import { UserService} from '../user.service';
import { User } from '../user';
import { Repo } from '../repo';

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  repo: Repo;

  constructor(public repoService: RepoService) { }
  
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
  ngOnInit(){
    this.searchRepo('Njoki254')

  }

}

