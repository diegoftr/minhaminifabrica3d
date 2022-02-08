import { Component, ChangeDetectorRef, NgZone } from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState, Translations } from '@aws-amplify/ui-components';
import { API, I18n } from 'aws-amplify';
import { FormFieldTypes } from '@aws-amplify/ui-components';
import awsconfig from '../../aws-exports';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';

API.configure(awsconfig);
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  user: CognitoUserInterface | undefined;
  authState!: AuthState;

  signUpFormFields: FormFieldTypes | undefined;
  signInFormFields: FormFieldTypes | undefined;
  

  authScreenLabels = {
    pt: {
      [Translations.SIGN_IN_HEADER_TEXT]: "Entre na sua conta",
      [Translations.SIGN_IN_ACTION]: "Acessar",
      [Translations.SIGN_UP_PASSWORD_PLACEHOLDER]: "Senha",
      [Translations.SIGN_UP_USERNAME_PLACEHOLDER]: "Usuário",
      [Translations.USERNAME_PLACEHOLDER]: "Digite seu usuario",
      [Translations.PASSWORD_PLACEHOLDER]: "Digite sua senha",
      [Translations.FORGOT_PASSWORD_TEXT]: "Esqueceu sua senha?",
      [Translations.RESET_PASSWORD_TEXT]: "Resetar senha",
      [Translations.NO_ACCOUNT_TEXT]: "Sem conta?",
      [Translations.CREATE_ACCOUNT_TEXT]: "Crie sua conta",
      [Translations.SIGN_UP_HEADER_TEXT]: "Crie sua conta agora",
      [Translations.PHONE_LABEL]: "Número do telefone",
      [Translations.SIGN_UP_HAVE_ACCOUNT_TEXT]: "Ja tem uma conta?",
      [Translations.SIGN_IN_TEXT]: "Entre agora",
      [Translations.SIGN_OUT]: "Sair",
      [Translations.USERNAME_LABEL]: "Usuário *",
      [Translations.PASSWORD_LABEL]: "Senha *",
      [Translations.PHONE_PLACEHOLDER]: "(61)99999-9999",
      [Translations.SIGN_UP_SUBMIT_BUTTON_TEXT]: "Criar Conta",
      [Translations.VERIFY_CONTACT_PHONE_LABEL]: "Número do telefone",
    }
  };

  constructor(private spinner: NgxSpinnerService, private _location: Location, private zone: NgZone
    , private ref: ChangeDetectorRef, private router: Router) { 
      I18n.setLanguage('pt');
    I18n.putVocabularies(this.authScreenLabels);

    }

  ngOnInit(): void {

    this.signInFormFields = [
      { type: "email", label: "E-mail *", placeholder: "seu@email.com", required: true, },
      { type: "password", label: "Password *", placeholder: "senha", required: true, }
    ];

    this.signUpFormFields = [
      { type: "username", label: "Usuário *", placeholder: "", required: true, },
      { type: "email", label: "E-mail *", placeholder: "seu@email.com", required: true, },
      { type: "password", label: "Password *", placeholder: "Senha", required: true, },
      { type: "custom:chave_pix", label: "Chave Pix", placeholder: "Usada para depositar os premios", required: false, },
      { type: "custom:num_celular", label: "Celular", placeholder: "61 99999-9999", required: true, }
    ];

   
  }

  ngOnDestroy() {
    return onAuthUIStateChange;
  }

}
