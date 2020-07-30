import {AfterViewInit, Component, ViewChild} from "@angular/core";
import {RadSideDrawerComponent} from "nativescript-ui-sidedrawer/angular";
import {RadSideDrawer} from "nativescript-ui-sidedrawer";
import {DrawerService} from "~/app/services/drawer.service";

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html"
})
export class AppComponent implements AfterViewInit {
    drawer: RadSideDrawer;

    @ViewChild(RadSideDrawerComponent, {static: false}) public drawerComponent: RadSideDrawerComponent;

    constructor(private drawerService: DrawerService) {
        this.drawerService.toOpenDrawer().subscribe(opt => {
            if(opt) {
                this.drawer.showDrawer();
            }
        });
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    public closeDrawer() {
        this.drawer.closeDrawer();
    }
}
