import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './modules/create/create.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { EditComponent } from './modules/edit/edit.component';

const routes: Routes = [
  { path: '', component: CreateComponent },
  { path: 'users', component: UsersListComponent },
  { path: 'users/:id', component: EditComponent },
  // { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
