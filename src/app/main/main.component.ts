import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/User';
import { Router } from '@angular/router'

@Component({
  selector: 'fp-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  router: Router;

  @Input() user: User;
  constructor(private _router: Router) {
    this.router = _router;
   }

  ngOnInit(): void {
  }

}
