import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { APIService, ListOrcamentosQuery, ListPropostasQuery } from '../API.service';

import { groupBy, mergeMap, of, reduce, toArray, map } from "rxjs";


@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  orcamentos: { data: string; lista: string[] }[] = [];
  propostas: { data: string; lista: string[] }[] = [];

  public lineChartData: ChartConfiguration['data'] = {
    datasets: [
      {
        data: [],
        label: 'Orçamentos recebidos',
        fill: 'origin',
      }
    ],
    labels: []
  };

  constructor(private api: APIService) { }

  ngOnInit(): void {
    this.api.ListOrcamentos().then((orcamentos: ListOrcamentosQuery) => {
      this.api.ListPropostas().then((propostas: ListPropostasQuery) => {
      

      of(...(orcamentos as any).items).pipe(
        groupBy((p: any) => p.createdAt.split('T')[0]),
        mergeMap(group$ =>
          group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
        ),
        map(arr => ({ 
          data: arr[0], 
          lista: arr.slice(1) })),
        toArray()
      ).subscribe(p => this.orcamentos = p);

      of(...(propostas as any).items).pipe(
        groupBy((p: any) => p.createdAt.split('T')[0]),
        mergeMap(group$ =>
          group$.pipe(reduce((acc, cur) => [...acc, cur], [`${group$.key}`]))
        ),
        map(arr => ({ 
          data: arr[0], 
          lista: arr.slice(1) })),
        toArray()
      ).subscribe(p => this.propostas = p);

      this.lineChartData = {
        datasets: [
          {
            data: this.getListaValores(this.orcamentos),
            label: 'Orçamentos recebidos',
            fill: 'origin',
          },{
            data: this.getListaValores(this.propostas),
            label: 'Propostas recebidas',
            fill: 'origin',
          }
        ],
        labels: this.getListaDatas(this.orcamentos)
      }
    });
  })
  }

  getListaValores(lista:{ data: string; lista: string[] }[]) {
    var param: number[] = [];

    lista.forEach(element => {
      param.push(element.lista.length)
    });
    return param;
  }
  

  getListaDatas(lista:{ data: string; lista: string[] }[]) {
    var param: string[] = [];

    lista.forEach(aasd=> {
      param.push(aasd.data)
    })
    return param;
  }


  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chart?: BaseChartDirective;


}
