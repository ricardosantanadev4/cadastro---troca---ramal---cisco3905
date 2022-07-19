import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pesquiza } from '../models/pesquizar-ramal';

@Component({
  selector: 'app-cadastrar-ramal',
  templateUrl: './cadastrar-ramal.component.html',
  styleUrls: ['./cadastrar-ramal.component.scss']
})
export class CadastrarRamalComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {// InicializaoMetodo
    this.populatePesquizar()
  }

  // auxObject recebeu um objeto contendo um contador e um array
  auxObject = { cont: 5, data: [] }

  listPesquiza: Pesquiza[];

  // gera os dados ficticios da tabela
  populatePesquizar() {
    for (let index = 0; index < this.auxObject.cont; index++) {
      this.auxObject.data.push({
        ramal: '686' + index,
        serial: index + 'lxkerfzlcsoyuib',
        ipCentral: '192.168.169.16' + index
      });
      this.listPesquiza = this.auxObject.data;
    }
  }

  // so sera valido se todos os campos do FormGroupEstiverem Preenchidos
  cadastrarRamal = new FormGroup({
    ramal: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    serial: new FormControl('', [Validators.required]),
    ipCentral: new FormControl('', [Validators.required]),
  })

  // notificacoes de sucesso
  ToastSucess = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    background: '#4DB8EA',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true
  })

  // notificacoes de erro
  ToastError = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    background: '#f27474',
    customClass: {
      popup: 'colored-toast'
    },
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true
  })

  // se todos os camposdo FormGroup estiverem validos exibe a noficacao de sucesso, caso contrario exibe a notificacao de erro
  async salvar() {
    if (this.cadastrarRamal.valid) {
      await this.ToastSucess.fire({
        icon: 'success',
        title: 'Atualizado com sucesso!',
      })
    } else {
      await this.ToastError.fire({
        icon: 'error',
        title: 'Verifique os campos!',
      })
    }
  }


}
