import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { BaseComponent } from '../base-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent extends BaseComponent implements OnInit  {

  constructor(private router: Router, public authenticator: AuthenticatorService) {
    super();
   }

  ngOnInit(): void {
  }

  acaoBtnOrcamento() {
    this.router.navigate(['/orcamento']);
  }

  isUsuario() {
    return this.authenticator.user == null ? false : this.authenticator.user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] == undefined;
  }

}
