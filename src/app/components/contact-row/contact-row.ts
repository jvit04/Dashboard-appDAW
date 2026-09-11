import { Component, input } from '@angular/core';
import { Contact } from '../contact-list/contact-list';

@Component({
  standalone: true,
  selector: 'tr[app-contact-row]',
  styleUrl: './contact-row.css',
  template: `
    <td>{{ contact().id }}</td>
    <td>{{ contact().name }}</td>
    <td>{{ contact().email }}</td>
  `,
})
export class ContactRow {
  contact = input.required<Contact>();
}
