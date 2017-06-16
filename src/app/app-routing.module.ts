import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
	{
		path: 'users', 
		component: UserListComponent,
	}, 
	{
		path: 'users/:id', 
		component: UserDetailsComponent,
	}, 
	{
		path: '',
		redirectTo: '/users',
		pathMatch: 'full'
	},
	
];

@NgModule( {
	imports: [RouterModule.forRoot(routes)] ,
	exports: [RouterModule]
})
export class AppRoutingModule {}

