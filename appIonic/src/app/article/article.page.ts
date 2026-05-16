import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WikiService } from '../services/wiki.service';
import { People } from '../models/people';
import { Planet } from '../models/planet';
import { Species } from '../models/species';
import { Starship } from '../models/starship';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-article',
  templateUrl: 'article.page.html',
  styleUrls: ['article.page.scss']
})
export class ArticlePage implements OnInit {
  title: string = "";
  id: string = "";
  category: string = "";

  people: People = new People();
  planet: Planet = new Planet();
  species: Species = new Species();
  starship: Starship = new Starship();

  constructor(private route: ActivatedRoute, private srv: WikiService, private storageSrv: StorageService) {}

  public isFavorite: boolean = false;
  private favorites:any[] = [];

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.category = params.get('cat') || '';
      this.id = params.get('id') || '';

      this.srv.getArticle(this.category, this.id).subscribe((result: any) => {
        const props = result.result.properties;
        switch (this.category) {
          case 'People':
            this.people = props;
            break;
          case 'Planets':
            this.planet = props;
            break;
          case 'Species':
            this.species = props;
            break;
          case 'Starships':
            this.starship = props;
            break;
        }
        this.title = props.name;
      });
    });
  }
}
