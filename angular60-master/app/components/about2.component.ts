import { Component } from '@angular/core';
import {TaxisService} from '../services/taxis.service';

@Component ({
	selector:'about2',
	template: `
		<h1> Hi My Name is {{name}}</h1>
		<button class="btn btn-default btn-md" style="cursor:pointer;" 
			(click)=togglePlayers()>
			{{showPlayers? "Hide Players" : "Show Players"}}
		</button>
		<div *ngIf="showPlayers">
			<ul>
				<li *ngFor="let player of players">{{player}}</li>
			</ul>
			<form (submit)="addPlayer(player.value)">
				<label>Add Player: </label><br />
				<input type="text" #player />
			</form>
		</div>
		<h3>Edit Name</h3>
		<form>
			<label>Edit Name</label>
			<input type="text" name="name" [(ngModel)]="name" />
		</form>
		<h3>Taxis</h3>
		<ul>
			<!--<li *ngFor="let coordinate of coordinates">{{coordinate}}</li>-->
		</ul>

	`,
	providers: [TaxisService]
})

export class About2Component {
	name: string;
	players: string[];
	showPlayers: boolean = false;
	coordinates: string[]
	
	constructor(private TaxisService: TaxisService) {
		this.name = "andy";
		this.players = ["andy","hady","gan","willy"];

		//this.TaxisService.getTaxi().subscribe(taxi => {
		//	this.coordinates = taxi.features[0].geometry.coordinates;
		//})
	}

	addPlayer(player: any) {
		this.players.push(player);
	}

	togglePlayers() {
		this.showPlayers = !this.showPlayers
	}


}