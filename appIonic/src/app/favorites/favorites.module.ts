import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FavoritesPage } from './favorites.page';
import { FavoritesPageRoutingModule } from './favorites-routing.module';
import {Storage } from '@ionic/storage-angular';
import { StorageService } from '../services/storage.service';


@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, FavoritesPageRoutingModule, StorageService],
  declarations: [FavoritesPage]
})
export class FavoritesPageModule {}
