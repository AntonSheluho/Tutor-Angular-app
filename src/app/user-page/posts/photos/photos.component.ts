import { HeroesService } from 'src/app/heroes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  public photos: any;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getPhotos()
    .subscribe(res => this.photos = res);
  }

}
