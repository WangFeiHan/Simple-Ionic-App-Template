import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

import { AuthenticationService } from '../services/authenticate/authentication.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.page.html',
  styleUrls: ['./side-menu.page.scss'],
})
export class SideMenuPage implements OnInit {
  // Side menu item
  public pages = [
    { title: 'Home', url: '/side-menu/tabs/tabs/tab1' },
    { title: 'Member', url: '/side-menu/member' },
    { title: 'Notification', url: '/side-menu/notification' },
  ];

  constructor(private authService: AuthenticationService, public menuCtrl: MenuController) { }

  ngOnInit() {
  }

  /**
   * Logout app.
   *
   * @access [`Public`]
   *
   * @returns [`Void`]
   */
  public logout(): void {
    this.authService.logout();
    this.menuCtrl.close();
  }

}
