import {Component, OnInit} from '@angular/core';
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, Observable} from "rxjs";
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";

@Component({
  selector: 'app-swiss-waters',
  templateUrl: './swiss-waters.component.html',
  styleUrls: ['./swiss-waters.component.css']
})
export class SwissWatersComponent implements OnInit {

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
        src: './assets/images/swissWaters/Detail.jpg', thumb: './assets/images/swissWaters/Detail.jpg'
      }),
      new ImageItem({
        src: './assets/images/swissWaters/Home.jpg', thumb: './assets/images/swissWaters/Home.jpg'
      }),
      new ImageItem({
        src: './assets/images/swissWaters/Station.jpg', thumb: './assets/images/swissWaters/Station.jpg'
      }),
      new ImageItem({
        src: './assets/images/swissWaters/SwissWatersAPI.jpg', thumb: './assets/images/swissWaters/SwissWatersAPI.jpg'
      })
    ];
  }


  onGoToWebsite() {
    window.open('https://wassertemperaturen.tomasi-developing.ch/home', '_blank');
  }
}
