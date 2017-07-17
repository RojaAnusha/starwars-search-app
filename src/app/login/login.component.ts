import { Component, OnInit } from '@angular/core';
import { StarwarsService } from '../services/starwars.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

	export class LoginComponent implements OnInit {
	    username: string;
	    pwd: string;
	    loginBtnDisabled: boolean = true;

	    constructor(private starwarsService: StarwarsService, private router: Router) {}

	    validateForm() {
	        this.loginBtnDisabled = !(this.username && this.pwd);
	    }

	    verifyLogin() {
	        this.starwarsService.loginCheck(this.username).subscribe(res => {
	            console.log(res);
	            if (res.count && res.count == 1) {
	                if (res.results[0].birth_year == this.pwd) {
	                    localStorage.setItem("profile", JSON.stringify(res));
	                    this.router.navigate(['/']);
	                } else
	                    window.alert("Username or Password might be invalid!");
	            } else
	                window.alert("Username does not exist!");
	        });
	    }

	    ngOnInit() {}

	}