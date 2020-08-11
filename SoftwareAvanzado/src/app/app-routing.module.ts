import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardUnloggedService } from './app-security/auth-unlogged.service';
import { LayoutComponent } from './unlogged/layout/layout.component';
import { TokenBearerLayoutComponent } from './token-bearer/token-bearer-layout/token-bearer-layout.component'
import { BasicAuthenticationLayoutComponent } from './basic-authentication/basic-authentication-layout/basic-authentication-layout.component'

const routes: Routes = [
  { 
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuardUnloggedService], 
    loadChildren: () => import('./unlogged/unlogged.module').then(m => m.UnloggedModule) 
  },
  { 
    path: 'bearer',
    component: TokenBearerLayoutComponent,
    canActivate: [AuthGuardUnloggedService], 
    loadChildren: () => import('./token-bearer/token-bearer.module').then(m => m.TokenBearerModule) 
  },
  { 
    path: 'basic',
    component: BasicAuthenticationLayoutComponent,
    canActivate: [AuthGuardUnloggedService], 
    loadChildren: () => import('./basic-authentication/basic-authentication-routing.module').then(m => m.BasicAuthenticationRoutingModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
