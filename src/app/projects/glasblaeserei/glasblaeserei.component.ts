import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-glasblaeserei',
  templateUrl: './glasblaeserei.component.html',
  styleUrls: ['./glasblaeserei.component.css']
})
export class GlasblaesereiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open('https://glasblaeserei-egli.ch/Home', '_blank');
  }
}
