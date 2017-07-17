import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';

import {AuthGuard} from './auth.guard';


const appRoutes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'search',
        component: SearchComponent,
        canActivate: [AuthGuard]
    },
    {
    	path: '**',
    	redirectTo: '/'
    }
];

export const router: ModuleWithProviders = RouterModule.forRoot(appRoutes);