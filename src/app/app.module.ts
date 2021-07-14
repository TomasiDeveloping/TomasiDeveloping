import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {AppRoutingModule} from './app-routing.module';
import { NavigationComponent } from './navigation/navigation.component';
import {NgxNavbarModule} from 'ngx-bootstrap-navbar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './footer/impressum/impressum.component';
import { PrivacyComponent } from './footer/privacy/privacy.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {NgxSpinnerModule} from 'ngx-spinner';
import { GlasblaesereiComponent } from './projects/glasblaeserei/glasblaeserei.component';
import { GamingfactoryComponent } from './projects/gamingfactory/gamingfactory.component';
import { FelchenAppComponent } from './projects/felchen-app/felchen-app.component';
import { GameInventoryComponent } from './projects/game-inventory/game-inventory.component';
import { FishingLizenzManagerComponent } from './projects/fishing-lizenz-manager/fishing-lizenz-manager.component';
import { TomasiDevelopingComponent } from './projects/tomasi-developing/tomasi-developing.component';
import {QRCodeModule} from 'angular2-qrcode';
import { LightboxModule } from 'ngx-lightbox';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FelchenWebappComponent } from './projects/felchen-webapp/felchen-webapp.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent,
    AboutComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent,
    ImpressumComponent,
    PrivacyComponent,
    GlasblaesereiComponent,
    GamingfactoryComponent,
    FelchenAppComponent,
    GameInventoryComponent,
    FishingLizenzManagerComponent,
    TomasiDevelopingComponent,
    FelchenWebappComponent,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxNavbarModule,
        ReactiveFormsModule,
      HttpClientModule,
      NgxSpinnerModule,
      QRCodeModule,
      LightboxModule,
      NgxScrollTopModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
