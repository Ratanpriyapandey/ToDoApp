import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoDetailRoutingModule } from './todo-details-routing.module';
import { TodoDetailsComponent } from './todo-details.component';
import { TodoService } from '../../services/todo.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TodoDetailRoutingModule
  ],
  declarations: [TodoDetailsComponent],
  providers: [
    TodoService
  ]
})
export class TodoDetailsModule { }