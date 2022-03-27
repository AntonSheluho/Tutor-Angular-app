import { HeroesService } from 'src/app/heroes-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  public todos: any;

  constructor(private heroesService: HeroesService) { }

  ngOnInit(): void {
    this.heroesService.getTodos()
    .subscribe(res => this.todos = res);
  }

}
