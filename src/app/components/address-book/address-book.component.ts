import {Component, Host, OnInit} from '@angular/core';
import {AppComponent} from "~/app/app.component";
import {NavigationOptions} from "~/app/models/navigation-options.model";

@Component({
  selector: 'ns-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: ['./address-book.component.css']
})
export class AddressBookComponent implements OnInit {

    toNavigate = NavigationOptions.GoBack;

    constructor() {
    }

    ngOnInit(): void {
    }

}
