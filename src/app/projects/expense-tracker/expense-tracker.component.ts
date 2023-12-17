import {Component, OnInit} from '@angular/core';
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-expense-tracker',
  templateUrl: './expense-tracker.component.html',
  styleUrls: ['./expense-tracker.component.css']
})
export class ExpenseTrackerComponent implements OnInit {

  images: GalleryItem[];
  galleryConfig$: Observable<GalleryConfig>;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.galleryConfig$ = this.breakpointObserver.observe([
      Breakpoints.HandsetPortrait
    ]).pipe(
      map(res => {
        if (res.matches) {
          return {
            thumbPosition: 'top',
            thumbWidth: 80,
            thumbHeight: 80
          };
        }
        return {
          thumbPosition: 'left',
          thumbWidth: 120,
          thumbHeight: 90
        };
      })
    );
  }

  ngOnInit(): void {
    this.images = [
      new ImageItem({
        src: './assets/images/expenseTracker/addExpense.jpg', thumb: './assets/images/expenseTracker/addExpense.jpg'
      }),
      new ImageItem({
        src: './assets/images/expenseTracker/categories.jpg', thumb: './assets/images/expenseTracker/categories.jpg'
      }),
      new ImageItem({
        src: './assets/images/expenseTracker/excel.jpg', thumb: './assets/images/expenseTracker/excel.jpg'
      }),
      new ImageItem({
        src: './assets/images/expenseTracker/expenses.jpg', thumb: './assets/images/expenseTracker/expenses.jpg'
      }),
      new ImageItem({
        src: './assets/images/expenseTracker/home.jpg', thumb: './assets/images/expenseTracker/home.jpg'
      }),
      new ImageItem({
        src: './assets/images/expenseTracker/settings.jpg', thumb: './assets/images/expenseTracker/settings.jpg'
      }),
      new ImageItem({
        src: './assets/images/expenseTracker/statistics.jpg', thumb: './assets/images/expenseTracker/statistics.jpg'
      })
    ];
  }

  onDemoClick() {
    window.open('https://kostenmanager.tomasi-developing.ch/home', '_blank');
  }
}
