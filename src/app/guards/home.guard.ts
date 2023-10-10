import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const homeGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>  {
  const router = inject(Router);
  console.log('homeGuard', router.url);
  return router.url !== '/next' || router.createUrlTree(['/alternate']) ;
  };
