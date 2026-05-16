import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
      this.menuController.enable(true, 'principal');
    }
}
