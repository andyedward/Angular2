import { Component } from '@angular/core';
import {PostsService} from '../services/posts.service';

@Component({
    moduleId: module.id,
    selector: 'user',
    templateUrl: 'user.component.html',
    providers: [PostsService]
})
export class UserComponent  { 
  name: string; 
  email: string;
  address: address;
  hobbies: string[];
  showHobbies: boolean;
  posts:Post[];
  moe: {};
  coordinates: string[];

  constructor(private postsService: PostsService){
    this.name = 'John Doe'; 
    this.email = 'john@gmail.com',
    this.address = {
        street: '12 Main st',
        city: 'Boston', 
        state: 'MA'
    }
    this.hobbies = ['Music', 'Movies', 'Sports'];
    this.showHobbies = false;

    
    this.postsService.getPosts().subscribe(posts => {
        this.posts = posts;
    });

    this.postsService.getMoe().subscribe(moe => {
        this.moe = moe.result;
        console.log(moe);
    });

    this.postsService.getTaxi().subscribe(taxi => {
        this.coordinates = taxi.features[0].geometry.coordinates;
        console.log(taxi.features[0].geometry.coordinates);
    });

  }


  toggleHobbies(){
      this.showHobbies = !this.showHobbies;
  }

  addHobby(hobby: any){
      this.hobbies.push(hobby);
  }

  deleteHobby(i: any){
      this.hobbies.splice(i, 1);
  }
}

interface address {
    street: string;
    city: string;
    state: string;
}

interface Post{
    id: number;
    title: string;
    body: string;
}

interface taxi {
  features:string[];   

}

interface moe {
    
    result: {};
    

}
