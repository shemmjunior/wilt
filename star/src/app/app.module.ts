import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbSidebarModule, NbToastrModule } from '@nebular/theme';
import { WiltModule } from './wilt/wilt.module';
import { NbMenuModule } from '@nebular/theme';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthHttpInterceptor, AuthModule } from '@auth0/auth0-angular';
import { environment } from '../environments/environment';
import { InterceptorModule } from './inteceptors/interceptor.module';
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
    HttpClientModule,
    InterceptorModule,
    AuthModule.forRoot({
      domain: 'wiltx.us.auth0.com',
      clientId: environment.clientId,
    }),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
