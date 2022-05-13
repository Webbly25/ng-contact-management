import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactsComponent } from './contacts.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { SharedModule } from '../shared/shared.module';
import { ContactsRoutingModule } from './contacts-routing.module';

@NgModule({
	declarations: [ContactsComponent, ContactFormComponent],
	imports: [CommonModule, ReactiveFormsModule, SharedModule, ContactsRoutingModule]
})
export class ContactsModule {}
