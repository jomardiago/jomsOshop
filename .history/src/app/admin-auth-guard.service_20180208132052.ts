import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { UserService } from './user.service';

import 'rxjs/add/operator/map';

@Injectable()
export class AdminAuthGuard implements CanActivate{
  constructor(private authService: AuthService) { 
    // ....
  }

  canActivate() {
    return this.authService.appUser$.map(appUser => appUser.isAdmin);
  }
}
