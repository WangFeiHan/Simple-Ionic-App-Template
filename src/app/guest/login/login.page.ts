import { Component, OnInit } from '@angular/core';

import { AuthenticationService } from 'src/app/services/authenticate/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private authService: AuthenticationService) { }

  ngOnInit() {
  }

  /**
   * Login app.
   *
   * @access [`Public`]
   *
   * @returns [`Void`]
   */
  public login(): void {
    this.authService.login('Frank');
  }
}
