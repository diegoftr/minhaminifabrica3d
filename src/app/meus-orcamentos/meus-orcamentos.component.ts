import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { NgxSpinnerService } from 'ngx-spinner';
import { APIService, ListOrcamentosQuery, Orcamentos, SituacaoOrcamento } from '../API.service';

@Component({
  selector: 'app-meus-orcamentos',
  templateUrl: './meus-orcamentos.component.html',
  styleUrls: ['./meus-orcamentos.component.css']
})
export class MeusOrcamentosComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  orcamentos: Array<Orcamentos> = [];

  constructor(private spinner: NgxSpinnerService, private api: APIService, public authenticator: AuthenticatorService, private router: Router) { }

  ngOnInit(): void {
    this.carregarOrcamentos();

  }

  isAdmin() {
    return this.authenticator.user == null ? false : this.authenticator.user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] == 'admin';
  }

  isUsuario() {
    return !this.isAdmin() && !this.isParceiro();
  }

  isParceiro() {
    return this.authenticator.user == null ? false : this.authenticator.user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] == 'parceiro';
  }

  carregarOrcamento(id: string) {
    this.router.navigate(['/orcamento'], { queryParams: { id: id}});
  }

  formatarData(dataStr: string) {
    var data = new Date(dataStr)
    var dia = data.getDate().toString();
    var diaF = (dia.length == 1) ? '0' + dia : dia;
    var mes = (data.getMonth() + 1).toString();
    var mesF = (mes.length == 1) ? '0' + mes : mes;
    var anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
  }

  removerOrcamento(id: string) {
    this.spinner.show();
    var idJson = {id:id};

    this.api.DeleteOrcamentos(idJson).then(()=>{
      this.spinner.hide();
      this.carregarOrcamentos();
    })
  }

  carregarOrcamentos() {
    this.spinner.show();

    var filter;

    if (this.isParceiro()) {
      filter = {
        situacao: {
          eq: SituacaoOrcamento.ATIVO
        }
      };
    } else if(this.isAdmin()) {
      filter = undefined;
    } else {
      filter = {
        usuario: {
          eq: this.authenticator.user.username
        }, situacao: {
          eq: SituacaoOrcamento.ATIVO
        }
      };
    }

    this.api.ListOrcamentos(filter).then((orcamentos: ListOrcamentosQuery) => {
      this.orcamentos = (orcamentos as any).items;
      this.orcamentos.sort(function (a, b) {
        return ('' + a.createdAt).localeCompare(b.createdAt);
      })
      this.spinner.hide();
    });
  }

}
