import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditComponent } from './edit.component';
import { MaterialModule } from '../material/material.module';
import { UserFormComponent } from '../../components/user-form/user-form.component';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [EditComponent],
  imports: [CommonModule, MaterialModule, ComponentsModule],
})
export class EditModule {}
