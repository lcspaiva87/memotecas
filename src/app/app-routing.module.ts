import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateThoughtComponent } from './components/thoughts/create-thought/create-thought.component';
import { ListThoughtComponent } from './components/thoughts/list-thought/list-thought.component';

const routes: Routes = [
  {
    path: 'createThought',
    component: CreateThoughtComponent,
  },
  {
    path: 'listThought',
    component: ListThoughtComponent,
  },
  {
    path: '',
    redirectTo: 'listThought',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
