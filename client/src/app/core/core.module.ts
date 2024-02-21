import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SideNAVComponent } from './side-nav/side-nav.component';
import { FooterComponent } from './footer/footer.component';
import { InformationComponent } from './information/information.component';
import { ClrDatagridModule } from '@clr/angular';



@NgModule({
  declarations: [
    HeaderComponent,
    SideNAVComponent,
    FooterComponent,
    InformationComponent
  ],
  imports: [
    CommonModule,
    ClrDatagridModule
  ],
  exports:[
    HeaderComponent,
    SideNAVComponent,
    FooterComponent,
    InformationComponent
  ]
})
export class CoreModule { }
