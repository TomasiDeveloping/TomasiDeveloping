import {Component, OnInit} from '@angular/core';
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-daetwiller-pond',
  standalone: false,
  templateUrl: './daettwiler-pond.component.html',
  styleUrl: './daettwiler-pond.component.css'
})
export class DaettwilerPond implements OnInit {

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

  ngOnInit() {
    this.images = [
      new ImageItem({
        src: './assets/images/daettwilerPond/weiher1.jpg', thumb: './assets/images/daettwilerPond/weiher1.jpg'
      }),
      new ImageItem({
        src: './assets/images/daettwilerPond/weiher2.jpg', thumb: './assets/images/daettwilerPond/weiher2.jpg'
      }),
      new ImageItem({
        src: './assets/images/daettwilerPond/weiher3.jpg', thumb: './assets/images/daettwilerPond/weiher3.jpg'
      })
    ];
  }
}
