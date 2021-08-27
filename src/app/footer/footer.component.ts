import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TodaysGoalService } from '../services/todays-goal.service';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit, OnDestroy{

  versionString: string = '1.0.0';
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate Logo';
  isCurrent: boolean = true;
  goal: any;
  subscription: Subscription;

  moreInfo() {
    alert('For more information about the Food Plate, visit https://www.choosemyplate.gov/');
  }

  constructor(
    private todaysGoalService: TodaysGoalService
  ) { 
    this.subscription = this.todaysGoalService.getGoal()
      .subscribe(goal => {
        this.goal = goal;
      });
  }

  ngOnInit(): void {
  }

  clearGoal() {
    this.todaysGoalService.clearGoal();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
