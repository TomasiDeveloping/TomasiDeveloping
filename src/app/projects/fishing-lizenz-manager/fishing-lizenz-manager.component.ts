import {Component, OnInit} from '@angular/core';
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-fishing-lizenz-manager',
  templateUrl: './fishing-lizenz-manager.component.html',
  styleUrls: ['./fishing-lizenz-manager.component.css']
})
export class FishingLizenzManagerComponent implements OnInit {

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
        src: './assets/images/lizenzManager/adminstatPNG.jpg', thumb: './assets/images/lizenzManager/adminstatPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/aufseherstPNG.jpg', thumb: './assets/images/lizenzManager/aufseherstPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/homePNG.jpg', thumb: './assets/images/lizenzManager/homePNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/jahresPNG.jpg', thumb: './assets/images/lizenzManager/jahresPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/kartePNG.jpg', thumb: './assets/images/lizenzManager/kartePNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/KontaktPNG.jpg', thumb: './assets/images/lizenzManager/KontaktPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/lizPNG.jpg', thumb: './assets/images/lizenzManager/lizPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/neuPNG.jpg', thumb: './assets/images/lizenzManager/neuPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/regelPNG.jpg', thumb: './assets/images/lizenzManager/regelPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/schonzeitPNG.jpg', thumb: './assets/images/lizenzManager/schonzeitPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/useraufseherPNG.jpg',
        thumb: './assets/images/lizenzManager/useraufseherPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/userPNG.jpg', thumb: './assets/images/lizenzManager/userPNG.jpg'
      }),
      new ImageItem({
        src: './assets/images/lizenzManager/userStatPNG.jpg', thumb: './assets/images/lizenzManager/userStatPNG.jpg'
      })
    ];
  }


  onDemoClick(): void {
    window.open('https://fischerlizenzmanager.tomasi-developing.ch/home', '_blank');
  }
}
