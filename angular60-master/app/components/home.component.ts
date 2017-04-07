import { Component } from '@angular/core';

@Component ({
	selector:'home',
	template: `
	<h1> Hi My Name is {{name}}</h1>
	`,
})

export class HomeComponent {
	name: string;

	constructor() {
		this.name = "andy"
	}
}