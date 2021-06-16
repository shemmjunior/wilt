import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
// import { AuthService } from './auth.service';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  email: string;
  password: string;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  login(): void {
    const data = {
      email: this.email,
      password: this.password
    };
    // this.authService.loginWithRedirect()

    // this.authService.login(data).subscribe((res) => {
    //   console.log(res)
    // }, (err) => {
    //   console.log(err)
    // })

    // this.router.navigate(['home'])
  }

}
