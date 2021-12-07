import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-guinea-pig',
  templateUrl: './guinea-pig.component.html',
  styleUrls: ['./guinea-pig.component.css']
})
export class GuineaPigComponent implements OnInit {

  private albums: Array<any> = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/guineaPig/guinePig1.png',
        caption: 'Startseite',
        thumb: './assets/images/guineaPig/guineaPig1.png'
      },
      {src: './assets/images/guineaPig/guinePig2.png',
        caption: 'Meerschweinchen bearbeiten',
        thumb: './assets/images/guineaPig/guinePig2.png'
      },
      {src: './assets/images/guineaPig/guinePig3.png',
        caption: 'Gesundheits - Check hinzufügen',
        thumb: './assets/images/guineaPig/guinePig3.png'
      },
      {src: './assets/images/guineaPig/guinePig4.png',
        caption: 'Infoboxen',
        thumb: './assets/images/guineaPig/guinePig4.png'
      },
      {src: './assets/images/guineaPig/guinePig5.png',
        caption: 'Letzten 10 Checks ansehen',
        thumb: './assets/images/guineaPig/guinePig5.png'
      },
      {src: './assets/images/guineaPig/guinePig6.png',
        caption: 'Details zum Check',
        thumb: './assets/images/guineaPig/guinePig6.png'
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

}
