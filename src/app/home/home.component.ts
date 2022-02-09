import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit  {

  constructor(private router: Router) {
    super();
   }

  ngOnInit(): void {
  }

  acaoBtnOrcamento() {
    this.router.navigate(['/orcamento']);
  }

}
