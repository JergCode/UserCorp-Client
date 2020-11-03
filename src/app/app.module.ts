import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './modules/create/create.component';
import { UsersListComponent } from './modules/users-list/users-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateModule } from './modules/create/create.module';
import { UsersListModule } from './modules/users-list/users-list.module';
import { EditModule } from './modules/edit/edit.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CreateModule,
    UsersListModule,
    EditModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
