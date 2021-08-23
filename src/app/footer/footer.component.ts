import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fp-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  versionString: string = '1.0.0';
  icon: string = 'assets/images/icons/icons-29.png';
  logoAlt: string = 'FoodPlate Logo';
  isCurrent: boolean = true;

  moreInfo() {
    alert('For more information about the Food Plate, visit https://www.choosemyplate.gov/');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
