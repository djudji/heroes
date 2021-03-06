import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ],
  providers: [HeroService]
})

export class DashboardComponent implements OnInit{
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService){

  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(response => this.heroes = response.json());
  }

  gotoDetail(hero: Hero): void {
    let link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}