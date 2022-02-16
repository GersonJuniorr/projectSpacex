import { Component } from '@angular/core';
import { PrincipalService } from './services/principal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  rockets: any
  title = 'projectSpacex';
  constructor(private principalService: PrincipalService) {
    this.showMenu()
    this.show()
    this.getRockets()
  }

  getRockets() {
    this.principalService.getRockets().toPromise().then(res => this.rockets = res)
  }

  show() {
    console.log(this.rockets)
  }

  showMenu() {
    console.log('teste')
  }
}
