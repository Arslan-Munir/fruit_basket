import {Component, Input, OnInit} from '@angular/core';
import {DrawerService} from "~/app/services/drawer.service";
import {NavigationOptions} from "~/app/models/navigation-options.model";
import { RouterExtensions } from '@nativescript/angular/router';

@Component({
  selector: 'ns-action-bar',
  templateUrl: './action-bar.component.html',
  styleUrls: ['./action-bar.component.css']
})
export class ActionBarComponent implements OnInit {

    @Input('title') title: string;
    @Input('android-icon') androidIcon: string;
    @Input('ios-icon') iosIcon = "";
    @Input('to-navigate') toNavigate: NavigationOptions;

    constructor(private drawerService: DrawerService, private routerExtensions: RouterExtensions) {
    }

    ngOnInit(): void {
    }

    public openDrawer() {
        this.drawerService.openDrawer(true);
    }

    public goBack(){
        this.routerExtensions.back();
    }

    public performAction(){
        if(this.toNavigate === NavigationOptions.OpenDrawer){
            this.openDrawer();
        }
        else if(this.toNavigate === NavigationOptions.GoBack){
            this.goBack();
        }
        else {
            alert("Invalid option");
        }
    }
}
