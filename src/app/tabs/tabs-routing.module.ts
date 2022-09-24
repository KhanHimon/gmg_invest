import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../page/home/home-routing.module').then(m => m.HomePageRoutingModule)
      },
      {
        path: 'wallet',
        loadChildren: () => import('../page/wallet/wallet-routing.module').then(m => m.WalletPageRoutingModule)
      },
      {
        path: 'history',
        loadChildren: () => import('../page/history/history-routing.module').then(m => m.HistoryPageRoutingModule)
      },
      {
        path: 'contract',
        loadChildren: () => import('../page/contract/contract-routing.module').then(m => m.ContractPageRoutingModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
