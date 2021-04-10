import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gamingfactory',
  templateUrl: './gamingfactory.component.html',
  styleUrls: ['./gamingfactory.component.css']
})
export class GamingfactoryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open('https://gamingfactory.ch/home', '_blank');
  }
}
