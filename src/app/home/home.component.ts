import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [StarwarsService]
})
export class HomeComponent implements OnInit {
user:any;

  constructor(private starwarsService: StarwarsService) {
  		 if(localStorage.getItem("profile"))
  		this.user = JSON.parse(localStorage.getItem("profile")).results[0];
  		console.log(this.user);
   }

  ngOnInit() {
    
  }

}
