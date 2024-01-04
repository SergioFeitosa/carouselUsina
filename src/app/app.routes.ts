import { Routes } from '@angular/router';
import { AgronegocioComponent } from './views/agronegocio/agronegocio.component';
import { HomeComponent } from './views/home/home.component';
import { MilhoComponent } from './views/milho/milho.component';
import { CafeComponent } from './views/cafe/cafe.component';
import { CobreComponent } from './views/cobre/cobre.component';
import { FerroComponent } from './views/ferro/ferro.component';
import { DiamanteComponent } from './views/diamante/diamante.component';
import { EsmeraldaComponent } from './views/esmeralda/esmeralda.component';
import { MineralComponent } from './views/mineral/mineral.component';
import { PedraComponent } from './views/pedra/pedra.component';
import { QuemsomosComponent } from './views/quemsomos/quemsomos.component';
import { GrafiteComponent } from './views/grafite/grafite.component';
import { ServicoComponent } from './views/servico/servico.component';
import { ContatoComponent } from './views/contato/contato.component';
import { CompraComponent } from './views/compra/compra.component';
import { VendaComponent } from './views/venda/venda.component';
import { TransporteComponent } from './views/transporte/transporte.component';

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
        path: "mineral",
        component: MineralComponent
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
        path: "grafite",
        component: GrafiteComponent
    },
    {
        path: "pedra",
        component: PedraComponent
    },
    {
        path: "esmeralda",
        component: EsmeraldaComponent
    },
    {
        path: "diamante",
        component: DiamanteComponent
    },
    {
        path: "quemsomos",
        component: QuemsomosComponent
    },
    {
        path: "servico",
        component: ServicoComponent
    },
    {
        path: "contato",
        component: ContatoComponent
    },
    {
        path: "compra",
        component: CompraComponent
    },
    {
        path: "venda",
        component: VendaComponent
    },
    {
        path: "transporte",
        component: TransporteComponent
    },
];