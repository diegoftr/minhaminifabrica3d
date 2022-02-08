import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService} from '../API.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-orcamento',
  templateUrl: './solicitar-orcamento.component.html',
  styleUrls: ['./solicitar-orcamento.component.css']
})
export class OrcamentoComponent implements OnInit {

  form: FormGroup = new FormGroup({});

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
      
      identificadorAposta: new FormControl(null),
      dezenas: new FormArray([]),
      situacao: new FormControl(null),
    });
  }

}
