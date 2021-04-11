import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-game-inventory',
  templateUrl: './game-inventory.component.html',
  styleUrls: ['./game-inventory.component.css']
})
export class GameInventoryComponent implements OnInit {
  private albums: Array<any> = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/gameInventory/Games1.png',
        caption: 'Hauptseite',
        thumb: './assets/images/gameInventory/Games1.png'
      },
      {src: './assets/images/gameInventory/Games2.png',
        caption: 'Games nach Konsolen sortieren',
        thumb: './assets/images/gameInventory/Games2.png'
      },
      {src: './assets/images/gameInventory/Games3.png',
        caption: 'Games nach Genres sortieren',
        thumb: './assets/images/gameInventory/Games3.png'
      },
      {src: './assets/images/gameInventory/Games4.png',
        caption: 'Games per Autocomplete suchen',
        thumb: './assets/images/gameInventory/Games4.png'
      },
      {src: './assets/images/gameInventory/Games5.png',
        caption: 'Games per Autocomplete suchen',
        thumb: './assets/images/gameInventory/Games5.png'
      },
      {src: './assets/images/gameInventory/Games6.png',
        caption: 'Games per Autocomplete suchen',
        thumb: './assets/images/gameInventory/Games6.png'
      },
      {src: './assets/images/gameInventory/Games7.png',
        caption: 'Games Detail',
        thumb: './assets/images/gameInventory/Games7.png'
      },
      {src: './assets/images/gameInventory/Games8.png',
        caption: 'Games Detail',
        thumb: './assets/images/gameInventory/Games8.png'
      },
      {src: './assets/images/gameInventory/Games9.png',
        caption: 'Games bearbeiten',
        thumb: './assets/images/gameInventory/Games9.png'
      },
      {src: './assets/images/gameInventory/Games10.png',
        caption: 'Games bearbeiten',
        thumb: './assets/images/gameInventory/Games10.png'
      },
      {src: './assets/images/gameInventory/Konsole1.png',
        caption: 'Konsolen',
        thumb: './assets/images/gameInventory/Konsole1.png'
      },
      {src: './assets/images/gameInventory/Konsole2.png',
        caption: 'Konsolen',
        thumb: './assets/images/gameInventory/Konsole2.png'
      },
      {src: './assets/images/gameInventory/Publisher.png',
        caption: 'Publisher',
        thumb: './assets/images/gameInventory/Publisher.png'
      },
      {src: './assets/images/gameInventory/Publisher2.png',
        caption: 'Publisher',
        thumb: './assets/images/gameInventory/Publisher2.png'
      },
      {src: './assets/images/gameInventory/Genre.png',
        caption: 'Genre',
        thumb: './assets/images/gameInventory/Genre.png'
      },
      {src: './assets/images/gameInventory/Settings.png',
        caption: 'Einstellungen',
        thumb: './assets/images/gameInventory/Settings.png'
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
