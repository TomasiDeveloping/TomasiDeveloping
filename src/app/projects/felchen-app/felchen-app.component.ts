import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';




@Component({
  selector: 'app-felchen-app',
  templateUrl: './felchen-app.component.html',
  styleUrls: ['./felchen-app.component.css']
})
export class FelchenAppComponent implements OnInit {
  private albums: Array<any> = [];
  showDownload = false;

  constructor(private lightbox: Lightbox) {
  }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/felchenApp/statistikScreen.jpg',
        caption: 'Statistik Screen',
        thumb: './assets/images/felchenApp/statistikScreen.jpg'
      },
      {src: './assets/images/felchenApp/DetailScreen.jpg',
        caption: 'Detail Screen',
        thumb: './assets/images/felchenApp/DetailScreen.jpg'
      },
    {src: './assets/images/felchenApp/AddCatchScreen.jpg',
      caption: 'Fang hinzufügen',
      thumb: './assets/images/felchenApp/AddCatchScreen.jpg'
    },
      {src: './assets/images/felchenApp/WetterScreen.jpg',
        caption: 'Wetter Screen',
        thumb: './assets/images/felchenApp/WetterScreen.jpg'
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

  onPlayStore(): void {
    window.open('https://play.google.com/store/apps/details?id=ch.tomasi.felche', '_blank');
  }
}
