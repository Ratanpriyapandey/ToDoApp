import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Todo } from '../../model/todo';
import { TodoService } from '../../services/todo.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  public todos: Todo[] = [];
  constructor(
    public modalService: NgbModal,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
    this.loadAllTodoList();
  }
  loadAllTodoList() {
    this.todos = this.todoService.getAllTodos();
  }
  onClickTodoStatusUpdate(todo:any) {
    if (todo.status == true) {
      todo.status = false
    }
     else if(todo.status == false) 
     {
      todo.status = true
    }
    this.todoService.updateTodoById(todo);
    return 'todo.status';
  }
  onClickEditTodoDetail(id) {
    this.router.navigate(['/todo-details'], { queryParams: { id: id } });
    //queryParams is observable
  }

  onClickAddTodo() {
    this.router.navigate(['/todo-details']);
  }

  getColor(todo) {
    if (todo.priority == "Normal") {
      return '#80ff80';

    }
    else if (todo.priority == "Medium") {
      return '#99bbff';
    }
    return '#ffcccc'
  }
  doSelect(todo) {
    if (todo.status == true) {
      return 'line-through';
    }
    return 'none';
  }
}
