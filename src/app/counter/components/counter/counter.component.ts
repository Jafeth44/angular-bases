import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: /*html*/`
    <h2>Counter: {{counter}}</h2>
    <button class="btn btn-primary mx-2" (click)="modifyCounter(+1)">+1</button>
    <button class="btn btn-primary mx-2" (click)="modifyCounter(-1)">-1</button>
    <button class="btn btn-primary mx-2" (click)="resetCounter()">Reset</button>
  `
})
export class CounterComponent {
  public counter: number = 0;
  modifyCounter(value: number): void {
    this.counter += value;
  }
  resetCounter(): void {
    this.counter = 0;
  }
}
