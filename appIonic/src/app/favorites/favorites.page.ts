import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {
  constructor(private menuController: MenuController) {}

  ionViewWillEnter() {
      this.menuController.enable(true, 'principal');
  }

  
}
