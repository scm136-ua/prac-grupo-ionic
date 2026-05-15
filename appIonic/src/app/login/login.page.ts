import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss']
})
export class LoginPage implements OnInit {
  formLogin: any;
  error: string = "";

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  doLogin() {
    const { email, password } = this.formLogin.value;
    const user = this.userService.login(email, password);
    if (user) {
      this.error = "";
      this.router.navigateByUrl('/tabs');
    } else {
      this.error = "Invalid email or password";
    }
  }

  clearError() {
    this.error = "";
  }
}
