import {ItemEventData} from "tns-core-modules/ui/list-view"
import {Component, OnInit} from '@angular/core';
import {Product} from "~/app/models/product.model";
import {ProductService} from "~/app/services/product.service";
import {Router} from "@angular/router";
import {ListViewEventData, LoadOnDemandListViewEventData, RadListView} from "nativescript-ui-listview";
import {NavigationOptions} from "~/app/models/navigation-options.model";
import {Observable} from "rxjs";

@Component({
    selector: 'ns-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    products: Product[] = [];
    isLoading: boolean;
    toNavigate = NavigationOptions.OpenDrawer;

    constructor(private route: Router, private productService: ProductService) {
        this.products = this.productService.products;
        const vm = new Observable();
    }

    ngOnInit(): void {
    }

    view(product: Product) {
        this.route.navigateByUrl("/product/" + product.id);
        // alert(product.id);
    }

    public onPullToRefreshInitiated(args: ListViewEventData) {
        this.productService.products.push(new Product(110, "Bowl of Fresh Salad", 10000,
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, 'https://image.shutterstock.com/image-photo/bowl-healthy-fresh-fruit-salad-600w-264191042.jpg',
            [
                'https://image.shutterstock.com/image-photo/fruit-salad-go-600w-283295216.jpg',
                'https://image.shutterstock.com/image-photo/delicious-fruit-salad-jar-on-600w-769659859.jpg',
                'https://image.shutterstock.com/image-photo/healthy-vegetarian-fresh-fruit-summer-600w-1460917391.jpg',
                'https://image.shutterstock.com/image-photo/exotic-fruit-salad-served-half-600w-1140303857.jpg'
            ]));
        this.products = this.productService.products.reverse();

        setTimeout(function () {
            const listView = args.object;
            listView.notifyPullToRefreshFinished();
        }, 1000);
    }

    public onLoadMoreItemsRequested(args: LoadOnDemandListViewEventData) {
        const that = new WeakRef(this);
        const listView: RadListView = args.object;
        if (this.products.length > 0) {
            setTimeout(function () {
                that.get().addMoreItemsFromSource(2);
                listView.notifyLoadOnDemandFinished();
            }, 1500);
        } else {
            args.returnValue = false;
            listView.notifyLoadOnDemandFinished(true);
        }
    }

    public addMoreItemsFromSource(chunkSize: number) {
        let newItems = this.products.splice(0, chunkSize);
    }
}
