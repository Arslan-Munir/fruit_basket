import {Component, OnInit} from '@angular/core';
import {Page} from '@nativescript/core/ui/page/page';
import {Router} from "@angular/router";
import { RouterExtensions } from '@nativescript/angular/router';

@Component({
    selector: 'ns-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    isBusy: boolean = false;

    constructor(private page: Page, private router: RouterExtensions) {
    }

    ngOnInit(): void {
        this.page.actionBarHidden = true;
    }

    login() {
        this.isBusy = true;
        this.router.navigateByUrl("/home");
        this.isBusy = false;

        // setTimeout(() =>
        //     {
        //     }, 2000);
    }

}
