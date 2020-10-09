import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.scss']
})
export class TodoDetailsComponent implements OnInit {

  public todoId: string;
  public todoDetail = <Todo>{};
  public mode: string;    
  constructor( 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private todoService: TodoService ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.todoId = params['id'];
          if (this.todoId !== undefined) {
                this.getTodoDetailById(this.todoId);
                this.mode = 'Edit';    
          } else {
                this.todoId = null;
                this.todoDetail['id'] = 0;
                this.mode = 'Add';   
          }
        }); 
  }
  
  getTodoDetailById(id) {
    this.todoDetail = this.todoService.getTodoById(parseInt(id)); 
  }
  
  onTodoSubmitForm(form) {

    if(form.valid) {
        this.todoService.updateTodoById(this.todoDetail);
        this.router.navigate(['/todo-list']);
    } else {
    
    }
  }
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }


}
