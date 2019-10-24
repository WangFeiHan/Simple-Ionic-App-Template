import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SideMenuPage } from './side-menu.page';

const routes: Routes = [
  {
    path: '', component: SideMenuPage,
    children: [
      { path: 'tabs', loadChildren: '../tabs/tabs.module#TabsPageModule', data: { preload: true } },
      { path: 'member', loadChildren: './pages/member/member.module#MemberPageModule', data: { preload: true } },
      { path: 'notification', loadChildren: './pages/notification/notification.module#NotificationPageModule', data: { preload: true } }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SideMenuPage]
})
export class SideMenuPageModule { }
