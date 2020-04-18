import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SlidesComponent } from './slides/slides.component';
import { StartComponent } from './start/start.component';
import { LogoComponent } from './logo/logo.component';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Logo2Component } from './logo2/logo2.component';



@NgModule({
  declarations: [SlidesComponent, StartComponent, LogoComponent, Logo2Component],
  exports: [
    SlidesComponent,
    StartComponent,
    LogoComponent,
    Logo2Component
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ]
})
export class ComponentsModule { }
 