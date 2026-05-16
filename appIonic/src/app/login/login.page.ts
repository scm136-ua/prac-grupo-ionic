import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { MenuController } from '@ionic/angular';

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
    private userService: UserService,
    private toastCtrl: ToastController,
    private menuController: MenuController
  ) {}

  ngOnInit() {
    this.formLogin = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  async doLogin() {
    const { email, password } = this.formLogin.value;
    const user = this.userService.login(email, password);
    if (user) {
      this.error = "";
      const toast = await this.toastCtrl.create({
        message: 'Welcome to the Star Wars Wiki App!',
        duration: 3000,
        position: 'bottom',
        color: 'primary'
      });
      await toast.present();
      this.router.navigateByUrl('/tabs');
    } else {
      this.error = "Invalid email or password";
    }
  }

  clearError() {
    this.error = "";
  }

  ionViewWillEnter() {
      this.menuController.enable(false, 'principal');
    }
}
