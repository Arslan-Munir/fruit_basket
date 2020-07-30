import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import {NativeScriptUISideDrawerModule} from "nativescript-ui-sidedrawer/angular";
import {IfAndroidDirective, IfIosDirective} from "~/app/directives/if-platform.directive";
import { AddressBookComponent } from './components/address-book/address-book.component';
import { ActionBarComponent } from './components/action-bar/action-bar.component';
import {ProductService} from "~/app/services/product.service";
import {DrawerService} from "~/app/services/drawer.service";
import {NativeScriptUIListViewModule} from "nativescript-ui-listview/angular";
import { ProductComponent } from './components/product/product.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
// import { registerElement } from "nativescript-angular";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent,
        AddressBookComponent,
        IfAndroidDirective,
        IfIosDirective,
        ActionBarComponent,
        ProductComponent,
        AddToCartComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers: [
        ProductService,
        DrawerService
    ]
})
export class AppModule {
    constructor() {
        // registerElement("WebImage", () => require("nativescript-web-image-cache").WebImage);
    }
}
