import {Component, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";
import {FormControl} from '@angular/forms';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'app-search-beer',
    templateUrl: './search-beer.component.html',
    styleUrls: ['./search-beer.component.scss']
})
export class SearchBeerComponent implements OnInit {

    termInput = new FormControl();

    constructor(private http: Http) {
    }

    ngOnInit() {
        this.termInput.valueChanges.switchMap(term => {
            return this.search(term);
        }).subscribe(res => {
            console.log(res.json());
        });
    }

    search(term) {
        return this.http.get(`/api/v2/search?key=a81493ef1e81335e3dc2fc1d5e394053&type=beer&q=${term}`);
    }

    onKey(value) {
        console.log(value);
    }
}
