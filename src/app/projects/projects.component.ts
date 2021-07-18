import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onClick(): void {
    window.open('https://github.com/TomasiDeveloping', '_blank');
  }

  onUptimeRobot(): void {
    window.open('https://stats.uptimerobot.com/6VE76ToB56', '_blank');
  }
}
