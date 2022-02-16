import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projectSpacex';
  constructor() {
    this.showMenu()
  }

  showMenu() {
    console.log('teste')
  }
}
