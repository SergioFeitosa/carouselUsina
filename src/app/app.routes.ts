import { Routes } from '@angular/router';
import { AgronegocioComponent } from './views/agronegocio/agronegocio.component';
import { HomeComponent } from './views/home/home.component';
import { MilhoComponent } from './views/milho/milho.component';
import { CafeComponent } from './views/cafe/cafe.component';
import { CobreComponent } from './views/cobre/cobre.component';
import { FerroComponent } from './views/ferro/ferro.component';
import { DiamanteComponent } from './views/diamante/diamante.component';
import { EsmeraldaComponent } from './views/esmeralda/esmeralda.component';

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
    {
        path: "cobre",
        component: CobreComponent
    },
    {
        path: "ferro",
        component: FerroComponent
    },
    {
        path: "diamante",
        component: DiamanteComponent
    },
    {
        path: "esmeralda",
        component: EsmeraldaComponent
    },
];
