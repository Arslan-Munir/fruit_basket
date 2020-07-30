import { Component, OnInit } from '@angular/core';
import {NavigationOptions} from "~/app/models/navigation-options.model";

@Component({
  selector: 'ns-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

    title ="Add to cart";
    toNavigate = NavigationOptions.GoBack;

  constructor() { }

  ngOnInit(): void {
  }

}
