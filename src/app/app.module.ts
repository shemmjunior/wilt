import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { WiltModule } from './wilt/wilt.module';
import { NbMenuModule } from '@nebular/theme';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot({ name: 'default' }),
    NbMenuModule.forRoot(),
    NbToastrModule.forRoot(),
    WiltModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
