import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Resolve } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  
  
  
 


  constructor(private http: HttpClient) {
    this.currentUser= new User("","","","","","",0,0,0,new Date)
    
   }

   searchUser(searchedUser:string) {

    interface UserApiResponse {
      login: "";
      name: "";
      bio: "";
      url: "";
      avatar_url: "";
      email: "";
      public_repos: number;
      following: number
      followers: number;
      created_at: Date;
    }
     
   
    return new Promise(((resolve, reject) => {
      this.http.get<UserApiResponse>('https://api.github.com/users/' + searchedUser + '?access_token=' + environment.apiKey).toPromise().then(
        (result) => {
          this.currentUser = result;
          resolve();
        },
        error => {
          console.log(this.currentUser);

      reject(error);
    });
    }));
  }
}