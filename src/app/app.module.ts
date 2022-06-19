import { RegisterComponent } from './login/register/register.component';
import { ShopGridComponent } from './shop-grid/shop-grid.component';
import { GeneralesModule } from './generales/generales.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { OurComponent } from './our/our.component';
import { ContactComponent } from './contact/contact.component';
import { LoginModule } from './login/login.module';
import { LoginPageComponent } from './login/login-page/login-page.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { VendedorModule } from './vendedor/vendedor.module';

@NgModule({
  declarations: [
    AppComponent,
    ShopGridComponent,
    OurComponent,
    ContactComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports:
    [
      AppRoutingModule,
      GeneralesModule,
      BrowserModule,
      RouterModule.forRoot([
        {path: 'shop-grid', component: ShopGridComponent},
        {path: 'our', component: OurComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'login-page', component: LoginPageComponent},
        {path: 'register', component: RegisterComponent},
        {path: 'shopping-cart', component: ShoppingCartComponent},
        {path: 'checkout', component: CheckoutComponent},

      ]),
      LoginModule,
      VendedorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
