import { Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/User';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(1, '', '', '','', {}, {fruitMet: false, vegMet: false, proteinMet: false, grainMet: false}, false, '');
  currentUser = new BehaviorSubject<User>(this.user);

  constructor(
    @Optional() private userStatusService: UserStatusService
  ) {
    this.userStatusService.getUserStatus(this.user);
   }

  getUser(): User {
    if(localStorage.getItem('currentUser')) {
      const user = JSON.parse(localStorage.getItem('currentUser'));
      this.currentUser = new BehaviorSubject(user);
      return user;
    } else {
      this.user.reqsStatus.fruitMet = true;
      this.user.reqsStatus.proteinMet = true;
      return this.user;
    }  
  }

  updateUser(user: User) {
    user.id = 1;
    user.registered = true;
    user.reqsStatus = {fruitMet: true, vegMet: false, proteinMet: true, grainMet: false};
    this.currentUser.next(user);
  }

  static storeUserLocal(user) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }
}
