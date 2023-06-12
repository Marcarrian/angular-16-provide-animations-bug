import {Routes} from '@angular/router';
import {provideAnimations} from '@angular/platform-browser/animations';

export const routes: Routes = [
  {
    path: '',
    providers: [provideAnimations()],
    loadComponent: () => import('./animations/animations.component'),
  },
];
