import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Acabamentos, APIService, ListAcabamentosQuery } from '../API.service';


@Component({
  selector: 'app-acabamento',
  templateUrl: './acabamento.component.html',
  styleUrls: ['./acabamento.component.css']
})
export class AcabamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  acabamentos: Array<Acabamentos> = [];


  constructor(private spinner: NgxSpinnerService,
    private api: APIService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(null),
      descricao: new FormControl(null)
    });

    this.listarAcabamentos();

  }

  listarAcabamentos() {
    this.spinner.show();
    this.api.ListAcabamentos().then((acabamento: ListAcabamentosQuery) => {
      this.acabamentos = (acabamento as any).items;
      this.acabamentos.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

  salvarAcabamento() {
    if (this.form.get('id')?.value == null) {
      this.api.CreateAcabamentos(this.form.value).then(a => {
        this.listarAcabamentos();
        this.limparForm();
      });
    } else {
      this.api.UpdateAcabamentos(this.form.value).then(a => {
        this.listarAcabamentos();
        this.limparForm();
      });
    }
  }

  limparForm() {
    this.form = new FormGroup({
      id: new FormControl(null),
      descricao: new FormControl(null)
    });
  }

  excluirAcabamento(id: string) {
    this.spinner.show();
    this.api.DeleteAcabamentos({ id: id }).then(() => {
      this.listarAcabamentos();
      this.spinner.hide();
    });
  }

  preencherAcabamento(id: string) {
    this.spinner.show();
    this.api.GetAcabamentos(id).then(acabamento => {
      this.form = new FormGroup({
        id: new FormControl(acabamento.id),
        descricao: new FormControl(acabamento.descricao)
      });
      this.spinner.hide();
    })
  }

}
