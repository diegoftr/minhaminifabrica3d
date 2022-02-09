import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { Materiais, APIService, ListMateriaisQuery } from '../API.service';


@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  materiais: Array<Materiais> = [];


  constructor(private spinner: NgxSpinnerService,
    private api: APIService) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      id: new FormControl(null),
      descricao: new FormControl(null)
    });

    this.listarMateriais();

  }

  listarMateriais() {
    this.spinner.show();
    this.api.ListMateriais().then((material: ListMateriaisQuery) => {
      this.materiais = (material as any).items;
      this.materiais.sort(function (a, b) {
        return ('' + a.descricao).localeCompare(b.descricao);
    })
      this.spinner.hide();
    });
  }

  salvarMaterial() {
    if (this.form.get('id')?.value == null) {
      this.api.CreateMateriais(this.form.value).then(a => {
        this.listarMateriais();
        this.limparForm();
      });
    } else {
      this.api.UpdateMateriais(this.form.value).then(a => {
        this.listarMateriais();
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

  excluirMaterial(id: string) {
    this.spinner.show();
    this.api.DeleteMateriais({ id: id }).then(() => {
      this.listarMateriais();
      this.spinner.hide();
    });
  }

  preencherMaterial(id: string) {
    this.spinner.show();
    this.api.GetMateriais(id).then(material => {
      this.form = new FormGroup({
        id: new FormControl(material.id),
        descricao: new FormControl(material.descricao)
      });
      this.spinner.hide();
    })
  }

}
