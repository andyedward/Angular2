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
		this.todoService.getTodo().then(todos => this.todos = todos);
	}

	addTodo(todo: string):void {
		if (todo !== '') {
			this.todos.push({id:24, todo:todo})
		}
	}

	deleteTodo(todo:Todo):void {
		this.todos = this.todos.filter( h => h !== todo);
	}
}