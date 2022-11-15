import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
 {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)

  },
  {
    path: '',
    redirectTo: 'dashbord',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'data',
    loadChildren: () => import('./pages/data/data.module').then( m => m.DataPageModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'dashbord',
    loadChildren: () => import('./pages/dashbord/dashbord.module').then( m => m.DashbordPageModule)


  },
  {
    path: 'qr',
    loadChildren: () => import('./pages/qr/qr.module').then( m => m.QRPageModule),
    canActivate:[AuthGuard]

  },
  {
    path: 'booked',
    loadChildren: () => import('./pages/booked/booked.module').then( m => m.BookedPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/wishlist/wishlist.module').then( m => m.WishlistPageModule),
    canActivate:[AuthGuard]
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account.module').then( m => m.AccountPageModule),
    canActivate:[AuthGuard]
  },
  
 
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
