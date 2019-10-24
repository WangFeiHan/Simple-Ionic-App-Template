import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', component: TabsPage,
    children: [
      { path: 'tab1', loadChildren: './tab1/tab1.module#Tab1PageModule', data: { preload: true } },
      { path: 'tab2', loadChildren: './tab2/tab2.module#Tab2PageModule', data: { preload: true } },
      { path: 'tab3', loadChildren: './tab3/tab3.module#Tab3PageModule', data: { preload: true } }
    ]
  },
  { path: '', redirectTo: 'tabs/tab1', pathMatch: 'full' }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})

export class TabsPageModule { }
