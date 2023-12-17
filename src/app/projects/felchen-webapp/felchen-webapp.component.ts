import {Component, OnInit} from '@angular/core';
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-felchen-webapp',
  templateUrl: './felchen-webapp.component.html',
  styleUrls: ['./felchen-webapp.component.css']
})
export class FelchenWebappComponent implements OnInit {

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
        src: './assets/images/felchenWebApp/catchDetail.jpg', thumb: './assets/images/felchenWebApp/catchDetail.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenWebApp/editCatch.jpg', thumb: './assets/images/felchenWebApp/editCatch.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenWebApp/forecast.jpg', thumb: './assets/images/felchenWebApp/forecast.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenWebApp/home.jpg', thumb: './assets/images/felchenWebApp/home.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenWebApp/login.jpg', thumb: './assets/images/felchenWebApp/login.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenWebApp/weather.jpg', thumb: './assets/images/felchenWebApp/weather.jpg'
      })
    ];
  }

  onProject(): void {
    window.open('https://felchen.tomasi-developing.ch', '_blank');
  }
}
