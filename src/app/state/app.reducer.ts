import { ActionReducerMap } from '@ngrx/store';
import * as contactsReducer from '../contacts/state/contacts.reducer';

export interface AppState {
	contacts: contactsReducer.State;
}

export const appReducer: ActionReducerMap<AppState> = {
	contacts: contactsReducer.reducer
};
