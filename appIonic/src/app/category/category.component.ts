import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Category } from '../models/category';
import { WikiService } from '../services/wiki.service';

@Component({
  selector: 'app-category',
  templateUrl: 'category.component.html',
  styleUrls: ['category.component.scss']
})
export class CategoryComponent {
  @Input() theCategory: Category = new Category();
  @Input() selected: boolean = false;
  @Output() clicked = new EventEmitter<string>();

  articles: any[] = [];

  constructor(private wikiService: WikiService) {}

  click() {
    this.clicked.emit(this.theCategory.name);
    if (!this.selected) {
      this.getArticles(this.theCategory.url);
    }
  }

  getArticles(category: string) {
    this.wikiService.getAllArticles(category).subscribe((data: any) => {
      this.articles = data.results;
    });
  }

  generateURL(cat: string, id: string): string {
    return "/tabs/wiki/article/" + cat + "/" + id;
  }
}
