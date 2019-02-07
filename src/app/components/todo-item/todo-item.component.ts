import { Component, OnInit ,Input} from '@angular/core';
import { Todo } from 'src/app/models/Todos';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TOdoItemComponent implements OnInit {
  @Input() todo: Todo;
  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  //Set Dynamic classes
  setClasses() {
    let classes ={
      todo : true ,
      'is-complete': this.todo.completed
    }

    return classes;
  }

  onToggle(todo){
    //Toggle On UI
    todo.completed = !todo.completed;
    //Toggle On Server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo))
  }
  onDelete(todo){
    console.log('delete');
  }
}
