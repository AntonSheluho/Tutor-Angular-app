import { HeroesService } from 'src/app/heroes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  public comments: any;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getComments()
    .subscribe(res => this.comments = res);
  }

}
