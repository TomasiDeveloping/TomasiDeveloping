import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-felchen-webapp',
  templateUrl: './felchen-webapp.component.html',
  styleUrls: ['./felchen-webapp.component.css']
})
export class FelchenWebappComponent implements OnInit {

  private albums: Array<any> = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/felchenWebApp/login.jpg',
        caption: 'Login',
        thumb: './assets/images/felchenWebApp/login.jpg'
      },
      {src: './assets/images/felchenWebApp/home.jpg',
        caption: 'Home',
        thumb: './assets/images/felchenWebApp/home.jpg'
      },
      {src: './assets/images/felchenWebApp/catchDetail.jpg',
        caption: 'Fang Detail',
        thumb: './assets/images/felchenWebApp/catchDetail.jpg'
      },
      {src: './assets/images/felchenWebApp/editCatch.jpg',
        caption: 'Fang bearbeiten',
        thumb: './assets/images/felchenWebApp/editCatch.jpg'
      },
      {src: './assets/images/felchenWebApp/weather.jpg',
        caption: 'Wetter',
        thumb: './assets/images/felchenWebApp/weather.jpg'
      },
      {src: './assets/images/felchenWebApp/forecast.jpg',
        caption: '7 Tage Prognosse',
        thumb: './assets/images/felchenWebApp/forecast.jpg'
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

  onProject(): void {
    window.open('https://felchen.tomasi-developing.ch', '_blank');
  }
}
