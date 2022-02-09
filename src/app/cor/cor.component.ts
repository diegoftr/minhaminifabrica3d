import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Cores, APIService, ListCoresQuery } from '../API.service';


@Component({
  selector: 'app-cor',
  templateUrl: './cor.component.html',
  styleUrls: ['./cor.component.css']
})
export class CorComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  cores: Array<Cores> = [];


  constructor(private spinner: NgxSpinnerService,
    private api: APIService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(null),
      descricao: new FormControl(null)
    });

    this.listarCores();

  }

  listarCores() {
    this.spinner.show();
    this.api.ListCores().then((cor: ListCoresQuery) => {
      this.cores = (cor as any).items;
      this.cores.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
      })
      this.spinner.hide();
    });
  }

  salvarCor() {
    if (this.form.get('id')?.value == null) {
      this.api.CreateCores(this.form.value).then(a => {
        this.listarCores();
        this.limparForm();
      });
    } else {
      this.api.UpdateCores(this.form.value).then(a => {
        this.listarCores();
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

  excluirCor(id: string) {
    this.spinner.show();
    this.api.DeleteCores({ id: id }).then(() => {
      this.listarCores();
      this.spinner.hide();
    });
  }

  preencherCor(id: string) {
    this.spinner.show();
    this.api.GetCores(id).then(cor => {
      this.form = new FormGroup({
        id: new FormControl(cor.id),
        descricao: new FormControl(cor.descricao)
      });
      this.spinner.hide();
    })
  }

}
