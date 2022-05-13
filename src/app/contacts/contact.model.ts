export type Contact = {
	id: number;
	name: string;
	title: string;
	phone: string;
	address: string;
	city: string;
};

export type CreateContact = Omit<Contact, 'id'>;
