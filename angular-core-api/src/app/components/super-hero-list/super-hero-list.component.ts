import { Component } from '@angular/core';
import { SuperHero } from 'src/app/interfaces/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero-service';

@Component({
  selector: 'app-super-hero-list',
  templateUrl: './super-hero-list.component.html',
  styleUrls: ['./super-hero-list.component.less']
})
export class SuperHeroListComponent {
  superHeroes: SuperHero[] = [];
  heroToEdit!: SuperHero;

  constructor(private heroService: SuperHeroService) { }

  ngOnInit() {
    this.heroService
      .getSuperHeroes()
      .subscribe(result => this.superHeroes = result);
  }

  editHero(hero: SuperHero) {
    this.heroToEdit = hero;
  }

  // initNewHero() {  }


}
