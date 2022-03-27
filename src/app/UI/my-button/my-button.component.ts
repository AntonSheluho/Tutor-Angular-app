import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-button',
  templateUrl: './my-button.component.html',
  styleUrls: ['./my-button.component.css']
})
export class MyButtonComponent implements OnInit {

  @Input() color: string = '';
  @Input() type: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeClass() {
    return {
      'primary': this.color === 'primary',
      'success': this.color === 'success',
    }
  }

}
