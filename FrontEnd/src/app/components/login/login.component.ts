import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  login() {
    this.authService.login('username', 'password').subscribe(
      (result) => {
        console.log(result);
      },
      (error) => {
        console.log(error);
        console.log('password or username is wrong');
      }
    );
  }
}
