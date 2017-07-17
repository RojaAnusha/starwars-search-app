import {Injectable} from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

@Injectable()

export class StarwarsService {
	constructor(private http:Http) {

	}

	loginCheck(username) {
		return this.http.get(`https://swapi.co/api/people/?search=${username}`).map(res=> res.json());
	}
	searchPlanetsOrVehicles(searchText,searchType){
	return this.http.get(`http://swapi.co/api/${searchType}/?search=${searchText}`).map(res=> res.json());
	}

	authenticated() {
		return localStorage.getItem("profile") ? true : false;
	}
}
