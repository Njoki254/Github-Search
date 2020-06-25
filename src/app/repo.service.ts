import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { Repo } from './repo';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepoService {
  
  repositories: Repo;


  constructor(private http: HttpClient) {
    this.repositories = new Repo ("","","","", 0, new Date);
   }

   getUserRepos(searchedUser: string){
    interface Repos{
      name:string;
      html_url:string;
      description:string;
      language:string;
      created_at:Date;
      forks: number;
    }
    return new Promise((resolve,reject)=>{
      this.http.get<Repos>('https://api.github.com/users/'+searchedUser+"/repos?order=created&sort=asc?access_token="+ environment.apiKey).toPromise().then(
        (results) => {
          this.repositories = results;
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }
}

