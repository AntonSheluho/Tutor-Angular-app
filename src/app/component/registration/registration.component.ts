import { registrationAction } from './../store/actions/register.action';
import { RegistrationUsersService } from './../registration-users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  public form!: FormGroup;
  public usersArr: any;
  public eyeSrcOpen: string = "http://localhost:4200/assets/eye-solid.svg";
  public eyeSrcClose: string = "http://localhost:4200/assets/eye-slash-solid.svg";

  constructor(
    private fb: FormBuilder,
    private users: RegistrationUsersService,
    private store: Store,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.usersArr = this.users.getUsers();
    this.formBuild()
  }

  formBuild() {
    this.form = this.fb.group({
      firstName: [''],
      lastName: [''],
      userName: [''],
      city: [''],
      password: [''],
      passRepeat: [''],
      agree: [false],
    })
  }



  onSubmit() {
    this.store.dispatch(registrationAction(this.form.value))
    // this.router.navigate(['entrance']);
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
