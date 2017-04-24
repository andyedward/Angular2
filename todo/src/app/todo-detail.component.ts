import { Component, OnInit} from '@angular/core';
import { Todo } from './todo'
import { TodoService } from './todo.service'

@Component({
	selector: 'todoDetail',
	template: '<h1>{{todo}}</h1>',
	providers: [TodoService]
})

export class TodoDetailComponent implements OnInit {
	todo: Todo[];

	constructor(private todoService: TodoService) {}

	ngOnInit(): void {
		this.getTodoDetail();
	}

	getTodoDetail():void {
		this.todoService.getTodoDetail().then(todos => this.todo = todos);
	}
}