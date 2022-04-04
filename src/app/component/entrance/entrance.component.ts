import { RegistrationUsersService } from './../registration-users.service';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-entrance',
  templateUrl: './entrance.component.html',
  styleUrls: ['./entrance.component.css']
})
export class EntranceComponent implements OnInit {
  public checkUser: any;

  constructor(
    public router: Router,
    private fb: FormBuilder,
    private users: RegistrationUsersService
  ) { }

  ngOnInit(): void {
    this.checkUser = this.users.getUsers();
  }

  public userDataForEntrance = this.fb.group({
    email: [''],
    pass: [''],
  })

  redirectToEnt() {
    this.checkUser.forEach((obj: any) => {
      if (this.userDataForEntrance.value.email === obj.userName) {
        this.router.navigate(['mainPage'])

      }
    })
    console.log()
  }
  redirectToReg() {
    this.router.navigate(['registration'])
  }

}
