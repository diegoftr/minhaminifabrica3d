import { Component } from '@angular/core';
import { API, I18n } from 'aws-amplify';
import awsconfig from '../aws-exports';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { Auth } from 'aws-amplify';

API.configure(awsconfig);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  group: String | undefined;


  constructor(private router: Router, public authenticator: AuthenticatorService) {
    I18n.setLanguage('pt');
    
  }

  ngOnInit() {
    Auth.currentUserPoolUser()
    .then(data => {
      this.group = data.signInUserSession.accessToken.payload["cognito:groups"] != undefined ? data.signInUserSession.accessToken.payload["cognito:groups"][0] : '';
    })
    .catch(err => console.log(err));

    this.router.navigate(['/home']);
  }

  acaoBtnOrcamento() {
    this.router.navigate(['/orcamento']);
  }

  acaoBtnLogin() {
    this.router.navigate(['/login']);
  }

  acaoBtnInicio() {
      this.router.navigate(['/home']);
  }

}