import { Component } from '@angular/core';
import { NewPageService } from  './new-page.service'


@Component({
  selector: 'app-new-page',
  styleUrls: ['new-page.component.css'],
  templateUrl: 'new-page.component.html'
})
export class NewPageComponent {
  user: any = 'user';

  constructor(newPageService: NewPageService) {
    newPageService.getTestUsers()
      .subscribe(data => {
        this.user = data.json().email;
        },
        error => {
          console.log(error);
        });
  }
}
