import { Component, OnInit } from '@angular/core';
import { vacationPackages } from '../vacation-packages';

@Component({
  selector: 'app-travels',
  templateUrl: './travels.component.html',
  styleUrls: ['./travels.component.css']
})
export class TravelsComponent implements OnInit {
  vacationPackage= vacationPackages //declaring the variable vacation packagesS
  constructor() { }

  ngOnInit(): void {
  }

}
