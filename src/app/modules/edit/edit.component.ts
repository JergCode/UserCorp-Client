import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  user: User;
  constructor(
    private activatedRoute: ActivatedRoute,
    private usersService: UsersService
  ) {
    this.activatedRoute.params.subscribe(async (params: Params) => {
      const id = params.id;
      this.user = await this.usersService.getUserById(id);
    });
  }

  loading(): boolean {
    return !!this.user;
  }

  ngOnInit(): void {}
}
