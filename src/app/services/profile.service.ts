import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private username:string;
  private clientid = 'c3d3032109cc7912ec0b';
  private clientsecret = '27884b5903cbb296e8206cc6775d618a0448bea9';

  constructor(private http:Http) { 
    console.log("service is now ready!");
    this.username= 'davidngatia';
  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid+ "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json()));
  }
  getProfileRepo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid+ "&client_secret=" + this.clientsecret)
    .pipe(map(res => res.json())); 

  }
  }

