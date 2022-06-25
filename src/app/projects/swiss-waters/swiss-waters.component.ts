import { Component, OnInit } from '@angular/core';
import {Lightbox} from "ngx-lightbox";

@Component({
  selector: 'app-swiss-waters',
  templateUrl: './swiss-waters.component.html',
  styleUrls: ['./swiss-waters.component.css']
})
export class SwissWatersComponent implements OnInit {

  private albums: Array<any> = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/swissWaters/Home.png',
        caption: 'Startseite',
        thumb: './assets/images/swissWaters/Home.png'
      },
      {src: './assets/images/swissWaters/Station.png',
        caption: 'Station',
        thumb: './assets/images/swissWaters/Station.png'
      },
      {src: './assets/images/swissWaters/Detail.png',
        caption: 'Sation Detail Ansicht',
        thumb: './assets/images/swissWaters/Detail.png'
      },
      {src: './assets/images/swissWaters/SwissWatersAPI.png',
        caption: 'API',
        thumb: './assets/images/swissWaters/SwissWatersAPI.png'
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

  onGoToWebsite() {
    window.open('https://wassertemperaturen.tomasi-developing.ch/home', '_blank');
  }
}
