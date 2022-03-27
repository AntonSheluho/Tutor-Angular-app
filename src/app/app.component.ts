import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // loading$ = this.heroesService.loading$
  title = 'heroes-tutor';
  public headerArr: any;
  public footerArr: any;

  constructor(
    private heroesService: HeroesService,
  ) {}

  ngOnInit(): void {
    this.headerArr = this.heroesService.getHeaderArray();
    this.footerArr = this.heroesService.getFooterArray();
  }
}
