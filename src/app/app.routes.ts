import { Routes } from '@angular/router';

export const routes: Routes = [{
    path: '',
    pathMatch: 'full', //why full? because we want to match the full URL path for the default route
    loadComponent: () => import('./home/home.component').then( (m) => m.HomeComponent) //this is lazy loading
},
{
    path: 'todos',
    loadComponent: () => {
        return import('./todos/todos.component').then( (m) => m.TodosComponent);
    }
}

];
