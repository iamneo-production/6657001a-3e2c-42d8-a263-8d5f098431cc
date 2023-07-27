import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { AuthserviceService } from '../services/authservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthserviceService, private router: Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    ): boolean {

    if (!this.authService.isLoggedIn()) {
      this.router.navigate(['/login']);
      return false;
    }

    const requiredRole = route.data['role'] as string;
    
    if (localStorage.getItem('role') !== requiredRole) {
      this.router.navigate(['/unauthorized']);
      return false;
    }

    return true;
  }

}
