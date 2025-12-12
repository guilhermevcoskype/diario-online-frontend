import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { Home } from './components/home/home';
import { Register } from './components/register/register';
import { authGuard } from './guards/auth-guard';
import { noAuthGuard } from './guards/no-auth-guard';
import { MediaPage } from './components/media-page/media-page';
import { UserListMedia } from './components/user-list-media/user-list-media';

export const routes: Routes = [
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
    {
        path: 'login', component: Login, canActivate: [noAuthGuard]
    },
    {
        path: 'registrar', component: Register, canActivate: [noAuthGuard]
    },
    {
        path: 'home', component: Home
    },
      {
        path: 'media-page', component: MediaPage
    }
];
