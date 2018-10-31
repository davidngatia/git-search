import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../services/profile.service';
import {User} from '../user';
import { Profile } from 'selenium-webdriver/firefox';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {
 profile:User;
repos: any['public_repos'];

findProfile(){};

  constructor(private profileService:ProfileService) {
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });
    this.profileService.getProfileRepo().subscribe(repos =>{
      console.log(repos);
      this.profile = repos;
    })

  }

  ngOnInit() {
  }

}
