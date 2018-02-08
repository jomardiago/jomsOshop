import { Injectable } from '@angular/core';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@Injectable()
export class UserService {
  constructor(private db: AngularFireDatabaseModule) {
    
  }
}
