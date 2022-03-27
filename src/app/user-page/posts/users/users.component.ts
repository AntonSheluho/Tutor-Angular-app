import { HeroesService } from 'src/app/heroes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  public users: any;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getUsers()
    .subscribe(res => this.users = res);
  }

}
