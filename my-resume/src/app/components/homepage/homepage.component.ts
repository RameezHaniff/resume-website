import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  panelOpenState = false;
  flashcardsOpenState = false;
  blogOpenState = false;
  commerceOpenState = false;
  highschoolOpenState = false;
  qualificationOpenState = false;




  constructor() { }

  ngOnInit(): void {
  }

}
