import { Component, OnInit } from '@angular/core';
import{ProfileService} from '../services/profile.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
profile:any[];
  constructor(private profileService) {
    this.profileService.getProfileInfo().subscribe(profile =>{
      console.log(profile);
      this.profile = profile;
    });
  }

  ngOnInit() {
  }

}