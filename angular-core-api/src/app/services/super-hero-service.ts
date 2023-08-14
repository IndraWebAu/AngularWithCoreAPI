//import { Injectable } from '@angular/core';
import { SuperHero } from '../interfaces/super-hero';
import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';




@Injectable({
  providedIn: 'root'
})
export class SuperHeroService {

  superHeroes: SuperHero[] = [];
  private url = ` ${environment.apiUrl}/SuperHero`;

  constructor(private http: HttpClient) { }

  getSuperHeroes = (): Observable<SuperHero[]> =>
    this.http
      .get<SuperHero[]>(this.url);

  // addSuperHero = (hero: SuperHero): Observable<SuperHero[]> =>
  //   this.http
  //     .post<SuperHero[]>(this.url, hero);

  updateSuperHero = (hero: SuperHero): Observable<SuperHero[]> =>
    this.http
      .put<SuperHero[]>(this.url, hero);

  // deleteSuperHero(id: number): Observable<SuperHero[]> {
  //   const url = `${this.url}/${id}`;
  //   return this.http
  //     .delete<SuperHero[]>(url);
  //}
}


