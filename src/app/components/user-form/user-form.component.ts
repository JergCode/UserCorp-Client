import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from '../../services/users.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})
export class UserFormComponent implements OnInit, OnChanges {
  @Input() user?: User;
  @Input() create: boolean;

  form: FormGroup;
  title: string;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.user = {
      name: '',
      lastName: '',
      email: '',
    };
  }

  ngOnInit(): void {
    if (this.create) {
      this.title = 'Create User';
    } else {
      this.title = 'Edit User';
    }
    this.buildForm();
  }

  ngOnChanges(): void {
    this.buildForm();
  }

  private buildForm(): void {
    this.form = this.formBuilder.group({
      name: [this.user.name, [Validators.minLength(3), Validators.required]],
      lastName: [
        this.user.lastName,
        [Validators.minLength(3), Validators.required],
      ],
      email: [this.user.email, [Validators.required, Validators.email]],
    });
  }

  public async submitUser(event: Event): Promise<void> {
    event.preventDefault();
    if (this.form.invalid) {
      return;
    }

    this.user = {
      id: this.user.id,
      name: this.form.get('name').value,
      lastName: this.form.get('lastName').value,
      email: this.form.get('email').value,
    };

    console.log(this.user);

    if (this.user.id === undefined || this.user.id === null) {
      await this.createUser();
    } else {
      await this.editUser();
    }
    this.router.navigate(['users']);
  }

  private async createUser(): Promise<void> {
    await this.usersService.createUser(this.user);
  }

  private async editUser(): Promise<void> {
    console.log('editing');
    await this.usersService.editUser(this.user);
  }
}
