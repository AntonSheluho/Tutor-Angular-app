import { Component, OnInit } from '@angular/core';
import { HeroesService } from 'src/app/heroes-service.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  public posts: any

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getAvatars()
    .subscribe(res => this.posts = res);
  }

}
