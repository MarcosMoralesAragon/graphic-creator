import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AccordionModule} from 'primeng/accordion';

import { FormsModule } from '@angular/forms';
import {PasswordModule} from 'primeng/password';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import { CreateComponent } from './components/create/create.component';
import { ListComponent } from './components/list/list.component';
import { GraphicComponent } from './components/graphic/graphic.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    GraphicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AccordionModule,
    PasswordModule,
    CardModule,
    ButtonModule,
    InputTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
