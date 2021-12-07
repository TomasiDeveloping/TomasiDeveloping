import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ProjectsComponent} from './projects/projects.component';
import {ContactComponent} from './contact/contact.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {ImpressumComponent} from './footer/impressum/impressum.component';
import {PrivacyComponent} from './footer/privacy/privacy.component';
import {GlasblaesereiComponent} from './projects/glasblaeserei/glasblaeserei.component';
import {GamingfactoryComponent} from './projects/gamingfactory/gamingfactory.component';
import {FelchenAppComponent} from './projects/felchen-app/felchen-app.component';
import {GameInventoryComponent} from './projects/game-inventory/game-inventory.component';
import {FishingLizenzManagerComponent} from './projects/fishing-lizenz-manager/fishing-lizenz-manager.component';
import {TomasiDevelopingComponent} from './projects/tomasi-developing/tomasi-developing.component';
import {FelchenWebappComponent} from './projects/felchen-webapp/felchen-webapp.component';
import {GuineaPigComponent} from './projects/guinea-pig/guinea-pig.component';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'projects/glasblaeserei-egli', component: GlasblaesereiComponent},
  {path: 'projects/gamingFactory', component: GamingfactoryComponent},
  {path: 'projects/felchenApp', component: FelchenAppComponent},
  {path: 'projects/gameInventory', component: GameInventoryComponent},
  {path: 'projects/fishingLizenzManager', component: FishingLizenzManagerComponent},
  {path: 'projects/tomasiDeveloping', component: TomasiDevelopingComponent},
  {path: 'projects/felchenWebApp', component: FelchenWebappComponent},
  {path: 'projects/guineaPig', component: GuineaPigComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
