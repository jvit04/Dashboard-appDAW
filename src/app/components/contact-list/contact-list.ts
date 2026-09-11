import { Component } from '@angular/core';
import { ContactRow } from '../contact-row/contact-row';

@Component({
  standalone: true,
  imports: [ContactRow],
  selector: 'app-contact-list',
  styleUrl: './contact-list.css',
  templateUrl: './contact-list.html',
})
export class ContactList {
  contacts: Contact[] = [
    {id: 1, name: 'Maria López',email: 'maria@example.com'},
    { id:2, name: 'Carlos Ruiz', email: 'carlos@example.com'},
  ];
}

export interface Contact{
  id: number;
  name: string;
  email: string;
}