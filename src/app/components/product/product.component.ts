import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProductService} from "~/app/services/product.service";
import {Product} from "~/app/models/product.model";
import {NavigationOptions} from "~/app/models/navigation-options.model";

@Component({
  selector: 'ns-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  title: string;
  product: Product;
  toNavigate = NavigationOptions.GoBack;
  toDisplayPhoto: string;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
      let productId = this.route.snapshot.params['id'];
      this.product = this.productService.products.find(x=>x.id == productId);
      if(this.product){
          this.title = this.product.name;
          this.toDisplayPhoto = this.toDisplayPhoto? this.toDisplayPhoto : this.product.mainPhotoUrl;
      } else{
        alert("Product not found.");
      }
  }

  changePhoto(url: string){
      this.toDisplayPhoto = url;
  }

  addToCart(){
      this.router.navigateByUrl('add-to-cart');
  }
}
