import {Component} from '@angular/core';

@Component({
  selector: 'app-glasblaeserei',
  templateUrl: './glasblaeserei.component.html',
  styleUrls: ['./glasblaeserei.component.css']
})
export class GlasblaesereiComponent {

  onClick(): void {
    window.open('https://glasblaeserei-egli.ch/Home', '_blank');
  }
}
