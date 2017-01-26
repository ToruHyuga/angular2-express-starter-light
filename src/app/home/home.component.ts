import {Component} from '@angular/core';
import {HomeService} from  './home.service'


@Component({
  selector: 'app-home',
  styleUrls: ['./home.component.css'],
  templateUrl: 'home.component.html'
})
export class HomeComponent {
  user: any = 'user';

  constructor(homeService: HomeService) {
    homeService.getTestUser()
      .subscribe(data => {
        this.user = data.json().name;
        },
        error => {
          console.log(error);
        });
  }
}
