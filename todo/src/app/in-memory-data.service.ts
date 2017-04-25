import { InMemoryDbService } from 'angular-in-memory-web-api'

export class InMemoryDataService implements  InMemoryDbService {
	createDb() {
		let todos2=[
			{id:1, todo:'asdf'}
		];
		return {todos2};
	}
}