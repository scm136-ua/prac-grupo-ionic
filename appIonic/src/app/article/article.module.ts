import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlePage } from './article.page';
import { ArticlePageRoutingModule } from './article-routing.module';
import { StorageService } from '../services/storage.service';
import {Storage } from '@ionic/storage-angular';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ArticlePageRoutingModule],
  declarations: [ArticlePage]
})
export class ArticlePageModule {}
