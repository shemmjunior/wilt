import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: string;
  username: string;
  email: string;
  bio: string;
  profileData: any;

  constructor(private profileService: ProfileService, private route: ActivatedRoute) {
    this.profileData = this.route.snapshot.data.profileData;
  }

  ngOnInit(): void {
    this.username = this.profileData.username;
    this.bio = this.profileData.bio;
    this.email = this.profileData.email

  }

  updateProfile(): void {
    const data = {
      username: this.username,
      bio: this.bio
    };
    this.profileService.updateProfile(data).subscribe(() => {

    })
  }

}
