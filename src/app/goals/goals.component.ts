import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Goals } from '../models/goals';
import { GoalsService } from '../services/goals.service';

@Component({
  selector: 'fp-goals',
  templateUrl: './goals.component.html',
  styleUrls: ['./goals.component.css']
})
export class GoalsComponent implements OnInit {

  goalForm: FormGroup;
  allGoals;
  goal: Goals;
  errorMessage: string;
  isLoading: boolean;
  newGoalForm: boolean = false;

  constructor(
    private fb: FormBuilder,
    private goalsService: GoalsService
  ) { 
    this.createForm();

  }

  ngOnInit(): void {
    this.goalsService.getGoals().subscribe((res:any) => {
      this.allGoals = res;
      this.isLoading = false;
    });
  }


  createForm() {
    this.goalForm = this.fb.group ({
      id: [''],
      goalTitle: ['', Validators.required],
      deadline: ['', Validators.required],
      didIt: ['']
    })
  }

  showEditGoalForm(goal: Goals): void {
    this.newGoalForm = true;
    this.getGoal(goal.id);
    this.showGoalAddEditForm(true);
  }

  showAddGoalForm() {
    this.showGoalAddEditForm(true);
    this.resetGoalForm();
  }

  showGoalAddEditForm(showForm: boolean) {
    this.newGoalForm = showForm;
  }

  toggleGoalComplete(goal: Goals) {
    goal.didIt = !goal.didIt;
  }

  resetGoalForm() {
    this.goalForm.reset();
  }

  getGoal(id) {
    this.goalsService.getGoalById(id).subscribe(goal => 
      this.goalRetrieved(goal),
      error => console.log(error)
    );
  }

  deleteGoal(goal) {
    this.goalsService.deleteGoalById(goal.id).subscribe(goal => this.goalsService.getGoals());
  }

  deleteCompleted() {
    const completedGoals = this.allGoals
      .filter(goals => goals.didIt === true)
        .map(goal => this.deleteGoal(goal));
  }

  insertGoal(goal: Goals) {
    this.goalsService.addGoal(goal).subscribe(goal => {
      this.goalsService.getGoals(),
      (error) => console.log(error)
    });
  }

  updateGoal(goal: Goals) {
    this.goalsService.updateGoal(goal).subscribe(goal => this.goalsService.getGoals());
  }

  goalRetrieved(goal) {
    this.goal = goal;
    this.goalForm.setValue({
      id: this.goal.id,
      goalTitle: this.goal.goalTitle,
      deadline: this.goal.deadline,
      didIt: this.goal.didIt
    });
  }

  toggleAccomplished() {
    console.log(`toggleAccomplished called`);
    this.goalForm.patchValue({didIt: true});
  }

  submitGoal(goal) {
    if(this.goalForm.invalid){
      console.log('invalid form');
      return;
    } 
    this.showGoalAddEditForm(false);

    if(goal.id === null || goal.id < 1) {
      this.insertGoal(goal);
    } else {
      this.updateGoal(goal);
    }
  }
}
