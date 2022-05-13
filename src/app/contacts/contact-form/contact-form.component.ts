import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import * as contactSelectors from '../state/contacts.selectors';

@Component({
	selector: 'app-contact-form',
	templateUrl: './contact-form.component.html',
	styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
	contactForm!: FormGroup;
	editId: number | null = null;

	constructor(
		private readonly fb: FormBuilder,
		private readonly route: ActivatedRoute,
		private readonly store: Store
	) {
		this.contactForm = fb.group({
			name: ['', Validators.required],
			title: ['', Validators.required],
			phone: ['', Validators.required],
			address: ['', Validators.required],
			city: ['', Validators.required]
		});

		this.route.params
			.pipe(
				map(params => +params['id']),
				switchMap(id => {
					this.editId = id ? id : null;
					return this.store.select(contactSelectors.selectContacts);
				}),
				map(contacts => {
					if (!contacts) return;
					return contacts.find(contact => contact.id === this.editId);
				})
			)
			.subscribe(contact => {
				if (!contact) return;
				this.contactForm.patchValue(contact);
			});
	}
}
