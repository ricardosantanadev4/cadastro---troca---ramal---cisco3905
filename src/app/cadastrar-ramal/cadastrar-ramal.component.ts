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
  auxObject = { cont: 50, data: [] }// auxObject RecebeUmObjetoComUmContadorValendo100eUmDataQueeUMaListaVazia
  listPesquiza: Pesquiza[];// listPesquiza eDoTipo Pesquiza QueeaInterfaceQueFoiCriadaEm pesquizar-ramal.ts
  populatePesquizar() {//MetodoQueGeraUmaListaComDadosFicticios
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

  // ConfiguracoesDoRetanguloDeSucesso
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

  // ConfiguracoesDoRetanguloDeErro
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

  // SeTodosOsCamposEstiveremValidosExibeoRetanguloDeSucesso.CasoContrarioExibeoRetanguloDeErro
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
