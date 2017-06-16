import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserManagerService } from "../user-manager.service";

@Component({
  selector: 'app-user-list',
  template: `
<div class="container">
    <div class="navbar navbar-default">
        <div class="container-fluid">
            <section *ngIf="isLoading && !errorMessage">
                Loading our hyperdrives!!! Retrieving data...
            </section>
            <!-- this is the new syntax for ng-repeat -->
            <ul>
                <li *ngFor="let user of userList">
                    <a [routerLink]="['/users', user._id]">{{user.fullName}} </a>
                </li>
                <a [routerLink]="['/users', 'add']">New User </a>
            </ul>
            <!-- HERE: added this error message -->
            <section *ngIf="errorMessage">
                {{errorMessage}}
            </section>
        </div>
    </div>
    <router-outlet></router-outlet>
</div>

  
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit() {
    this.userManagerService
      .getAll()
      .subscribe(
         /* happy path */ p => this.userList = p,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */() => this.isLoading = false);
  }

}