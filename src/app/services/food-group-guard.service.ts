import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { User } from '../models/User';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class FoodGroupGuardService implements CanActivateChild{

  currentUser: User;
  currentRoute;
  group;

  constructor(
    private userService: UserService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.currentRoute = route;
   }

   getRoute(group, metValue): boolean {
    if(metValue === true){
      alert(`You have eaten all your ${group} for the day!`);
      return false;
    } else { 
      return true;
    }
   }

   canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    console.log(route);
    console.log(route.queryParams);
    console.log(state.url);
    this.group = route.queryParams.group;
    this.currentUser = this.userService.getUser();
    const valueMet = this.group + 'Met';
    console.log(valueMet);
    return this.getRoute(this.group, this.currentUser.reqsStatus[valueMet]);
   }
}
