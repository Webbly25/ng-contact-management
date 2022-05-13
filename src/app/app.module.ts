import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContactsModule } from './contacts/contacts.module';
import * as fromApp from './state/app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ContactsEffects } from './contacts/state/contacts.effects';
import { environment } from 'src/environments/environment';

@NgModule({
	declarations: [AppComponent],
	imports: [
		BrowserModule,
		HttpClientModule,
		StoreModule.forRoot(fromApp.appReducer),
		EffectsModule.forRoot([ContactsEffects]),
		StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
		AppRoutingModule,
		ContactsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
