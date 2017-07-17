import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StarwarsService } from './services/starwars.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private starwarsService: StarwarsService, private router:Router) { }
  onClickLogout(){
 	localStorage.removeItem("profile");
 	this.router.navigate(['/']);
  }
}
