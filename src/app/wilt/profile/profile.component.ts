import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  id: string;
  username: string;
  bio: string;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
  }

  updateProfile(): void {
    const data = {
      username: this.username,
      bio: this.bio
    }
    // this.profileService.updateProfile(id, data).subscribe((res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log(err)
    // })
  }

}
