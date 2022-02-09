import { Auth } from 'aws-amplify';

export class BaseComponent {
    group: String | undefined;

    constructor() {
        Auth.currentUserPoolUser()
            .then(data => {
                this.group = data.signInUserSession.accessToken.payload["cognito:groups"] != undefined ? data.signInUserSession.accessToken.payload["cognito:groups"][0] : '';
            })
            .catch(err => console.log(err));
    }
    
}