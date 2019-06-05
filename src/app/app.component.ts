import { Component } from '@angular/core';
import {PersonsService} from './persons.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[PersonsService]
})
export class AppComponent {
  title = 'java22050619';
}
