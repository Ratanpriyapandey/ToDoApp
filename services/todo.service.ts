import { Injectable } from '@angular/core';
import { Todo } from '../model/todo';

@Injectable()
export class TodoService {

    public todos: Todo[] = [];
    constructor() { }
  
    getAllTodos(): Todo[] {

        if(localStorage.getItem('localData') !== null){ 
            this.todos = JSON.parse(localStorage.getItem('localData'));
        } else {
            var todoArrayData = [
                {
                    id: 1,
                    title: 'ratan.',
                    salution: 'Mr.',
                    taskName: 'Mark',
                    description: 'Jacob',
                    lastName: 'Otto',
                    phone: '1234567890',
                    email: 'mark_otto@gmail.com'
                },
                
            ];
            localStorage.setItem('localData', JSON.stringify(todoArrayData));
            this.todos = JSON.parse(localStorage.getItem('localData'));
        }       
        return this.todos;
    }
    
    getTodoById(id: number): Todo {
        var todoArray = JSON.parse(localStorage.getItem('localData'));       
        return todoArray
          .filter(todo => todo.id === id)
          .pop();
    }
  
    updateTodoById(todo): Todo {
        if (todo.id === 0) {                    
            var todoArray = JSON.parse(localStorage.getItem('localData'));
            var todoid = todoArray.length;
                todo.id = ++todoid;
                todoArray.push(todo);
            localStorage.setItem('localData', JSON.stringify(todoArray));
        } else {
            var todoSaveArray = JSON.parse(localStorage.getItem('localData'));
            for (var i in todoSaveArray) {
                if (todoSaveArray[i].id === todo.id) {
                    todoSaveArray[i] = todo;
                    localStorage.setItem('localData', JSON.stringify(todoSaveArray));
                }
            }
        }
        return todo;
    }
    
    deleteTodoDetail(id) {
       var todoArray = JSON.parse(localStorage.getItem('localData'));
        for (var i in todoArray) {
            if (todoArray[i].id === id) {
                todoArray.splice(i, 1);
                localStorage.setItem('localData', JSON.stringify(todoArray));  
            }
        }    
    };    
}