import { Routes } from '@angular/router';
import { AgronegocioComponent } from './views/agronegocio/agronegocio.component';
import { HomeComponent } from './views/home/home.component';
import { MilhoComponent } from './views/milho/milho.component';
import { CafeComponent } from './views/cafe/cafe.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "agronegocio",
        component: AgronegocioComponent
    },
    {
        path: "cafe",
        component: CafeComponent
    },
    {
        path: "milho",
        component: MilhoComponent
    },
];
