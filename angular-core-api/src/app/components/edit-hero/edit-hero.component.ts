import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SuperHero } from 'src/app/interfaces/super-hero';
import { SuperHeroService } from 'src/app/services/super-hero-service';

@Component({
  selector: 'app-edit-hero',
  templateUrl: './edit-hero.component.html',
  styleUrls: ['./edit-hero.component.less']
})
export class EditHeroComponent {
  @Input() hero!: SuperHero;
  @Output() heroesUpdate = new EventEmitter<SuperHero[]>();

  constructor(private service: SuperHeroService) { }

  editHero = (hero: SuperHero) =>
    this.service
      .updateSuperHero(hero)
      .subscribe();

  deleteHero = (hero: SuperHero) =>
    this.service
      .deleteSuperHero(hero)
      .subscribe(heroes => this.heroesUpdate.emit(heroes));

  createHero = (hero: SuperHero) =>
    this.service
      .addSuperHero(hero)
      .subscribe(heroes => this.heroesUpdate.emit(heroes));
}
