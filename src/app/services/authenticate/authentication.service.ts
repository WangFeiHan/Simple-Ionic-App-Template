import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Storage } from '../../class/storage';

const TOKEN_KEY = 'AUTHTOKEN';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {
  private storage: Storage;
  public authenticationState = new BehaviorSubject(false);

  constructor() {
    this.storage = new Storage();
    this.checkToken();
  }

  /**
   * Used to check automatic login.
   *
   * @access [`Public`]
   *
   * @returns [`Void`]
   */
  public checkToken(): void {
    const account = this.storage.getValue(TOKEN_KEY);

    if (account !== undefined && account != null && account && account !== '') {
      this.authenticationState.next(true);
    } else {
      // TODO Alert not remember account.
    }
  }

  /**
   * Add account to localstorage and set authentication state to [true].
   *
   * @access [`Public`]
   *
   * @param account [`String`] Login account.
   *
   * @returns [`Void`]
   */
  public login(account: string) {
    this.storage.setValue(TOKEN_KEY, account);
    this.authenticationState.next(true);
  }

  /**
   * Remove account from localStorage and set authentication state to [false].
   *
   * @access [`Public`]
   *
   * @returns [`Void`]
   */
  public logout(): void {
    this.storage.remove(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  /**
   * Get authentication state.
   *
   * @access [`Public`]
   *
   * @returns [`Boolean`]
   */
  public isAuthenticated(): boolean {
    return this.authenticationState.value;
  }
}
