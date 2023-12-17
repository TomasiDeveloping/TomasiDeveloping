import {Component, OnInit} from '@angular/core';
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";


@Component({
  selector: 'app-felchen-app',
  templateUrl: './felchen-app.component.html',
  styleUrls: ['./felchen-app.component.css']
})
export class FelchenAppComponent implements OnInit {
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
        src: './assets/images/felchenApp/AddCatchScreen.jpg', thumb: './assets/images/felchenApp/AddCatchScreen.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenApp/DetailScreen.jpg', thumb: './assets/images/felchenApp/DetailScreen.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenApp/icon.jpg', thumb: './assets/images/felchenApp/icon.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenApp/statistikScreen.jpg', thumb: './assets/images/felchenApp/statistikScreen.jpg'
      }),
      new ImageItem({
        src: './assets/images/felchenApp/WetterScreen.jpg', thumb: './assets/images/felchenApp/WetterScreen.jpg'
      })
    ];
  }
}
