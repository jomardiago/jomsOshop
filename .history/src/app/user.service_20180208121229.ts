import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable()
export class UserService {
  constructor(private db: AngularFireDatabase) {
    // ....
  }

  save() {
    this.db.object
  }
}
