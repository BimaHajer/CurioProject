import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { ClarityModule, ClrDatagridModule } from '@clr/angular';
import '@cds/core/icon/register.js';
import { ClarityIcons, userIcon ,gridViewIcon, libraryIcon, dollarIcon, viewListIcon, plusIcon, rulerPencilIcon, treeViewIcon, volumeIcon, bookmarkIcon } from '@cds/core/icon';
import {  ReactiveFormsModule } from '@angular/forms';


ClarityIcons.addIcons(userIcon,gridViewIcon,libraryIcon,dollarIcon,viewListIcon,plusIcon,rulerPencilIcon,treeViewIcon,volumeIcon,bookmarkIcon)

@NgModule({
  declarations: [
    AppComponent,
   
    
  ],
  imports: [
    BrowserModule, ClarityModule,BrowserAnimationsModule,HttpClientModule,
     AppRoutingModule,ClrDatagridModule,
     CoreModule,ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
