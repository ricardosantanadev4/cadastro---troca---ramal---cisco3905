import { Component, OnInit } from '@angular/core';
import { Pesquiza } from '../models/pesquizar-ramal';

@Component({
  selector: 'app-pesquizar-ramal',
  templateUrl: './pesquizar-ramal.component.html',
  styleUrls: ['./pesquizar-ramal.component.scss']
})
export class PesquizarRamalComponent implements OnInit {

  pesquiza: Pesquiza[] = [];

  constructor() { }

  ngOnInit(): void {
    this.getRamais();
  }

  getRamais(){
    let pesquiza: Pesquiza ={}
  for(let i=0; i<10;i++){
   pesquiza.ramal = '660' + i;
   pesquiza.serial = 'LZKUY025' + i;
   pesquiza.ipCentral = '192.168.0' + i;
   this.pesquiza.push(pesquiza);
  }
  console.log(this.pesquiza);
  }
}
