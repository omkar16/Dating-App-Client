import { Component, signal } from '@angular/core';
import { Signal } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  protected registerMode = signal(false);

  showRegister() {
    this.registerMode.set(true);
  }
}
