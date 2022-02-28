import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CoffeeHeaderComponent } from './coffee-header/coffee-header.component';
import { CoffeeFooterComponent } from './coffee-footer/coffee-footer.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ProductComponent } from './header/product/product.component';
import { SellProductComponent } from './sell-product/sell-product.component';
import { DatetimeService } from './datetime.service';
import { UserInfoService } from './user-info.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CoffeeHeaderComponent,
    CoffeeFooterComponent,
    BodyContentComponent,
    ProductComponent,
    SellProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DatetimeService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
