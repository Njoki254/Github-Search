// Services are vital for accessing data from external sources
//Below are key modules needed for the service to serve its purpose
//imported user class so service could focus on responsibility rather than creating objects
//dependency injections relives responsibility of creating dependencies, they are created using services 
import { Injectable } from '@angular/core';
import { HttpClient }    from '@angular/common/http';
import { User } from './user';
import { environment } from 'src/environments/environment';
import { CoreEnvironment } from '@angular/compiler/src/compiler_facade_interface';
import { Resolve } from '@angular/router';

//decorator accepts metadata for the class, 'root' means its injectable in the whole application
@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: User;
  
  
  
 


  constructor(private http: HttpClient) {
    this.currentUser= new User("","","","","","",0,0,0,new Date)
    
   }

   searchUser(searchedUser:string) {
//interface is used to defined custom types in the searchUser function
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
     
   //use promises to access metadata from api external source
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