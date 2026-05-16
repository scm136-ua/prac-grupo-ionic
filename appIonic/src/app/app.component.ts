import { Component, OnInit } from '@angular/core';
import { ToastController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  readonly menuFile:string = "../assets/data/menu.json";
  menuOptions=[];

  constructor(
    private toastController: ToastController,
    private platform: Platform

  ) {}


  async ngOnInit() {
    await this.platform.ready();

    await this.showWelcomeToast();
  }

  getMenu() {
    fetch(this.menuFile).then(res=> res.json())
    .then(json=> {
      this.menuOptions = json;
      console.log(this.menuOptions);
    })
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
