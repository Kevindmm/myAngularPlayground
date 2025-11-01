import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.scss'
})
export class CounterComponent {
  counterValue = signal(0);
  
  
  increment() {
    /**
   * Increments the counter value by 1.
   * Uses set() method to replace the current signal value with a new one (current + 1).
   */
    this.counterValue.set(this.counterValue() + 1);
  }

  decrement() {
    /**
     * Decrements the counter value by 1.
     * Uses update() method to modify the current signal value based on its previous value.
     */
    this.counterValue.update(value => value - 1);
  }

  reset() {
    // Reset the counter value to 0 using set method
    this.counterValue.set(0);
  }

}
