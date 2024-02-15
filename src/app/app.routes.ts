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
import { EtanolComponent } from './views/etanol/etanol.component';
import { TrigoComponent } from './views/trigo/trigo.component';
import { SorgoComponent } from './views/sorgo/sorgo.component';
import { CanadeacucarComponent } from './views/canadeacucar/canadeacucar.component';
import { SojaComponent } from './views/soja/soja.component';
import { AlgodaoComponent } from './views/algodao/algodao.component';
import { HomeChineseComponent } from './views/home/home.chinese/home.chinese.component';
import { HomeSpanishComponent } from './views/home/home.spanish/home.spanish.component';
import { HomeEnglishComponent } from './views/home/home.english/home.english.component';
import { HomePortugueseComponent } from './views/home/home.portuguese/home.portuguese.component';
import { AgronegocioEnglishComponent } from './views/agronegocio/agronegocio.english/agronegocio.english.component';
import { AgronegocioPortugueseComponent } from './views/agronegocio/agronegocio.portuguese/agronegocio.portuguese.component';
import { AgronegocioSpanishComponent } from './views/agronegocio/agronegocio.spanish/agronegocio.spanish.component';
import { AgronegocioChineseComponent } from './views/agronegocio/agronegocio.chinese/agronegocio.chinese.component';
import { AlgodaoChineseComponent } from './views/algodao/algodao.chinese/algodao.chinese.component';
import { AlgodaoEnglishComponent } from './views/algodao/algodao.english/algodao.english.component';
import { AlgodaoPortugueseComponent } from './views/algodao/algodao.portuguese/algodao.portuguese.component';
import { AlgodaoSpanishComponent } from './views/algodao/algodao.spanish/algodao.spanish.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent,        
    },
    {
        path: "home/chinese",
        component: HomeChineseComponent,        
    },
    {
        path: "home/english",
        component: HomeEnglishComponent,        
    },
    {
        path: "home/portuguese",
        component: HomePortugueseComponent,        
    },
    {
        path: "home/spanish",
        component: HomeSpanishComponent,        
    },
    {
        path: "agronegocio",
        component: AgronegocioComponent
    },
    {
        path: "agronegocio/chinese",
        component: AgronegocioChineseComponent
    },
    {
        path: "agronegocio/english",
        component: AgronegocioEnglishComponent
    },
    {
        path: "agronegocio/portuguese",
        component: AgronegocioPortugueseComponent
    },
    {
        path: "agronegocio/spanish",
        component: AgronegocioSpanishComponent
    },
    {
        path: "algodao",
        component: AlgodaoComponent
    },
    {
        path: "algodao/chinese",
        component: AlgodaoChineseComponent
    },
    {
        path: "algodao/english",
        component: AlgodaoEnglishComponent
    },
    {
        path: "algodao/portuguese",
        component: AlgodaoPortugueseComponent
    },
    {
        path: "algodao/spanish",
        component: AlgodaoSpanishComponent
    },
    {
        path: "cafe",
        component: CafeComponent
    },
    {
        path: "canadeacucar",
        component: CanadeacucarComponent
    },
    {
        path: "etanol",
        component: EtanolComponent
    },
    {
        path: "milho",
        component: MilhoComponent
    },
    {
        path: "soja",
        component: SojaComponent
    },
    {
        path: "sorgo",
        component: SorgoComponent
    },
    {
        path: "trigo",
        component: TrigoComponent
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
