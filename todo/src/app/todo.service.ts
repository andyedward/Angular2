import { Injectable }   from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Todo } from './todo';
import { Todos } from './mock-todo'

@Injectable()
export class TodoService {
	private todoUrl = 'api/todos2';

	constructor(private http: Http){}

	getTodo():Promise<Todo[]> {
		//return Promise.resolve(Todos);
		return this.http.get(this.todoUrl)
				.toPromise()
				.then(response => response.json().data as Todo[])
				.catch(this.handleError);
	}

	private handleError(error:any): Promise<any> {
		console.error('An error occured', error);
		return Promise.reject(error.message || error);
	}

	getTodoDetail(id: number):Promise<Todo[]> {
		const url = `${this.todoUrl}/${id}`;
		return this.http.get(url)
				.toPromise()
				.then(response => response.json().data as Todo[])
				.catch(this.handleError);
	}

}