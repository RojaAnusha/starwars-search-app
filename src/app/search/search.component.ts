import {
    Component,
    OnInit
} from '@angular/core';
import {
    StarwarsService
} from '../services/starwars.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    searchText: string;
    searchType: string;
    vehicles: any;
    planets: any;

    constructor(private starwarsService: StarwarsService) {
        this.vehicles = true;
        this.planets = true;
    }

    ngOnInit() {}
    onSubmitSearch() {
        this.starwarsService.searchPlanetsOrVehicles(this.searchText, this.searchType).subscribe(res => {
            if (this.searchType == "vehicles") {
                if (res.count > 0){
                    this.vehicles = res.results.sort(function(obj1, obj2) {
		                // Ascending
	             	 	return obj1.max_atmosphering_speed - obj2.max_atmosphering_speed;
                    });

                    let index=0;
                    for(let i of this.vehicles){
                        i["className"] = "font_"+index;
                        index++;
                    }
                } else
                    this.vehicles = false;
            } else if (this.searchType == "planets") {
                if (res.count > 0){
                	this.planets = res.results.sort(function(obj1, obj2) {
	                // Ascending
	             	return obj1.population - obj2.population;
                });
                let index=0;
                for(let i of this.planets){
                   i["className"] = "font_"+index;
                   index++;
                }
            } else
                    this.planets = false;
            } else {
                this.vehicles = true;
                this.planets = true;
            }
        });
    }
    getPlanetClass(planet) {
    	console.log(planet);
    	return planet.className;
    }

}