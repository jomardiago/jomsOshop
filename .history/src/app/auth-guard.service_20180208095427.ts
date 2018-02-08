import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private router: Router) { 
    // ....
  }

  canActivate() {
    this.authService.user$.map(user => {
      if (user) {
        return true;
      } else {
        this.router.navigate(['/login']);
      }
    });
  }
}
