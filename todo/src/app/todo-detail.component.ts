import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import 'rxjs/add/operator/switchMap';
import { Todo } from './todo'
import { TodoService } from './todo.service'

@Component({
	selector: 'todoDetail',
	template: `<h1 *ngIf="todo">{{todo.id}}</h1>
				<button (click)="goback()">Back</button>
	`,
	providers: [TodoService]
})

export class TodoDetailComponent implements OnInit {
	todo = {};

	constructor(private route:ActivatedRoute,
				private location:Location,
				private todoService: TodoService) {}

	ngOnInit():void {
		this.route.params
				.switchMap((params:Params) => this.todoService.getTodoDetail(+params['id']))
				.subscribe(todo => this.todo = todo)
	}

	goback(): void {
		this.location.back(); 
	}


	
}