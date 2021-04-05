import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  searchUrl: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.searchUrl = this.router.url.replace('/', '');
  }

}
