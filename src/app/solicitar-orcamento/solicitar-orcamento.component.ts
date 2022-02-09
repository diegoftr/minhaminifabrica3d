import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { Acabamentos, APIService, Cores, ListAcabamentosQuery, ListCoresQuery, ListMateriaisQuery, ListTecnologiasQuery, Materiais, Tecnologias} from '../API.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orcamento',
  templateUrl: './solicitar-orcamento.component.html',
  styleUrls: ['./solicitar-orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  tecnologias: Array<Tecnologias> = [];
  cores: Array<Cores> = [];
  materiais: Array<Materiais> = [];
  acabamentos: Array<Acabamentos> = [];

  constructor(private spinner: NgxSpinnerService,
    private route: ActivatedRoute,
    private router: Router,
    private api: APIService,
    private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      id: new FormControl(null),
      titulo: new FormControl(null),
      login: new FormControl(null),
      
      Tecnologia: new FormControl(null),
      Material: new FormControl(null),
      Acabamento: new FormControl(null),
      Cor: new FormControl(null),

    });

    this.carregarTecnologias();
    this.carregarCores();
    this.carregarMateriais();
    this.carregarAcabamentos();
  }

  salvarOrcamento() {
    console.log(this.form.value)
  }

  carregarCores() {
    this.spinner.show();
    this.api.ListCores().then((cor: ListCoresQuery) => {
      this.cores = (cor as any).items;
      this.cores.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

  carregarMateriais() {
    this.spinner.show();
    this.api.ListMateriais().then((material: ListMateriaisQuery) => {
      this.materiais = (material as any).items;
      this.materiais.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

  carregarAcabamentos() {
    this.spinner.show();
    this.api.ListAcabamentos().then((acabamento: ListAcabamentosQuery) => {
      this.acabamentos = (acabamento as any).items;
      this.acabamentos.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

  carregarTecnologias() {
    this.spinner.show();
    this.api.ListTecnologias().then((tecnologia: ListTecnologiasQuery) => {
      this.tecnologias = (tecnologia as any).items;
      this.tecnologias.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

}
