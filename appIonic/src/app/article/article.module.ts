import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ArticlePage } from './article.page';
import { ArticlePageRoutingModule } from './article-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, ArticlePageRoutingModule],
  declarations: [ArticlePage]
})
export class ArticlePageModule {}
