import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { User } from './user';

const USER_LIST : User[] =  [
  		{_id: '1', fullName: 'Rashmi Patri', userId: 'patri2', role: 'petr-it-admin'}, 
    	{_id: '2', fullName: 'Raja Ravi', userId: 'ravir2', role: 'petr-it-security'},
    	{_id: '3', fullName: 'Mihai Savin', userId: 'savin3', role: 'gcm-user'},
    	{_id: '4', fullName: 'Julia Chen', userId: 'chenj', role: 'gcm-manager'},
    ];

@Injectable()
export class UserManagerService {
  private baseUrl: string = 'http://localhost:3000/api';
  constructor(private http: Http) { }

  getAll(): Observable<User[]>{
    let userList$ = this.http
      .get(`${this.baseUrl}/users`, { headers: this.getHeaders()})
      .map(mapUsers)
      .catch(handleError);
      return userList$;
  }

  private getHeaders() {
  	let headers = new Headers();
  	headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', 'http://localhost:3000');
  	return headers;
  }

  get(id: number) : Observable<User> {
  	let user$ = this.http
  		.get(`${this.baseUrl}/users/${id}`, {headers: this.getHeaders()})
  		.map(mapUser)
      .catch(handleError);

  	return user$;
  }

  save(user: User) : Observable<Response> {
  	return this.http
  	.put(`${this.baseUrl}/users/${user._id}`, JSON.stringify(user), {headers: this.getHeaders()});
  }
}

function mapUsers(response: Response): User[] {
  return response.json().map(toUser);
  // throw new Error('ups! Force choke!');
}
function mapUser(response:Response): User{
   // toUser looks just like in the previous example
   return toUser(response.json());
}
function toUser(r:any): User{
  let user = <User>({
    _id: r._id,
    fullName: r.fullName,
    userId: r.userId,
    role: r.role,
  });
  console.log('Parsed user:', user);
  return user;
}
  
// this could also be a private method of the component class
function handleError (error: any) {
  // log error
  // could be something more sofisticated
  let errorMsg = error.message || `Yikes! There was a problem with our hyperdrive device and we couldn't retrieve your data!`
  console.error(errorMsg);

  // throw an application level error
  return Observable.throw(errorMsg);
}
 