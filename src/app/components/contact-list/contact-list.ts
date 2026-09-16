import { Component, OnInit, inject } from "@angular/core";
import { ContactRow } from "../contact-row/contact-row";
import { ContactsService } from "../../servicios/contacts";

export interface Contact {
  id: number;
  name: string;
  email: string;
}

@Component({
  standalone: true,
  imports: [ContactRow],
  selector: 'app-contact-list',
  templateUrl: './contact-list.html',
})
export class ContactList implements OnInit{
  private contactsService = inject(ContactsService);
  contacts: Contact[] = [];
  cargando = true;


  ngOnInit(): void {
    this.contactsService.getContacts().subscribe({
      next: (d) => { this.contacts = d; this.cargando =false;},
      error: () => { this.cargando = false; }
    });
  }
}

