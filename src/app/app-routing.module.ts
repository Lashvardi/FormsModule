import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'sign-in',
    component: SignInComponent
  },
  // მომხმარებელი მინდა რომ ეგრევე გადავიყვანო
  // sign-in კომპონენტზე
  // შესაბამისად ვიყენებ ცარიელ route-ს
  // და redirectTo თვისებას
  {
    path: "",
    redirectTo: "sign-in",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
