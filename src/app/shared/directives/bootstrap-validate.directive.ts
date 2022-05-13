import { Directive, HostBinding, Self } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
	selector: '[appBootstrapValidate]'
})
export class BootstrapValidateDirective {
	constructor(@Self() private ngControl: NgControl) {}

	@HostBinding('class.is-valid')
	get valid() {
		return this.ngControl.touched && this.ngControl.valid;
	}

	@HostBinding('class.is-invalid')
	get invalid() {
		return this.ngControl.touched && !this.ngControl.valid;
	}
}
