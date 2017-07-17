import {Injectable} from '@angular/core';
import {Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {CanActivate} from '@angular/router';

import {StarwarsService} from './services/starwars.service';

@Injectable()

export class AuthGuard implements CanActivate {
	constructor(private router:Router, private starwarsService:StarwarsService ) { }

	canActivate(next: ActivatedRouteSnapshot , state: RouterStateSnapshot) {
		if(this.starwarsService.authenticated()) {
			console.log("auth guard passed");
			return true;
		} else {
			this.router.navigate(['/']);
			console.log("auth guard blocked");
			return false;
		}
	}
}
