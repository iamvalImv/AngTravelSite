import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.css']
})
export class AboutPageComponent implements OnInit {
  companyName!: string;
  foundingYear!: number;
  companyMail!: string;
  companyTelephone!: number;
  companyAddress!: string;
  companyCity!: string;
  companyZip!: number;
  companyCountry!: string;
  
  constructor() { 
    this.companyName="Nomad";
    this.foundingYear=2004;
    this.companyMail="ahaihsdghj@mainModule.com";
    this.companyTelephone=82873722;
    this.companyAddress="Westbahnhof";
    this.companyCity="Vienna";
    this.companyZip=2982;
    this.companyCountry="austria";
  }

  ngOnInit(): void {
  }

}
