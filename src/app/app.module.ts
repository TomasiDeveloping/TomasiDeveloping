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
import { LightboxModule } from 'ngx-lightbox';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { FelchenWebappComponent } from './projects/felchen-webapp/felchen-webapp.component';
import { GuineaPigComponent } from './projects/guinea-pig/guinea-pig.component';
import { ExpenseTrackerComponent } from './projects/expense-tracker/expense-tracker.component';
import { SwissWatersComponent } from './projects/swiss-waters/swiss-waters.component';
import {GalleryModule} from "ng-gallery";
import {DaettwilerPond} from "./projects/daetwiller-pond/daettwiler-pond.component";




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
    GuineaPigComponent,
    ExpenseTrackerComponent,
    SwissWatersComponent,
    DaettwilerPond
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        NgxNavbarModule,
        ReactiveFormsModule,
      HttpClientModule,
      NgxSpinnerModule,
      LightboxModule,
      NgxScrollTopModule,
      GalleryModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
