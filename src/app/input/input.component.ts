import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Users } from '../users.model';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {

  @Output() user = new EventEmitter<Users>();

  constructor() { }

  ngOnInit() {
  }

  getUser(nome, citta, eta) {
    this.user.emit(
      {
        nome: nome,
        citta: citta,
        eta: eta,
      }
    );
  }

}
