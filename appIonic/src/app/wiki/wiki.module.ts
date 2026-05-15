import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WikiPage } from './wiki.page';
import { WikiPageRoutingModule } from './wiki-routing.module';
import { ToastComponent } from '../toast.component';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, WikiPageRoutingModule],
  declarations: [WikiPage, ToastComponent]
})
export class WikiPageModule {}
