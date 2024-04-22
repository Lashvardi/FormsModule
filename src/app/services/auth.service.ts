import { Injectable } from '@angular/core';
import { ISignIn } from '../interfaces/sign-in.model';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public router: Router) { }
  user: ISignIn = {
    email: "admin@gmail.com",
    password: "admin"
  }

  isAuthorised: boolean = false;

  signIn(email: string, password: string) {
    if (email === this.user.email && password === this.user.password) {
      this.router.navigate(['/home'])
      this.isAuthorised = true;
      return true;
    } else {
      return false;
    }
  }

  signOut() {
    if (this.isAuthorised) {
      this.isAuthorised = false;
      this.router.navigate(['/sign-in']);
    } else {
      alert('თქვენ არ ხართ ავტორიზებული რაშობით');
    }
  }
}
