import { Injectable }   from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoService {
	todos: Todo[] = [
		{id: 11, todo: 'Mr. Nice'}
	];

	getTodo() {
		return this.todos;
	}
}