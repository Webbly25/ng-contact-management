import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapValidateDirective } from './directives/bootstrap-validate.directive';

@NgModule({
	declarations: [BootstrapValidateDirective],
	imports: [CommonModule],
	exports: [BootstrapValidateDirective]
})
export class SharedModule {}
