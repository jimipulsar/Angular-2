import { Component } from '@angular/core';
import { Users } from './users.model';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: Users[] = [];


constructor(private http: Http) {
  this.http.get('assets/users.json')
  .map(res => res.json())
  .subscribe((response) => {
    for (let i = 0; i < response.users.length; i++) {
      this.users.push(
        {
        nome: response.users[i].nome,
        citta: response.users[i].citta,
        eta: response.users[i].eta,
        }
      );
    }
    });
  }

  getUser(user: Users) {
    this.users.push(user);
  }
}
