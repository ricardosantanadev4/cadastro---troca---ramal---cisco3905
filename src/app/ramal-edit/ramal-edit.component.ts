import { Component, OnInit } from '@angular/core';
import { Pesquiza } from '../models/pesquizar-ramal';

@Component({
  selector: 'app-ramal-edit',
  templateUrl: './ramal-edit.component.html',
  styleUrls: ['./ramal-edit.component.scss']
})
export class RamalEditComponent implements OnInit {

  pesquiza: Pesquiza = {};

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.pesquiza);
  }

}
