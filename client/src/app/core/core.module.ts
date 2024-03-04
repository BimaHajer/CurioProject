import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNAVComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';

import { ClrDatagridModule } from '@clr/angular';
import { ClarityModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon ,gridViewIcon, libraryIcon, dollarIcon, viewListIcon } from '@cds/core/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
ClarityIcons.addIcons(userIcon,gridViewIcon,libraryIcon,dollarIcon,viewListIcon);


@NgModule({
  declarations: [
    HeaderComponent,
    SideNAVComponent,
    FooterComponent,
    InformationComponent
  ],
  imports: [
    CommonModule, ClarityModule ,ClrDatagridModule,BrowserAnimationsModule,
   
  ],
  exports:[
    HeaderComponent,
    SideNAVComponent,
    FooterComponent,
    InformationComponent
  ]
})
export class CoreModule { }
