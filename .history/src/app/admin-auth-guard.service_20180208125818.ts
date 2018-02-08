import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import { AuthService } from './auth.service';
import { UserService } from './user.service';
import 'rxjs/add/operator/switchMap'

@Injectable()
export class AdminAuthGuard implements CanActivate{
  constructor(
    private authService: AuthService,
    private userService: UserService
  ) { 
    // ....
  }

  canActivate() {
    this.authService.user$.switchMap(user => {
      return this.userService.get(user);
    }).map(appUser => {
      return appUser.isAdmin;
    });
  }
}
