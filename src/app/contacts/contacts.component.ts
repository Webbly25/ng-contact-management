import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Contact } from './contact.model';
import * as contactsSelectors from './state/contacts.selectors';

@Component({
	selector: 'app-contacts',
	templateUrl: './contacts.component.html',
	styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {
	constructor(private readonly store: Store) {}

	$contacts!: Observable<readonly Contact[]>;

	ngOnInit() {
		this.$contacts = this.store.select(contactsSelectors.selectContacts);
	}

	handleRowClick(id: number) {
		console.log('handleRowClick', id);
	}
}
