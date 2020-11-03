import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { UsersListComponent } from './users-list.component';

@NgModule({
  declarations: [UsersListComponent],
  imports: [CommonModule, MaterialModule],
  // exports: [UsersListComponent],
})
export class UsersListModule {}
