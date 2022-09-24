import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ExploreContainerComponentModule } from 'src/app/explore-container/explore-container.module';
import { ContractPageRoutingModule } from './contract-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ContractPageRoutingModule
  ],
  declarations: [ContractPageRoutingModule]
})
export class ContractPageModule {}
