import { RegistrationUsersService } from './../registration-users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public usersArr: any;
  public eyeSrcOpen: string = "http://localhost:4200/assets/eye-solid.svg";
  public eyeSrcClose: string = "http://localhost:4200/assets/eye-slash-solid.svg";

  constructor(
    private fb: FormBuilder, 
    private users: RegistrationUsersService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.usersArr = this.users.getUsers();
  }

  public form = this.fb.group({
    firstName: [''],
    lastName: [''],
    userName: [''],
    city: [''],
    password: [''],
    passRepeat: [''],
    agree: [false],
  }, Validators.required)

  onSubmit() {
    if(!this.checkUserName()){
      this.users.addUser(this.form.value);
      console.log(this.usersArr)
      this.router.navigate(['entrance']);
    } else {

    }
  }

  checkUserName() {
    let acc = false;
    for(let obj of this.usersArr) {
      if (obj.userName === this.form.value.userName) {
        acc = true;
        return acc
      }
    }
    return acc
  }

  changeEye(img: HTMLImageElement, input: HTMLInputElement) {
    if (img.src === this.eyeSrcOpen) {
      img.src = this.eyeSrcClose;
      input.type = 'text';
    } else {
      img.src = this.eyeSrcOpen;
      input.type = 'password';
    }
  }
}
