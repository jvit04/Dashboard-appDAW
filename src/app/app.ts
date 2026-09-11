import { Component, signal } from '@angular/core';
import { ContactList } from './components/contact-list/contact-list';

@Component({
  imports: [ContactList],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('dashboard-app');
}
