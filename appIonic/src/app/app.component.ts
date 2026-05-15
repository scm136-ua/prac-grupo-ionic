import { Component } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private toastController: ToastController,
    private platform: Platform
  ) {}


  async ngOnInit() {
    await this.platform.ready();

    await this.showWelcomeToast();
  }

  async showWelcomeToast() {

    const toast = await this.toastController.create({
      message: 'Welcome to the Star Wars Wiki App!', 
      duration: 3000, 
      position: 'middle', 
      color: 'primary', 
      
    });
    
    await toast.present();
  }
}
