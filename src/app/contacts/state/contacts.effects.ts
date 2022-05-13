import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Contact } from '../contact.model';
import * as contactsActions from './contacts.actions';

@Injectable()
export class ContactsEffects {
	fetchContacts$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(contactsActions.fetchContacts),
			switchMap(() => this.http.get<Contact[]>(environment.apiServer + '/contacts')),
			map(contacts => contactsActions.setContacts({ contacts }))
		);
	});

	constructor(private readonly actions$: Actions, private readonly http: HttpClient, private readonly store: Store) {}
}
