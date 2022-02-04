import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, Translations } from '@aws-amplify/ui-components';
import { API, I18n } from 'aws-amplify';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import awsconfig from '../aws-exports';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

API.configure(awsconfig);
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: CognitoUserInterface | undefined;
  group: String | undefined;
  authState!: AuthState;

  signUpFormFields: FormFieldTypes | undefined;
  signInFormFields: FormFieldTypes | undefined;

  constructor(private spinner: NgxSpinnerService, private _location: Location, private zone: NgZone
    , private ref: ChangeDetectorRef, private router: Router) {
    I18n.setLanguage('pt');
  }

  ngOnInit() {
    this.router.navigate(['/home']);
  }

  acaoBtnOrcamento() {
    this.router.navigate(['/orcamento']);
  }

  irTelaRegras() {
    this.zone.run(() => {
      this.router.navigate(['/regras']);
  });
  }

  acaoBtnInicio() {
      this.router.navigate(['/home']);
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}