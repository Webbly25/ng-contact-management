import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactsComponent } from './contacts.component';
import { ContactsResolver } from './contacts.resolver';

const routes: Routes = [
	{
		path: '',
		component: ContactsComponent,
		resolve: { contacts: ContactsResolver },
		children: [
			{ path: 'new', component: ContactFormComponent },
			{ path: ':id', component: ContactFormComponent }
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class ContactsRoutingModule {}
