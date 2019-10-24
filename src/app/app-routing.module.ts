import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './services/authenticate/auth.guard';
import { CustomPreload } from './class/custom-preload';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './guest/login/login.module#LoginPageModule', data: { preload: true } },
  { path: 'register', loadChildren: './guest/register/register.module#RegisterPageModule', data: { preload: true } },
  { path: 'side-menu', canActivate: [AuthGuard], loadChildren: './side-menu/side-menu.module#SideMenuPageModule', data: { preload: true } }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: CustomPreload, // Lazy loading
      // enableTracing: true // Only 4 debug
    })
  ],
  exports: [RouterModule],
  providers: [CustomPreload]
})
export class AppRoutingModule { }
