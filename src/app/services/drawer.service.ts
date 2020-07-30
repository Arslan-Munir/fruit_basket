import {Injectable} from "@angular/core";
import {Observable, Subject} from "rxjs";

@Injectable({providedIn: "root"})
export class DrawerService {

    private subject = new Subject<any>();

    constructor(){ }

    openDrawer(value: boolean) {
        this.subject.next(value);
    }

    toOpenDrawer(): Observable<any> {
        return this.subject.asObservable();
    }
}
