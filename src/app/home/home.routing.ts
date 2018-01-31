import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContainerComponent } from './home-container.component';

const homeRoutes: Routes = [
    {
        path: '',
        component: HomeContainerComponent,
        children: [
            {
                path: '',
                component: HomeComponent
            },
            // {
            //     path: ':subject',
            //     component: SubjectDetailComponent
            // }
        ]
    }
];

export const appRoutingProviders: any[] = [

];
export const HomeRouting: ModuleWithProviders = RouterModule.forRoot(homeRoutes);
