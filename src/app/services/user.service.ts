import { Injectable, Optional } from '@angular/core';
import { User } from '../models/User';
import { UserStatusService } from './user-status.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user: User = new User(1, 'Kevin', 'M', '51+','M51+', {}, {fruitMet: false, vegMet: true, proteinMet: false, grainMet: false}, false, 'kevin@kevinruse.com');
  constructor(
    @Optional() private userStatusService: UserStatusService
  ) {
    this.userStatusService.getUserStatus(this.user);
   }

  getUser(): User {
    return this.user;
  }
}
