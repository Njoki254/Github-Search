// Services are vital for accessing data from external sources
//Below are key modules needed for the service to serve its purpose
//imported user class so service could focus on responsibility rather than creating objects
//dependency injections relives responsibility of creating dependencies, they are created using services 
import { Injectable } from '@angular/core';
//import httpclient, to enable communication to remote servers and backend services
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
  
  
  
 
//need to inject a property http in constructor for request to work

  constructor(private http: HttpClient) {
    this.currentUser= new User("","","","","","",0,0,0,new Date)
    
   }

   searchUser(searchedUser:string) {
//interface is used to defined apiResponse interface that will be received in the searchUser function
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
   //api url is needed to make request to api with the function
   //used enviroment file to hide api url
   //promises represent completion or failure of asynchronous processes
   //new creates instance of promise, resolve and reject are functions in themselves passed as arguments
    return new Promise(((resolve, reject) => {
      this.http.get<UserApiResponse>('https://api.github.com/users/' + searchedUser + '?access_token=' + environment.apiKey).toPromise().then(
        (result) => {
          this.currentUser = result;
          resolve();
        },
        //what is called in the event of an error
        error => {
          console.log(this.currentUser);

      reject(error);
    });
    }));
  }
}