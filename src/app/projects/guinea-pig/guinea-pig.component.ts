import {Component, OnInit} from '@angular/core';
import {GalleryItem, GalleryConfig, ImageItem} from 'ng-gallery';
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-guinea-pig',
  templateUrl: './guinea-pig.component.html',
  styleUrls: ['./guinea-pig.component.css']
})
export class GuineaPigComponent implements OnInit {

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
        src: './assets/images/guineaPig/guineaPig1.jpg', thumb: './assets/images/guineaPig/guineaPig1.jpg'
      }),
      new ImageItem({
        src: './assets/images/guineaPig/guineaPig2.jpg', thumb: './assets/images/guineaPig/guineaPig2.jpg'
      }),
      new ImageItem({
        src: './assets/images/guineaPig/guineaPig3.jpg', thumb: './assets/images/guineaPig/guineaPig3.jpg'
      }),
      new ImageItem({
        src: './assets/images/guineaPig/guineaPig4.jpg', thumb: './assets/images/guineaPig/guineaPig4.jpg'
      }),
      new ImageItem({
        src: './assets/images/guineaPig/guineaPig5.jpg', thumb: './assets/images/guineaPig/guineaPig5.jpg'
      }),
      new ImageItem({
        src: './assets/images/guineaPig/guineaPig6.jpg', thumb: './assets/images/guineaPig/guineaPig6.jpg'
      })
    ];
  }

}
