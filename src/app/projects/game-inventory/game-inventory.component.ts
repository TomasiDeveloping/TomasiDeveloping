import {Component, OnInit} from '@angular/core';
import {GalleryConfig, GalleryItem, ImageItem} from "ng-gallery";
import {map, Observable} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";

@Component({
  selector: 'app-game-inventory',
  templateUrl: './game-inventory.component.html',
  styleUrls: ['./game-inventory.component.css']
})
export class GameInventoryComponent implements OnInit {
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
        src: './assets/images/gameInventory/Games1.jpg', thumb: './assets/images/gameInventory/Games1.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games2.jpg', thumb: './assets/images/gameInventory/Games2.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games3.jpg', thumb: './assets/images/gameInventory/Games3.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games4.jpg', thumb: './assets/images/gameInventory/Games4.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games5.jpg', thumb: './assets/images/gameInventory/Games5.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games6.jpg', thumb: './assets/images/gameInventory/Games6.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games7.jpg', thumb: './assets/images/gameInventory/Games7.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games8.jpg', thumb: './assets/images/gameInventory/Games8.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games9.jpg', thumb: './assets/images/gameInventory/Games9.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Games10.jpg', thumb: './assets/images/gameInventory/Games10.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Genre.jpg', thumb: './assets/images/gameInventory/Genre.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Konsole1.jpg', thumb: './assets/images/gameInventory/Konsole1.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Konsole2.jpg', thumb: './assets/images/gameInventory/Konsole2.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Publisher.jpg', thumb: './assets/images/gameInventory/Publisher.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Publisher2.jpg', thumb: './assets/images/gameInventory/Publisher2.jpg'
      }),
      new ImageItem({
        src: './assets/images/gameInventory/Settings.jpg', thumb: './assets/images/gameInventory/Settings.jpg'
      })
    ];
  }

}
