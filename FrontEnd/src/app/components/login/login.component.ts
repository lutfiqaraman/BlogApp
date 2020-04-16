import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { User } from 'src/app/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: User = new User();
  errMsg = '';

  constructor(
    private authService: AuthService,
    private router: Router) {}

  ngOnInit(): void {}

  login() {
    this.errMsg = '';
    this.authService.login(this.user.name, this.user.password).subscribe(
      (result) => {
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('token', result.token);
        }

        this.router.navigate(['/dashboard']);
      },
      (error) => {
        this.errMsg = 'password or username is wrong';
      }
    );
  }
}
