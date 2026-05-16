import { Component } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-favorites',
  templateUrl: 'favorites.page.html',
  styleUrls: ['favorites.page.scss']
})
export class FavoritesPage {
  constructor(private menuController: MenuController, private storageSrv: StorageService) {}

  public favorites: any[] = [];

  ngOnInit() {
    this.storageSrv.get('favorites').then(data => {
      this.favorites = data??[];
    });
  }

  generateURL(cat: string, id: string) {
    return "/tabs/wiki/article/" + cat + "/" + id;
  }


  ionViewWillEnter() {
      this.menuController.enable(true, 'principal');
  }

  
}
