import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todos';
import { Observable } from 'rxjs';

const httpOption = {
  headers: new HttpHeaders({
    'contentType' : 'application/json' 
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL:string = 'https://jsonplaceholder.typicode.com/todos';
  todoslimit = '?_limit=5';

  constructor(private http:HttpClient) { }

  //Get Todos
  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>( `${this.todosURL}${this.todoslimit}`);
  }

  //Toggle Completed
  toggleCompleted(todo:Todo):Observable<any>{
    const url= `${this.todosURL}/${todo.id}`;
    return this.http.put(url, todo ,httpOption)
  }

  //delete Todo
  deleteTodo(todo:Todo):Observable<Todo>{
    //delete from UI
    const url= `${this.todosURL}/${todo.id}`;
    //delete from server
    return this.http.delete<Todo>(url ,httpOption);
  }

  //add todo
  addTodo(todo:Todo):Observable<Todo>{
    return this.http.post<Todo>(this.todosURL, todo, httpOption);
  }
}
