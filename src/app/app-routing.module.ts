import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'todo-list',
    pathMatch: 'full'
  },  
  {
    path: 'todo-list',
    loadChildren: () => import('./components/todo-list/todo-list.module').then(mod => mod.TodoListModule)
    
  },    
  {
    path: 'todo-details',
    loadChildren: () => import('./components/todo-details/todo-details.module').then(mod => mod.TodoDetailsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
