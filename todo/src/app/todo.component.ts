import { Component, OnInit } from '@angular/core';
import { Todo } from './todo'
import { TodoService } from './todo.service'

@Component({
	selector: 'todo',
	templateUrl: './todo.component.html',
	providers: [TodoService]
})

export class TodoComponent implements OnInit {
	todos: Todo[];

	ngOnInit():void {
		this.getTodos();
	}
	constructor(private todoService: TodoService) {}

	getTodos():void {
		this.todos = this.todoService.getTodo();
	}
}