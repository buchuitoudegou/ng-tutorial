import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../Hero';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1, 2));
  }
  ngOnInit() {
    this.getHeroes();
  }

}
