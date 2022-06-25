import { Component, OnInit } from '@angular/core';
import {Lightbox} from "ngx-lightbox";

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {

  private albums: Array<any> = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/expenseTracker/Home.png',
        caption: 'Startseite',
        thumb: './assets/images/expenseTracker/Home.png'
      },
      {src: './assets/images/expenseTracker/addExpense.png',
        caption: 'Ausgabe hinzufügen',
        thumb: './assets/images/expenseTracker/addExpense.png'
      },
      {src: './assets/images/expenseTracker/expenses.png',
        caption: 'Ausgaben übersicht',
        thumb: './assets/images/expenseTracker/expenses.png'
      },
      {src: './assets/images/expenseTracker/categories.png',
        caption: 'Kategorien',
        thumb: './assets/images/expenseTracker/categories.png'
      },
      {src: './assets/images/expenseTracker/statistics.png',
        caption: 'Statistik',
        thumb: './assets/images/expenseTracker/statistics.png'
      },
      {src: './assets/images/expenseTracker/excel.png',
        caption: 'Monats Excel',
        thumb: './assets/images/expenseTracker/excel.png'
      },
      {src: './assets/images/expenseTracker/settings.png',
        caption: 'Einstellungen',
        thumb: './assets/images/expenseTracker/settings.png'
      }
    );
  }

  open(index: number): void {
    // open lightbox
    this.lightbox.open(this.albums, index);
  }

  close(): void {
    // close lightbox programmatically
    this.lightbox.close();
  }

  onDemoClick() {
    window.open('https://kostenmanager.tomasi-developing.ch/home', '_blank');
  }
}
