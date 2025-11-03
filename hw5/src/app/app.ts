import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Class1 } from '../componentas/class1/class1';



@Component({
  selector: 'app-root',
  imports: [Class1],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('lesson5');
}
