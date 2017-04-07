import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';
import {HomeComponent} from './components/home.component';
import {About2Component} from './components/about2.component';

const appRoutes: Routes = [
    {
        path:'',
        component: UserComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'home2',
        component: HomeComponent
    },
    {
        path: 'about2',
        component: About2Component
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);