import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  // private loader = new BehaviorSubject<boolean>(false);
  // public readonly loading$ = this.loader.asObservable();

  private headerArray = {
    header: {mark: false, array: []},
    footer: {mark: true, array: ['English', 'Russian']},
  }
  
  constructor(
    private http: HttpClient,
  ) {}

  // show() {
  //   this.loader.next(true)
  // }
  // hide() {
  //   this.loader.next(false)
  // }

  getAvatars() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }
  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
  }
  getTodos() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos')
  }
  getAlbums() {
    return this.http.get('https://jsonplaceholder.typicode.com/albums')
  }
  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getPhotos() {
    return this.http.get('https://jsonplaceholder.typicode.com/photos')
  }

  getHeaderArray() {
    return this.headerArray.header
  }
  getFooterArray() {
    return this.headerArray.footer
  }
}
