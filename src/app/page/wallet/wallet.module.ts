import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { WalletPageRoutingModule } from './wallet-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WalletPageRoutingModule
  ],
  declarations: [WalletPageRoutingModule]
})
export class WalletPageModule {}
