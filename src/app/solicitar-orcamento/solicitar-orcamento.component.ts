import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Acabamentos, Propostas, APIService, Cores, ListAcabamentosQuery, ListCoresQuery, ListMateriaisQuery, ListTecnologiasQuery, Materiais, SituacaoOrcamento, Tecnologias, Chats} from '../API.service';
import { Storage } from 'aws-amplify';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-orcamento',
  templateUrl: './solicitar-orcamento.component.html',
  styleUrls: ['./solicitar-orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});
  formProposta: FormGroup = new FormGroup({});
  formChat: FormGroup = new FormGroup({});

  tecnologias: Array<Tecnologias> = [];
  cores: Array<Cores> = [];
  materiais: Array<Materiais> = [];
  acabamentos: Array<Acabamentos> = [];
  caminhoArquivo: string[] = [];
  propostas: Array<Propostas> = [];
  responsavelProposta: string = '';
  chats: Array<Chats> = [];


  idOrcamento: string = '';
  idProposta: string = '';

  constructor(private spinner: NgxSpinnerService, private api: APIService, public authenticator: AuthenticatorService, private router: Router, private activateRouter:ActivatedRoute) { }

  ngOnInit(): void {
    this.spinner.show();

    this.form = new FormGroup({
      id: new FormControl(null, Validators.required),
      titulo: new FormControl(null, Validators.required),
      usuario: new FormControl(null, Validators.required),
      escala: new FormControl(100, Validators.required),
      orcamentosTecnologiaId: new FormControl(null, Validators.required),
      orcamentosMaterialId: new FormControl(null, Validators.required),
      orcamentosAcabamentoId: new FormControl(null, Validators.required),
      orcamentosCorId: new FormControl(null, Validators.required),
      arquivo: new FormControl(null, Validators.required),
      observacao: new FormControl(null),
      situacao: new FormControl(SituacaoOrcamento.ATIVO, Validators.required),
    });

    this.formChat = new FormGroup({
      id: new FormControl(null, Validators.required),
      usuarioEnvio: new FormControl(null, Validators.required),
      idProposta: new FormControl(null, Validators.required),
      msg: new FormControl(null)
    });

    this.carregarTecnologias();
    this.carregarCores();
    this.carregarMateriais();
    this.carregarAcabamentos();

    this.activateRouter.queryParams.subscribe(param => {
      var id = param["id"];

      if(id) {
        this.api.GetOrcamentos(id).then(orcamento => {
          this.idOrcamento = orcamento.id;
          this.form.patchValue({
            id: orcamento.id,
            titulo: orcamento.titulo,
            usuario: orcamento.usuario,
            escala: orcamento.escala,
            orcamentosTecnologiaId: orcamento.Tecnologia?.id,
            orcamentosMaterialId: orcamento.Material?.id,
            orcamentosAcabamentoId: orcamento.Acabamento?.id,
            orcamentosCorId: orcamento.Cor?.id,
            arquivo: orcamento.arquivo,
            observacao: orcamento.observacao,
            situacao: orcamento.situacao,
          })

          this.formProposta = new FormGroup({
            id: new FormControl(null),
            prazo: new FormControl(1),
            valor: new FormControl(null),
            frete: new FormControl(null),
            orcamentosPropostaId: new FormControl(orcamento.id),
            propostasOrcamentoId: new FormControl(null),
            responsavelProposta: new FormControl(this.authenticator.user.username),
            idOrcamento: new FormControl(orcamento.id),
          });

          var filter;

          if(this.isParceiro()) {
            filter = {
              responsavelProposta: {
                eq: this.authenticator.user.username
              }, idOrcamento: {
                eq: orcamento.id
              }
            };
          } else {
            filter = {
              idOrcamento: {
                eq: orcamento.id
              }
            };
          }


          this.api.ListPropostas(filter).then(p => {
            var  proposta = (p as any).items[0];
            if(proposta && this.isParceiro()) {
              this.idProposta = proposta.id;
              this.formProposta.patchValue({
                id: proposta.id,
                prazo: proposta.prazo,
                valor: proposta.valor,
                frete: proposta.frete,
              })
              this.carregarChat(this.authenticator.user.username!, proposta.id)
            } else {
              this.propostas = (p as any).items;
            }
            this.obterUrlArquivo();
          })

        })
      } else {
        this.spinner.hide();
      }

    })
  }

  formatarMoeda(moedaString: String) {
    var moeda = new Number(moedaString)
    return moeda.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  }

  uploadStl(event:any) {
    this.spinner.show();
    const file:File = event.target.files[0];
    
    var nomeSplit = file.name.split('.')

    Storage.put('stl' + Math.floor(Math.random() * 100000) + 1 + "." + nomeSplit[nomeSplit.length - 1], file).then(a=> {
      this.form.get('arquivo')?.setValue(a.key)
      this.obterUrlArquivo();
      this.spinner.hide();
    })
  }

  salvarOrcamento() {
    this.form.get('usuario')?.setValue(this.authenticator.user.username);
    this.spinner.show();
    this.api.CreateOrcamentos(this.form.value).then(a => {
      this.spinner.hide();
      this.limparForm();
      this.router.navigate(['/orcamento']);
    });
    console.log(this.form.value) 
  }

  enviarProposta() {
    this.spinner.show();
    this.api.CreatePropostas(this.formProposta.value).then(a => {
      this.ngOnInit();
      this.spinner.hide();
    });
  }

  carregarChat(responsavelProposta: string, id: string) { 
    this.idProposta = id;

    var filter = {
      idProposta: {
        eq: id
      }
    };
    this.spinner.show();
    this.responsavelProposta = responsavelProposta;
    this.api.ListChats(filter).then(c=> {
      this.chats = (c as any).items; 
      this.spinner.hide();
    })
  }

  enviarMsgChat() {
    this.spinner.show();
    this.formChat.patchValue ({
      usuarioEnvio: this.authenticator.user.username,
      idProposta: this.idProposta,
    });

    this.api.CreateChats(this.formChat.value).then(()=> {
      this.spinner.hide();
      this.carregarChat(this.responsavelProposta, this.idProposta);
    })

  }

  limparForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl(null),
      usuario: new FormControl(null),
      escala: new FormControl(100),
      orcamentosTecnologiaId: new FormControl(null),
      orcamentosMaterialId: new FormControl(null),
      orcamentosAcabamentoId: new FormControl(null),
      orcamentosCorId: new FormControl(null),
      arquivo: new FormControl(null),
      observacao: new FormControl(null),
      situacao: new FormControl("ATIVO"),
    });
    this.caminhoArquivo = [];
  }

  obterUrlArquivo() { 
    this.spinner.show();
    Storage.get(this.form.get('arquivo')?.value).then(arquivo=> {
      this.spinner.hide();
      this.caminhoArquivo = [arquivo]
    }).catch(err => {
      console.log(err)
      this.spinner.hide();
    });
  }

  carregarCores() {
    this.api.ListCores().then((cor: ListCoresQuery) => {
      this.cores = (cor as any).items;
      this.cores.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
    });
  }

  carregarMateriais() {
    this.api.ListMateriais().then((material: ListMateriaisQuery) => {
      this.materiais = (material as any).items;
      this.materiais.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
    });
  }

  carregarAcabamentos() {
    this.api.ListAcabamentos().then((acabamento: ListAcabamentosQuery) => {
      this.acabamentos = (acabamento as any).items;
      this.acabamentos.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
    });
  }

  carregarTecnologias() {
    this.api.ListTecnologias().then((tecnologia: ListTecnologiasQuery) => {
      this.tecnologias = (tecnologia as any).items;
      this.tecnologias.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
    });
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

  formatarData(dataStr: string) {
    var data = new Date(dataStr)
    var dia = data.getDate().toString();
    var diaF = (dia.length == 1) ? '0' + dia : dia;
    var mes = (data.getMonth() + 1).toString();
    var mesF = (mes.length == 1) ? '0' + mes : mes;
    var anoF = data.getFullYear();

    var horas = ('0' + data.getHours()).slice(-2)
    var minutos =  ('0' + data.getMinutes()).slice(-2)

    return diaF + "/" + mesF + "/" + anoF + " " + horas + ":" + minutos;
  }

}
