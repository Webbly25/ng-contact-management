import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Actions, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, Observable, of, switchMap, take } from 'rxjs';

import * as contactsActions from './state/contacts.actions';
import * as contactsSelctors from './state/contacts.selectors';

@Injectable({
	providedIn: 'root'
})
export class ContactsResolver implements Resolve<void> {
	constructor(private readonly store: Store, private readonly actions$: Actions) {}

	resolve(): Observable<void> {
		return this.store.select(contactsSelctors.selectContacts).pipe(
			take(1),
			switchMap(contacts => {
				if (contacts.length) return of(void 0);

				this.store.dispatch(contactsActions.fetchContacts());
				return this.actions$.pipe(
					ofType(contactsActions.setContacts),
					take(1),
					map(() => void 0)
				);
			})
		);
	}
}
