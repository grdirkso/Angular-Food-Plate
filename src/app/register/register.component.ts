import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  currentUser: User;
  ageGroups = ['select your age group', '2-3', '4-8', '9-13', '14-18', '19-30', '31-50', '51+'];
  regForm: FormGroup;
  submit: boolean;

  constructor(
    private userService: UserService,
    private fb: FormBuilder,
    private router: Router
  ) { 
    this.regForm = fb.group ({
      'firstName' : [null, [Validators.required]],
      'email' : [null, [Validators.compose([Validators.required, Validators.email])]],
      'gender' : [null, [Validators.required]],
      'ageGroup' : [null, [Validators.required]]
    }, {updateOn: 'blur'} )
  }

  ngOnInit(): void {
    this.userService.currentUser.subscribe(user => this.currentUser = user);
    this.regForm.valueChanges.subscribe(value => console.log(value));
  }

  onSubmit(formValues) {
    this.submit = true;
    this.userService.updateUser(formValues);
    UserService.storeUserLocal(formValues);
    this.router.navigate(['myplate']);
  }

  canDeactivate(): boolean {
    return this.regForm.touched || this.submit;
  }
}
