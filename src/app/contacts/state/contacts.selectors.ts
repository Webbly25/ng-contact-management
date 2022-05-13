import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State } from './contacts.reducer';

export const selectContactsStore = createFeatureSelector<State>('contacts');
export const selectContacts = createSelector(selectContactsStore, (state: State) => state.contacts);
