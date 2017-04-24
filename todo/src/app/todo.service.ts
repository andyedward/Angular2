import { Injectable }   from '@angular/core';
import { Todo } from './todo';
import { Todos } from './mock-todo'

@Injectable()
export class TodoService {
	getTodo():Promise<Todo[]> {
		return Promise.resolve(Todos);
	}
}