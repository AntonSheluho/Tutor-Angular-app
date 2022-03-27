import { HeroesService } from 'src/app/heroes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  public posts: any

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getAvatars()
    .subscribe(res => this.posts = res);
  }

}
