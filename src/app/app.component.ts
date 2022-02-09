import { Component } from '@angular/core';
import { API, I18n } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { BaseComponent } from './base-component';

API.configure(awsconfig);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent extends BaseComponent {

  constructor(private router: Router, public authenticator: AuthenticatorService) {
    super();
    I18n.setLanguage('pt');
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }

  isAdmin() {
    return this.authenticator.user == null ? false : this.authenticator.user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] == 'admin';
  }

  isUsuario() {
    return this.authenticator.user == null ? false : this.authenticator.user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] == undefined;
  }

  isParceiro() {
    return this.authenticator.user == null ? false : this.authenticator.user.getSignInUserSession()?.getAccessToken().payload["cognito:groups"] == 'parceiro';
  }

  logout() {
    this.authenticator.signOut();
    this.group = '';
    this.router.navigate(['/home']);
  }

  acaoBtnOrcamento() {
    this.router.navigate(['/orcamento']);
  }

  acaoBtnMaterial() {
    this.router.navigate(['/material']);
  }

  acaoBtnLogin() {
    this.router.navigate(['/login']);
  }

  acaoBtnInicio() {
      this.router.navigate(['/home']);
  }

  acaoBtnAcabamento() {
    this.router.navigate(['/acabamento']);
  }

  acaoBtnTecnologia() {
    this.router.navigate(['/tecnologia']);
  }


  acaoBtnCor() {
    this.router.navigate(['/cor']);
  }
  

}