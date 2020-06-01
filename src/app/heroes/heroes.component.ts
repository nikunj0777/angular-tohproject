import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES} from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
heroes = HEROES;
 selectedHero: Hero;


  constructor() { }

  ngOnInit() {
  }

  // assigns the clicked hero from the hero list
 onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}