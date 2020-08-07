import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import {LoginComponent} from "~/app/components/login/login.component";
import {HomeComponent} from "~/app/components/home/home.component";
import {AddressBookComponent} from "~/app/components/address-book/address-book.component";
import {ProductComponent} from "~/app/components/product/product.component";
import {AddToCartComponent} from "~/app/components/add-to-cart/add-to-cart.component";

const routes: Routes = [
    { path: "", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "product/:id", component: ProductComponent },
    { path: "add-to-cart", component: AddToCartComponent },
    { path: "address-book", component: AddressBookComponent },
    { path: "login", component: LoginComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
