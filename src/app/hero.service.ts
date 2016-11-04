  import { Injectable } from '@angular/core';
  import { Http } from '@angular/http';
  import { Hero } from './hero';
  import { HEROES } from './mock-heroes';
  @Injectable()
  export class HeroService {
    constructor(public http: Http) {}

    getHeroes() {
      return this.http.get('http://localhost:3000/heroes.json');
    }
    getHero(id: number){
      return this.http.get('http://localhost:3000/heroes/' + id + '.json');
    }
  }
