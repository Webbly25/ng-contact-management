import { createReducer, on } from '@ngrx/store';

import { Contact } from '../contact.model';
import * as contactActions from './contacts.actions';

export const contactsFeatureKey = 'contacts';

export interface State {
	contacts: readonly Contact[];
}

export const initialState: State = {
	contacts: []
};

export const reducer = createReducer(
	initialState,
	on(contactActions.setContacts, (state, { contacts }): State => ({ ...state, contacts })),
	on(contactActions.saveContact, (state, { contact }): State => {
		return { ...state, contacts: [...state.contacts, contact] };
	}),
	on(
		contactActions.updateContact,
		(state, { contact }): State => ({
			...state,
			contacts: state.contacts.map(c => (c.id === contact.id ? contact : c))
		})
	),
	on(
		contactActions.deleteContact,
		(state, { id }): State => ({
			...state,
			contacts: state.contacts.filter(c => c.id !== id)
		})
	)
);
