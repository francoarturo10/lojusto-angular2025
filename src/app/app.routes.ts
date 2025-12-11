import { Routes } from '@angular/router';
import { Home } from './pages/home/home';


export const routes: Routes = [
    { path: '', component: Home },
    // { path: 'productos', component: Productos },
    // { path: 'registra', component: Registra },
    { path: '**', redirectTo: '' }
];
