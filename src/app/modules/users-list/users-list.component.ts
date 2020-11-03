import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from '../../services/users.service';
import { Router } from '@angular/router';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'lastName', 'email', 'actions'];
  users: User[];

  @ViewChild('table') table: MatTable<User>;
  constructor(private usersService: UsersService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    await this.getUsers();
  }

  async delete(user: User): Promise<void> {
    await this.usersService.deleteUser(user.id);
    await this.getUsers();
  }

  edit(user: User): void {
    this.router.navigate(['users', user.id]);
  }

  async getUsers(): Promise<void> {
    this.users = await this.usersService.getUsers();
  }
}
