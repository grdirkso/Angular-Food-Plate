import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Goals } from '../models/goals';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {

  goalsUrl = 'http://localhost:3006/goals';
  errorMessage: string;

  constructor(
    private http: HttpClient
  ) { }

  jsonContentTypeHeaders = {
    headers: new HttpHeaders().set('Content-Type', 'application/json')
  }

  getGoals(): Observable<Goals>{
    const results: Observable<Goals> = this.http.get<Goals>(this.goalsUrl);
    return results;
  }

  getGoalById(goalId: string): Observable<Goals>{
    const result: Observable<Goals> = this.http.get<Goals>(`${this.goalsUrl}/${goalId}`)
    return result;
  }

  addGoal(goal: Goals): Observable<Goals> {
    const result: Observable<Goals> = this.http.post<Goals>(this.goalsUrl, goal, this.jsonContentTypeHeaders);
    return result;
  }

  updateGoal(goal: Goals): Observable<Goals> {
    const result: Observable<Goals> = this.http.put<Goals>(`${this.goalsUrl}/${goal.id}`, goal, this.jsonContentTypeHeaders);
    return result;
  }

  deleteGoalById(goalId: string): Observable<Goals> {
    const result: Observable<Goals> = this.http.delete<Goals>(`${this.goalsUrl}/${goalId}`);
    return result;
  }

}
