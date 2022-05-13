import { createAction, props } from '@ngrx/store';
import { Contact } from '../contact.model';

export const setContacts = createAction('[Contact] Set Contacts', props<{ contacts: Contact[] }>());
export const fetchContacts = createAction('[Contact] Fetch Contacts');
export const saveContact = createAction('[Contact] Save Contact', props<{ contact: Contact }>());
export const updateContact = createAction('[Contact] Update Contact', props<{ contact: Contact }>());
export const deleteContact = createAction('[Contact] Delete Contact', props<{ id: number }>());
export const storeContacts = createAction('[Contact] Store Contacts');
export const storeContactsComplete = createAction('[Contact] Store Contacts Complete');
