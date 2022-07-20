import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Pesquiza } from '../models/pesquizar-ramal';

@Component({
  selector: 'app-cadastrar-ramal',
  templateUrl: './cadastrar-ramal.component.html',
  styleUrls: ['./cadastrar-ramal.component.scss']
})
export class CadastrarRamalComponent implements OnInit {

  pesquiza: Pesquiza = {};
  constructor() { }
  // iniciarlizar o metodo atutomaticamente quando acessar a pagina, nao precisa de iniciarlizar manualmente
  ngOnInit(): void {
  }

  // se todos os camposdo FormGroup estiverem validos exibe a noficacao de sucesso, caso contrario exibe a notificacao de erro
  async Submit() {
    if (this.cadastrarRamal.valid) {
      console.log(this.pesquiza);
      await this.ToastSucess.fire({
        icon: 'success',
        title: 'Atualizado com sucesso!',
      })
    } else {
      console.log(this.pesquiza);
      await this.ToastError.fire({
        icon: 'error',
        title: 'Verifique os campos!',
      })
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
    timerProgressBar: false,
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
    timerProgressBar: false
  })

}
