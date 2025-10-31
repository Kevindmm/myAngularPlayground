import { Component, signal } from '@angular/core';
import { GreetingComponent } from '../components/greeting/greeting.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GreetingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  home = 'this data is coming from home component using binding interpolation in Angular 16-.';
  homeMessage = signal('Hello from Home Component using Angular signals! (Parent to Child Communication), so Hi Greeting Component!');
}
