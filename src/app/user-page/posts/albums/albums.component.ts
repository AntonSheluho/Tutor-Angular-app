import { HeroesService } from 'src/app/heroes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  public albums: any;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getAlbums()
    .subscribe(res => this.albums = res)
  }

}
