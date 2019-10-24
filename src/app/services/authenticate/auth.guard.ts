import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public auth: AuthenticationService) { }

  /**
   * Get authentication state.
   *
   * @access [`Public`]
   *
   * @returns [`Boolean`]
   */
  public canActivate(): boolean {
    return this.auth.isAuthenticated();
  }
}
