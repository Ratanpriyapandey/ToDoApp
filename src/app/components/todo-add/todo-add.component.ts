import { Component, OnInit,EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TodoService } from '../../services/todo.service';
import { Todo } from '../../model/todo';
@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {
  
  public todoId: string;
  public todoDetail = <Todo>{};
  public mode: string;    
  constructor( 
    private activatedRoute: ActivatedRoute, 
    private router: Router,
    private todoService: TodoService) { 
    }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
          this.todoId = params['id'];
           this.todoId = null;
                this.todoDetail['id'] = 0; 
                this.todoDetail.priority="Normal";
          
        }); 
  }
  
  getTodoDetailById(id) {
    this.todoDetail = this.todoService.getTodoById(parseInt(id)); 
  }
 
  onTodoSubmitForm(form) {

    if(form.valid) {
        this.todoDetail.dateTime = new Date().toISOString().substring(0, 16);
        this.todoService.updateTodoById(this.todoDetail);
        this.router.navigate(['/todo-list']);
    } 
  }
  
  onClickCancel() {
    this.router.navigate(['/todo-list']);
  }


}
