import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pesquiza } from '../models/pesquizar-ramal';

@Component({
  selector: 'app-pesquizar-ramal',
  templateUrl: './pesquizar-ramal.component.html',
  styleUrls: ['./pesquizar-ramal.component.scss']
})
export class PesquizarRamalComponent implements OnInit {

  pesquiza: Pesquiza[] = [];

  auxObj = { cont: 10 };

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.getRamais();
  }

  getRamais() {
    for (let index = 0; index < this.auxObj.cont; index++) {
      let pesquiza: Pesquiza = {
        id: index,
        ramal: '600' + index,
        serial: 'lxarfdre' + index,
        ipCentral: '192.168.0.' + index,
      }
      console.log(pesquiza);
      this.pesquiza.push(pesquiza);
    }

  }

  getUpdate(id: number) {
    this.router.navigate(["ramal-edit", { id: id }])
  }
}
