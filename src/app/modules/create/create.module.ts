import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from '../../components/components.module';
import { CreateComponent } from './create.component';

@NgModule({
  declarations: [CreateComponent],
  imports: [CommonModule, ComponentsModule],
})
export class CreateModule {}
