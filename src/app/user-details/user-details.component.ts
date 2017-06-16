import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserManagerService } from "../user-manager.service";
import { User } from "../user";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styles: []
})
export class UserDetailsComponent implements OnInit, OnDestroy {
  user: User;
  sub:any;
  roles: string[] = ['gcm-admin','gcm-user','gcm-manager','gcm-fo','petr-it-security','petr-it-admin'];

  constructor(private route:ActivatedRoute, 
              private userManagerService:UserManagerService, 
              private router: Router) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
        let id = params['id'];
        console.log('getting user with id: ', id);
        this.userManagerService.get(id)
                          .subscribe(p => this.user = p);
      });
   }

   ngOnDestroy() {
      this.sub.unsubscribe();
   }

   gotoUserList() {
     let link = ['/users'];
     this.router.navigate(link);
   }

   saveUserDetails() {
     this.userManagerService.save(this.user)
         .subscribe(r => console.log(`saved!!! ${JSON.stringify(this.user)}`));
    }
}