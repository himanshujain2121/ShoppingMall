import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
// component
import { AppComponent } from './app.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { FashionComponent } from './fashion/fashion.component';
import { JewellaryComponent } from './jewellary/jewellary.component';
import { SportsComponent } from './sports/sports.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FashionListComponent } from './fashion/fashion-list/fashion-list.component';
import { ShirtVarietyComponent } from './fashion/shirt-variety/shirt-variety.component';
import { ShirtDescriptionComponent } from './fashion/shirt-description/shirt-description.component';
// service
import { FashionListService } from './service/fashion-list/fashion-list.service';
import { LoginServiceComponent } from './login-service/login-service.component';
import { LoginServiceService } from './service/login/login-service.service';


@NgModule({
  declarations: [
    AppComponent,
    ShoppingComponent,
    FashionComponent,
    JewellaryComponent,
    SportsComponent,
    PagenotfoundComponent,
    FashionListComponent,
    ShirtVarietyComponent,
    ShirtDescriptionComponent,
    LoginServiceComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'fashion', component: FashionComponent },
      { path: 'fashion/shirt-variety', component: ShirtVarietyComponent },
      { path: 'fashion/shirt-variety/:id', component: ShirtDescriptionComponent },
      { path: 'jewellary', component: JewellaryComponent },
      { path: 'sports', component: SportsComponent },
      { path: 'login', component: LoginServiceComponent },
      { path: '', redirectTo: 'fashion', pathMatch: 'full' },
      { path: '**', component: PagenotfoundComponent }
    ])

  ],
  providers: [ 
      FashionListService,
      LoginServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
