import { Injectable } from '@angular/core';
import { SuperHero } from '../interfaces/super-hero';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {
  superHeroes: SuperHero[] = [];

  constructor() { }

  getSuperHeroes = (): Observable<SuperHero[]> =>
    of(
      this.superHeroes =
      [
        {
          id: 1,
          name: 'Batman',
          firstName: 'Bruce',
          lastName: 'Wayne',
          place: 'Gotham City'
        },
        {
          id: 2,
          name: 'Superman',
          firstName: 'David',
          lastName: 'Jones',
          place: 'Crypto city'
        }
      ]
    );

}