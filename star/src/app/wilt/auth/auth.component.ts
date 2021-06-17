import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './auth.service';
import { AuthService } from '@auth0/auth0-angular';
import { NbFlipCardComponent } from '@nebular/theme';
import { ToastService } from '../../services/toast.service';
import { LocalStorageService } from '../../services/localStorage.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  email: string;
  password: string;
  username: string;

  constructor(
    private router: Router,
    private authService: AuthService,
    private localAuth: AuthenticationService,
    private toast: ToastService,
    private localStorage: LocalStorageService
  ) { }

  ngOnInit(): void { }

  toggleCard($event: any, $cardComponent: NbFlipCardComponent): void {
    this.email = null;
    this.password = null;
    this.username = null;
    $cardComponent.toggle();
  }

  signup(): void {
    const data = {
      username: this.username,
      email: this.email,
      password: this.password,
    };

    this.localAuth.signup(data).subscribe(
      (res) => {
        this.toast.showSuccessToast(res.message)
        this.router.navigate(['home']);
      },
      (err) => {
        this.toast.showDangerToast(err.error.message)
      }
    );
  }

  login(): void {
    const data = {
      email: this.email,
      password: this.password,
    };
    // this.authService.loginWithRedirect()

    this.localAuth.login(data).subscribe(
      (res) => {
        this.localStorage.saveUserData(res);
        this.toast.showSuccessToast('Login Successfull')
        this.router.navigate(['home']);
      },
      (err) => {
        this.toast.showDangerToast(err.error.message)
      }
    );
  }
}
