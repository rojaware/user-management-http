import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserManagerService } from "../user-manager.service";

@Component({
  selector: 'app-user-list',
  template: `

  <section *ngIf="isLoading && !errorMessage">
  Loading our hyperdrives!!! Retrieving data...
  </section>
  <!-- this is the new syntax for ng-repeat -->
  <ul>
    <li *ngFor="let user of userList">
      <a [routerLink]="['/users', user._id]">
        {{user.fullName}} 
      </a>
    </li>
  </ul>
  <!-- HERE: added this error message -->
  <section *ngIf="errorMessage">
    {{errorMessage}}
  </section>
  `,
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  userList: User[];
  errorMessage: string = '';
  isLoading: boolean = true;

  constructor(private userManagerService: UserManagerService) { }

  ngOnInit(){
    this.userManagerService
      .getAll()
      .subscribe(
         /* happy path */ p => this.userList = p,
         /* error path */ e => this.errorMessage = e,
         /* onCompleted */ () => this.isLoading = false);
  }

}