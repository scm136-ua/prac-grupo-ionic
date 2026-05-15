import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WikiPage } from './wiki.page';
import { WikiPageRoutingModule } from './wiki-routing.module';
import { CategoryComponent } from '../category/category.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, WikiPageRoutingModule],
  declarations: [WikiPage, CategoryComponent]
})
export class WikiPageModule {}
