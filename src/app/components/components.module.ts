import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFormComponent } from './user-form/user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../modules/material/material.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [UserFormComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, RouterModule],
  exports: [UserFormComponent],
})
export class ComponentsModule {}
