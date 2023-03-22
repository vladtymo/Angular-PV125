import { Component } from '@angular/core';
import { IUser } from '../user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css']
})
export class UserCardComponent {

  user: IUser = {
    name: 'Vladyslav',
    surname: 'Tymoshchuk',
    address: 'Rivne, Ukraine',
    birthdate: new Date(2000, 0, 1),
    premium: 1230
  };

  // properties
}