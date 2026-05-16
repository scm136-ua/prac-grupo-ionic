import { Component, OnInit } from '@angular/core';
import { Category } from '../models/category';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-wiki',
  templateUrl: 'wiki.page.html',
  styleUrls: ['wiki.page.scss']
})
export class WikiPage implements OnInit {
  categories: Category[] = [];
  selectedCategory: string = "";

  constructor(private menuController: MenuController) {}

  ngOnInit() {
    fetch('assets/data/categories.json')
      .then(res => res.json())
      .then((data: Category[]) => {
        this.categories = data;
      });
  }

  selectCategory(name: string) {
    this.selectedCategory = this.selectedCategory === name ? "" : name;
  }

  ionViewWillEnter() {
      this.menuController.enable(true, 'principal');
    }
}
