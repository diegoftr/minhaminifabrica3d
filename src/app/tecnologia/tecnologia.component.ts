import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Tecnologias, APIService, ListTecnologiasQuery } from '../API.service';


@Component({
  selector: 'app-tecnologia',
  templateUrl: './tecnologia.component.html',
  styleUrls: ['./tecnologia.component.css']
})
export class TecnologiaComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  tecnologias: Array<Tecnologias> = [];


  constructor(private spinner: NgxSpinnerService,
    private api: APIService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(null),
      descricao: new FormControl(null)
    });

    this.listarTecnologias();

  }

  listarTecnologias() {
    this.spinner.show();
    this.api.ListTecnologias().then((tecnologia: ListTecnologiasQuery) => {
      this.tecnologias = (tecnologia as any).items;
      this.tecnologias.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

  salvarTecnologia() {
    if (this.form.get('id')?.value == null) {
      this.api.CreateTecnologias(this.form.value).then(a => {
        this.listarTecnologias();
        this.limparForm();
      });
    } else {
      this.api.UpdateTecnologias(this.form.value).then(a => {
        this.listarTecnologias();
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

  excluirTecnologia(id: string) {
    this.spinner.show();
    this.api.DeleteTecnologias({ id: id }).then(() => {
      this.listarTecnologias();
      this.spinner.hide();
    });
  }

  preencherTecnologia(id: string) {
    this.spinner.show();
    this.api.GetTecnologias(id).then(tecnologia => {
      this.form = new FormGroup({
        id: new FormControl(tecnologia.id),
        descricao: new FormControl(tecnologia.descricao)
      });
      this.spinner.hide();
    })
  }

}
