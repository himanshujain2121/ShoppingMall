import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
// component
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FashionComponent } from './fashion/fashion.component';
import { JewellaryComponent } from './jewellary/jewellary.component';
import { SportsComponent } from './sports/sports.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FashionListComponent } from './fashion/fashion-list/fashion-list.component';
// service
import { FashionListService } from './service/fashion-list/fashion-list.service';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    FashionComponent,
    JewellaryComponent,
    SportsComponent,
    PagenotfoundComponent,
    FashionListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'fashion', component: FashionComponent },
      { path: 'jewellary', component: JewellaryComponent },
      { path: 'sports', component: SportsComponent },
      { path: '', redirectTo: 'fashion', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])

  ],
  providers: [ 
      FashionListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
