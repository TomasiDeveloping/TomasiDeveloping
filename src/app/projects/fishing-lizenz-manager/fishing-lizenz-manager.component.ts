import { Component, OnInit } from '@angular/core';
import {Lightbox} from 'ngx-lightbox';

@Component({
  selector: 'app-fishing-lizenz-manager',
  templateUrl: './fishing-lizenz-manager.component.html',
  styleUrls: ['./fishing-lizenz-manager.component.css']
})
export class FishingLizenzManagerComponent implements OnInit {

  private albums: Array<any> = [];

  constructor(private lightbox: Lightbox) { }

  ngOnInit(): void {
    this.albums.push(
      {src: './assets/images/lizenzManager/schonzeit.PNG',
        caption: 'Schonzeit',
        thumb: './assets/images/lizenzManager/schonzeit.PNG'
      },
      {src: './assets/images/lizenzManager/regel.PNG',
        caption: 'Regeln',
        thumb: './assets/images/lizenzManager/regel.PNG'
      },
      {src: './assets/images/lizenzManager/adminstat.PNG',
        caption: 'Statistik Administrator',
        thumb: './assets/images/lizenzManager/adminstat.PNG'
      },
      {src: './assets/images/lizenzManager/jahres.PNG',
        caption: 'Jahres Statistik generieren',
        thumb: './assets/images/lizenzManager/jahres.PNG'
      },
      {src: './assets/images/lizenzManager/karte.PNG',
        caption: 'Lizenz bearbeiten',
        thumb: './assets/images/lizenzManager/karte.PNG'
      },
      {src: './assets/images/lizenzManager/user.PNG',
        caption: 'User bearbeiten',
        thumb: './assets/images/lizenzManager/user.PNG'
      },
      {src: './assets/images/lizenzManager/useraufseher.PNG',
        caption: 'Aufseher User',
        thumb: './assets/images/lizenzManager/useraufseher.PNG'
      },
      {src: './assets/images/lizenzManager/aufseherst.PNG',
        caption: 'Aufseher User Statistik',
        thumb: './assets/images/lizenzManager/augseherst.PNG'
      },
      {src: './assets/images/lizenzManager/userStat.PNG',
        caption: 'User Statistik',
        thumb: './assets/images/lizenzManager/userStat.PNG'
      },
      {src: './assets/images/lizenzManager/neu.PNG',
        caption: 'Neuer Eintrag',
        thumb: './assets/images/lizenzManager/neu.PNG'
      },
      {src: './assets/images/lizenzManager/liz.PNG',
        caption: 'Eigene Lizenzen',
        thumb: './assets/images/lizenzManager/liz.PNG'
      },
      {src: './assets/images/lizenzManager/home.PNG',
        caption: 'Startseite',
        thumb: './assets/images/lizenzManager/home.PNG'
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

  onDemoClick(): void {
    window.open('https://fischerlizenzmanager.tomasi-developing.ch/home', '_blank');
  }
}
